let score = 0;

let currentLevel = 0;

const levels = [

{

image:"https://upload.wikimedia.org/wikipedia/commons/e/e3/Egypt.Giza.Sphinx.01.jpg",

text:"Level 1: The Sphinx guards an ancient riddle. What is older?",

choices:["The Great Pyramid","The Roman Colosseum"],

correct:0

},

{

image:"https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",

text:"Level 2: The Taj Mahal was built by?",

choices:["Shah Jahan","Akbar"],

correct:0

},

{

image:"https://upload.wikimedia.org/wikipedia/commons/a/a6/Colosseum_in_Rome%2C_Italy.jpg",

text:"Level 3: The Colosseum was used for?",

choices:["Gladiator battles","Royal weddings"],

correct:0

},

{
   
image:"https://upload.wikimedia.org/wikipedia/commons/1/10/Great_Wall_of_China_June_2007.jpg",

text:"Level 4: The Great Wall was built mainly to protect against?",

choices:["Mongol invasions","Roman soldiers"],

correct:0

},

{

image:"https://upload.wikimedia.org/wikipedia/commons/6/6f/Machu_Picchu%2C_Peru.jpg",

text:"Level 5: Machu Picchu belongs to which civilization?",

choices:["Inca","Maya"],

correct:0

},

{

image:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Stonehenge2007_07_30.jpg",

text:"Level 6: Stonehenge is located in?",

choices:["England","France"],

correct:0

},

{

image:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Parthenon_from_west.jpg",

text:"Level 7: The Parthenon is dedicated to?",

choices:["Athena","Zeus"],

correct:0

},

{

image:"https://upload.wikimedia.org/wikipedia/commons/3/3f/Angkor_Wat_temple.jpg",

text:"Level 8: Angkor Wat is in?",

choices:["Cambodia","Thailand"],

correct:0

},

{

image:"https://upload.wikimedia.org/wikipedia/commons/5/5e/Petra_Jordan_BW_21.JPG",

text:"Level 9: Petra is located in?",

choices:["Jordan","Egypt"],

correct:0

},

{

image:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Red_Fort_Delhi.jpg",

text:"Level 10: Red Fort is in?",

choices:["Delhi","Mumbai"],

correct:0

},

{

image:"https://upload.wikimedia.org/wikipedia/commons/2/2e/Chichen_Itza_3.jpg",

text:"Level 11: Chichen Itza belongs to?",

choices:["Maya","Aztec"],

correct:0

},

{

image:"https://upload.wikimedia.org/wikipedia/commons/1/1b/Pyramids_of_the_Sun_and_Moon.jpg",

text:"Level 12: Teotihuacan is in?",

choices:["Mexico","Brazil"],

correct:0

},

{

image:"https://upload.wikimedia.org/wikipedia/commons/3/3a/Hagia_Sophia_Mars_2013.jpg",

text:"Level 13: Hagia Sophia is in?",

choices:["Turkey","Greece"],

correct:0

},

{
   
image:"https://upload.wikimedia.org/wikipedia/commons/6/6e/Forbidden_City_Beijing_Shenwumen_Gate.JPG",

text:"Level 14: Forbidden City is in?",

choices:["Beijing","Shanghai"],

correct:0

},

{

image:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Statue_of_Liberty_7.jpg",

text:"Level 15: Statue of Liberty was gifted by?",

choices:["France","Germany"],

correct:0

},

 {
image:"https://upload.wikimedia.org/wikipedia/commons/0/0c/Eiffel_Tower_Paris.jpg",

text:"Level 16: Eiffel Tower is located in?",

choices:["Paris","London"],

correct:0

},

 {

image:"https://upload.wikimedia.org/wikipedia/commons/8/87/Kremlin_Moscow.jpg",

text:"Level 17: Kremlin is in?",

choices:["Russia","Poland"],

correct:0

},

{

image:"https://upload.wikimedia.org/wikipedia/commons/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg",

text:"Level 18: Christ the Redeemer is in?",

choices:["Brazil","Argentina"],

correct:0

},

{

image:"https://upload.wikimedia.org/wikipedia/commons/f/f7/Acropolis_of_Athens_2019.jpg",

text:"Level 19: The Acropolis is in?",

choices:["Athens","Rome"],

correct:0

},

{

image:"https://upload.wikimedia.org/wikipedia/commons/5/5a/Indian_Independence_Day_1947.jpg",

text:"Level 20: India got independence in?",

choices:["1947","1950"],

correct:0

}

];

function loadLevel(){

document.getElementById("sceneImage").src = levels[currentLevel].image;

document.getElementById("storyText").innerText = levels[currentLevel].text;

document.getElementById("btn1").innerText = levels[currentLevel].choices[0];

document.getElementById("btn2").innerText = levels[currentLevel].choices[1];

document.getElementById("level").innerText = currentLevel+1;

}

function chooseOption(choice){

if(choice === levels[currentLevel].correct){

score += 10;

alert("✅ Correct! Mystery solved.");

}else{

score -= 5;

alert("❌ Wrong! Darkness grows...");

}

document.getElementById("score").innerText = score;

currentLevel++;

if(currentLevel < levels.length){

loadLevel();

}else{

document.getElementById("storyText").innerText =

"🏆 You completed all 20 levels!\nFinal Score: " + score;

document.querySelector(".choices").style.display="none";

}

}

function restartGame(){

score=0;

currentLevel=0;

document.getElementById("score").innerText=score;

document.querySelector(".choices").style.display="block";

loadLevel();

}

loadLevel();
  
