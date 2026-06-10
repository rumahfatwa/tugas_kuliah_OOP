public class Mahasiswa3 {
    private String nama;
    private String nim;
    private double nilai;

    // Constructor
    public Mahasiswa3(String nama, String nim, double nilai) {
        this.nama = nama;
        this.nim = nim;
        this.nilai = nilai;
        System.out.println("Constructor: Objek " + nama + " berhasil dibuat.");
    }

    public void tampilkanData() {
        System.out.println("Nama  : " + nama);
        System.out.println("NIM   : " + nim);
        System.out.println("Nilai : " + nilai);
    }

    public String Grade() {
        if (nilai >= 100) {
            return "A+";
        } else if (nilai >= 89) {
            return "A";
        } else if (nilai >= 70) {
            return "B";
        } else if (nilai >= 60) {
            return "C";
        } else {
            return "D";
        }
    }

    // MENGUBAH CEK LULUS: Menjadi 4 Opsi (Sangat Baik, Baik, Cukup, Tidak Lulus)
    public String cekStatusKelulusan() {
        if (nilai >= 100) {
            return "SUPER BGTTTTTTT WEEE";
        }else if(nilai >= 90){
           return "sangat baik";
        } else if (nilai >= 80) {
            return "Baik";
        } else if (nilai >= 70) {
            return "Cukup";
        } else {
            return "Tidak Lulus";
        }
    }

    @Override
    @SuppressWarnings("deprecation")
    protected void finalize() throws Throwable {
        try {
            System.out.println("Finalizer: Memori objek " + nama + " telah dibersihkan.");
        } finally {
            super.finalize();
        }
    }
}

// Class Main diletakkan di luar class Mahasiswa3 (tanpa kata public)
class Main {
    public static void main(String[] args) {
        System.out.println("=== PROGRAM DATA MAHASISWA ===\n");

        // OBJEK 1
        Mahasiswa3 mhs1 = new Mahasiswa3("Noval", "202601001", 88.5);
        mhs1.tampilkanData();
        System.out.println("Grade : " + mhs1.Grade());
        System.out.println("Status : " + mhs1.cekStatusKelulusan());
        System.out.println("-----------------------------");

        // OBJEK 2 (TAMBAHAN 1)
        Mahasiswa3 mhs2 = new Mahasiswa3("Fatwa", "202601002", 100.0);
        mhs2.tampilkanData();
        System.out.println("Grade : " + mhs2.Grade());
        System.out.println("Status : " + mhs2.cekStatusKelulusan());
        System.out.println("-----------------------------");

        // OBJEK 3 (TAMBAHAN 2)
        Mahasiswa3 mhs3 = new Mahasiswa3("Budi", "202601003", 45.0);
        mhs3.tampilkanData();
        System.out.println("Grade: " + mhs3.Grade());
        System.out.println("Status : " + mhs3.cekStatusKelulusan());
        System.out.println("-----------------------------");

        System.out.println();

        Mahasiswa3 mhs4 = new Mahasiswa3("sifa", "202601001", 92.5);
        mhs4.tampilkanData();
        System.out.println("Nilai : " + mhs4.Grade());
        System.out.println("Grade : " + mhs4.cekStatusKelulusan());
        System.out.println("-----------------------------");


        // Menghapus referensi agar Garbage Collector bisa bekerja
        mhs1 = null;
        mhs2 = null;
        mhs3 = null;
        mhs4 = null;

        System.gc(); // Memanggil Garbage Collector

        System.out.println("Program selesai.");
    }
}