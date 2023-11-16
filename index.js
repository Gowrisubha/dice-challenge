randomNumber1 = Math.floor(Math.random()*6)+1; //1-6
image1Name = "dice" + randomNumber1 + ".png";  // dice1.png - dice6.png
image1Source = "images/" + image1Name;         //images/dice1.png - images/dice2.png

randomNumber2 = Math.floor(Math.random()*6)+1; //1-6
image2Name = "dice" + randomNumber2 + ".png";  // dice1.png - dice6.png
image2Source = "images/" + image2Name;         //images/dice1.png - images/dice2.png

document.querySelector(".img1").setAttribute("src", image1Source);
document.querySelector(".img2").setAttribute("src", image2Source);

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
    }else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML="🚩 Player 2 Wins";
    }else{
        document.querySelector("h1").innerHTML="Draw";
    }
