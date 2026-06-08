import java.sql.*;

public class StudentDAO{
    Connection con;

    StudentDAO() throws Exception{
        con=DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/studentdb",
                "root",
                "password"
        );
    }

    void insertStudent(int id,String name) throws Exception{
        String sql="INSERT INTO students VALUES(?,?)";

        PreparedStatement ps=con.prepareStatement(sql);

        ps.setInt(1,id);
        ps.setString(2,name);

        ps.executeUpdate();
    }

    void updateStudent(int id,String name) throws Exception{
        String sql="UPDATE students SET name=? WHERE id=?";

        PreparedStatement ps=con.prepareStatement(sql);

        ps.setString(1,name);
        ps.setInt(2,id);

        ps.executeUpdate();
    }

    public static void main(String[] args) throws Exception{
        StudentDAO dao=new StudentDAO();

        dao.insertStudent(101,"John");

        dao.updateStudent(101,"John Smith");

        System.out.println("Operation Successful");
    }
}