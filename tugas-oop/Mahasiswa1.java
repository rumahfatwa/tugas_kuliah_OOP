public class Mahasiswa1 {
    private String nama;
    private int nilai;
    private String kelas;
    private String statusLulus;
    private String bonus;
    private int bolos;

    public Mahasiswa1(String nama, int nilai, String kelas, Integer bolos) {
        this.nama = nama;
        this.nilai = nilai;
        this.kelas = kelas;
        this.bolos = bolos;
        setLogikaKelulusan();
        pengecekanSiswaBolos();
    }

    private void setLogikaKelulusan() {

        if (this.nilai >= 75) {
            this.statusLulus = "Lulus";
        } else {
            this.statusLulus = "Tidak Lulus";
        }

        if (this.nilai > 90) {
            this.bonus = "Beasiswa";
        } else if (this.nilai >= 75) {
            this.bonus = "Sertifikat";
        } else {
            this.bonus = "Tidak Ada";
        }

    }

    private void pengecekanSiswaBolos() {
        if (this.bolos > 5) {
            this.nilai = this.nilai - 10;
            System.out.println("peringan Nilai " + nama + "dikurangin ");
        }
    }

    public void tampilkanData() {
        // Menggunakan println biasa tanpa format tabel/printf
        System.out.println("Nama: " + nama);
        System.out.println("Nilai: " + nilai);
        System.out.println("Kelas: " + kelas);
        System.out.println("Status: " + statusLulus);
        System.out.println("Bonus: " + bonus);
        System.out.println("-----------------------");
    }
}