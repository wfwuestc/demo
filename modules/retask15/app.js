requirejs.config({
  baseUrl: 'src',
  paths:{
    'jquery':'../lib/jquery'
  }
})

requirejs(['../com/index'])