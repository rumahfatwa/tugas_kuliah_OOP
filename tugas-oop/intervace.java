interface hewan{
    void sound();

    void eat();



    default void sleep(){
        System.out.println("hewan sedang tidur");
    }
}


class dog implements hewan{
    @Override
    public void sound(){
        System.out.println("anjing menggongggig");
    }

    @Override
    public void eat(){
        System.out.println("anjing sedang makan");
    }



    



    

}















public class intervace {
    public static void main(String[] args){
     dog dog1 = new dog();
     dog1.sound();
     dog1.eat();
     dog1.sleep();

    }
}
