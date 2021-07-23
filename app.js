const emoji = ["Grinning Face", "Smiling Face", "Face Savoring Food", "Neutral Face", "Nerd Face", "Face with Tears of Joy", "Rolling on the Floor Laughing", "Slightly Smiling Face", "Upside-Down Face", "Winking Face", "Smiling Face with Smiling Eyes", "Smiling Face with Heart-Eyes", "Star-Struck", "Smiling Face with Halo", "Smiling Face with Hearts", "Winking Face with Tongue", "Hugging Face", "Face with Hand Over Mouth", "Shushing Face", "Thinking Face", "Sleeping Face"];
const emojiName=document.getElementById("emoji-name");
const livesNumber=document.getElementById("lives");
const scoreNumber=document.getElementById("score");
var score=0;
var lives=3;
var emojiImage=document.getElementsByClassName("emoji");

function myFunction(){
    var i=Math.floor(Math.random()*emoji.length);
    emojiName.innerHTML=emoji[i];
}

for(let i=0;i<emojiImage.length;i++){
    emojiImage[i].onclick=()=>{
        if(emojiName.innerHTML==emoji[i]){
            score++;
            scoreNumber.innerHTML=score;
            myFunction()
        }else{
            lives--;
            livesNumber.innerHTML=lives;
            if(lives==0){
                alert("Game Over");
                myFunction();
            }
        }
    }
}

function reset(){
    lives=3;
    livesNumber.innerHTML=lives;
    score=0;
    scoreNumber.innerHTML=score;
}