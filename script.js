const overlay=document.getElementById('adOverlay');
const closeAd=document.getElementById('closeAd');
const player=document.getElementById('player');
document.querySelector('.watch').onclick=()=>{
if(sessionStorage.getItem('adSeen')){play();return;}
overlay.classList.remove('hidden');count=10;closeAd.disabled=true;
let t=setInterval(()=>{count--;closeAd.innerText=`إغلاق الإعلان (${count})`;
if(count<=0){clearInterval(t);closeAd.disabled=false;closeAd.classList.add('active');closeAd.innerText='إغلاق الإعلان';}},1000);
}
closeAd.onclick=()=>{sessionStorage.setItem('adSeen',1);overlay.classList.add('hidden');play();}
function play(){player.src=document.querySelector('.watch').dataset.stream;player.play();}
