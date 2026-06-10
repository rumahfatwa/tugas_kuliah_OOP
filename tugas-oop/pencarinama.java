import java.util.Scanner;

public class pencarinama {
    public static void main(String[] args) {

        String[] daftarnama = { "AYU", "SISI" };
        Scanner input = new Scanner(System.in);

        System.out.print("Masukkan nama yang dicari: ");
        String pencari = input.nextLine();

        boolean ditemukan = false;

        for (String nama : daftarnama) {
            if (nama.equalsIgnoreCase(pencari)) {
                System.out.println("Nama ditemukan: " + nama.toUpperCase());
                ditemukan = true;
                break;
            }
        }

        if (!ditemukan) {
            System.out.println("Nama tidak ditemukan di dalam daftar.");
        }

        input.close();
    }
}