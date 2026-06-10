let nama = "fatwa";
let nim = "240250505020";
let nilai = 80;
let bonus = 20;
let lulus = "selamat anda lulus";



function pengecekan() {
    console.log(`nama : ${nama}`);
    console.log(`nim : ${nim}`);
    console.log(`nilai : ${nilai}`);
    console.log(`bonus ${bonus}`);

    if (nilai >= 80) {
        console.log + "A";
    }
    if (nilai >= 70) {
        console.log("B");
    } else {
        console.log("C");
    }

    total = bonus + nilai;

    if (total >= 80) {
        console.log + "A+";
    }
    if (total >= 70) {
        console.log("B+");
    } else {
        console.log("C+");
    }

    if (total >= 80) {
        console.log(lulus);
    } else if (total >= 69) {
        console.log("anda tidak lulus ");
    } else {
        console.log("eror dan tidak lulus");
    }

    return total;
}

function pengawas() {
    let pengawas = pengecekan();
    let apakah_menyontek = false;

    if ( apakah_menyontek === false) {
        console.log(`pengawas mengatakan dengan nama ${nama} di nyatakan ${lulus}`);
        return;
    } else {
        console.log("pengawas mengatakan anda tidak lulus");
        return;
    }

    return;
}


function cekAhir() {


    let StatusAhir = pengawas();



    console.log("ahir apakah anda lulus atau tidak ",+StatusAhir)

    let Mahasiswa = {
        Nama: nama,
        Nim: nim,
        Nilai: nilai,
        Bonus: bonus,
        Lulus: lulus
    };

    console.log(Mahasiswa);

  

    
}


pengecekan();
pengawas();
cekAhir();
