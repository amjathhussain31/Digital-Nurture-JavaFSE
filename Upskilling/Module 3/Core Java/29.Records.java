import java.util.*;
import java.util.stream.*;

record Person(String name,int age){}

public class RecordsDemo{
    public static void main(String[] args){
        List<Person> people=List.of(
                new Person("John",20),
                new Person("Alice",17),
                new Person("Bob",25)
        );

        people.stream()
                .filter(p->p.age()>=18)
                .forEach(System.out::println);
    }
}