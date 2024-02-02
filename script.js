//THIS SCRIPT WRITTEN BY MUKHTAR ANSARII, INSTAGRAM: @ii.bbs


//STORY DP AND THEIR STATUS
var arr = [ { dp : "bbs.png",story : "bbsStory.jpg" ,us : "ii.bbs"},
            { dp : "srkdp.png",story : "srkstr.jpg",us : "iamsrk"},
            { dp : "ronaldp.png",story : "ronalstr.jpg", us :"cristiano"},
            { dp : "jennadp.png",story : "jeenastr.jpg",us : "jeena.orteza"},
            { dp : "salmandp.png",story : "salmanstr.jpg",us :"beingsalmankhan"},
            { dp : "viratdp.png",story : "viratstr.jpg",us :"virat.kohli"},
            { dp : "tomdp.png",story : "tomstr.jpg",us : "tomholland2013"},
            { dp : "andrewdp.png",story : "andrewstr.jpg",us: "andrew.garfield"},
           
]
// DECLARATION OF HTML TAG BUTTON DIV IN JAVASCRIPT.//FULL SCREEN VIEW OF STORY , NOTIFICATION, INBOX
var statusBar = document.querySelector("#statusBar")
var notifyBtn = document.querySelector(".fa-heart")
var backBtn = document.querySelector(".notify .fa-arrow-left")
var backmsgBtn = document.querySelector(".inbox .fa-arrow-left")
var messegeBtn = document.querySelector(".fa-facebook-messenger")
var feedPhoto = document.querySelector("#bbsFeed")
var clutter = ""

 //INSERT HTML (.story ) DIV IN JAVASCRIPT.
arr.forEach(function(elem,idx){
	   clutter += ` <div class="story"> <img id="${idx}" src="${elem.dp}"> 
	  <p id="${idx}">${elem.us}</p></div>`
})

//FULL SCREEN VIEW OF STORY
statusBar.innerHTML = clutter
statusBar.addEventListener("click",function(dets){
 	 
 	 document.querySelector("#full-screen").style.display = "block"
 	 document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

  	setTimeout(function(){
 		  document.querySelector("#full-screen").style.display = "none"
 		  
  	}, 6000)
 
 	
 })

//FULL SCREEN VIEW OF  NOTIFICATION
 notifyBtn.addEventListener("click",function(){
 	   document.querySelector(".notify").style.display = "block"
 })
 
 backBtn.addEventListener("click",function(){
 	   	 document.querySelector(".notify").style.display = "none"
 })

//FULL SCREEN VIEW OF INBOX 
messegeBtn.addEventListener("click",function(){
 	   document.querySelector(".inbox").style.display = "block"
 })
 
 backmsgBtn.addEventListener("click",function(){
 	   	 document.querySelector(".inbox").style.display = "none"
 })
 
 var clickTime = 0
 feedPhoto.addEventListener("dblclick", function(){
 	 if(clickTime == 0){
 	 	document.querySelector(".likeLogo .unlike").style.visibility = "hidden"
  	 document.querySelector(".likeLogo .liked").style.display = "block"
  	 clickTime = 1
 	 }else{
 	 	document.querySelector(".likeLogo .unlike").style.visibility = "visible"
  	 document.querySelector(".likeLogo .liked").style.display = "none"
  	 clickTime = 0
 	 }
 	 
 })
 
 document.querySelector("#strBackBtn").addEventListener("click",function(){
 	 document.querySelector("#full-screen").style.display = "none"
 })