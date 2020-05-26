const Officers = [
	{
		"img": require("../images/instructors/rohin-tangirala.jpg"),
		"name": "Rohin Tangirala",
		"site": "hkn.mu",
	},
	{
		"img": require("../images/instructors/alex-kristoffersen.jpg"),
		"name": "Alexander Kristoffersen",
		"site": "hkn.mu",
	},
	{
		"img": require("../images/instructors/alex-wu.jpg"),
		"name": "Alex Wu",
		"site": "hkn.mu",
	},
	{
		"img": require("../images/instructors/vidish-gupta.jpg"),
		"name": "Vidish Gupta",
		"site": "hkn.mu",
	}
];

const Weeks = [
	{
		"number": 1,
		"title": "Introduction",
		"description": "This week will provide a quick preliminary overview of what the course\nwill be about, distribution of course materials, as well as an introduction to\nthe course staff. If available, we will be inviting Professor Sahai, our faculty\nsponsor, to come and speak to interested students about our class."
	},
	{
		"number": 2,
		"title": "YouTube Video",
		"description": "YouTube is one of the most iconic pieces of the modern internet. In this course, we will dissect the process of requesting a video, and playing it in the browser. During this class, we will watch the behavior of the browser, as well as analyzing the methods by which servers send data to the client. This session will also focus heavily on the mechanics of audio and graphics, as well as their representations. In addition, we will perform a simple overview of audio signals and compression using various methods, such as SVD, Fourier Transforms, and Zip.",
		"lab": "Audio, video, and networking demonstration"
	},
	{
		"number": 3,
		"title": "Human-Computer Interaction",
		"description": "Human-computer interaction is the subfield of computer science that focuses on the interactions that users have with computers. This class will mainly be about the User Interfaces which is what the user will directly interact with. We will also introduce the iterative design cycle, which is one of the primary methods for the prototyping and development of user interfaces. Part of the class will be a case study of the history of UI/UX",
		"lab": "Designing an App User Interface"
	},
	{
		"number": 4,
		"title": "Mechanics Behind YouTube ML",
		"description": "Machine Learning is the science of making software “learn.” We will introduce the big ideas behind machine learning and discuss how YouTube uses them to figure out which videos its users are more likely to watch. Along the way, we’ll gain some hands-on experience at designing and running your own learning algorithms.",
		"lab": "YouTube Recommender System and Machine Learning Techniques"
	},
	{
		"number": 5,
		"title": "Computer Theory and Research",
		"description": "Computer theory is the branch of computer science related to the mathematical study of computing. In this class we will cover three main areas of algorithms, complexity, and computability. We will cover several of the fundamental problems/ideas in computer theory such as the halting problem, P vs. NP, and the Church-Turing Thesis.",
		"lab": "Computer Theory Puzzle Set"
	},
	{
		"number": 6,
		"title": "Security and Applications",
		"description": "Applications serve as the interface between computers and people. These include web applications such as YouTube, or mobile applications such as Flappy Bird. Security sits at the heart of many applications, such as games or web browsers, and is achieved by utilizing information that only “authorized” users know. Vulnerabilities then appear when attackers are able to impersonate authorized users or exploit loopholes in the program.",
		"lab": "Network and Web Security"
	},
	{
		"number": 7,
		"title": "Applications/OS Interface",
		"description": "Applications run by writing code, but that code doesn’t automagically run on the physical computer. This session will cover Operating Systems, Compilers, and Binary -- the translation and execution of code from human-readable format to computer-readable format. This session will also cover hardware device interfaces, such as network sockets and drivers",
		"lab": "Simple Compiler for Circuits"
	},
	{
		"number": 8,
		"title": "How to Build a Computer",
		"description": "Applications run on top of hardware, which is typically a set of wires and gates. In this session, we will examine digital logic, memory units, and the hardware-software interface. We will also examine digital circuit design, clocking, and hardware-peripheral interfaces.",
		"lab": "Logisim CPU"
	},
	{
		"number": 9,
		"title": "Physics/Fabrication",
		"description": "Transistors are the building blocks of computers, but what exactly are transistors? This session will describe the physics behind how transistors work, in a qualitative, simple way. We will build up from the ideas of bonding in silicon to different charge carriers in semiconductors and finally MOSFETs. The next question is, how do you actually build one? What are the fundamental challenges involved in building transistors? We’ll go over a sample process, and talk about the basic chemical processes involved in creating a transistor, and the challenges involved in fabrication. In addition, we hope to be able to give a small lab tour of the EE 143 lab so that students can see where transistors are fabricated.",
		"lab": "Visual simulations of MOSFETs (tentatively)"
	},
	{
		"number": 10,
		"title": "Analog and Digital Circuits",
		"description": "We’ve taken this dive through how modern computing works, but there’s an essential missing component, measurement! The real world is not discrete or digital, but luckily analog circuits are here to save the day. We will learn how analog circuits turn signals into digital information for computers, build an inverter out of transistors, and explore digital logic through an analog view.",
		"lab": "Inverters and Logic Gates"
	},
	{
		"number": 11,
		"title": "Embedded Systems and Controls",
		"description": "So far, this course has focused primarily on the top-to-bottom stack of a typical computing device. This session will cover physical interaction with the external world, as well as feedback from the environment. We will examine the system used by the EE 16B robot, and also discuss other systems such as camera image stabilization.",
		"lab": "Advanced Robotics, Camera Stabilizer"
	},
	{
		"number": 12,
		"title": "Conclusion/Ethics",
		"description": "The final session will provide an overarching unification of the topics covered in the course, with a review of how an application travels from the user interface to the wires. We will also cover non-technical aspects of EECS, such as ethics, morality, and policy.",
		"lab": "Discussion of ethics in EECS"
	}
];

export { Officers, Weeks};



