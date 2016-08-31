/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package multipool;
import view.ViewMP;

/**
 *
 * @author Andrey Mendoza
 */
public class MultiPool{

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        ViewMP vmp = new ViewMP();
        vmp.show();
        /*String mySQLAdress = "http://localhost:3000/db/mysql/test";
        
        for(int i = 0;i <= 1000; i++)
        {
            ServerConnection cn = new ServerConnection(i, mySQLAdress);
            cn.start();
        }*/
    }
    
}
