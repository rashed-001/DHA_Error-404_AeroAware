//Board selection and libraries
#include <Arduino.h>
#if defined(ESP32)
  #include <WiFi.h>
#elif defined(ESP8266)
  #include <ESP8266WiFi.h>
#endif

//Insert Library (if any)
#include "ClosedCube_HDC1080.h"
#include <Wire.h>
//Create instances for using library
ClosedCube_HDC1080 hdc1080;

void setup() {
  Serial.begin(115200);  // Initialize serial
  Wire.begin();
  hdc1080.begin(0x40);

  Serial.print("Manufacturer ID=0x");
  Serial.println(hdc1080.readManufacturerId(), HEX); // 0x5449 ID of Texas Instruments
  Serial.print("Device ID=0x");
  Serial.println(hdc1080.readDeviceId(), HEX); // 0x1050 ID of the device 
}

void loop() {

  // change the values
  float t = hdc1080.readTemperature();
  float h = hdc1080.readHumidity();
  if (isnan(t) || isnan(h))

  {
    Serial.println("Failed to read from HTU21 sensor!");
    return;
  }

  Serial.print("Temperature: ");
  Serial.print(t);
  Serial.print(" degrees Celsius, Humidity (%): ");
  Serial.print(h);
  Serial.println("Sending data to Thingspeak");

  delay(1000); // Wait 15 seconds
}
