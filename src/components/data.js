import React from "react"

const Officers = [
  {
    img: require("../images/instructors/alex.jpg").default,
    name: "Alex Sanchez",
    year: "4th Year EECS",
    about: [
      "Born in Mexico, got lost and somehow ended up here in California",
      "Loves learning new languages and has a 100+ day streak in Duolingo",
    ],
  },
  {
    img: require("../images/instructors/richel-dhaliwal.jpg").default,
    name: "Richel Dhaliwal",
    year: "4th Year EECS",
    about: [
      "Interested in computer architecture and exploring computer science fields in general",
      "Accidentally hit a tennis ball with my hand instead of my racket once during a tennis match and it actually went over the net",
    ],
  },
  {
    img: require("../images/instructors/albert-guo.jpg").default,
    name: "Albert Guo",
    year: "3rd Year EECS",
    about: [
      "Interested in quant finance and machine learning",
      "Plays tft and tennis",
    ],
  },
  {
    img: require("../images/instructors/ws.jpg").default,
    name: "Widyadewi Soedarmadji",
    year: "2nd Year EECS",
    about: [
      "Interested in robotics, deep learning, and artificial intelligence",
      "I enjoy music, photography, baking, and singing",
    ],
  },
  {
    img: require("../images/instructors/erikkizior.jpg").default,
    name: "Erik Kizior",
    year: "3rd Year EECS",
    about: [
      "Interested in CS education and machine learning",
      "Casual enjoyer of Super Smash Bros",
    ],
  },
  {
    img: require("../images/instructors/aakarsh.jpg").default,
    name: "Aakarsh Vermani",
    year: "2nd Year EECS",
    about: [
      "I'm interested in machine learning, quantum computing, robotics, and data science",
      "I like solving crossword puzzles",
    ],
  },
]

const Weeks = [
  {
    number: 1,
    title: "Introduction",
    description:
      "This week will provide a quick preliminary overview of what the course will be about, distribution of course materials, as well as an introduction to the course staff. If available, we will be inviting Professor Anant Sahai, our faculty sponsor, to come and speak to interested students about our class.",
    image: require("../images/background.jpg").default,
    slides: "",
  },
  {
    number: 2,
    title: "Human-Computer Interaction",
    description:
      "Human-computer interaction is the subfield of computer science that focuses on the interactions that users have with computers. This class will mainly be about the User Interfaces which is what the user will directly interact with. We will also introduce the iterative design cycle, which is one of the primary methods for the prototyping and development of user interfaces.",
    lab: "Designing an App User Interface",
    image: require("../images/background.jpg").default,
    slides: "",
  },
  {
    number: 3,
    title: "Video and Image Processing",
    description:
      "YouTube is one of the most iconic pieces of the modern internet. In this course, we will dissect the process of requesting a video, and playing it in the browser. This session will focus heavily on the mechanics of audio and graphics, as well as their representations. In addition, we will perform a simple overview of compression using various methods, such as Fourier transforms and wavelet compression.",
    lab: "Audio, video, and networking demonstration",
    image: require("../images/background.jpg").default,
    slides: "",
  },
  {
    number: 4,
    title: "Machine Learning",
    description:
      "Machine Learning is the science of making software “learn.” We will introduce the big ideas behind machine learning and discuss how YouTube uses them to figure out which videos its users are more likely to watch. Along the way, we’ll gain some hands-on experience at designing and running your own learning algorithms.",
    lab: "YouTube Recommender System and Machine Learning Techniques",
    image: require("../images/background.jpg").default,
    slides: "",
  },
  {
    number: 5,
    title: "Security and Cryptography",
    description:
      "While developers would like to write code that just does what it’s supposed to, the reality is that attackers have incentives to exploit loopholes in applications. This week we examine defenses against these attacks, including code security, network security, and web security. We will also study the tool that enables many of these defenses: cryptography, the study of algorithms that achieve certain guarantees in the presence of adversaries.",
    lab: "Network and Web Security",
    image: require("../images/background.jpg").default,
    slides: "",
  },
  {
    number: 6,
    title: "Computer Theory and Research",
    description:
      "Computer theory is the branch of computer science related to the mathematical study of computing. In this class we will cover three main areas of algorithms, complexity, and computability. We will cover several of the fundamental problems/ideas in computer theory such as the halting problem, P vs. NP, and the Church-Turing Thesis.",
    lab: "Computer Theory Puzzle Set",
    image: require("../images/background.jpg").default,
    slides: "",
  },
  {
    number: 7,
    title: "Systems",
    description:
      "Applications run by writing code, but that code doesn’t automagically run on the physical computer. This session will cover Operating Systems, Compilers, and Binary -- the translation and execution of code from human-readable format to computer-readable format. This session will also cover hardware device interfaces, such as network sockets and drivers",
    lab: "Simple Compiler for Circuits",
    image: require("../images/background.jpg").default,
    slides: "",
  },
  {
    number: 8,
    title: "How to Build a Computer",
    description:
      "Applications run on top of hardware, which is typically a set of wires and gates. In this session, we will examine digital logic, memory units, and the hardware-software interface. We will also examine digital circuit design, clocking, and hardware-peripheral interfaces.",
    lab: "Logisim CPU",
    image: require("../images/background.jpg").default,
    slides: "",
  },
  {
    number: 9,
    title: "Electronic and Photonic Devices",
    description:
      "Transistors are the building blocks of computers, but what exactly are transistors? This session will describe the physics behind how transistors work, in a qualitative, simple way. We will build up from the ideas of bonding in silicon to different charge carriers in semiconductors, MOSFETs, and LEDs. We will also explore power systems and renewable energy.",
    lab: "Visual simulations of MOSFETs (tentatively)",
    image: require("../images/background.jpg").default,
    slides: "",
  },
  {
    number: 10,
    title: "Embedded Systems & Robotics",
    description:
      "Personal computers aren't the only kind of devices powering our modern world. In this session, we will look deeper into other applications such as embedded systems, IoT devices, and robotics.",
    lab: "TBD",
    image: require("../images/background.jpg").default,
    slides: "",
  },
  {
    number: 11,
    title: "Conclusion/Ethics",
    description:
      "The final session will provide an overarching unification of the topics covered in the course, with a review of how an application travels from the user interface to the wires. We will also cover non-technical aspects of EECS, such as ethics, morality, and policy.",
    lab: "Discussion of ethics in EECS",
    image: require("../images/background.jpg").default,
    slides: "",
  },
]

