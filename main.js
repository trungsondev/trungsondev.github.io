var dapan = {
    1: "c",
    2: "c",
    3: "a",
    4: "a",
    5: "a",
    6: "c",
    7: "b",
    8: "b",
    9: "c",
    10: "a",
    11: "a",
    12: "c",
    13: "b",
    14: "a",
    15: "a",
    16: "c",
    17: "b",
    18: "d",
    19: "b",
    20: "a",
    21: "c",
    22: "a",
    23: "a",
    24: "d" /*a*/ ,
    25: "a" /*a*/ ,
    26: "c" /*a*/ ,
    27: "b" /*a*/ ,
    28: "b" /*a*/ ,
    29: "a" /*a*/ ,
    30: "c" /*a*/ ,
    31: "b" /*a*/ ,
    32: "d" /*a*/ ,
    33: "b" /*a*/ ,
    34: "c" /*a*/ ,
    35: "c" /*a*/ ,
    36: "a" /*a*/ ,
    37: "d" /*a*/ ,
    38: "a" /*a*/ ,
    39: "b" /*a*/ ,
    40: "d" /*a*/ ,
    41: "b" /*a*/ ,
    42: "d" /*a*/ ,
    43: "d" /*a*/ ,
    44: "b" /*a*/ ,
    45: "c" /*a*/ ,
    46: "c" /*a*/ ,
    47: "a" /*a*/ ,
    48: "a" /*a*/ ,
    49: "b" /*a*/ ,
    50: "d" /*a*/ ,
    51: "a" /*a*/ ,
    52: "b" /*a*/ ,
    53: "b" /*a*/ ,
    54: "a",
    55: "b",
    56: "d",
    57: "b",
    58: "a" /*a*/ ,
    59: "c" /*a*/ ,
    60: "d" /*a*/ ,
    61: "a" /*a*/ ,
    62: "b" /*a*/ ,
    63: "b",
    64: "a",
    65: "a",
    66: "c" /*a*/ ,
    67: "a" /*a*/ ,
    68: "d",
    69: "c",
    70: "a" /*a*/ ,
    71: "a" /*a*/ ,
    72: "c",
    73: "a" /*a*/ ,
    74: "a" /*a*/ ,
    75: "a" /*a*/ ,
    76: "c",
    77: "a",
    78: "b",
    79: "a",
    80: "c",
    81: "b",
    82: "b",
    83: "a",
    84: "b",
    85: "a",
    86: "a",
    87: "d",
    88: "d",
    89: "d",
    90: "d",
    91: "a",
    92: "b",
    93: "d",
    95: "b",
    96: "c",
    97: "d",
    98: "d",
    99: "a",
    100: "c",
    101: "b",
    102: "a",
    103: "b",
    104: "a",
    105: "c",
    106: "d",
    107: "b",
    108: "a",
    109: "b",
    110: "d",
    111:"f",
    112: "d",
    113: "b",
    114: "c",//a
    115: "d",//a
    116: "b",//a
    117: "c",//a
    118: "a",//a
    119: "d",//a
    120: "b",//a
    121: "b",//a
    122: "c",//a
    123: "a",//a
    124: "a",//a
    125: "b",//a
    126: "c",//a
    127: "c",//a
    128: "b",//a
    129: "a",//a
    130: "d",//a
    131: "b",//a
    132: "c",//a
    133: "b",//a
    134: "c",//a
    135: "a",//a
    136:"f",
    137: "a",
    138: "a",
    139: "a",
    140: "a",
    141: "f",
    142: "f",
    143: "d",
    144: "d",//a
    145: "c",//a
    146: "a",//a
    147: "a",//a
    148: "d",//a
    149: "d",
    150: "c",//a
    151: "a",//a
    152: "a",//a
    153: "c",
    154: "b",
    155: "d",
    156: "a",
    157: "c",
    158: "b",
    159: "f",
    160: "d",
    161: "c",
    162: "a",
    163: "b",
    164: "b",
    165: "b",
    166: "c",
    167: "a",
    168: "c",
    169: "b",
    170: "b",
    171: "c",
    172: "d",
    173: "d",
    174: "a",
    175: "b",
    176: "b",
    177: "b",
    178: "a",
    179: "a",
    180: "a",
    181: "c",
    182: "b",
    183: "b",
    184: "a",
    185: "c",
    186: "a",//a
    187: "d",//a
    188: "c",//a
    189: "d",//a
    190: "b",//a
    191: "c",//a
    192: "a",//a
    193: "d",//a
    194: "a",//a
    195: "a",//a
    196: "a",//a
    197: "c",
    198: "c",
    199: "c",
    200: "d",



}
var xx = 1;

function readTextFile() {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "cau.txt", true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            var json = JSON.stringify(rawFile.responseText);
            var de = rawFile.responseText.split("\n")
            thihanh(de);
        }
    }
    rawFile.send();
}
//305 346 371 94 111 136 141 142 159
var i = 1;

function cong() {
    if (i < 200) {
        i += 1;
        console.log(i)
        readTextFile()
    }

    document.getElementById("trungson").style.backgroundColor = "#555555";
}

function tru() {
    if (i > 1) {
        i -= 1;
        readTextFile()
    }
    document.getElementById("trungson").style.backgroundColor = "#555555";
}

function nhanham(socau, traloi) {
    console.log(socau)
    console.log(traloi)
    if (dapan[socau] == traloi) {
        document.getElementById("trungson").style.backgroundColor = "green";
    } else {
        document.getElementById("trungson").style.backgroundColor = "red";
    }
}

function thihanh(de) {
    var tt = (i - 1) * 5;
    console.log(tt)
        // const mang= de.filter((a) => a);
    var ht = `
    <div class="container mt-sm-1 my-1" id="trungson">
        <div class="question ml-sm-5 pl-sm-5 pt-2">
          <div class="py-2 h5"><b>${de[tt]}</b></div>
          <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> 
              <label class="options">${de[tt+1]} <input type="radio" name="radio" onclick="nhanham(${i},'a')"> <span class="checkmark"></span> </label> 
              <label class="options">${de[tt+2]} <input type="radio" name="radio" onclick="nhanham(${i},'b')"> <span class="checkmark"></span> </label> 
              <label class="options">${de[tt+3]} <input type="radio" name="radio" onclick="nhanham(${i},'c')"> <span class="checkmark"></span> </label> 
              <label class="options">${de[tt+4]} <input type="radio" name="radio" onclick="nhanham(${i},'d')"> <span class="checkmark"></span> </label> 
          </div>
        </div>
        <div class="d-flex align-items-center pt-3">
            <div id="prev"> <button class="btn btn-primary" onclick="tru()">Trước</button> </div>
            <div class="ml-auto mr-sm-5"> <button class="btn btn-success" onclick="cong()">tiếp tục</button> </div>
        </div>
    </div>
    `

    document.getElementById("son").innerHTML = ht;

}
readTextFile();

// for (let i = 0; i < de.length; index++) {

// }
function dropxuat() {
    var ht = ``;
    for (let index = 0; index <= 190; index += 10) {
        ht += `
        <option value=${index+1}><strong>Từ câu ${index+1} </strong></option>
      `
    }
    document.getElementById("exampleFormControlSelect1").innerHTML = ht
}
dropxuat()
document.getElementById("exampleFormControlSelect1").addEventListener("change", function() {
    i = parseInt(this.value);
    console.log(i)
    readTextFile();
})