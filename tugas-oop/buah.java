public class buah {
    String nama_buah;
    String ukuran;
    String kematangan;
    String dijual_ya_tidak;
    String keharmonisan;

    


    void mencetak(){
 
        System.out.println("============================");
        System.out.println("nama :"+  nama_buah);
        System.out.println("ukuran buah :" + ukuran);
        System.out.println("kematangan :"+ kematangan);
        System.out.println("apakah di jual :" + dijual_ya_tidak);
        System.out.println("apakah keharmonisan :" + keharmonisan);
        System.out.println();
        
    }

    public static void main(String[]args){
    buah buah1 = new buah();
    buah1.nama_buah = "apel";
    buah1.ukuran = "agak gede ";
    buah1.kematangan = "agak masak";
    buah1.dijual_ya_tidak = "di jual";
    buah1.keharmonisan = "ya keharmonisan";


    buah buah2 = new buah();
    buah2.nama_buah = "rambutan";
    buah2.ukuran = "bulat";
    buah2.kematangan = "matang sekali";
    buah2.dijual_ya_tidak = "tidak";
    buah2.keharmonisan = "tidak";


    buah buah3 = new buah();
    buah3.nama_buah ="kelapa";
    buah3.ukuran ="besar";
    buah3.kematangan = "tidak matang";
    buah3.dijual_ya_tidak = "tidak";
    buah3.keharmonisan = "tidak";



    buah buah4 = new buah();
    buah4.nama_buah = "naga";
    buah4.ukuran = "kecil";
    buah4.kematangan = "sedang";
    buah4.dijual_ya_tidak = "ya";
    buah4.keharmonisan = "harmonisan";


    buah buah5 = new buah();
    buah5.nama_buah = "pisang";
    buah5.ukuran = "panjang";
    buah5.kematangan = "sempurna";
    buah5.dijual_ya_tidak = "ya";
    buah5.keharmonisan = "harmonisan";

    
    buah1.mencetak();
    buah2.mencetak();
    buah3.mencetak();
    buah4.mencetak();
    buah5.mencetak();
    

    }


    

}
