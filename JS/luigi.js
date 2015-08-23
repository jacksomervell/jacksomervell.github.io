//animate first boo
// function moveBoo(){
//   var newLeft = 10 * $(window).width();
//   var newHeight = 10 * $(window).height();
//   $(".ghost").css({'left': newLeft, 'top': newHeight});
// };




$(document).ready(function(){

//global vairable:
  var currentScore = 0
  var ghostImage = $(".ghost") 
  var currentTop = parseFloat(ghostImage.css('top'));
  var yoshiImage = $(".yoshi")
 //adding event listeners to the objects:
  //this one animates the ghost to die:
    ghostImage.on('click',function(){
      ghostImage.attr('src',"../project1/Images/Boo2.png");
      clearInterval(moveTheGhost);
      currentScore = currentScore + 1;
      console.log(currentScore);
      ghostImage.animate({
        opacity: 0,
        top: "+=400",
      }, 1000, function() {
    // Animation complete.
  }); 
});

    //this one makes the yoshis die:
    yoshiImage.on('click', function(){
      yoshiImage.attr('src', "../project1/Images/deadYoshi.gif")
      currentScore = currentScore - 1;
      console.log(currentScore)
    })


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

