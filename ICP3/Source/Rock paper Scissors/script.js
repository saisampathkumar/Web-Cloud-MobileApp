// var myIndex = 0;
        // carousel("null","null");
        // $(document).ready(function () {
        // $("#rock").click(function () {
        // carousel("break","rock");
        // });
        // $("#paper").click(function () {
        // carousel("break","paper");
        // });
        // $("#scissors").click(function () {
        // carousel("break","scissors")
        // });
        // });
        
        // function carousel(choise1,choise2) {
        //     var computerChoice = Math.random();
        //     if (computerChoice < 0.34) {
        //     choice3 = "rock";
        //     } else if (computerChoice <= 0.67) {
        //     choice3 = "paper";
        //     } else {
        //     choice3 = "scissors";
        //     }
        //     var i;
        //     var x = document.getElementsByClassName("mySlides");
        //     for (i = 0; i < x.length; i++) {
        //     x[i].style.display = "none";  
        //     if(choise1 === "break"){
        //         if(choise2==="rock"){
        //             x[0].style.display = "none";
        //         }
        //         else if(choise2==="paper"){
        //             x[1].style.display = "none";
        //         }
        //         else if(choise2==="scissors"){
        //             x[2].style.display = "none";
        //         }

        //         if(choice2 === choice3) {
        //             alert( "The result is a tie!!!" + " " + "Lets play again.");
        //         }
        //         else if (choice3 === "rock") {
        //             if (choice2 === "scissors") {
        //                     alert( "rock wins"+ "!!! " +"You beat the computer, nice job!");
        //                 }
        //                 else {
        //                     alert("paper wins"  + "!!! " + "Your really smart computer beat you.") ;
        //                 }
        //             }
        //             else if (choice3 === "paper") {
        //                 if (choice2 === "rock") {
        //                     alert("paper wins"+ "!!! " + "You beat the computer, nice job!") ;
        //                 }
        //                 else {
        //                     alert("scissors wins"+ "!!! " + "Your really smart computer beat you.") ;
        //                 }
        //             }
        //             else if (choice3 === "scissors") {
        //                 if (choice2 === "rock") {
        //                     alert("rock wins"  + " " + "Your really smart computer beat you.") ;
        //                 }
        //                 else {
        //                     alert("scissors win"  + " " + "You beat the computer, nice job!") ;
        //                 }
        //             }
        //         } 
        //     }
        //   }
        //   myIndex++;
        //   if (myIndex > x.length) {myIndex = 1}    
        //   x[myIndex-1].style.display = "block";  
        //   setTimeout(carousel, 2000); // Change image every 2 seconds
        // }
        // var myIndex = 0;
        // carousel();

        // function carousel() {
        // var i;
        // var x = document.getElementsByClassName("mySlides");
        // for (i = 0; i < x.length; i++) {
        //     x[1].style.display = "none";  
        // }
        // myIndex++;
        // if (myIndex > x.length) {myIndex = 1}    
        // x[myIndex-1].style.display = "block";  
        // setTimeout(carousel, 100); // Change image every 2 seconds
        // }

        $(document).ready(function () {
            $("#rock").click(function () {
                compare("rock");
            });
            $("#paper").click(function () {
                compare("paper");
            });
            $("#scissors").click(function () {
                compare("scissors");
            });
            });
    
            function compare(choice1) {
                var computerChoice = Math.random();
                if (computerChoice < 0.34) {
                    choice2 = "rock";
                    document.getElementById( "myImagerock" ).style.display = "inline";
                    document.getElementById( "te" ).style.display = "inline";
    
                } else if (computerChoice <= 0.67) {
                    choice2 = "paper";
                    document.getElementById( "myImagepaper" ).style.display = "inline";
                    document.getElementById( "te" ).style.display = "inline";
    
                } else {
                    choice2 = "scissors";
                    document.getElementById( "myImagescissors" ).style.display = "inline";
                    document.getElementById( "te" ).style.display = "inline";
    
                }
    
                if (choice1 === choice2) {
                    alert( "The result is a tie!!! Lets play again.");
                }
    
                else if (choice1 === "rock") {
                    if (choice2 === "scissors") {
                        alert( "rock wins You beat the computer, nice job!");
                    }
                    else {
                        alert("paper wins, computer beats you.") ;
                    }
                }
    
                else if (choice1 === "paper") {
    
                    if (choice2 === "rock") {
                        alert("paper wins  You beat the computer, nice job!") ;
                    }
                    else {
                        alert("scissors wins, computer beat you.") ;
                    }
    
                }
    
                else if (choice1 === "scissors") {
    
                    if (choice2 === "rock") {
                        alert("rock wins, computer beat you.") ;
    
                    }
                    else {
                        alert("scissors win You beat the computer, nice job!") ;
                    }
                }
    
    
            } 
    