

$(document).ready(function(){

//global vairable:
  var currentScore = 0
  var ghostImage = $(".ghost") 
  var ghostImageTwo = $(".ghostTwo")
  var currentTop = parseFloat(ghostImage.css('top'));
  var yoshiImage = $(".yoshi")
  var ghostsEscaped = 0

  $('#container').css( 'cursor', 'url(../project1/Images/LPMicon.png), auto' );
//make sure thos ghosts keep on coming:
// function ghostsComing(){
//   $('#container').prepend('<img class = "ghost" src = "../project1/Images/Boo1flipped.png" />');
//   floatGhost();
//   }

// var addGhosts = setInterval(ghostsComing, 5000 - (currentScore * 100)); 

 //adding event listeners to the objects:
  //this one animates the ghost from the left to die:
    ghostImage.on('click',function(){
      ghostImage.attr('src',"../project1/Images/Boo2.png");
      clearInterval(moveTheGhost);
      currentScore = currentScore + 1;
      $("h1").text("Score: " + currentScore); //this updates the score
      console.log(currentScore);
      ghostImage.animate({
        opacity: 0,
        top: "+=200",
      }, 500, function() {
      $('.ghostImage').removeAttr('style');
    }); 
  });

//ghost from the right to die:
ghostImageTwo.on('click',function(){
      ghostImageTwo.attr('src',"../project1/Images/Boo2.png");
      clearInterval(moveTheGhost);
      currentScore = currentScore + 1;
      $("h1").text("Score: " + currentScore); //this updates the score
      console.log(currentScore);
      ghostImageTwo.animate({
        opacity: 0,
        top: "+=400",
      }, 2000, function() {
    }); 
      ghostImage.css({'left' : -100, 'top': (Math.random() *200)});
      moveTheGhost();
  });
    //this one makes the yoshis die:
    yoshiImage.hover (function(){
      yoshiImage.attr('src', "../project1/Images/deadYoshi.gif")
      clearInterval(moveYoshi);
      currentScore = currentScore - 1;
      $("h1").text("Score: " + currentScore); //this updates the score
      yoshiImage.css("width", "10%");
      console.log(currentScore);
      yoshiImage.animate({
        opacity: 0,
        bottom: "+=400",
      }, 3000, function() {
        
        }); 
    })

//making images appear randomly at different heights:

        // var heightArray = [1, 2, 3]
        // var startTop = heightArray[Math.floor(Math.random()*heightArray.length)];
        // var startTop = (startTop * 100);
       


//making the first ghost move:

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
        
        //this bit stops the ghost:
      if (currentLeft > 550){
            ghostImage.css({'left' : -100, 'top': (Math.random() *200)});
              } 
            // ghostImage.css({'display': 'none'})
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
      if (currentRight > 30){
            clearInterval(moveYoshi);
            // yoshiImage.css({'display': 'none'});
      }
    }  

 var moveTheGhost = setInterval(floatGhost, 10);
 var moveYoshi = setInterval(floatYoshi, 25);



});
