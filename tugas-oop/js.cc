void setup() {
  
  pinMode(8, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(11, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(13, OUTPUT);

 
  pinMode(7, INPUT_PULLUP); 
}

void loop() {
  // Cek apakah tombol ditekan
  if (digitalRead(7) == LOW) {
    
  
    digitalWrite(2, HIGH);
    delay(1000);


    digitalWrite(3, HIGH);
    delay(2000);

    // Tahap 3: Lampu 1, 2, & 3 nyala (3 detik)
    digitalWrite(4, HIGH);
    delay(3000);

    // Tahap 4: Lampu 1, 2, 3, & 4 nyala (4 detik)
    digitalWrite(5, HIGH);
    delay(4000);

    // Tahap 5: Lampu 1, 2, 3, 4, & 5 nyala (5 detik)
    digitalWrite(6, HIGH);
    delay(5000);

    // Akhir: Matikan semua lampu
    digitalWrite(2, LOW);
    digitalWrite(3, LOW);
    digitalWrite(4, LOW);
    digitalWrite(5, LOW);
    digitalWrite(6, LOW);
  }
}