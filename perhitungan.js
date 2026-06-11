
const peserta = [
    {
        nama: "fatwa",
        askot:"mamuju",
        wajib:"ya",
        pendidikan: "kuliah",
        tinggi_badan: 175,
        bb: 49,
        latihan_fisik: 70,
        nilai : {kewarganegaraan: 80,
        mtk: 60,
        agama: 80,
        piskologi: 40,}
        
    },

     {
    nama: "fatwa",
        askot:"mamuju",
        wajib:"ya",
        pendidikan: "kuliah",
        tinggi_badan: 160,
        bb: 49,
        latihan_fisik: 70,
        nilai :{
            kewarganegaraan: 80,
        mtk: 60,
        agama: 80,
        piskologi: 40,
        }
    },
         {
    nama: "fatwa",
        askot:"mamuju",
        wajib:"ya",
        pendidikan: "kuliah",
        tinggi_badan:180,
        bb: 49,
          latihan_fisik: 70,
        nilai :{
       
        kewarganegaraan: 80,
        mtk: 60,
        agama: 80,
        piskologi: 40,
        }
       
    }
];




let poin = 0;



const perhitungan = (nama,askot,penddikan,tinggi_badan,bb,latihan_fisik,wajib) => {

    const pendidikan = penddikan;


    console.log("selamat datang" + nama)
    console.log("selamat datang " + askot);


    if (latihan_fisik === 80) {
        console.log(`nilai ${nama} adalah 80`)
    }


    if (wajib === 20) {
        console.log("sangat wajib ")
    }


    if (pendidikan === "kuliah") {
        console.log("kamu mahasiswa ya,selamat berguru ya")
    } else if (pendidikan === "sekolah") {
        console.log("selamat berpendidikan adek sekolah nya")
    } else {
        console.log("tidak terdaftar di salah satu base")
    }


    if (tinggi_badan >= 180 && bb >= 70) {
        console.log("cukup tinggi ya dan berat badan normal");
        poin = 80
    } else if (tinggi_badan >= 170 && bb >= 60) {
        console.log("dalam tahap normal ya dan bb ideal" + nama)
        poin = 70;
    } else if (tinggi_badan >= 160 && bb >= 40) {
        poin = 80;
        console.log("cukup pas sedikit kurus")
    } else {
        console.log("pas")
        poin = 60;
    }


    return poin;

}


const nilai_total = (nilai) => {

    const rata = nilai.mtk + nilai.kewarganegaraan + nilai.piskologi + nilai.agama + nilai.poin / 5;



    const total_nilai = rata;


    console.log("rata:" + rata)
    console.log("Total:" + total_nilai)


    console.log("menghitung rata rata nilai");

    if (nilai >= 600) {
        console.log("kamu adalah superstars");
    } else if (nilai >= 400) {
        console.log("mantap")
    } else if (nilai >= 500) {
        console.log("bagus")
    } else if (nilai >= 200 || nilai >= 100) {
        console.log("biasa")
    } else {
        console.log("sangat rendah");
    }


    if (nilai >= 300) {
        console.log("lulus");
    } else if (nilai >= 200) {
        console.log("lulus bersyarat")

    } else {
        console.log("tidak lulus")
    }

    return;

}


peserta.forEach((p)=>{
    console.log("\n------" +p.nama.toUpperCase() +"----------");
  const hasilPoin = perhitungan(
    p.nama,
    p.askot,
    p.pendidikan,
    p.tinggi_badan,
    p.bb,
    p.latihan_fisik,
    p.wajib
  );

  nilai_total({
    ...p.nilai,
    poin: hasilPoin
  });
});

 

