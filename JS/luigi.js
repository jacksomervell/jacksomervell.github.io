//global vairables:
    var currentScore = 0
    var ghostImage = $(".ghost") 
    var ghostImageTwo = $(".ghostTwo")
    var currentTop = parseFloat(ghostImage.css('top'));
    var yoshiImage = $(".yoshi")
    var kingBoo = $(".kingBoo")
    var rightGhost = $(".ghostRight")
    var ghostsEscaped = 0
    var lastGhost = $(".ghostThree")
    var topBoo = $(".ghostCeiling")
    var kingScore = 9
    var moveTheGhost
    var moveYoshi 
    var moveGhostTwo 
    var moveKing 
    var moveRight 
    var moveLastGhost 
    var moveTopBoo 


$(document).ready(function(){

  
  //these variables start the timers to play the game:
  function playGame(){
    moveTheGhost = setInterval(floatGhost, 10);
    moveYoshi = setInterval(floatYoshi, 30);
    moveGhostTwo = setInterval(floatGhostTwo, 50);
    moveKing = setInterval(floatKing, 20000);
    moveRight = setInterval(floatRightGhost, 10);
    moveLastGhost = setInterval(floatLastGhost, 10);
    moveTopBoo = setInterval(floatTopBoo, 20);

//this sets the cursor to Luigi while the game is playing and prevents it from changing
    $('#container').css( 'cursor', 'url(Images/LuigiFlip.png), auto');

    $("#container").mousedown(function(event){
    event.preventDefault();})
  }

//this sets the cursor to a glove on the start and game over screens, and a ghost when hovering over the play and estart buttons:

    $("body").css('cursor', 'url(Images/cursorglove.png), auto')
        $("body").mousedown(function(event){
        event.preventDefault();})

    $(".startscreen").css('cursor', 'url(Images/cursorglove.png), auto')
        $(".startscreen").mousedown(function(event){
        event.preventDefault();})

    $(".game-over").css('cursor', 'url(Images/cursorglove.png), auto')
        $(".game-over").mousedown(function(event){
        event.preventDefault();})

    $(".play-again").css( 'cursor', 'url(Images/booTalk.gif), auto')
        $(".play-again").mousedown(function(event){
        event.preventDefault();})


    $(".start-button").css( 'cursor', 'url(Images/booTalk.gif), auto')
        $(".start-button").mousedown(function(event){
        event.preventDefault();})

    $(".start-button").hover(function(){ 
        $(".start-button").css({'color' : 'green'});
      })

    $(".play-again").hover(function(){ 
        $(".play-again").css({'color' : 'red'});
      })
          

  //starts the game when player clicks the button:
    $(".start-button").click(function(){
        console.log("hello");
        $(".score").css({"display" : "block"});
        $(".startscreen").slideUp("slow");
        setTimeout(playGame, 2000);
    })


    $(".play-again").click(function(){
        console.log('hello')
        $('.game-over').slideUp("slow");
        currentScore = 0
        ghostsEscaped = 0
        playGame()
        ghostImage.css({'display': 'inline-block'}) 
        ghostImageTwo.css({'display': 'inline-block'}) 
        yoshiImage.css({'display': 'inline-block'}) 
        kingBoo.css({'display': 'inline-block'})
        rightGhost.css({'display': 'inline-block'}) 
        lastGhost.css({'display': 'inline-block'}) 
        topBoo.css({'display': 'inline-block'}) 
      })
})


//calling all the functions
  yoshiHover();
  ghostTwoDie();
  lastGhostDie();
  ghostImageDie();
  rightGhostDie();
  topBooDie();
  // kingBooKill(); commenting out for presentation becuase causing too many problems
  gameOver();

