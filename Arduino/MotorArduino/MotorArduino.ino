#include "MotorArduino.h"

int joyPin = A2;
int val = 0;
uint16_t pos = 0;

void setup() {
  Serial.begin(19200);
  delay(100);
}

void loop() {
  val = analogRead(joyPin);
  
  // Serial.println(val);
  pos = map(val, 0, 1023, 818, 511);

  uint8_t cmd = 0x1E;
  Serial.write(cmd);
  Serial.write((uint8_t*)&pos, 2);

  delay(100);
}
