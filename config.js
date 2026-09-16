// AdvancePranjal - Centralized Configuration & Data File

window.AP_CONFIG = {
  brand: {
    name: "Advance Pranjal",
    creator: "Pranjal Kalita",
    title: "Robotics & Electronics Creator",
    supportingTitle: "Computer Science Postgraduate • Robotics Educator • STEM Mentor • Technology Content Creator",
    email: "contact.to.advance@gmail.com",
    location: "Assam, India",
    education: [
      { degree: "M.Sc. Computer Science", institution: "Gauhati University" },
      { degree: "B.Sc. Computer Science", institution: "Lalit Chandra Bharali College" }
    ],
    avatar: "assets/ap_logo.jpg",
    heroBanner: "assets/official_ap_banner.jpeg"
  },
  
  stats: [
    { value: "4+ Years", label: "Robotics & STEM Education" },
    { value: "10+", label: "Schools & Institutions Reached" },
    { value: "IndiaSkills '21", label: "Mobile Robotics Winner (State/Regional)" },
    { value: "Multiple", label: "Robotics & Tech Projects Built" }
  ],

  links: {
    linktree: "https://linktr.ee/Advancepranjal",
    youtube: "https://www.youtube.com/@AdvancePranjal",
    instagram: "https://www.instagram.com/advancepranjal",
    linkedin: "https://www.linkedin.com/company/advancepranjal",
    linkedinProfile: "https://www.linkedin.com/in/pranjallkalitaa/",
    github: "https://github.com/advancepranjalofficial",
    facebook: "https://www.facebook.com/advancepranjal",
    x: "https://x.com/AdvancePranjal",
    whatsappChannel: "https://whatsapp.com/channel/0029Va9RoaQ23n3ZZ6lKrd2B",
    springStore: "https://advancepranjal.creator-spring.com/",
    spreadshop: "https://advance-pranjal.myspreadshop.com/",
    buyMeACoffee: "https://buymeacoffee.com/Advancepranjal",
    paypal: "https://www.paypal.me/advancepranjalbio"
  },

  skills: {
    programming: ["C", "C++", "Python", "Arduino C/C++", "HTML/CSS/JS"],
    hardware: ["Arduino UNO/Nano", "ESP32", "ESP8266", "Sensors & Actuators", "Embedded Systems", "IoT", "Circuit Prototyping"],
    ai: ["Generative AI", "AI-assisted Development", "AI Image Generation", "AI Video & Audio Workflows", "AI Agents", "Prompt Workflows", "Computer Vision"],
    creative: ["Canva", "PicsArt", "CapCut", "VN Editor", "DaVinci Resolve", "OBS Studio"]
  },

  achievements: [
    {
      year: "2018",
      title: "Line Follower Robotics Competition",
      venue: "Regional Science Centre, Guwahati",
      result: "3rd Position",
      description: "Designed and programmed an autonomous line-following robot using IR sensor arrays and tuned motor calibration."
    },
    {
      year: "2021",
      title: "IndiaSkills – Mobile Robotics",
      venue: "State & Regional Levels",
      result: "State 1st Position & Regional Winner",
      description: "Secured top position in state level mobile robotics, won the regional level competition, and progressed to the National Level."
    },
    {
      year: "2021",
      title: "Idea4India Innovation Challenge",
      venue: "Nationwide Challenge (Supported by Intel)",
      result: "Regional Selection",
      description: "Selected for the regional phase of the nationwide tech innovation challenge supported by Intel for hardware & IoT projects."
    },
    {
      year: "2024",
      title: "National Creator Awards",
      venue: "Bharat Mandapam, New Delhi",
      result: "Invited Creator",
      description: "Invited as a featured tech creator to the National Creator Awards ceremony at Bharat Mandapam, New Delhi."
    },
    {
      year: "2024",
      title: "Generative AI Workshop at IIT Guwahati",
      venue: "IIT Guwahati",
      result: "Keynote Trainer",
      description: "Conducted an interactive Generative AI & physical computing workshop demonstrating practical AI workflows for students."
    },
    {
      year: "Ongoing",
      title: "Robotics Competitions & STEM Workshops",
      venue: "Various Schools & Institutions across Assam",
      result: "Mentor & Educator",
      description: "Conducted hands-on robotics, Arduino, and electronics training for 10+ schools, reaching hundreds of young curious makers."
    }
  ],

  projects: [
    {
      id: "smart-home",
      title: "Smart Home Automation System",
      category: "IoT",
      description: "Wi-Fi enabled home automation hub built with ESP8266, relay modules, and cloud dashboard for remote appliance control.",
      technologies: ["ESP8266", "IoT", "C++", "Relays", "Cloud API"],
      image: "assets/electronics_workshop_class.jpg",
      github: "https://github.com/advancepranjalofficial",
      featured: true
    },
    {
      id: "uno-maker-codes",
      title: "UNO Maker Kit Code Suite",
      category: "Robotics",
      description: "Comprehensive code library, sensor drivers, motor control routines, and wiring guides for the Sparkbee UNO Maker Kit.",
      technologies: ["Arduino UNO", "C++", "Sensors", "L298N", "OLED"],
      image: "assets/robotics_competition_showcase.jpg",
      github: "https://github.com/advancepranjalofficial/UNO-Maker-Kit-Codes",
      featured: true
    },
    {
      id: "krishiscan",
      title: "KrishiScan - AI Plant Disease Detector",
      category: "AI",
      description: "AI-powered crop health scanner utilizing computer vision models to identify leaf diseases and recommend solutions.",
      technologies: ["Python", "Computer Vision", "TensorFlow", "OpenCV"],
      image: "assets/iit_guwahati_session.jpg",
      github: "https://github.com/advancepranjalofficial",
      featured: true
    },
    {
      id: "line-follower",
      title: "Autonomous Line Follower Robot",
      category: "Robotics",
      description: "High-precision line tracking robot with PID control logic, dual IR sensor array, and high-speed DC gear motors.",
      technologies: ["Arduino", "PID Algorithm", "IR Sensors", "Motor Driver"],
      image: "assets/robotics_competition_showcase.jpg",
      github: "https://github.com/advancepranjalofficial",
      featured: true
    },
    {
      id: "bluetooth-car",
      title: "Bluetooth RC Obstacle Car",
      category: "Robotics",
      description: "Smartphone-controlled robotics vehicle with HC-05 Bluetooth module and ultrasonic obstacle avoidance backup mode.",
      technologies: ["Arduino", "HC-05", "HC-SR04", "Motor Chassis"],
      image: "assets/electronics_workshop_class.jpg",
      github: "https://github.com/advancepranjalofficial",
      featured: false
    },
    {
      id: "smart-dustbin",
      title: "Contactless Smart Touchless Dustbin",
      category: "Electronics",
      description: "Automated waste bin using ultrasonic distance sensing and servo motor lid activation for hygienic touchless operation.",
      technologies: ["Arduino", "HC-SR04", "SG90 Servo", "C++"],
      image: "assets/electronics_workshop_class.jpg",
      github: "https://github.com/advancepranjalofficial",
      featured: false
    },
    {
      id: "flood-alert",
      title: "IoT Flood Detection & Early Alert System",
      category: "IoT",
      description: "Real-time water level monitor with GSM/Blynk cloud notifications for early flood warnings in vulnerable zones.",
      technologies: ["ESP32", "Water Level Sensor", "Blynk", "GSM Module"],
      image: "assets/iit_guwahati_session.jpg",
      github: "https://github.com/advancepranjalofficial",
      featured: false
    },
    {
      id: "greedy-algo",
      title: "Algorithm Optimization & Snippets",
      category: "Software",
      description: "Collection of clean competitive programming algorithm implementations, greedy approach solutions, and data structures.",
      technologies: ["C++", "Data Structures", "Algorithms"],
      image: "assets/iit_guwahati_session.jpg",
      github: "https://github.com/advancepranjalofficial/greedyAlgo",
      featured: false
    }
  ],

  sensorLibrary: [
    {
      id: "dht11",
      name: "DHT11 Temperature & Humidity Sensor",
      category: "Environmental",
      desc: "Digital temperature and humidity sensor with pre-calibrated capacitive sensor element and single-bus communication.",
      specs: "3.3V-5V DC | Temp: 0-50°C (±2°C) | Humidity: 20-90% (±5%)",
      codeSnippet: `int readTemp() { return dht.readTemperature(); }`
    },
    {
      id: "hc-sr04",
      name: "HC-SR04 Ultrasonic Ranging Module",
      category: "Distance",
      desc: "Non-contact ultrasonic sensor measuring distance from 2cm to 400cm using 40kHz acoustic sonar bursts.",
      specs: "5V DC | 2cm - 400cm Range | 15° Measuring Angle",
      codeSnippet: `float distance = pulseIn(echoPin, HIGH) * 0.034 / 2;`
    },
    {
      id: "pir-sensor",
      name: "PIR Motion Detection Sensor",
      category: "Security",
      desc: "Passive infrared sensor detecting infrared thermal radiation emitted by moving humans or animals.",
      specs: "5V-12V DC | Up to 7m Range | Adjustable Delay & Sensitivity",
      codeSnippet: `int motionState = digitalRead(pirPin);`
    },
    {
      id: "ir-sensor",
      name: "Infrared Proximity & Line Sensor",
      category: "Optical",
      desc: "IR transmitter and photodiode receiver module used for obstacle detection and black/white line tracking.",
      specs: "3.3V-5V DC | 2cm - 30cm Range | Digital & Analog Output",
      codeSnippet: `int lineDetected = digitalRead(irSensorPin);`
    },
    {
      id: "ldr-module",
      name: "LDR Photoresistor Light Sensor",
      category: "Optical",
      desc: "Light Dependent Resistor whose electrical resistance decreases as ambient light intensity increases.",
      specs: "3.3V-5V DC | Spectral Peak: 540nm | Analog Output",
      codeSnippet: `int lightLevel = analogRead(ldrPin);`
    },
    {
      id: "mq2-gas",
      name: "MQ-2 Smoke & Flammable Gas Sensor",
      category: "Gas & Air Quality",
      desc: "Electrochemical sensor detecting LPG, Smoke, Alcohol, Propane, Hydrogen, and Methane gas concentrations.",
      specs: "5V DC | SnO2 Sensitive Layer | Analog & Digital Comparator",
      codeSnippet: `int gasLevel = analogRead(mq2Pin);`
    },
    {
      id: "servo-sg90",
      name: "SG90 9g Micro Servo Motor",
      category: "Actuator",
      desc: "Lightweight 180-degree rotational servo motor used for precision mechanical movements, robotics arms, and lids.",
      specs: "4.8V DC | Torque: 1.8 kgf·cm | 180° Rotation",
      codeSnippet: `myservo.write(90); // Move to 90 degrees`
    },
    {
      id: "l298n-driver",
      name: "L298N Dual H-Bridge Motor Driver Module",
      category: "Power & Control",
      desc: "High-power H-Bridge driver module capable of driving two DC motors or one 4-wire two-phase stepper motor.",
      specs: "5V-35V Motor Voltage | Peak Current: 2A per bridge",
      codeSnippet: `digitalWrite(in1, HIGH); analogWrite(ena, 200);`
    }
  ],

  learnArticles: [
    {
      id: "ldr-guide",
      title: "How Does an LDR Photoresistor Sensor Work?",
      difficulty: "Beginner",
      category: "Electronics",
      readTime: "5 min read",
      summary: "Understand light-dependent resistors, photoconductivity principles, voltage divider circuits, and how to build an automatic dark-detecting LED light with Arduino.",
      components: ["Arduino UNO", "LDR Sensor", "10kΩ Resistor", "LED", "Breadboard & Jumpers"],
      circuitText: "Connect one leg of LDR to 5V, other leg to A0 and a 10kΩ pull-down resistor to GND. Connect LED to Pin 13.",
      codeSnippet: `void setup() { pinMode(13, OUTPUT); }
void loop() {
  if (analogRead(A0) < 300) digitalWrite(13, HIGH);
  else digitalWrite(13, LOW);
}`
    },
    {
      id: "line-follower-guide",
      title: "Building an Autonomous Line Follower Robot",
      difficulty: "Intermediate",
      category: "Robotics",
      readTime: "8 min read",
      summary: "Step-by-step guide to building a 2-wheel drive line tracking robot using dual IR sensors, L298N motor driver, and differential steering logic.",
      components: ["Arduino UNO", "2x IR Sensors", "L298N Motor Driver", "2x DC Gear Motors", "2WD Chassis & Battery"],
      circuitText: "Connect Left IR to Pin 2, Right IR to Pin 3. Connect L298N IN1-IN4 to Pins 4,5,6,7.",
      codeSnippet: `void loop() {
  int left = digitalRead(2);
  int right = digitalRead(3);
  if (left == LOW && right == LOW) moveForward();
  else if (left == HIGH) turnLeft();
  else if (right == HIGH) turnRight();
}`
    },
    {
      id: "esp8266-wifi-iot",
      title: "Getting Started with ESP8266 NodeMCU & IoT",
      difficulty: "Intermediate",
      category: "ESP32 / ESP8266",
      readTime: "7 min read",
      summary: "Learn how to connect NodeMCU ESP8266 to Wi-Fi networks, host a local web server, and toggle relays remotely from any web browser.",
      components: ["ESP8266 NodeMCU", "5V Relay Module", "USB Cable", "Breadboard"],
      circuitText: "Connect Relay Control Pin to NodeMCU D1 (GPIO5). Connect VCC to 3.3V/5V and GND to GND.",
      codeSnippet: `#include <ESP8266WiFi.h>
const char* ssid = "YOUR_WIFI";
const char* password = "YOUR_PASSWORD";
void setup() { WiFi.begin(ssid, password); }`
    },
    {
      id: "generative-ai-physical-computing",
      title: "Generative AI Workflows for Embedded Systems & Robotics",
      difficulty: "Advanced",
      category: "AI",
      readTime: "10 min read",
      summary: "Insights from the IIT Guwahati workshop: utilizing AI agents and LLMs to generate Arduino C++ drivers, debug hardware code, and automate circuit schematic drafting.",
      components: ["Arduino/ESP32", "Generative AI Prompts", "VS Code PlatformIO", "Serial Monitor"],
      circuitText: "Connect microcontroller via Serial USB to PC running Python AI agent bridge.",
      codeSnippet: `// Prompt AI Agent: "Generate optimized ESP32 PWM motor ramp algorithm"
void rampSpeed(int targetSpeed) { ... }`
    }
  ]
};
