#define pinGas 34
#define pinLight 35

#include <WiFi.h>
#include "secrets.h"
#include "ThingSpeak.h" // always include thingspeak header file after other header files and custom macros

char ssid[] = SECRET_SSID;   // your network SSID (name) 
char pass[] = SECRET_PASS;   // your network password
int keyIndex = 0;            // your network key Index number (needed only for WEP)
WiFiClient  client;

unsigned long myChannelNumber = SECRET_CH_ID;
const char * myWriteAPIKey = SECRET_WRITE_APIKEY;

String myStatus = "";
int gasValue;
int lightValue;

void setup() {
  Serial.begin(115200);  //Initialize serial
  while (!Serial) {
    ; // wait for serial port to connect. Needed for Leonardo native USB port only
  }
  pinMode(pinGas, INPUT);
  pinMode(pinLight, INPUT);
  WiFi.mode(WIFI_STA);   
  ThingSpeak.begin(client);  // Initialize ThingSpeak
}

void loop() {

  // Connect or reconnect to WiFi
  if(WiFi.status() != WL_CONNECTED){
    Serial.print("Attempting to connect to SSID: ");
    Serial.println(SECRET_SSID);
    while(WiFi.status() != WL_CONNECTED){
      WiFi.begin(ssid, pass);  // Connect to WPA/WPA2 network. Change this line if using open or WEP network
      Serial.print(".");
      delay(5000);     
    } 
    Serial.println("\nConnected.");
  }

  gasValue = analogRead(pinGas);
  lightValue = analogRead(pinLight);
  Serial.print("Gas Value:");
  Serial.print(gasValue);
  Serial.print("  Light Value:");
  Serial.println(lightValue);
  
  // set the fields with the values
  ThingSpeak.setField(1, gasValue);
  ThingSpeak.setField(2, lightValue);

  // set the status
  ThingSpeak.setStatus(myStatus);
  
  // write to the ThingSpeak channel
  int x = ThingSpeak.writeFields(myChannelNumber, myWriteAPIKey);
  if(x == 200){
    Serial.println("Channel update successful.");
  }
  else{
    Serial.println("Problem updating channel. HTTP error code " + String(x));
  }
  
  delay(15000); // Wait 15 seconds to update the channel again
}
