// 方法1 使用import导入
// import '../css/main.css'
// import '../css/foot.css'
// import '../css/header.css'
//
// import $ from 'jquery'
// import GoTop from './gotop'
// import Barrel from './waterfall'
// import Carousel from './carousel'

require('../css/main.css')
require('../css/foot.css')
require('../css/header.css')
//方法2 使用require
// var Carousel = require('./carousel')
// var Waterfall = require('./waterfall')
// var GoTop = require('./gotop')
//
// Carousel()
// Waterfall()
// GoTop()

// 方法3 使用AMD define
define(['./carousel', './gotop', './waterfall'],function (slideshow, goTop, waterFall1) {
  slideshow()
  goTop()
  waterFall1()
})