//this determines if it's game over and is called after every ghost animate function
function gameOver(){
    if (ghostsEscaped > 9){
      $('.game-over').slideDown("slow");
      clearInterval(moveTheGhost)
      clearInterval(moveYoshi) 
      clearInterval(moveGhostTwo) 
      clearInterval(moveKing) 
      clearInterval(moveRight) 
      clearInterval(moveLastGhost) 
      clearInterval(moveTopBoo)

      ghostImage.css({'display': 'none'}) 
      ghostImageTwo.css({'display': 'none'}) 
      yoshiImage.css({'display': 'none'}) 
      kingBoo.css({'display': 'none'})
      rightGhost.css({'display': 'none'}) 
      lastGhost.css({'display': 'none'}) 
      topBoo.css({'display': 'none'}) 
      }
    }
 
 //adding event listeners to the objects:

 //this one animated the ceiling ghost:

  function topBooDie() {
    topBoo.one('click', function(){
      currentScore = currentScore + 3
      $("h1").html('Score: ' + '<span class ="red-text">' + currentScore + '</span>')
      console.log(currentScore);
      topBoo.slideUp(200, function(){
          topBoo.css({"top": -100, "left" : (Math.random() *200), "display": 'inline-block' })
          moveTopBoo = setInterval(floatTopBoo, 40000)
          topBooDie()
      })
    });
  }
              
    //this one animates the ghost from the right to die:
function rightGhostDie() {
  rightGhost.one('click', function(){
    rightGhost.attr('src',"Images/Boo2.png");
    clearInterval(moveRight);
    currentScore = currentScore + 1;
    $("h1").html('Score: ' + '<span class ="red-text">' + currentScore + '</span>'); //this updates the score
    console.log(currentScore);
    rightGhost.animate({
      opacity: 0,
      width: 0,
    }, 1000, function() {
        rightGhost.css({'right' : -100, 'top': (Math.random() *200), opacity: 1, 'width': '10%'})
        rightGhost.attr('src',"Images/Boo1.png");
        moveRight = setInterval(floatRightGhost, 10);
        rightGhostDie()
      });
  });
}

    //this one animated the ghost form the left to die:
function ghostImageDie() {
  ghostImage.one('click', function(){
    ghostImage.attr('src',"Images/Boo2.png");
    clearInterval(moveTheGhost);
    currentScore = currentScore + 1;
    $("h1").html('Score: ' + '<span class ="red-text">' + currentScore + '</span>')
    console.log(currentScore);
    ghostImage.animate({
      opacity: 0,
      width: 0,
    }, 1000, function() {
        ghostImage.css({'left' : -50, 'top': (Math.random() *200), opacity: 1, 'width': '10%'})
        ghostImage.attr('src',"Images/Boo1flipped.png");
        moveTheGhost = setInterval(floatGhost, 10);
        ghostImageDie()
    });
  });
}

  //this one animates the top-left ghost to die:
function lastGhostDie() {
  lastGhost.one('click', function(){
    lastGhost.attr('src',"Images/Boo2.png");
    clearInterval(moveLastGhost);
    currentScore = currentScore + 1;
    $("h1").html('Score: ' + '<span class ="red-text">' + currentScore + '</span>')
    console.log(currentScore);
    lastGhost.animate({
      opacity: 0,
      width: 0,
      }, 1000, function() {
        lastGhost.css({'left' : -50, 'top': (Math.random() *200), opacity: 1, 'width': '10%'})
        lastGhost.attr('src',"Images/Boo1flipped.png");
        moveLastGhost = setInterval(floatLastGhost, 10);
        lastGhostDie()
    });         
  });
}      
  //cumulating ghost to die:
function ghostTwoDie() {
  ghostImageTwo.one('click', function(){
    ghostImageTwo.attr('src',"Images/blackboo.gif");
    clearInterval(moveGhostTwo);
    currentScore = currentScore + 2;
    $("h1").html('Score: ' + '<span class ="red-text">' + currentScore + '</span>')
    console.log(currentScore);
    ghostImageTwo.animate({
      opacity: 0,
      }, 2000, function() {
        ghostImageTwo.css({'right' : -300, 'top': (Math.random() *200), opacity: 1, 'width': '10%'})
        ghostImageTwo.attr('src',"Images/Boogif1.gif")
        moveGhostTwo = setInterval(floatGhostTwo, 50 - (currentScore*2))
        ghostTwoDie();
      }); 
    });
  }
  //this one makes the yoshis die:
