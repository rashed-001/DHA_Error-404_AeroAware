#include <WiFi.h>
#include "ThingSpeak.h"
#define Threshold 400
#define MQ2pin 35
#define ON_Board_LED 2//--> Defining an On Board LED

//WiFi Data/ Information
#define SECRET_SSID "USERNAME"    // replace MySSID with your WiFi network name
#define SECRET_PASS "PASSWORD"  // replace MyPassword with your WiFi password
#define SECRET_CH_ID CHANNELID     // replace 0000000 with your channel number
#define SECRET_WRITE_APIKEY "APIWRITEKEY"   // replace XYZ with your channel write API Key

float sensorValue;  //variable to store sensor value

//WiFi Setting
char ssid[] = SECRET_SSID;   // your network SSID (name)
char pass[] = SECRET_PASS;   // your network password
int keyIndex = 0;            // your network key Index number (needed only for WEP)
WiFiClient  client;
unsigned long myChannelNumber = SECRET_CH_ID;
const char * myWriteAPIKey = SECRET_WRITE_APIKEY;

// Initialize our values
String myStatus = "";

void setup() {
  Serial.begin(115200); // sets the serial port to 9600

  //WiFi
  while (!Serial) {
    ; // wait for serial port to connect. Needed for Leonardo native USB port only
  }

  WiFi.mode(WIFI_STA);
  ThingSpeak.begin(client);  // Initialize ThingSpeak

  //Sensor
  Serial.println("MQ2 warming up!");
  delay(20000); // allow the MQ2 to warm up
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

  // Sensor
  sensorValue = analogRead(MQ2pin); // read analog input pin 0
  Serial.print("Sensor Value: ");
  Serial.print(sensorValue);
  if (sensorValue > Threshold)
  {
    Serial.print(" | Smoke detected!");
  }
  Serial.println("");

  // Send Data - set the fields with the values
  ThingSpeak.setField(1, sensorValue);

  // set the status
  ThingSpeak.setStatus(myStatus);

  // write to the ThingSpeak channel
  int x = ThingSpeak.writeFields(myChannelNumber, myWriteAPIKey);
  if (x == 200) {
    Serial.println("Channel update successful.");
  }
  else {
    Serial.println("Problem updating channel. HTTP error code " + String(x));
  }
delay(15000);
}
