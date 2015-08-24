

$(document).ready(function(){

//global vairable:
  var currentScore = 0
  var ghostImage = $(".ghost") 
  var ghostImageTwo = $(".ghostTwo")
  var currentTop = parseFloat(ghostImage.css('top'));
  var yoshiImage = $(".yoshi")
  var kingBoo = $(".kingBoo")
  var ghostsEscaped = 0

// this turns the cursor to Luigi:
  $('#container').css( 'cursor', 'url(../project1/Images/LuigiFlip.png), auto' );
//make sure thos ghosts keep on coming:
// function ghostsComing(){
//   var img = $('<img>');
//   img.attr('src', "../project1/Images/Boo1flipped.png");
//   img.attr('class', 'ghost');
//   img.css('top', Math.random() * 100);
//   console.log(img)
//   $('#container').prepend(img);
//   floatGhost();
// }

// var addGhosts = setInterval(ghostsComing, 1000 - (currentScore * 100)); 

 //adding event listeners to the objects:
  //this one animates the ghost from the left to die:
            ghostImage.click (function(){
              ghostImage.attr('src',"../project1/Images/Boo2.png");
              clearInterval(moveTheGhost);
              currentScore = currentScore + 1;
              $("h1").text("Score: " + currentScore); //this updates the score
              console.log(currentScore);
              ghostImage.animate({
                    opacity: 0,
                    top: "+=200",
              }, 2000, function() {
                    ghostImage.css({'left' : -100, 'top': (Math.random() *200), opacity: 1,})
                    ghostImage.attr('src',"../project1/Images/Boo1flipped.png");
                    moveTheGhost = setInterval(floatGhost, 10);
              });
              
            });

//ghost from the right to die:
          ghostImageTwo.click (function(){
                ghostImageTwo.attr('src',"../project1/Images/blackboo.gif");
                clearInterval(moveGhostTwo);
                currentScore = currentScore + 2;
                $("h1").text("Score: " + currentScore); //this updates the score
                console.log(currentScore);
                ghostImageTwo.animate({
                  opacity: 0,
                }, 2000, function() {
                    ghostImageTwo.css({'right' : -400, 'top': (Math.random() *200), opacity: 1,})
                    ghostImageTwo.attr('src',"../project1/Images/Boogif1.gif")
                    moveGhostTwo = setInterval(floatGhostTwo, 10);
                }); 
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
              }, 3000, function() {
                    yoshiImage.css({right: -500, 'top' : (Math.random() *200), opacity: 1})
                    yoshiImage.attr('src', "../project1/Images/Yoshi_fly.gif")
                    yoshiImage.css("width", "20%");
                    moveYoshi = setInterval(floatYoshi, 20);
        }); 
    })

//making images appear randomly at different heights:

        // var heightArray = [1, 2, 3]
        // var startTop = heightArray[Math.floor(Math.random()*heightArray.length)];
        // var startTop = (startTop * 100);
       


//making the first ghost move:

  function floatGhost(){
    var ghostImage = $(".ghost");
    var currentLeft = parseInt(ghostImage.css('left'));
    var currentTop = parseFloat(ghostImage.css('top'));
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
        
        //this bit stops the ghost and resets him:
      if (currentLeft > 550){
            ghostImage.css({'left' : -100, 'top': (Math.random() *200)});
              } 
          
        }

//move the second ghost

 function floatGhostTwo(){

    var currentRight = parseFloat(ghostImageTwo.css('right'));
    var currentTop = parseFloat(ghostImageTwo.css('top'));
      var newRight = currentRight + 1; 
      ghostImageTwo.css({'right': newRight});
      if (currentRight > 600){
            ghostImageTwo.css({'right' : -400, 'top': (Math.random() *300)});
              } 
    }
    
//making yoshi move and stop in the same way:

  function floatYoshi(){
    var yoshiRight = parseFloat(yoshiImage.css('right'));
      // console.log(currentLeft);
      // console.log(currentTop);
      yoshiRight = yoshiRight + 1; 
      yoshiImage.css({'right': yoshiRight});
      if (yoshiRight > 600){
          yoshiImage.css({'right' : -400, 'top': (Math.random() *300)});
      }
    }  

    function floatKing(){
      kingBoo.css({'left' : (Math.random() * 300)})
      kingBoo.css({'top' : (Math.random() * 300)})
      kingBoo.css({'opacity' : 0})
      kingBoo.animate({
                  opacity: 1
                  }, 7000, function(){
                    kingBoo.css({'left' : (Math.random() * 300)})
                    kingBoo.css({'top' : (Math.random() * 300)})
                    kingBoo.css({'opacity' : 0})  
                    }
                  
                ); 
            };

 var moveTheGhost = setInterval(floatGhost, 10);
 var moveYoshi = setInterval(floatYoshi, 100);
 var moveGhostTwo = setInterval(floatGhostTwo, 100 + Math.abs(currentScore));
 var moveKing = setInterval(floatKing, 15000);

});
