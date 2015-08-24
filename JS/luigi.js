

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
            ghostImage.on('click',function(){
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
          ghostImageTwo.on('click',function(){
                ghostImageTwo.attr('src',"../project1/Images/Boo2.png");
                clearInterval(moveGhostTwo);
                currentScore = currentScore + 2;
                $("h1").text("Score: " + currentScore); //this updates the score
                console.log(currentScore);
                ghostImageTwo.animate({
                  opacity: 0,
                  top: "+=400",
                }, 2000, function() {

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
      var newRight = currentRight + 1 + currentScore; 
      ghostImageTwo.css({'right': newRight});
      if (currentRight > 600){
            ghostImageTwo.css({'right' : -400, 'top': (Math.random() *300)});
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
      if (currentRight > 600){
          yoshiImage.css({'right' : -400, 'top': (Math.random() *300)});
      }
    }  


 var moveTheGhost = setInterval(floatGhost, 10);
 var moveYoshi = setInterval(floatYoshi, 5);
 var moveGhostTwo = setInterval(floatGhostTwo, 10);



});
