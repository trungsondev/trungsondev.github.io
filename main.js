const future=new Date("jan 1,2022 00:00:00").getTime();
function newyear(){
  const t=new Date();
  const countdown=new Date().getTime();
  tg=future-countdown;
  var second=1000;
  var minute=second*60;
  var hour=minute*60;
  var day=hour*24;
  
  const d=Math.floor(tg/(day));
  const h=Math.floor((tg%day)/hour);
  const m=Math.floor((tg%(hour))/(minute));
  const s=Math.floor((tg%(minute))/(second));
  document.getElementById("day").innerText=d;
  document.getElementById("hour").innerText=h;
  document.getElementById("minute").innerText=m;
  document.getElementById("second").innerText=s;

}
setInterval(()=>{
  newyear();
},1000)