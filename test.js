for(var i=0;i<5;i++){
  !function (i) {
    setTimeout(function(){
      console.log('delayer:' + i );
    }, 0);
  }(i)
}