function yoshiHover() {
   yoshiImage.one('mouseover', function(){
      console.log('mouseover')
      yoshiImage.attr('src', "Images/deadYoshi.gif")
      clearInterval(moveYoshi);
      currentScore = currentScore - 3;
      $("h1").html('Score: ' + '<span class ="red-text">' + currentScore + '</span>')
      yoshiImage.css("width", "10%");
      console.log(currentScore);

      yoshiImage.animate({
        opacity: 0,
        }, 3000, function() {
          yoshiImage.css({right: -200, 'top' : (Math.random() *200), opacity: 1})
          yoshiImage.attr('src', "Images/Yoshi_fly.gif")
          yoshiImage.css("width", "20%");
          moveYoshi = setInterval(floatYoshi, 30);
          yoshiHover();
          });
  })
}
             

// function kingBooKill (){
//   kingBoo.one('click', function(){
//     clearInterval(moveKing);
//     kingScore = kingScore + 1;
//     kingSpecial()
//     console.log(kingScore)
//     kingBoo.attr('src', "../project1/Images/ShyKing.gif");
//     kingBoo.animate({
//       opacity: 0,
//       }, 2000, function(){
//         kingBoo.attr('src', "../project1/Images/KingBoo1.gif")
//         kingBoo.css({left: -200, opacity: 0})
//         var moveKing = setInterval(floatKing, 20000);
//         kingBooKill()         
//         });
    
//   })
// }


// function KingBooKill (){
//   kingBoo.one('click', function(){
//       var KingLuck = Math.random()
//       clearInterval(floatKing)
//         if (KingLuck > 0.1){
//             kingBoo.attr('src', "../project1/Images/ShyKing.gif")
//             currentScore = currentScore - 1;
//             kingBoo.animate({
//               opacity: 0,
//               }, 4000, function() {
//                 kingBoo.attr('src', "../project1/Images/KingBoo1.gif")
//                 kingBoo.css({opacity: 1})
//                 moveKing = setInterval(floatKing, 15000)
//                 KingBooKill();
//               })
//           }
//         else { 
//           currentScore = currentScore + 10;
//           kingBoo.attr('src', "../project1/Images/StarSpin.gif");
//           kingBoo.animate({
//             opacity: 0,
//             }, 8000, function() {
//               kingBoo.attr('src', "../project1/Images/KingBoo1.gif")
//               kingBoo.css({opacity: 1})
//               moveKing = setInterval(floatKing, 15000)
//               KingBooKill();

