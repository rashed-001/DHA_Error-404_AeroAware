const int ldrPin = 34; // LDR connected to pin 34

// Define the minimum and maximum lux readings from the lux meter
const int minLux = 10; // Replace this value with your minimum lux reading
const int maxLux = 1000; // Replace this value with your maximum lux reading

void setup() {
  Serial.begin(9600);
}

int readLDR() {
  int ldrValue = analogRead(ldrPin);
  return ldrValue;
}

int calculateLightLevel(int ldrValue) {
  int difference = abs(ldrValue - 4095); // Calculate the absolute difference from max value
  int mappedValue = map(difference, 0, 4095, 0, 100); // Map the value to a range of 0-100
  
  // Map the light level to the lux range
  int lowerLevel = map(0, 0, 100, minLux, maxLux);
  int higherLevel = map(100, 0, 100, minLux, maxLux);

  int adjustedLevel = map(mappedValue, 0, 100, lowerLevel, higherLevel);
  return adjustedLevel;
}

void loop() {
  int ldrValue = readLDR(); // Read the LDR value
  int lightLevel = calculateLightLevel(ldrValue); // Calculate light level

  Serial.print("LDR Value: ");
  Serial.print(ldrValue);
  Serial.print("  Light Level (Lux): ");
  Serial.println(lightLevel);

  delay(1000); // Delay for stability, adjust as needed
}
