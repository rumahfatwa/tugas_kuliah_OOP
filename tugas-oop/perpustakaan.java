public class perpustakaan {
    String judul;
    String nama_penulis;
    String nama_penerbit;
    int tahun_terbit;
    String genre_kategori;
    String garis;


    void tampilkandata(int nomor) {
        System.out.println();
        System.out.println("Buku Ke :"+ nomor);
        System.out.println("===================");
        System.out.println("Judul:" + judul);
        System.out.println("Nama Penulis :" + nama_penulis);
        System.out.println("Nama Penerbit :" + nama_penerbit);
        System.out.println("Tahun Penerbit:" + tahun_terbit);
        System.out.println("Genre/Kategori :"  + genre_kategori);
        

    }


    public static void main(String[] args){
        perpustakaan buku1 = new perpustakaan();
        buku1.judul = "komputer intelektual";
        buku1.nama_penerbit = "sikara";
        buku1.nama_penulis = "kisomoto paradeks";
        buku1.tahun_terbit = 2009;
        buku1.genre_kategori= "informasi";


        perpustakaan buku2 = new perpustakaan();
        buku2.judul = "Arsitektur Perangkat Lunak Modrn";
        buku2.nama_penulis = "Budi Raharjo";
        buku2.nama_penerbit = "Informatika Bandung";
        buku2.tahun_terbit = 2004;
        buku2.genre_kategori = "Teknologi";


        perpustakaan buku3 = new perpustakaan();
        buku3.judul = "Dasar Dasar Pemograman Pemograman Java";
        buku3.nama_penulis = "Abdul Kadir";
        buku3.nama_penerbit = "Andi Ofset";
        buku3.tahun_terbit = 2023;
        buku3.genre_kategori = "Teknologi";


        perpustakaan buku4 = new perpustakaan();
        buku4.judul = "Dasar Dasar Pemograman Pemograman Java";
        buku4.nama_penulis = "Abdul Kadir";
        buku4.nama_penerbit = "Andi Ofset";
        buku4.tahun_terbit = 2023;
        buku4.genre_kategori = "Teknologi";

        perpustakaan buku5 = new perpustakaan();
        buku5.judul = "Filosofi Teras";
        buku5.nama_penulis = "Henry Menampiring";
        buku5.nama_penerbit = "kompas";
        buku5.tahun_terbit = 2016;
        buku5.genre_kategori = "Pengembangan Diri";


        buku1.tampilkandata(1);
        buku2.tampilkandata(2);
        buku3.tampilkandata(3);
        buku4.tampilkandata(4);
        buku5.tampilkandata(5);
        }

        

}
