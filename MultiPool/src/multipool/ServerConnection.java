/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package multipool;

import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.MalformedURLException;
import java.net.Socket;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;

/**
 *
 * @author Andrey Mendoza
 */
public class ServerConnection extends Thread{
    
    private int threadID;   // Identificador del thread
    private String Adress;  // Direccion URL del servidor
    private Thread t;     
    
    public ServerConnection(int threadID, String Adress) {
        this.threadID = threadID;
        this.Adress = Adress;
    }
    
    
    // Primer metodo de conexion
    public void connect()
    {
        try
        {
            URL myURL = new URL(Adress);
            HttpURLConnection cn = (HttpURLConnection)myURL.openConnection();
            cn.connect();
            System.out.println("Conexión realizada. Codigo: " + cn.getResponseCode());
           
        }
        catch (MalformedURLException  e)
        {
            System.out.println("Thread " + threadID + " --> Error: " + e.getMessage());
        }
        catch (IOException e)
        {
            System.out.println("Thread " + threadID + " --> Error: " + e.getMessage());
        }
    }

    
    @Override
    public void run()
    {
        try
        {
            Thread.sleep(1000);
            connect();
        }
        catch (Exception e)
        {
            System.out.println("Error iniciando thread");
        }
    }
    
    @Override
    public void start()
    {
        t = new Thread(this);
        t.start();
    }
    
    
}
