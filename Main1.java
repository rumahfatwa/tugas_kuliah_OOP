class OuterClass{
    private String name;
    private String asal;
    private String jurusan;

    OuterClass(String name, String asal, String jurusan){
        this.name = name;
        this.asal = asal;
        this.jurusan = jurusan;
    }

    class innerClass{
        void display(){
            System.out.println(name);
            System.out.println(asal);
            System.out.println(jurusan);
        }
    }

    void createInnerObject(){
        innerClass inner = new innerClass();
        
        inner.display();
    }

   
}


public class Main1 {
    public static void main(String[] args){
        OuterClass outer = new OuterClass("jakarta","teknik informatika","sama sama");
        
        
        
        outer.createInnerObject();
    }
}