const About = [
  <>
    <h3>Key Learning Outcomes</h3>
    <p>
      This course will take students on a journey through the fields of EE and
      CS starting from the browser request to the underlying circuitry and
      physics in computers. Each week will move lower on the software/hardware
      stack, with a deconstructive approach to software and a constructive
      approach towards hardware. After taking this course, students will have a
      fair understanding of every level of the EECS stack.
    </p>
  </>,

  <>
    <h3>Methods of Instruction</h3>
    <p>
      Sessions will consist of 2 hours of instruction, including a mix of
      interactive labs/demonstrations and lecture. In addition, staff will plan
      trips to various research labs or host talks by current researchers in
      applicable fields to provide deeper insight into various areas of
      research. The syllabus itself covers 11 weeks of instruction, including
      guest lectures by either faculty or a current researcher, lab tours, and
      other activities!
    </p>
  </>,
  <>
    <h3>Assignments and Grading</h3>
    <p>
      To pass the course a total of 19 points must be obtained by each student.
      Attendance and weekly submissions are worth 1 point each (there are 11
      classes and 10 weekly assignments). There will also be a field trip and a
      final project, both of which are mandatory. For students who are unable to
      attend the field trip, there will be an alternative assignment.
    </p>
  </>,
  <>
    <h3>How to Enroll</h3>
    <p>
      Fill out our short interest form:{" "}
      <a href="https://hkn.mu/decalapp">https://hkn.mu/decalapp</a> by{" "}
      <span style={{ fontWeight: "bold" }}>Friday 01/27</span>. Please apply as
      soon as possible; applications will be processed on a
      first-come-first-serve basis. Please make sure to attend the first
      lecture, as we will be handling course codes based on attendance. If you
      cannot make the first class, send us an email.
    </p>
  </>,
]

const Configs = {
  animateOnce: true,
}

export { Officers, Weeks, About, Configs }
