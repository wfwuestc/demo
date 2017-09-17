// carousel 模块

define(['jquery'], function ($) {
  function slideshow(node) {
    this.init = function () {
      this.$pic = $(node).children('.img-container')
      this.$picLi = this.$pic.children('li')
      this.$liCount = this.$picLi.length
      this.$imgWidth = $('a>img').width()
      this.$next = this.$pic.next('a.next')
      this.$pre = this.$next.next('a.pre')
      this.$index = 0
      this.$bullet = $(node).children('.bullet').children('li')
      this.isMove = false
      this.$first = this.$picLi.first().clone()
      this.$last = this.$picLi.last().clone()
      this.$pic.width(this.$imgWidth * (this.$liCount + 2))
      this.$pic.append(this.$first)
      this.$pic.prepend(this.$last)
      this.$pic.css('left', -this.$imgWidth)
      this.setBullet()
      this.event()
    }
    this.init()
  }

  slideshow.prototype.nextPage = function (num) {
    var _this = this
    if(this.isMove) return
    this.isMove = true
    this.$pic.animate({
      left: '-=' + this.$imgWidth*num
    },function () {
      _this.$index += num
      if(_this.$index === _this.$liCount){
        console.log(1)
        _this.$index = 0
        _this.$pic.css({left: -_this.$imgWidth})
      }
      _this.setBullet()
      _this.isMove = false
    })
  }

  slideshow.prototype.prePage = function (num) {
    var _this = this
    if(this.isMove) return
    this.isMove = true
    this.$pic.animate({
      left: '+=' + this.$imgWidth*num
    },function () {
      _this.$index -= num
      if(_this.$index === -1){
        _this.$index = _this.$liCount - 1
        _this.$pic.css({left: -(_this.$imgWidth)*(_this.$liCount)})
      }
      _this.setBullet()
      _this.isMove = false
    })
  }

  slideshow.prototype.setBullet = function () {
    this.$bullet.removeClass('active')
    this.$bullet.eq(this.$index).addClass('active')
  }

  slideshow.prototype.event = function () {
    var _this = this

    this.$bullet.click(function () {
      var index = $(this).index()
      if(index > _this.$index){
        _this.nextPage(index - _this.$index)
      }else if(index < _this.$index){
        _this.prePage(_this.$index - index)
      }
    })

    this.$next.click(function () {
      _this.nextPage(1)
    })

    this.$pre.click(function () {
      _this.prePage(1)
    })



  }

  var p = new slideshow($('.mainpage-container')[0])
  return p
})
