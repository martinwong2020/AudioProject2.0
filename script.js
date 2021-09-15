var musicCounter=0;
var playlistCounter=0;
$(".userInput").hide();
$(".vids").hide();
$(".start").click(function() {
  // $("#sound").attr("src","Shiloh.mp3"); 
  $(".vids").hide();
  $(".screen").show();
  if(playlistCounter==1){
    $(".userInput").hide();
    $(".soundbars").css("margin-left","-8px");
    playlistCounter--;
  }
  if(musicCounter==0){
    $('audio#sound').get(0).play();
    document.querySelector("audio").volume = 0.3;
    console.log("click");
    // $('.screen').css("background-image","none");
    // $('.screen').css("background-image","url('https://c.tenor.com/NHulZFmj3XAAAAAC/anime-rain.gif')");
    screenimgs();
    // window.setInterval(screenimgs,10000);
    musicCounter++;
  }else if(musicCounter==1){
    $('audio#sound').get(0).pause();
    $('.screen').css("background-image","url('https://thumbs.gfycat.com/AliveAssuredGander-size_restricted.gif')");
    // clearInterval(screenimgs);
    musicCounter--;
  }
  console.log(musicCounter);
});
$(".music").click(function(){
  $(".vids").show();
  $(".screen").hide();
  if(musicCounter==1){
      musicCounter--;
      $('audio#sound').get(0).pause();      
    }
  if(playlistCounter==0){
    $(".userInput").show();
    playlistCounter++;
    $(".soundbars").css("margin-left","15px");
    // $(".soundbars").css("");
  }
  else if(playlistCounter==1){
    var link="";
    link=$(".userInput").val();
    //splitting the yt url to add embed instead of watch
     if (link.includes("youtu.be")){  
    console.log("r");
    var linkLength=link.length;
    console.log(linkLength);
    var code=link.slice(linkLength-11,linkLength);
    console.log(code);
    var yturl="https://www.youtube.com/";
    var newlink=yturl+"embed/"+code;
    $(".vids").attr("src",newlink);
    console.log(newlink);
  }else{
    const array=link.split("watch?v=");
    var code=array[1].slice(0,11);
    var newlink=array[0]+"embed/"+code;
    console.log(newlink);
    $(".vids").attr("src",newlink);
  }
    playlistCounter--;    
    $(".userInput").hide();
    $(".soundbars").css("margin-left","-8px");
    
  }
});
var i=0;
function screenimgs(){
  var background=["https://media2.giphy.com/media/IuVFGSQZTd6TK/200.gif",
  "https://c.tenor.com/NHulZFmj3XAAAAAC/anime-rain.gif",
  "https://i.pinimg.com/originals/61/ce/d7/61ced788ba37c41bb53d6d490c7f88a4.gif",
  "https://i.imgur.com/nQrErYj.gif",
  "https://66.media.tumblr.com/8cdf7489e866c94708505c4a504d64b5/tumblr_oiv7qngzXk1vjs6ulo7_500.gif",
  "https://i.pinimg.com/originals/e2/38/17/e23817f641839282ad7fefa60c0ea996.gif",
  "https://64.media.tumblr.com/8eb6935c7349e6667f05e8af43aa174e/ac4e6daf71d6ab6b-73/s1280x1920/1dc8ac1124e3fe7368d2501a8b31924eec91e3cc.gifv",
  "https://i.gifer.com/AcU9.gif"
  ];
  $('.screen').css("background-image","url('"+background[i]+"')");
  i++;
  if(i>7){
   i=0;
  }
}

console.log(musicCounter);
// $(".userInput").show();
// var main=function() {
//   $('audio#sound').get(0).play();
//   document.querySelector("audio").volume = 0.1; 
//   // alert("You have now got a VIRUS. You are caught using Malicious and ILLEGAL websites. At the currrent moment you are being HACKED and TRACED. Contaminating your data. jk:)");
//   console.log("doc rdy");
//   // var shiloh= new Audio('Shiloh.mp3');
//   // shiloh.play();
// }
// $(document).ready(main);

// $(document).ready(function() {
//   setMusic();
// });
// function setMusic(){
//   var currentMusic="Shiloh.mp3";
//   $("#sound").attr("src",currentMusic);
//   document.querySelector("audio").volume = 0.1;
//   console.log("audio");
// }