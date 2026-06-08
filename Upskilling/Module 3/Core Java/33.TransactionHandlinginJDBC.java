import java.sql.*;

public class TransactionDemo{
    public static void main(String[] args){
        try{
            Connection con=DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/bankdb",
                    "root",
                    "password"
            );

            con.setAutoCommit(false);

            Statement st=con.createStatement();

            st.executeUpdate(
                    "UPDATE accounts SET balance=balance-1000 WHERE id=1"
            );

            st.executeUpdate(
                    "UPDATE accounts SET balance=balance+1000 WHERE id=2"
            );

            con.commit();

            System.out.println("Transaction Successful");

        }catch(Exception e){
            e.printStackTrace();
        }
    }
}