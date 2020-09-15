const Officers = [
	{
		"img": require("../images/instructors/rohin-tangirala.jpg"),
		"name": "Rohin Tangirala",
		"year": "2nd Year EECS",
		"about": [
			"EECS 16A Lab ASE",
			"Interested in integrated circuits and computer architecture",
			"Play piano, guitar, and (occasionally) clarinet",
		],
	},
	{
		"img": require("../images/instructors/alex-kristoffersen.jpg"),
		"name": "Alexander Kristoffersen",
		"year": "3rd Year EECS",
		"about": [
			"Interested in computer vision and communication / signal processing",
			"Big David Blaine fan",
		],
	},
	{
		"img": require("../images/instructors/alex-wu.jpg"),
		"name": "Alex Wu",
		"year": "5th Year EECS (Master’s)",
		"about": [
			"Does research in cryptography (zero-knowledge proofs)",
			"Loves lego, origami, and physics (smash that subscribe button at tinyurl.com/alexonscience)",
		],
	},
	{
		"img": require("../images/instructors/vidish-gupta.jpg"),
		"name": "Vidish Gupta",
		"year": "3rd Year EECS",
		"about": [
			"EECS 16A TA",
			"Interested in embedded systems, software",
			"Currently doing research on quantum sensors at LBL",
		],
	},
	{
		"img": require("../images/instructors/leyla-kabuli.png"),
		"name": "Leyla Kabuli",
		"year": "4th year EECS + Music",
		"about": [
			"Interested in computational imaging, medical imaging, and computer vision",
			"\"Plays piano or something\"",
		],
	},
	{
		"img": require("../images/instructors/luke-mujica.jpg"),
		"name": "Luke Mujica",
		"year": "4th Year EECS",
		"about": [
			"CS 61C TA",
			"Still trying to learn Spanish",
			"Play guitar sometimes",
		],
	}
];

