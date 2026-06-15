const identitas = [
  {
    nama: "fatwa",
    nim: 240250502040,
    universitas: "tomakakaka",
    kesukaan_matkul: "pemograman mobile",
    semester: 4,
    ipk: 3.6,
    akurasi:{
       tinggi_badan: 170,
       bb : 60,
       rekor_lari : 3000
    }
  },

  {
    nama: "fatwa",
    nim: 240250502040,
    universitas: "tomakakaka",
    kesukaan_matkul: "pemograman mobile",
    semester: 4,
    ipk: 3.6,
  },

  {
    nama: "fatwa",
    nim: 240250502040,
    universitas: "tomakakaka",
    kesukaan_matkul: "pemograman mobile",
    semester: 4,
    ipk: 3.6,
    

  },

];

function pernyataan(nama, universitas, kesukaan_matkul,nim) {
  console.log(`halo selamat datang di daerah kami ${nama}`);

  if (universitas === "tomakaka") {
    console.log("wow  kamu berkuliah di mamuju yahh mantap sekali");
  } else {
    console.log("aku gak tau kamu kuliah dimana heheh");
  }

  if (nim === "240250502040") {
    console.log("mantap ya");
  }

  if (kesukaan_matkul === "pemoggraman mobile") {
    console.log("ibu muna itu lagi hahahha");
  }

  return;
}

function perhitungan_nilai(semester, ipk) {
  const lulus = 8;

  const total = lulus - semester;

  console.log("sebentar lagi lulus " + total);

  if (total > 0) {
    console.log(lulus + "sebentar lagi kamu lulus");
  } else {
    console.log("sudah lulus");
  }

  if (ipk >= 400) {
    console.log("mantap lah");
  } else {
    console.log("nice");
  }

  return;
}



function akurasilari(akurasi,nama){
  let poin_tinggi = 0;
  let poin_bb = 0;


  if(akurasi.tinggi_badan >= 180  && akurasi.bb >= 75){
  console.log("wow sangat tinggi sekali and bb cukup baik")
  poin_tinggi = 40
  poin_bb = 40;

}else if( akurasi.tinggi_badan >= 170 && akurasi.bb >= 50){
  console.log("ideal normal tinggi badan anda " + nama)
  poin_tinggi= 40;
  poin_bb = 35;
}else{
  console.log("anda pendek bgt hahaha dan tidak ada nilai")
  
}


const total = poin_tinggi + poin_bb;
console.log(total)


return;

}







identitas.forEach((nomor,nomo) => {
    console.log(nomo + 1);
    console.log(nomor.nama);
    perhitungan_nilai(nomor.semester, nomor.ipk);
    pernyataan(nomor.nama, nomor.nim, nomor.universitas, nomor.kesukaan_matkul);
    akurasilari(nomor.akurasi,nomor.nama,nomor.bb)
    
})


