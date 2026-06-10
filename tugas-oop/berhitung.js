
const prompt = require('prompt-sync')();

const nama = prompt("masukkan nama anda");
const umur = prompt(Number("masukkkan umur anda"))
const asal = prompt("masukkan asal anda");
const punyabini = prompt("ya/tidak");



function cekdata(){
    console.log(`halo ${nama} selamat datang di sini`);
    

    if(umur >= 30){
        console.log("kamu terlalu tua");

    }else{
        console.log("kamu masih mudah sih");
    }


    console.log(`halo kamu terlalu jauh ${asal}`);
    
    if (punyabini == "ya"){
        console.log("kamu jangan macam macam")
    }else{
        console.log("kamu harus mencari")
    }
}

cekdata();