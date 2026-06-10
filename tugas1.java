abstract class Hewan {
    String name;
    



    void eat(){
        System.out.println(name +"sedabg makan");
    }

    abstract void sound();

}


 class dog extends Hewan{
        dog(String name){
            this.name = name;

        }

        void sound(){
            System.out.println(name +" menggonggong");
        }
    }

    class cat1 extends Hewan{
        cat1(String name){
            this.name = name;
        }

        void sound(){
            System.out.println(name +" mengeong");
        }


    }


    class beruang extends Hewan(){
        beruang(String name){
            this.name = name;
        }

        void sound(){
            System.out.println(name+"wowowowowoo");
        }
    }

    




public class tugas1 {
    public static void main(String[] args){

        dog dog1 = new dog("dog1");
        dog1.eat();
        dog1.sound();


        cat1 cat1 = new cat1("wihskas");
        cat1.eat();
        cat1.sound();

       beruang beruang = new beruang("mau makan");
       beruang.eat();
       beruang.sound();

        
    
    }

    
}
