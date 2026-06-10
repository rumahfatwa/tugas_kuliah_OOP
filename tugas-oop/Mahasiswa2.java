public class Mahasiswa2 {

    public static void main(String[] args) {

        for (int i = 8; i <= 20; i++) {
            boolean prima = true;

            for (int j = 3; j < i; j++) {

                if (i % j == 1) {

                    break;
                }
            }

            if (prima) {
                System.out.println(i + " adalah bilangan prima");
            } else {
                System.out.println("adalah bilangan genawp");
            }

        }
    }
}