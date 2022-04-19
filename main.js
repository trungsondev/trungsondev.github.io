var dapan={
  1:"c",
  2:"c",
  3:"a",
  4:"a",
  5:"a",
  6:"c",
  7:"b",
  8:"b",
  9:"c",
  10:"a",
  11:"a",
  12:"c",
  13:"b",
  14:"a",
  15:"a",
  16:"c",
  17:"b",
  18:"d",
  19:"b",
  20:"a",
  21:"c",
  22:"a",
  23:"a",
  24:"d" /*a*/,
  25:"a" /*a*/,
  26:"c" /*a*/,
  27:"b" /*a*/,
  28:"b" /*a*/,
  29:"a" /*a*/,
  30:"c" /*a*/,
  31:"b" /*a*/,
  32:"d" /*a*/,
  33:"b" /*a*/,
  34:"c" /*a*/,
  35:"c" /*a*/,
  36:"a" /*a*/,
  37:"d" /*a*/,
  38:"a" /*a*/,
  39:"b" /*a*/,
  40:"d" /*a*/,
  41:"b" /*a*/,
  42:"d" /*a*/,
  43:"d" /*a*/,
  44:"b" /*a*/,
  45:"c" /*a*/,
  46:"c" /*a*/,
  47:"a" /*a*/,
  48:"a" /*a*/,
  49:"b" /*a*/,
  50:"d" /*a*/,
  51:"a" /*a*/,
  52:"b" /*a*/,
  53:"b"  /*a*/,
  54:"a",
  55:"b",
  56:"d",
  57:"b",
  58:"a" /*a*/,
  59:"c" /*a*/,
  60:"d" /*a*/,
  61:"a" /*a*/,
  62:"b" /*a*/,
  63:"b",
  64:"a",
  65:"a",
  66:"c" /*a*/,
  67:"a" /*a*/,
  68:"d",
  69:"c",
  70:"a" /*a*/,
  71:"a" /*a*/,
  72:"c",
  73:"a" /*a*/,
  74:"a" /*a*/,
  75:"a" /*a*/,
  76:"c",
  77:"a",
  78:"b",
  79:"a",
  80:"c",
  81:"b",
  82:"b",
  83:"a",
  84:"b",
  85:"a",
  86:"a",
  87:"d",
  88:"d",
  89:"d",
  90:"d",
  91:"a",
  92:"b",
  93:"d",
  95:"b",
  96:"c",
  97:"d",
  98:"d",
  99:"a",
  100:"c"
}
var xx=1;
function readTextFile() {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", "cau.txt", true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4) {
        var json=JSON.stringify(rawFile.responseText);
        var de=rawFile.responseText.split("\n")
        thihanh(de);
    }
  }
  rawFile.send();
}
//305 346 371 94 111 136 141 142 159
var i=0;
function cong(){
  if(i<98){
    i+=1;
    
    xx+=1
    if(i==93){
      xx=95
    }
    readTextFile()
  }
  
  document.getElementById("trungson").style.backgroundColor="#555555";
}
function tru(){
  if(i>0){
    i-=1;
    xx-=1
    if(i==93){
      xx=95
    }
    readTextFile()
  }
  document.getElementById("trungson").style.backgroundColor="#555555";
}
function nhanham(socau,traloi){
  if(dapan[socau]==traloi){
    document.getElementById("trungson").style.backgroundColor="green";
  }else{
    document.getElementById("trungson").style.backgroundColor="red";
  }
}
function thihanh(de){
  var tt=i*5;
  
  console.log(i)
  // const mang= de.filter((a) => a);
  var ht=`
  <div class="container mt-sm-1 my-1" id="trungson">
      <div class="question ml-sm-5 pl-sm-5 pt-2">
        <div class="py-2 h5"><b>${de[tt]}</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> 
            <label class="options">${de[tt+1]} <input type="radio" name="radio" onclick="nhanham(${xx},'a')"> <span class="checkmark"></span> </label> 
            <label class="options">${de[tt+2]} <input type="radio" name="radio" onclick="nhanham(${xx},'b')"> <span class="checkmark"></span> </label> 
            <label class="options">${de[tt+3]} <input type="radio" name="radio" onclick="nhanham(${xx},'c')"> <span class="checkmark"></span> </label> 
            <label class="options">${de[tt+4]} <input type="radio" name="radio" onclick="nhanham(${xx},'d')"> <span class="checkmark"></span> </label> 
        </div>
      </div>
      <div class="d-flex align-items-center pt-3">
          <div id="prev"> <button class="btn btn-primary" onclick="tru()">Trước</button> </div>
          <div class="ml-auto mr-sm-5"> <button class="btn btn-success" onclick="cong()">tiếp tục</button> </div>
      </div>
  </div>
  `
  document.getElementById("son").innerHTML=ht;

}
readTextFile();

// for (let i = 0; i < de.length; index++) {

// }
function dropxuat(){
  var ht= ``;
  for (let index = 0; index <= 90; index+=10) {
    ht+=`
      <option value=${index+1}><strong>Từ câu ${index+1} </strong></option>
    `
  }
  document.getElementById("exampleFormControlSelect1").innerHTML=ht
}
dropxuat()
document.getElementById("exampleFormControlSelect1").addEventListener("change",function(){
  var y=this.value-1;
  i=y
  xx=y+2
  readTextFile();
})