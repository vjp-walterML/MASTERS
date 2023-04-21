import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class Prueba {

    public static void main(String[] args) throws IOException {
        File directorio = new File("C:\\Users\\Walter\\Desktop\\PRUEBAJEJE");
        File archivoPrueba = new File(directorio, "prueba.txt");
        if (!directorio.exists()) {
            directorio.mkdir();
        } else {
            System.out.println("El directorio existe, voy a proceder a crear el documento de texto...");
        }

        if(!archivoPrueba.exists()){
            archivoPrueba.createNewFile();
            System.out.println("Archivo creado con exito.");
        } else{
            System.out.println("El archivo ya existia.");
        }

        FileWriter fw = new FileWriter(archivoPrueba);
        PrintWriter pw = new PrintWriter(fw);

        pw.println("HOLA ESTOY ESCRIBIENDO");

        pw.close();
        fw.close();
    }
}
