const int ldrPin = 34; // LDR connected to pin 34

void setup() {
  Serial.begin(115200);
}

void loop() {
  int ldrValue = analogRead(ldrPin); // Read the LDR value
  int lightLevel = map(abs(ldrValue - 4095), 0, 4095, 0, 100); // Map the value to a range of 0-100

  Serial.print("Light Level: ");
  Serial.println(lightLevel);

  delay(1000); // Delay for stability, adjust as needed
}
