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
  var ghostsEscaped = 0


  //update the score


 //adding event listeners to the objects:
  //this one animates the ghost to die:
    ghostImage.on('click',function(){
      ghostImage.attr('src',"../project1/Images/Boo2.png");
      clearInterval(moveTheGhost);
      currentScore = currentScore + 1;
      $("h1").text("Score: " + currentScore); //this updates the score
      console.log(currentScore);
      ghostImage.animate({
        opacity: 0,
        top: "+=400",
      }, 2000, function() {
    // Animation complete.
    }); 
  });

    //this one makes the yoshis die:
    yoshiImage.hover (function(){
      yoshiImage.attr('src', "../project1/Images/deadYoshi.gif")
      currentScore = currentScore - 1;
      $("h1").text("Score: " + currentScore); //this updates the score
      yoshiImage.css("width", "10%");
      console.log(currentScore);
      yoshiImage.animate({
        opacity: 0,
        bottom: "+=400",
      }, 3000, function() {
    // Animation complete.
        }); 
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

//making yoshi move and stop in the same way:

  function floatYoshi(){
    var currentLeft = parseInt(yoshiImage.css('left'));
    var currentRight = parseInt(yoshiImage.css('right'));
    var currentTop = parseFloat(yoshiImage.css('top'));
    var currentBottom = parseInt(yoshiImage.css('bottom'));
      // console.log(currentLeft);
      // console.log(currentTop);
      var newRight = currentRight + 1; 
      yoshiImage.css({'right': newRight});
      if (currentRight > 150){
            clearInterval(moveYoshi);
      }
    }  

 var moveTheGhost = setInterval(floatGhost, 10);
 var moveYoshi = setInterval(floatYoshi, 25);

 ///this iss an attempt, doesnt seem to work 

 //get the boo image to appear at random heights

$('#container').on



});