//             })
//         }
//     })
// }

      

                  
                  


              





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
              ghostsEscaped = ghostsEscaped + 1;
              $("h2").html('Ghosts escaped: ' + '<span class ="green-text">' + ghostsEscaped +  '/10' + '</span>'); //this updates the ghosts escaped score
              console.log(ghostsEscaped)
              gameOver()
                } 
            
          }

  //float the right-hand-side ghost:
  function floatRightGhost(){
      var rightGhost = $(".ghostRight")
      var currentRight = parseInt(rightGhost.css('right'));
      var currentTop = parseFloat(rightGhost.css('top'));
        var newRight = currentRight + 1;
        var newTop = currentTop + 1; 
        rightGhost.css({'right': newRight, 'top': newTop});

    //this bit determines the up and down floatyness of the ghost rather than just a straight line:
        if (currentRight > 100 && currentRight < 200){
          var upFloat = currentTop - 1;
          rightGhost.css({'top': upFloat})
          }
         
         if (currentRight > 300 && currentRight < 400){
          var upFloat = currentTop - 1;
          rightGhost.css({'top': upFloat})
          }

           if (currentRight > 500 && currentRight < 600){
          var upFloat = currentTop - 1;
          rightGhost.css({'top': upFloat})
          }
          
          //this bit stops the ghost and resets him:
        if (currentRight> 550){
              rightGhost.css({'right' : -50, 'top': (Math.random() *200)});
              ghostsEscaped = ghostsEscaped + 1;
              $("h2").html('Ghosts escaped: ' + '<span class ="green-text">' + ghostsEscaped +  '/10' + '</span>'); 
              console.log(ghostsEscaped);
              gameOver()
                } 
            
          }

  //move the top left ghost
  function floatLastGhost(){
      var lastGhost = $(".ghostThree");
      var currentLeft = parseInt(lastGhost.css('left'));
      var currentTop = parseFloat(lastGhost.css('top'));
        var newLeft = currentLeft + 1;
        var newTop = currentTop + 1; 
        lastGhost.css({'left': newLeft, 'top': newTop});

    //this bit determines the up and down floatyness of the ghost rather than just a straight line:
        if (currentLeft > 100 && currentLeft < 200){
          var upFloat = currentTop - 1;
          lastGhost.css({'top': upFloat})
          }
         
         if (currentLeft > 300 && currentLeft < 400){
          var upFloat = currentTop - 1;
          lastGhost.css({'top': upFloat})
          }

           if (currentLeft > 500 && currentLeft < 600){
          var upFloat = currentTop - 1;
          lastGhost.css({'top': upFloat})
          }
          
          //this bit stops the ghost and resets him:
        if (currentLeft > 550){
              lastGhost.css({'left' : -100, 'top': (Math.random() *200)});
              ghostsEscaped = ghostsEscaped + 1;
              $("h2").html('Ghosts escaped: ' + '<span class ="green-text">' + ghostsEscaped +  '/10' + '</span>'); 
              console.log(ghostsEscaped)
              gameOver()
                } 
            
          }



  //move the first cumulating ghost

   function floatGhostTwo(){

      var currentRight = parseFloat(ghostImageTwo.css('right'));
      var currentTop = parseFloat(ghostImageTwo.css('top'));
        var newRight = currentRight + 1; 
        ghostImageTwo.css({'right': newRight});
        if (currentRight > 600){
              ghostImageTwo.css({'right' : -400, 'top': (Math.random() *300)})
              ghostsEscaped = ghostsEscaped + 1;
              $("h2").html('Ghosts escaped: ' + '<span class ="green-text">' + ghostsEscaped +  '/10' + '</span>'); 
              console.log(ghostsEscaped);
              gameOver()
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

  //this determines the king's random appearances
      function floatKing(){
        // if (kingBoo.css({'left' : -200}) === true){
          kingBoo.css({'left' : (Math.random() * 300)});
          kingBoo.css({'top' : (Math.random() * 300)});
          kingBoo.fadeTo( 3000 , 1, function() {});
          kingBoo.fadeTo( 3000, 0, function(){});

        }
          // kingBoo.animate({
          //     opacity: 1
          //     }, 10000, function(){
          //       kingBoo.css({'left' : (Math.random() * 300)})
          //       kingBoo.css({'top' : (Math.random() * 300)})
          //       kingBoo.css({'opacity' : 0})  
          //       }        
          //   ); 
          // };
        

  function floatTopBoo(){
    if (currentScore > 30) {
      var topBoo = $(".ghostCeiling")
      var currentTop = parseFloat(topBoo.css('top'));
      var newTop = currentTop + 1; 
      topBoo.css({'top': newTop});

      if (currentTop > 400){
        topBoo.css({'top' : -500, 'left': (Math.random() *300)})
        ghostsEscaped = ghostsEscaped + 1;
        $("h2").html('Ghosts escaped: ' + '<span class ="green-text">' + ghostsEscaped +  '/10' + '</span>'); 
        console.log(ghostsEscaped);
        gameOver()
      } 
    }
  }

  //if the king is clicked enough times:
  function kingSpecial(){
    if (kingScore % 10 === 0){
      console.log("Hello");
    }
  }
   
  console.log(ghostsEscaped)


