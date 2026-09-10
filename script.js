const progressBar=document.getElementById("progressBar");
const bootText=document.getElementById("bootText");
let p=0;
const bootTimer=setInterval(()=>{
  p+=4; progressBar.style.width=p+"%";
  if(p<35) bootText.textContent="Loading memories...";
  else if(p<70) bootText.textContent="Preparing birthday surprise...";
  else if(p<100) bootText.textContent="Starting Reshma OS...";
  else {clearInterval(bootTimer);setTimeout(()=>{document.getElementById("bootScreen").classList.add("hidden");document.getElementById("desktop").classList.remove("hidden")},450)}
},70);

const apps={
memories:{
title:"📸 Memories",
html:`<h2>Some beautiful memories 💙</h2>
<div class="gallery">
<img src="photos/photo1.jpeg" onclick="zoom(this.src)">
<img src="photos/photo2.jpeg" onclick="zoom(this.src)">
<img src="photos/photo3.jpeg" onclick="zoom(this.src)">
</div>`
},
message:{
title:"💌 Birthday Message",
html:`<div class="card"><p class="small">MESSAGE FROM ABISHEK</p>
<h2 class="big">Happy Birthday Reshma! 🎂</h2>
<p>Unakku indha birthday romba special-a irukkanum nu wish panren. Life-la nee edha achieve panna nenachalum, adha confident-ah achieve pannanum. Eppavume happy-ah iru, smile pannitu iru. ✨</p>
<p>Indha small Birthday OS unakku oru cute memory-ah irukkattum. 😄</p>
<p><b>Once again, Happy 19th Birthday! 🎉</b></p>
<p>— Abishek</p></div>`
},
surprise:{
title:"🎁 Secret Surprise",
html:`<div class="reveal"><div>
<div style="font-size:80px">🔐</div>
<h2>Secret Birthday Locker</h2>
<p>Enter the secret password to unlock your surprise 😄</p>
<input id="passwordInput" type="password" placeholder="Enter password"
style="padding:13px 15px;border-radius:12px;border:1px solid #46536d;background:#111a2b;color:#fff;outline:none;width:min(280px,90%);margin:10px">
<br><button onclick="unlockSurprise()">UNLOCK 🔓</button>
<p id="passwordError" style="color:#ff9b9b;display:none">Wrong password. Try again 😄</p>
<div id="secret">
<h2>🎉 SURPRISE UNLOCKED 🎉</h2>
<div class="message-card"><div id="typedMessage"></div>
<div id="messageEnd" class="message-end">🎂 Happy Birthday Reshma 💗<br><span>— Abishek 🤍</span></div></div>
<div class="hearts">💖 ✨ 🤍 🎈 ✨ 💖</div>
</div>
</div></div>`
},
terminal:{
title:"💻 Birthday Terminal",
html:`<div class="terminal">
<div><span>reshma@birthday-os</span>:~$ whoami</div>
<div>birthday_girl_19 🎂</div><br>
<div><span>reshma@birthday-os</span>:~$ date</div>
<div>14 September 2026</div><br>
<div><span>reshma@birthday-os</span>:~$ message --from Abishek</div>
<div>Happy Birthday Reshma! 🎉 Stay awesome.</div><br>
<div><span>reshma@birthday-os</span>:~$ status</div>
<div>19 years of memories loaded successfully ✔</div>
</div>`
},
about:{
title:"🎂 Birthday Info",
html:`<div class="card"><h2>Reshma OS — Birthday Edition</h2>
<p><b>Birthday:</b> 14/09/2026</p>
<p><b>DOB:</b> 14/09/2007</p>
<p><b>Turning:</b> 19 🎉</p>
<p><b>Created by:</b> Abishek</p></div>`
}
};

function openApp(name){
 document.getElementById("windowTitle").textContent=apps[name].title;
 document.getElementById("windowContent").innerHTML=apps[name].html;
 document.getElementById("overlay").classList.remove("hidden");
}
function closeApp(){document.getElementById("overlay").classList.add("hidden")}
function closeOutside(e){if(e.target.id==="overlay")closeApp()}
function reveal(){document.getElementById("secret").style.display="block";confetti()}
const birthdayMessage = `Wish you a very Happy Birthday diii 🤍🥹

Un life-la unakku neraya per important-ah irukkalaam… aana en life-la nee occupy panra place romba special.

❤️ Un kooda pesina sila simple moments, namma share pannina memories — enakku adhellam romba precious. Nee happy-ah irukkumbodhu paakuradhe enakku oru different happiness.

🫶🏻 Life eppadi maarinaalum, nee unmaiya happy-ah, peaceful-ah irukkanum nu manasara wish panren.

Unakku pidicha ellame un life-la nadakkanum.

Happy Birthday diii 💗… always keep that beautiful smile. 🤍🎂✨`;

function unlockSurprise(){
  const input=document.getElementById("passwordInput");
  const error=document.getElementById("passwordError");
  if(input && input.value==="bestie2026"){
    document.getElementById("secret").style.display="block";
    error.style.display="none";
    input.style.display="none";
    typeBirthdayMessage();
    confetti();
    hearts();
  }else{
    error.style.display="block";
    if(input){input.value="";input.focus();}
  }
}
function typeBirthdayMessage(){
  const el=document.getElementById("typedMessage");
  const end=document.getElementById("messageEnd");
  if(!el)return;
  el.textContent="";
  end.style.display="none";
  let i=0;
  const timer=setInterval(()=>{
    el.textContent=birthdayMessage.slice(0,++i);
    if(i>=birthdayMessage.length){
      clearInterval(timer);
      setTimeout(()=>end.style.display="block",300);
    }
  },18);
}
function hearts(){
  for(let i=0;i<22;i++){
    const h=document.createElement("div");
    h.textContent=["💖","🤍","✨"][Math.floor(Math.random()*3)];
    h.className="floating-heart";
    h.style.left=Math.random()*100+"vw";
    h.style.animationDuration=(3+Math.random()*3)+"s";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),6000);
  }
}
function zoom(src){window.open(src,"_blank")}
function confetti(){
 for(let i=0;i<70;i++){
   const x=document.createElement("div");
   x.textContent=["🎉","✨","🎈","💙","🎂"][Math.floor(Math.random()*5)];
   x.style.position="fixed";x.style.left=Math.random()*100+"vw";x.style.top="-30px";
   x.style.fontSize=(14+Math.random()*20)+"px";x.style.zIndex=9999;
   document.body.appendChild(x);
   x.animate([{transform:"translateY(0) rotate(0deg)"},{transform:`translateY(${innerHeight+80}px) rotate(${Math.random()*720}deg)`}],{duration:1800+Math.random()*2200}).onfinish=()=>x.remove();
 }
}
function updateClock(){document.getElementById("clock").textContent=new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})}
setInterval(updateClock,1000);updateClock();

function updateCountdown(){
  const target = new Date("2026-09-14T00:00:00+05:30").getTime();
  const now = Date.now();
  const diff = target - now;
  const el = document.getElementById("countdown");
  if(!el) return;
  if(diff <= 0){
    el.textContent = "🎂 HAPPY BIRTHDAY RESHMA! 🎉";
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  el.textContent = `${days}d ${String(hours).padStart(2,"0")}h ${String(mins).padStart(2,"0")}m ${String(secs).padStart(2,"0")}s`;
}
setInterval(updateCountdown,1000);
updateCountdown();
