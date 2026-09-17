// AdvancePranjal - Centralized Configuration & Data File

window.AP_CONFIG = {
  brand: {
    name: "Advance Pranjal",
    creator: "Pranjal Kalita",
    title: "Robotics Educator, Technology Creator & Computer Science Postgraduate",
    tagline: "Building, Teaching & Exploring Technology",
    subheadline: "Robotics • Electronics • Embedded Systems • IoT • AI",
    bioDescription: "Advance Pranjal is my personal technology platform where I build, teach and share Robotics, Electronics, IoT, Embedded Systems and AI.",
    aboutHeading: "Who is Pranjal?",
    aboutBio: "Pranjal Kalita is a Computer Science postgraduate (M.Sc., Gauhati University) and robotics/electronics educator based in Assam, India. Over the past 5+ years, Pranjal has combined academic computer science with physical hardware to mentor students, build innovative prototypes, and create accessible engineering content across YouTube, Instagram, and practical bootcamps.",
    email: "contact.to.advance@gmail.com",
    location: "Assam, India",
    education: [
      { 
        degree: "M.Sc. in Computer Science", 
        institution: "Gauhati University, Guwahati, Assam", 
        period: "2024 – 2026",
      },
      { 
        degree: "B.Sc. in Computer Science", 
        institution: "Lalit Chandra Bharali (LCB) College, Maligaon, Guwahati", 
        period: "2021 – 2024",
      }
    ],
    avatar: "assets/ap_logo.jpg",
    heroBanner: "assets/official_ap_banner.jpeg"
  },
  
  stats: [
    { value: "5+ Years", label: "Mentoring & STEM Workshops" },
    { value: "10+", label: "Schools & Institutions Reached" },
    { value: "50,000+", label: "YouTube Subscribers" },
    { value: "200,000+", label: "Instagram Followers" },
    { value: "IndiaSkills '21", label: "Mobile Robotics Winner (State/Regional)" }
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
    programming: ["C", "C++", "Python", "Arduino Programming", "Basic Web Development", "HTML/CSS/JS"],
    hardware: ["Arduino (UNO/Nano)", "ESP32", "ESP8266", "Sensors & Actuators", "Embedded Systems", "IoT", "Circuit Design"],
    ai: ["Generative AI", "AI-assisted Development", "AI Image Generation", "AI Video Generation", "AI Audio/Music Generation", "AI Agents", "Prompt Workflows", "Computer Vision", "Vibe Coding"],
    creative: ["Video Editing", "Canva", "PicsArt", "CapCut", "VN Editor", "DaVinci Resolve", "Adobe Premiere Pro", "OBS Studio"]
  },

  achievements: [
    {
      year: "2018",
      title: "Line Follower Robotics Competition",
      venue: "Regional Science Centre, Guwahati",
      result: "3rd Position",
      description: "Secured 3rd position by engineering an autonomous line-following robot with custom IR sensor calibration and tuned motor control."
    },
    {
      year: "2021",
      title: "IndiaSkills 2021 – Mobile Robotics",
      venue: "State, Regional & National Levels",
      result: "State 1st Position & Regional Winner",
      description: "Won 1st Position at State Level as part of a team, subsequently won at the Regional Level, and competed through the National Level."
    },
    {
      year: "2021",
      title: "IdeatForIndia Innovation Challenge",
      venue: "Nationwide Challenge (Supported by Intel)",
      result: "Regional Level Selection",
      description: "Selected for the Regional Level of a nationwide innovation challenge supported by Intel for hardware & IoT prototype solutions."
    },
    {
      year: "2024",
      title: "National Creator Awards 2024",
      venue: "Bharat Mandapam, New Delhi",
      result: "Invited Creator",
      description: "Invited as a featured tech creator to the prestigious National Creator Awards held at Bharat Mandapam, New Delhi."
    },
    {
      year: "2024",
      title: "Generative AI Workshop at IIT Guwahati",
      venue: "IIT Guwahati",
      result: "Keynote Workshop Trainer",
      description: "Conducted an interactive Generative AI and practical computing workshop exploring real-world AI tools and hardware integration."
    },
    {
      year: "2021 – Present",
      title: "Sparkbee Foundation Mentorship",
      venue: "Various Schools & Institutions",
      result: "Robotics Instructor & Technical Educator",
      description: "Mentoring students across 10+ schools and educational institutions, conducting practical robotics, Arduino, and electronics workshops."
    }
  ],

  projects: [
    {
      id: "krishiscan",
      title: "KrishiScan - AI Plant Disease Detector",
      category: "AI",
      description: "AI-powered agricultural tool using computer vision to detect plant leaf diseases and provide immediate remediation advice.",
      technologies: ["Python", "Computer Vision", "OpenCV", "AI Tools"],
      image: "assets/iit_guwahati_session.jpg",
      github: "https://github.com/advancepranjalofficial",
      featured: true
    },
    {
      id: "mz-assistant",
      title: "MZ - Local AI Voice Assistant",
      category: "Software",
      description: "Custom local AI assistant designed for desktop workflow automation, voice command parsing, and smart hardware control.",
      technologies: ["Python", "Generative AI", "AI Agents", "Vibe Coding"],
      image: "assets/iit_guwahati_session.jpg",
      github: "https://github.com/advancepranjalofficial",
      featured: true
    },
    {
      id: "smart-home",
      title: "Smart Home Automation System",
      category: "IoT",
      description: "Wi-Fi enabled home automation hub using ESP8266, multi-channel relays, and mobile web app control for home appliances.",
      technologies: ["ESP8266", "IoT", "C++", "Relays", "Web Interface"],
      image: "assets/electronics_workshop_class.jpg",
      github: "https://github.com/advancepranjalofficial",
      featured: true
    },
    {
      id: "line-follower",
      title: "Line Following Autonomous Robot",
      category: "Robotics",
      description: "High-speed line follower robot featuring IR sensor array, differential steering, and tuned motor driver algorithms.",
      technologies: ["Arduino", "IR Sensors", "Motor Driver", "PID Algorithm"],
      image: "assets/robotics_competition_showcase.jpg",
      github: "https://github.com/advancepranjalofficial",
      featured: true
    },
    {
      id: "bluetooth-car",
      title: "Bluetooth Controlled RC Vehicle",
      category: "Robotics",
      description: "Robotics car chassis controlled via smartphone Bluetooth app with HC-05 module and dynamic motor speed regulation.",
      technologies: ["Arduino", "HC-05 Bluetooth", "L298N", "C++"],
      image: "assets/robotics_competition_showcase.jpg",
      github: "https://github.com/advancepranjalofficial",
      featured: false
    },
    {
      id: "smart-dustbin",
      title: "Smart Touchless Dustbin",
      category: "Electronics",
      description: "Touchless automated waste bin using HC-SR04 ultrasonic distance sensor and SG90 servo motor for hygienic lid control.",
      technologies: ["Arduino", "HC-SR04", "SG90 Servo", "C++"],
      image: "assets/electronics_workshop_class.jpg",
      github: "https://github.com/advancepranjalofficial",
      featured: false
    },
    {
      id: "flood-alert",
      title: "IoT Flood Alert & Water Level System",
      category: "IoT",
      description: "Real-time water level monitoring and early flood alert system with cloud telemetries for early disaster warning.",
      technologies: ["ESP32", "Water Level Sensor", "Blynk", "GSM Module"],
      image: "assets/iit_guwahati_session.jpg",
      github: "https://github.com/advancepranjalofficial",
      featured: false
    },
    {
      id: "uno-maker-codes",
      title: "UNO Maker Kit Code Suite",
      category: "Robotics",
      description: "Complete set of code routines, sensor drivers, and wiring guides developed for Sparkbee UNO Maker Kit.",
      technologies: ["Arduino UNO", "C++", "Sensors", "L298N", "OLED"],
      image: "assets/robotics_competition_showcase.jpg",
      github: "https://github.com/advancepranjalofficial/UNO-Maker-Kit-Codes",
      featured: false
    }
  ],

  sensorLibrary: [
    {
      id: "dht11",
      name: "DHT11 Temperature & Humidity Sensor",
      category: "Sensors",
      desc: "Digital temperature and humidity sensor with pre-calibrated capacitive sensor element and single-bus communication.",
      specs: "3.3V-5V DC | Temp: 0-50°C (±2°C) | Humidity: 20-90% (±5%)",
      codeSnippet: `int readTemp() { return dht.readTemperature(); }`
    },
    {
      id: "hc-sr04",
      name: "HC-SR04 Ultrasonic Ranging Module",
      category: "Sensors",
      desc: "Non-contact ultrasonic distance sensor measuring distance from 2cm to 400cm using 40kHz acoustic sonar bursts.",
      specs: "5V DC | 2cm - 400cm Range | 15° Measuring Angle",
      codeSnippet: `float distance = pulseIn(echoPin, HIGH) * 0.034 / 2;`
    },
    {
      id: "pir-sensor",
      name: "PIR Motion Detection Sensor",
      category: "Sensors",
      desc: "Passive infrared sensor detecting infrared thermal radiation emitted by moving bodies.",
      specs: "5V-12V DC | Up to 7m Range | Adjustable Delay & Sensitivity",
      codeSnippet: `int motionState = digitalRead(pirPin);`
    },
    {
      id: "ir-sensor",
      name: "Infrared Proximity & Line Sensor",
      category: "Sensors",
      desc: "IR transmitter and photodiode pair module used for obstacle detection and black/white line tracking.",
      specs: "3.3V-5V DC | 2cm - 30cm Range | Digital & Analog Output",
      codeSnippet: `int lineDetected = digitalRead(irSensorPin);`
    },
    {
      id: "ldr-module",
      name: "LDR Photoresistor Light Sensor",
      category: "Electronics",
      desc: "Light Dependent Resistor whose electrical resistance decreases as ambient light intensity increases.",
      specs: "3.3V-5V DC | Spectral Peak: 540nm | Analog Output",
      codeSnippet: `int lightLevel = analogRead(ldrPin);`
    },
    {
      id: "mq2-gas",
      name: "MQ-2 Smoke & Flammable Gas Sensor",
      category: "Sensors",
      desc: "Electrochemical sensor detecting LPG, Smoke, Alcohol, Propane, Hydrogen, and Methane gas concentrations.",
      specs: "5V DC | SnO2 Sensitive Layer | Analog & Digital Comparator",
      codeSnippet: `int gasLevel = analogRead(mq2Pin);`
    },
    {
      id: "servo-sg90",
      name: "SG90 9g Micro Servo Motor",
      category: "Robotics",
      desc: "Lightweight 180-degree rotational servo motor used for precision mechanical movements and robotics steering.",
      specs: "4.8V DC | Torque: 1.8 kgf·cm | 180° Rotation",
      codeSnippet: `myservo.write(90); // Move to 90 degrees`
    },
    {
      id: "l298n-driver",
      name: "L298N Dual H-Bridge Motor Driver",
      category: "Robotics",
      desc: "High-power H-Bridge driver module capable of driving two DC gear motors with direction and PWM speed regulation.",
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
      summary: "Understand light-dependent resistors, photoconductivity principles, voltage divider circuits, and how to build an automatic night light with Arduino.",
      components: ["Arduino UNO", "LDR Sensor", "10kΩ Resistor", "LED", "Breadboard & Jumpers"],
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
      summary: "Step-by-step guide to building a 2WD line tracking robot using dual IR sensors, L298N motor driver module, and differential steering logic.",
      components: ["Arduino UNO", "2x IR Sensors", "L298N Motor Driver", "2x DC Gear Motors", "2WD Chassis"],
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
      category: "ESP8266",
      readTime: "7 min read",
      summary: "Learn how to connect NodeMCU ESP8266 to Wi-Fi networks, host a local HTTP web server, and toggle relays remotely from any web browser.",
      components: ["ESP8266 NodeMCU", "5V Relay Module", "USB Cable", "Breadboard"],
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
      summary: "Insights from the IIT Guwahati workshop: utilizing AI agents and LLMs to generate Arduino C++ drivers, debug hardware code, and automate circuit schematics.",
      components: ["Arduino/ESP32", "Generative AI Prompts", "VS Code", "Serial Monitor"],
      codeSnippet: `// Prompt AI Agent: "Generate optimized ESP32 PWM motor ramp algorithm"
void rampSpeed(int targetSpeed) { ... }`
    }
  ]
};
