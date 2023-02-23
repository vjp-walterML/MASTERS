import javax.swing.*;
import java.awt.font.FontRenderContext;
import java.util.ArrayList;

public class Prueba {

    public static void main(String[] args) {
        /*/int num = Integer.parseInt(JOptionPane.showInputDialog("Por favor, introduzca un numero: "));
        // JOptionPane.showMessageDialog(null,String.valueOf(num));
        int a = 1;
        int b = 5;

        String resultado = 1>5?"esMayor":"esMenor";

        System.out.println(resultado);

         int numero= Integer.parseInt(JOptionPane.showInputDialog("HOLA INGRESA UN NUMERO:"));*/

        ArrayList<Character> lRuta = new ArrayList<>();
        char[] ruta = {'S', 'S', 'O', 'S'};

        // RELLENO LRUTA
        for (int i = 0; i < ruta.length; i++) {
            lRuta.add(ruta[i]);
        }
         //PRUEBA
        for (int i = 0; i < lRuta.size(); i++) {
            mostrarLruta(lRuta);
            System.out.println("----------------------------");
            lRuta.remove(0);
        }

    }

    public static void mostrarLruta(ArrayList<Character> lRuta){
        for (int i = 0; i < lRuta.size(); i++) {
            System.out.println("Pos "+i+": "+lRuta.get(i));
        }
    }
}
