function Barrel(num) {
  this.loadNum = num
  this.wrapWidth = $('.wrap').width()
  this.lineWidth = 0
  this.lineNode = '<div class="line"></div>'
  this.$lNode = $(this.lineNode)
  this.picCount = 0
  this.keyword = ''
  this.page = 1
  this.baseUrl = 'http://pixabay.com/api/'
  this.perPage = 25
  this.imageType = 'photo'
  this.isLoad = false
}

var log = console.log.bind(console)
Barrel.prototype.fullUrl = function (url, json) {
  let arr = []
  for (let key in json) {
    arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(json[key]))
  }
  return url + '?' + arr.join('&')
}
// 搜索
Barrel.prototype.search = function () {
  var searchButton = document.querySelector('#id-button-search')
  var searchBar = document.querySelector('#id-input-search')
  var __this = this
  searchButton.addEventListener('click', function () {
    __this.keyword = searchBar.value
    var url = __this.fullUrl(__this.baseUrl, {
      key: '5856858-0ecb4651f10bff79efd6c1044',
      q: __this.keyword,
      image_type: __this.imageType,
      per_page: __this.perPage,
      page: __this.page,
    })
    var picUrl = __this.renderPic(url)
  })
}
// 获取图片链接
Barrel.prototype.renderPic = function (url) {
  var __this = this
  fetch(url).then((res) => {
    return res.json()
  }).then((res) => {
    var picObject = res.hits
    var picUrl = []
    for (var i = 0; i < picObject.length; i++) {
      picUrl.push(picObject[i].webformatURL)
    }
    __this.render(picUrl)
  })
}

// 将图片url放入节点
Barrel.prototype.urlArray = function (url) {
  var node = []

  // 获取图片节点对象数组
  for (var i = 0; i < url.length; i++) {
    node.push(this.createNode(url[i]))
  }

  return node
}

// 增加图片
Barrel.prototype.addPic = function (node, imgWidth) {
  if (this.lineWidth + imgWidth < this.wrapWidth) {
    this.$lNode.append(node)
    this.lineWidth += imgWidth
    this.picCount += 1
  } else {
    // 若一行图片排满了，进行插入网页，及重置行节点操作
    $('.wrap').append(this.$lNode)// 将一行图片插入网页中
    this.$lNode.height(200 * ((this.wrapWidth - 10 * this.picCount) / this.lineWidth)) // 调整行高使图片布满整行 10为图片padding
    this.lineNode = '<div class="line"></div>' // 定义新的一行dom节点
    this.picCount = 1 // 重置图片技术
    this.$lNode = $(this.lineNode)
    this.$lNode.append(node)
    this.lineWidth = imgWidth // 重新计算行宽
  }
}

// 将图片放入页面中
Barrel.prototype.render = function (url) {
  var node = this.urlArray(url)
  var __this = this
  $.each(node, function (idx, $node) {
    // 等待图片加载完后操作
    $node.find('img').on('load', function () {
      var imgWidth = this.width * (200 / this.height) // 按照父元素的高调整图片宽度
      __this.addPic.call(__this, $node, imgWidth)

    })
  })
}

// 创建图片节点
Barrel.prototype.createNode = function (links) {
  var node = '<div class="items"><img src=' + '"' + links + '"' + ' alt=""></div>'
  return $(node)
}

// 判断是否见底
Barrel.prototype.isVisible = function ($node) {
  var winH = $(window).height(),
      scrollH = $(window).scrollTop(),
      top = $node.offset().top
  var result = (top > scrollH) && (top < scrollH + winH + 200)
  return result
}

// 滚动事件处理函数
Barrel.prototype.scroll = function (isLoad, vsNode, __this, scrollH1, scrollH2) {
  $(window).on('scroll', function () {
    var visible = __this.isVisible(vsNode)
    // 获取滚动时的滚动长度
    scrollH1 = $(window).scrollTop()
    log("scrollH", scrollH1, "top", vsNode.offset().left)
    //当 scrollH1 > scrollH2 时，证明加载完成，重置加载状态
    var isLoadComplete = (visible === false) && (scrollH1 > scrollH2)
    if (isLoadComplete) {
      isLoad = false
    }

    if (isLoad) {
      return
    }

    if (visible) {
      __this.page += 1
      var url = __this.fullUrl(__this.baseUrl, {
        key: '5856858-0ecb4651f10bff79efd6c1044',
        q: __this.keyword,
        image_type: __this.imageType,
        per_page: __this.perPage,
        page: __this.page,
      })
      __this.renderPic(url)
      isLoad = true
      scrollH2 = $(window).scrollTop() //获取加载图片时的滚动长度
      console.log(scrollH2)
    }
  })
}

Barrel.prototype.main = function () {

  // this.render(img)
  var isLoad = false
  var vsNode = $('.vs')
  var __this = this
  var scrollH1 = $(window).scrollTop()
  var scrollH2 = scrollH1
  this.scroll(isLoad, vsNode, __this, scrollH1, scrollH2)
  this.search()

}
var test = new Barrel(25)
test.main()
