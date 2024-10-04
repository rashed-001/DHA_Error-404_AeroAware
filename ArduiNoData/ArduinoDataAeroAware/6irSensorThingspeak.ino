#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ThingSpeak.h>

const char* ssid = "YourWiFiSSID";      // Replace with your WiFi network name
const char* password = "YourWiFiPass";  // Replace with your WiFi password

const int infraredSensorPin = 2;  // Pin connected to the infrared sensor
int sensorValue = 0;  // Variable to store sensor value
int previousSensorValue = 0; // Variable to store previous sensor value

const char* thingSpeakApiKey = "YourAPIKey"; // Replace with your ThingSpeak API key
const char* thingSpeakChannel = "YourChannelID"; // Replace with your ThingSpeak channel ID

WiFiClient client;

void setup() {
  Serial.begin(115200);
  pinMode(infraredSensorPin, INPUT);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  ThingSpeak.begin(client);
}

void loop() {
  sensorValue = digitalRead(infraredSensorPin);

  if (sensorValue == HIGH && previousSensorValue == LOW) {
    Serial.println("Infrared sensor triggered!");
    sendDataToThingSpeak(1); // Send '1' to ThingSpeak indicating sensor triggered
  }

  previousSensorValue = sensorValue;
  delay(1000); // Adjust delay based on your application's needs
}

void sendDataToThingSpeak(int data) {
  ThingSpeak.setField(1, data); // Set field 1 with the sensor data

  int httpCode = ThingSpeak.writeFields(thingSpeakChannel, thingSpeakApiKey);

  if (httpCode == 200) {
    Serial.println("Data sent to ThingSpeak successfully");
  } else {
    Serial.println("Error sending data to ThingSpeak");
  }
}
