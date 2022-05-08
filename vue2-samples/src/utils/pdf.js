/*
 * @Description: 生成PDF文件(暂时不做)
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-10-21 22:21:11
 * @LastEditors: MoonCheung
 * @LastEditTime: 2019-10-22 11:40:58
 */

import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

function htmlToPdf(id) {
  //TODO: 分辨率是72像素/英寸时，A4纸的尺寸的图像的像素大约是595×842
  const element = document.querySelector(`#${id}`);
  const opts = {
    allowTaint: false,
    useCORS: false,
    logging: true,
    tainttest: true,
    width: document.querySelector(`#${id}`).scrollWidth,
    height: document.querySelector(`#${id}`).scrollHeight
  }

  html2Canvas(element, opts).then(function (canvas) {
    let contentWidth = canvas.width; //宽度：1424
    let contentHeight = canvas.height; //高度：2241
    let pageHeight = (contentWidth / 592.28) * 841.89;
    let leftHeight = contentHeight; //高度：2241
    let position = 0;
    let imageWidth = 595.28;
    let imageHeight = (592.28 / contentWidth) * contentHeight;
    // 返回图片URL，参数：图片格式和清晰度(0-1)
    let pageData = canvas.toDataURL('image/jpeg', 1.0);
    //方向默认竖直，尺寸ponits，格式a4[595.28,841.89]
    let PDF = new JsPDF('', 'pt', 'a4');
    //当内容未超过pdf一页显示的范围，无需分页
    if (leftHeight < pageHeight) {
      // 将图像添加到PDF
      PDF.addImage(pageData, 'JPEG', 0, 0, imageWidth, imageHeight);
    } else {
      // 当内容超过PDF一页显示范围，需分页
      while (leftHeight > 0) {
        // 将图像添加到PDF
        PDF.addImage(pageData, 'JPEG', 0, position, imageWidth, imageHeight)
        leftHeight -= pageHeight;
        // y与页面上边缘的坐标
        position -= 841.89;
        //避免添加空白页
        if (leftHeight > 0) {
          PDF.addPage();
        }
      }
    }
    //当前页面直接下载pdf
    PDF.save('content.pdf');
  });
}

export default htmlToPdf;