window.onscroll = function(){
    var top =	 window.pageYOffset || document.documentElement.scrollTop;
    if (top > 10) {
      document.getElementById('nav').classList.add("skroll");
    } else {
      document.getElementById('nav').classList.remove("skroll");
    }
  };