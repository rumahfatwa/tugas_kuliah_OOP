const identitas = [
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

identitas.forEach((nomor,nomo) => {
    console.log(nomo + 1);
    console.log(nomor.nama);
    perhitungan_nilai(nomor.semester, nomor.ipk);
    pernyataan(nomor.nama, nomor.nim, nomor.universitas, nomor.kesukaan_matkul);
})