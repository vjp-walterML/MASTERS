import javax.swing.*;

public class Prueba {
    public static void main(String[] args) {
        //int num = Integer.parseInt(JOptionPane.showInputDialog("Por favor, introduzca un numero: "));
        // JOptionPane.showMessageDialog(null,String.valueOf(num));
        String curso = "PGRMC";
        String curso2 = new String("PGRMC");
        String curso3 = "PGRMC";


        System.out.println(curso==curso2);//false
        System.out.println(curso.equals(curso2));//true
        System.out.println(curso==curso3);//false
    }
}
