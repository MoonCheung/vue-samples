/*
 * @Description: 全局工具函数库
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-10-21 22:40:10
 * @LastEditors: MoonCheung
 * @LastEditTime: 2019-10-22 12:10:26
 */

import htmlToPdf from './pdf';

export default {
  //Vue插件全局公共对象
  install(Vue) {
    // 4. 添加实例方法
    Vue.prototype.$getPDF = htmlToPdf;
  }
}