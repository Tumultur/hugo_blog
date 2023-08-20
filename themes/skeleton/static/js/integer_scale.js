window.onload = function() {
    // 获取 div 元素
    var header = document.getElementsByTagName('header')[0];
    var main = document.getElementsByTagName('main')[0];
  
    // 设定你的字体大小，你可以根据实际需要修改这个值
    var fontSize = 20; 
  
    // 获取屏幕宽度
    var screenWidth = window.innerWidth;
    console.log(screenWidth);
  
    // 获取 div 的默认宽度
    var defaultDivWidth = 600; 
  
    // 根据屏幕大小和div默认宽度，计算新的div宽度
    var divWidth = defaultDivWidth;
    if(divWidth < screenWidth * 0.4) {
      divWidth = screenWidth * 0.4;
    } else if(divWidth > screenWidth * 0.8) {
      divWidth = screenWidth * 0.8;
    }
  
    // 根据 div 宽度和字体大小计算缩放倍数，并向下取整
    var scale = Math.floor(divWidth / fontSize);
  
    // 输出缩放倍数
    console.log(scale);
  
    // 将 div 宽度调整为字体大小与缩放倍数的乘积
    divWidth = fontSize * scale;
  
    // 应用计算得到的宽度到 div 元素
    header.style.width = divWidth + 'px';
    main.style.width = divWidth + 'px';
  }