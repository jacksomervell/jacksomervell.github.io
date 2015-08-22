//animate first boo
// function moveBoo(){
//   var newLeft = 10 * $(window).width();
//   var newHeight = 10 * $(window).height();
//   $(".ghost").css({'left': newLeft, 'top': newHeight});
// };




$(document).ready(function(){

  var currentScore = 1
  var ghostImage = $(".ghost") 
 //adding event listeners to the objects:

   ghostImage.on('click',function(){
     ghostImage.attr('src',"../project1/Images/Boo2.png");
     clearInterval(moveTheGhost);
     deadGhost();
     setInterval(deadGhost, 1)
     currentScore = currentScore + 1
     var currentTop = parseFloat(ghostImage.css('top'));
     if (currentTop > 200){
      clearInterval(deadGhost);
      }
  })

//when the ghost dies:

  function deadGhost(){
    var currentTop = parseFloat(ghostImage.css('top'));
    var newTop = currentTop + 1.5;
    ghostImage.css({'top': newTop});
    }



 //making the ghost move:


  function floatGhost(){

    var currentLeft = parseInt(ghostImage.css('left'));
    var currentRight = parseInt(ghostImage.css('right'));
    var currentTop = parseFloat(ghostImage.css('top'));
    var currentBottom = parseInt(ghostImage.css('bottom'));
      // console.log(currentLeft);
      // console.log(currentTop);
      var newLeft = currentLeft + 1;
      var newTop = currentTop + 1; 
      ghostImage.css({'left': newLeft, 'top': newTop});

  //this bit determines the up and down floatyness of the ghost rather than just a straight line:
      if (currentLeft > 100 && currentLeft < 200){
        var upFloat = currentTop - 1;
        ghostImage.css({'top': upFloat})
        }
       
       if (currentLeft > 300 && currentLeft < 400){
        var upFloat = currentTop - 1;
        ghostImage.css({'top': upFloat})
        }

         if (currentLeft > 500 && currentLeft < 600){
        var upFloat = currentTop - 1;
        ghostImage.css({'top': upFloat})
        }

  //these bits stop the ghost:
      if (currentLeft > 600){
            clearInterval(moveTheGhost);
      }

      
 }

 var moveTheGhost = setInterval(floatGhost, 5);
 
});

