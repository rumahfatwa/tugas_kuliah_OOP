
class Kucing {
    String meong;
    
  
    public Kucing(String meong) {
        this.meong = meong;
    }


    public void mencetakIsi() {
        System.out.println("Suara kucing: " + meong);
    }
}


public class Mahasiswa{
    public static void main(String[] args) {
   
        Kucing kucing1 = new Kucing("Meooonggg~");

      
        kucing1.mencetakIsi();
    }
}