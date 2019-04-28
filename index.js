let dataset1 = {data1: ["hello","darkness","my","old","friend"], data2: ["Holy","crap"],
                data3: ["You","got","to","be","shitting","me"], data4: ["Love","my","job"]}
let dataset2 = {data1:["img/helloQR.png","img/darknessQR.png","img/myQR.png","img/oldQR.png","img/friendQR.png"], data2: ["img/HolyQR.png","img/crapQR.png"],
                data3: ["img/YouQR.png","img/gotQR.png","img/toQR.png","img/beQR.png","img/shittingQR.png","img/meQR.png"], data4: ["img/LoveQR.png","img/myQR.png","img/jobQR.png"]}
let dataset3 = {data1:["em em-wave","em em-see_no_evil","em em-adult","em em-older_adult","em em-two_men_holding_hands"], data2: ["em em-pray","em em-hankey"],
                data3: ["em em-point_right","em em-goat","em em-two","em em-bee","em em-hankey","em em-adult"], data4: ["em em-heartpulse","em em-adult","em em-briefcase"]}
/*
function dataSet(word, qr, emoji) {
  this.word = word;
  this.qr = qr;
  this.emoji = emoji;
}
*/

function img_create(src, alt, title) {
    var img = document.createElement('img');
    img.setAttribute('height', '100px');
    img.setAttribute('width', '100px');
    img.src = src;
    if ( alt != null ) img.alt = alt;
    if ( title != null ) img.title = title;
    return img;
}

startBtn.addEventListener('click',(e) => {
    e.preventDefault();
    let translation = createTranslationElement();
    let n = Math.floor(Math.random() * (Object.keys(dataset1).length));
    generateText(n);
    
    document.getElementById("transalteBtn").style.display = "inline";
    document.getElementById("nextBtn").style.display = "inline";


    document.getElementById("startBtn").style.display = "none";
    return false;
});

nextBtn.addEventListener('click',(e) => {
    e.preventDefault();
    document.getElementById("tempText").remove();
    document.getElementById("inline").remove();
    document.getElementById("translate").style.display = "none";
    let translation = createTranslationElement();
    let n = Math.floor(Math.random() * (Object.keys(dataset1).length));
    generateText(n);
    return false;
});

transalteBtn.addEventListener('click',(e) => {
    e.preventDefault();
    
    document.getElementById("translate").style.display = "inline";
    return false;
});

const createTranslationElement = () =>{
    
    let x = document.createElement("INPUT");
    x.setAttribute("class", "word");
    x.setAttribute("type", "text");
    x.setAttribute("id","tempText");
    x.setAttribute("placeholder", "Translation");
    document.getElementById("wrapper1").appendChild(x);
};

const generateText = (n) =>{
    document.getElementById("translate").textContent = "";
    let parentDiv = document.createElement("div");
    parentDiv.setAttribute("id", "inline");
    parentDiv.className += "wordDisplay";
    document.getElementById("wrapper").appendChild(parentDiv);
    //console.dir(dataset1["data"+n]);
    for (var i = 0; i < dataset1["data"+n].length; i++){
            let x = Math.floor(Math.random() * 3);
            let y = document.createElement("div");
            y.setAttribute("id", "inline");
        parentDiv.appendChild(y);
            let z = document.createElement("div");
        y.appendChild(z);
            switch(x){
                case 0:
                    //z = dataset1["data"+n][i];
                    z.textContent = dataset1["data"+n][i];
                    break;
                case 1:
                
                    //z = dataset2["data"+n][i];
                    let imgTag = img_create(dataset2["data"+n][i], "emojiImg", "Emoji");
                    if(imgTag != null){
                        z.appendChild(imgTag);
                    }
                    break;
                case 2:
                    let xd = document.createElement("i");
                    xd.className += dataset3["data"+n][i];
                    z.appendChild(xd);
                    break;
                default:
                    z = "Not found"
                    break;
            }
        document.getElementById("translate").textContent += dataset1["data"+n][i] + " ";
    }

}



$(document).ready(function() {
    const startBtn = document.querySelector('#startBtn');
    const nextBtn = document.querySelector('#nextBtn');
    const transalteBtn = document.querySelector('#transalteBtn');
});

