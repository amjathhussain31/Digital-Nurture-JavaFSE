import java.io.*;
import java.net.*;

public class TCPChatDemo{
    public static void main(String[] args){
        new Thread(() -> {
            try{
                ServerSocket server=new ServerSocket(5000);
                System.out.println("Server Started...");

                Socket socket=server.accept();

                BufferedReader br=new BufferedReader(
                        new InputStreamReader(
                                socket.getInputStream()
                        )
                );

                String message=br.readLine();

                System.out.println("Client: "+message);

                server.close();

            }catch(Exception e){
                System.out.println(e);
            }
        }).start();

        try{
            Thread.sleep(1000);

            Socket socket=new Socket("localhost",5000);

            PrintWriter pw=new PrintWriter(
                    socket.getOutputStream(),
                    true
            );

            pw.println("Hello Server");

            socket.close();

        }catch(Exception e){
            System.out.println(e);
        }
    }
}