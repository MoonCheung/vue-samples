/*
 * @Description: 全局工具函数库
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-10-21 22:40:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-30 00:44:47
 */

import htmlToPdf from './pdf';

export function packFetch(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((source) => source.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export default {
  //Vue插件全局公共对象
  install(Vue) {
    // 4. 添加实例方法
    Vue.prototype.$getPDF = htmlToPdf;
  }
};
