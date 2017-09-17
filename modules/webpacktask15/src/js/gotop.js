// gotop 模块

define(['jquery'], function ($) {
  function goTop() {
    this.init = function () {
      this.$note = $('.go-top')
      this.show()
      this.event()
    }
    this.init()
  }
  goTop.prototype.show = function () {
    var _this = this
    if($(window).scrollTop() > 1000){
      this.$note.css("display", "block")
    }
    $(window).scroll(function () {
      console.log($(window).scrollTop())
      if($(window).scrollTop() > 1000){
        _this.$note.css("display", "block")
      }else{
        _this.$note.css("display", "none")
      }
    })
  }
  goTop.prototype.event = function () {
    this.$note.click(function () {
      $(window).scrollTop(0)
    })
  }
  var gotop = new goTop()
  return gotop
})
