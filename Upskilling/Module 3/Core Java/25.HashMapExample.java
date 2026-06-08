import java.util.HashMap;
import java.util.Scanner;

public class HashMapExample{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        HashMap<Integer,String> students=new HashMap<>();

        students.put(101,"John");
        students.put(102,"Alice");
        students.put(103,"Bob");

        System.out.print("Enter Student ID: ");
        int id=sc.nextInt();

        System.out.println("Name: "+students.get(id));

        sc.close();
    }
}