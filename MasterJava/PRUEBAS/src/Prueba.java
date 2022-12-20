import javax.swing.*;

public class Prueba {
    public static void main(String[] args) {
        int num = Integer.parseInt(JOptionPane.showInputDialog("Por favor, introduzca un numero: "));
        JOptionPane.showMessageDialog(null,String.valueOf(num));
    }
}
