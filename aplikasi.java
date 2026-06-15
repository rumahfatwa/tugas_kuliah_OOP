import javax.swing.*;
import java.awt.event.*;

public class aplikasi {
    public static void main(String[] args) {
        
        JFrame frame = new JFrame("Aplikasi");

        
        JButton button = new JButton("Klik Saya");

    
        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
            
                JOptionPane.showMessageDialog(frame, "Tombol berhasil diklik!");
            }
        });

        
        frame.add(button);
        frame.setSize(300, 200); 
        frame.setLayout(new java.awt.FlowLayout()); 
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); 
        frame.setVisible(true); 
    }
}