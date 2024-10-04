#include <WiFi.h>
#include "ThingSpeak.h"

#define ON_Board_LED 22 //Lolin
#define LIGHT1 27 //Lolin
#define PIN1 12

const char* ssid = "USERNAME";
const char* password = "PASSWORD";
const char* apiKey = "APIWRITEKEY"; // Replace with your ThingSpeak Write API Key

unsigned long channel = CHANNELID;
unsigned int field1 = 1;

WiFiClient client;

void setup() {
  Serial.begin(115200);
  delay(100);
  
  pinMode(ON_Board_LED, OUTPUT);
  pinMode(LIGHT1, OUTPUT);
  pinMode(PIN1, INPUT_PULLUP);
  
  digitalWrite(ON_Board_LED, HIGH);
  digitalWrite(LIGHT1, LOW);
  digitalWrite(PIN1, LOW);

  WiFi.begin(ssid, password);
  Serial.println("");
  Serial.print("Connecting");
  while (WiFi.status() != WL_CONNECTED) { 
    Serial.print(".");
    digitalWrite(ON_Board_LED, LOW);
    delay(250);
    digitalWrite(ON_Board_LED, HIGH);
    delay(250);
  }
  digitalWrite(ON_Board_LED, HIGH);
  
  Serial.println("");
  Serial.print("Successfully connected to : ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
  Serial.print("Netmask: ");
  Serial.println(WiFi.subnetMask());
  Serial.print("Gateway: ");
  Serial.println(WiFi.gatewayIP());
  
  ThingSpeak.begin(client);
}

void loop() {
  int statusCode1 = 0;
  
  int last_light_state1 = ThingSpeak.readFloatField(channel, field1);
  
  statusCode1 = ThingSpeak.getLastReadStatus();
  if(statusCode1 == 200){
    // Check if the online switch (ThingSpeak status) or the manual switch is triggered
    if(last_light_state1 == 1 || digitalRead(PIN1) == LOW){
      digitalWrite(LIGHT1, HIGH);
      Serial.println("LIGHT is On");
    } else {
      digitalWrite(LIGHT1, LOW);
      Serial.println("LIGHT is Off");
    }
  }
  else {
    Serial.println("Problem reading channel. HTTP error code " + String(statusCode1));
  }

  delay(15000);
}
