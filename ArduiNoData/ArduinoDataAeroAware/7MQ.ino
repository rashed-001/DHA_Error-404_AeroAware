// Define your low and high thresholds for pollutant levels based on ADC values
#define pinGas A0
const int LOW_ADC_THRESHOLD = 90;   // Set your low threshold ADC value
const int HIGH_ADC_THRESHOLD = 150; // Set your high threshold ADC value //Green 120

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 115200 bits per second:
  Serial.begin(115200);
  pinMode(pinGas, INPUT);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin A0:
  int sensorValue = analogRead(pinGas);
  
  // map the sensor value from the range (0 - 4095 for ESP32) to (0 - 100)
  float percentage = map(sensorValue, 0, 4095, 0, 100);
  
  // print out the raw value and its percentage equivalent:
  Serial.print("Raw Sensor Value: ");
  Serial.print(sensorValue);
  Serial.print(", Percentage: ");
  Serial.print(percentage);
  Serial.println("%");
  
  // Check pollutant level based on thresholds
  if (sensorValue < LOW_ADC_THRESHOLD) {
    Serial.println("Low pollutant level detected!");
    // Perform actions for low pollutant level
  } else if (sensorValue > HIGH_ADC_THRESHOLD) {
    Serial.println("High pollutant level detected!");
    // Perform actions for high pollutant level
  } else {
    // Perform actions for normal pollutant level
  }

  delay(500); // delay in between reads for stability
}