const Weeks = [
	{
		"number": 1,
		"title": "Introduction",
		"description": "This week will provide a quick preliminary overview of what the course will be about, distribution of course materials, as well as an introduction to the course staff. If available, we will be inviting Professor Anant Sahai, our faculty sponsor, to come and speak to interested students about our class.",
		"image": require('../images/background.jpg'),
		"slides": "https://docs.google.com/presentation/d/1IpMuSu38HANnAuUuZR-CVANGtT8r6ocmQmKR-gLQ2EU/edit?usp=sharing"
	},
	{
		"number": 2,
		"title": "Human-Computer Interaction",
		"description": "Human-computer interaction is the subfield of computer science that focuses on the interactions that users have with computers. This class will mainly be about the User Interfaces which is what the user will directly interact with. We will also introduce the iterative design cycle, which is one of the primary methods for the prototyping and development of user interfaces.",
		"lab": "Designing an App User Interface",
		"image": require('../images/background.jpg'),
		"slides": ""
	},
	{
		"number": 3,
		"title": "Video and Image Processing",
		"description": "YouTube is one of the most iconic pieces of the modern internet. In this course, we will dissect the process of requesting a video, and playing it in the browser. This session will focus heavily on the mechanics of audio and graphics, as well as their representations. In addition, we will perform a simple overview of compression using various methods, such as Fourier transforms and wavelet compression.",
		"lab": "Audio, video, and networking demonstration",
		"image": require('../images/background.jpg'),
		"slides": ""
	},
	{
		"number": 4,
		"title": "Mechanics Behind YouTube ML",
		"description": "Machine Learning is the science of making software “learn.” We will introduce the big ideas behind machine learning and discuss how YouTube uses them to figure out which videos its users are more likely to watch. Along the way, we’ll gain some hands-on experience at designing and running your own learning algorithms.",
		"lab": "YouTube Recommender System and Machine Learning Techniques",
		"image": require('../images/background.jpg'),
		"slides": ""
	},
	{
		"number": 5,
		"title": "Security and Applications",
		"description": "Applications serve as the interface between computers and people. These include web applications such as YouTube, or mobile applications such as Flappy Bird. Security sits at the heart of many applications, such as games or web browsers, and is achieved by utilizing information that only “authorized” users know. Vulnerabilities then appear when attackers are able to impersonate authorized users or exploit loopholes in the program.",
		"lab": "Network and Web Security",
		"image": require('../images/background.jpg'),
		"slides": ""
	},
	{
		"number": 6,
		"title": "Systems",
		"description": "Applications run by writing code, but that code doesn’t automagically run on the physical computer. This session will cover Operating Systems, Compilers, and Binary -- the translation and execution of code from human-readable format to computer-readable format. This session will also cover hardware device interfaces, such as network sockets and drivers",
		"lab": "Simple Compiler for Circuits",
		"image": require('../images/background.jpg'),
		"slides": ""
	},
	{
		"number": 7,
		"title": "How to Build a Computer",
		"description": "Applications run on top of hardware, which is typically a set of wires and gates. In this session, we will examine digital logic, memory units, and the hardware-software interface. We will also examine digital circuit design, clocking, and hardware-peripheral interfaces.",
		"lab": "Logisim CPU",
		"image": require('../images/background.jpg'),
		"slides": ""
	},
	{
		"number": 8,
		"title": "Communications and Circuits",
		"description": "We’ve taken this dive through how modern computing works, but there’s an essential missing component, measurement! The real world is not discrete or digital, but luckily analog circuits are here to save the day. We will learn how analog circuits turn signals into digital information for computers, build an inverter out of transistors, and explore digital logic through an analog view.",
		"lab": "Inverters and Logic Gates",
		"image": require('../images/background.jpg'),
		"slides": ""
	},
	{
		"number": 9,
		"title": "Power and Semiconductors",
		"description": "Transistors are the building blocks of computers, but what exactly are transistors? This session will describe the physics behind how transistors work, in a qualitative, simple way. We will build up from the ideas of bonding in silicon to different charge carriers in semiconductors and finally MOSFETs. We will also explore power systems and renewable energy.",
		"lab": "Visual simulations of MOSFETs (tentatively)",
		"image": require('../images/background.jpg'),
		"slides": ""
	},
	{
		"number": 10,
		"title": "Computer Theory and Research",
		"description": "Computer theory is the branch of computer science related to the mathematical study of computing. In this class we will cover three main areas of algorithms, complexity, and computability. We will cover several of the fundamental problems/ideas in computer theory such as the halting problem, P vs. NP, and the Church-Turing Thesis.",
		"lab": "Computer Theory Puzzle Set",
		"image": require('../images/background.jpg'),
		"slides": ""
	},
	{
		"number": 11,
		"title": "Embedded Systems and Controls",
		"description": "So far, this course has focused primarily on the top-to-bottom stack of a typical computing device. This session will cover physical interaction with the external world, as well as feedback from the environment. We will examine the system used by the EE 16B robot, and also discuss other systems such as camera image stabilization.",
		"lab": "Advanced Robotics, Camera Stabilizer",
		"image": require('../images/background.jpg'),
		"slides": ""
	},
	{
		"number": 12,
		"title": "Conclusion/Ethics",
		"description": "The final session will provide an overarching unification of the topics covered in the course, with a review of how an application travels from the user interface to the wires. We will also cover non-technical aspects of EECS, such as ethics, morality, and policy.",
		"lab": "Discussion of ethics in EECS",
		"image": require('../images/background.jpg'),
		"slides": ""
	}
];

const About = [
	{
		"title": "Key Learning Outcomes",
		"description": "This course will take students on a journey through YouTube starting from the browser request to the underlying circuitry and physics in computers. Each week will move lower on the software/hardware stack, with a deconstructive approach to software and a constructive approach towards hardware. After taking this course, students will have a fair understanding of every level of the EECS stack."
	},
	{
		"title": "Methods of Instruction",
		"description": "Sessions will consist of 2 hours of instruction, including a mix of interactive labs/demonstrations and lecture. In addition, staff will plan trips to various research labs or host talks by current researchers in applicable fields to provide deeper insight into various areas of research. The syllabus itself covers 12 weeks of instruction, including guest lectures by either faculty or a current researcher, lab tours, and other activities!"
	},
	{
		"title": "Assignments and Grading",
		"description": "To pass the course a total of 17 points must be obtained by each student. Attendance and weekly submissions are worth 1 point each (there are 11 classes and 10 weekly assignments). There will also be a field trip and a final project, both of which are mandatory. For students who are unable to attend the field trip, there will be an alternative assignment."
	},
	{
		"title": "How to Enroll",
		"description": "Fill out our short google form linked in the welcome. Please apply as soon as possible; applications will be processed on a first-come-first-serve basis. Please make sure to attend the first lecture, as we will be handling course codes based on attendance. If you cannot make the first class, send us an email."
	},

];


const Configs = {
	"animateOnce": true
};

export { Officers, Weeks, About, Configs };



