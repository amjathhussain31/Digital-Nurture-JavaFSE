public class TypeCastingDemo{
    public static void main(String[] args){
        int num=100;
        double d=num;
        System.out.println("Implicit Casting:");
        System.out.println("Int Value: "+num);
        System.out.println("Double Value: "+d);

        double price=99.99;
        int amount=(int)price;
        System.out.println("\nExplicit Casting:");
        System.out.println("Double Value: "+price);
        System.out.println("Int Value: "+amount);
    }
}