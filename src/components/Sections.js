import React from "react"
import { Card, Button } from "react-bootstrap"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import { Officers, Weeks } from  "./data.js"
import styles from "./Sections.module.css"
import Footer from "../components/Footer.js"

export default function Sections() {

	return (
		<div className={styles.wrapper}>
			<IntroSection />
			<ScheduleSection />
			<FacilitatorsSection />
			<Footer />
		</div>
	)
}

export function IntroSection() {
	return (
		<section id="intro" className={styles.intro}>
			<div className={styles.inner}>
				<div className={styles.introContent}>
					<h1>Going Down the EECS Stack</h1>
					<p>With so many EE and CS classes at Berkeley, it is important that students know which classes best match their personal and career interests. This DeCal is offered to provide students with a broad survey of topics within EECS and a general sense of the courses and subfields within the major. We aim to cover each topic in totality, so no EE or CS experience is required.</p>
					<Button variant="info" className={styles.button} href="/#one"> Learn More </Button>
				</div>
			</div>
		</section>
	)
}

function ClassCard(props) {
	return (
		<ScrollAnimation animateIn='animate__animated animate__fadeInUp'>
			<div className={styles.classCard}>
				<span className={styles.classCardThumbnail}> <img className={styles.classCardImage} alt= "pic of person" src={require('../images/background.jpg')} /> </span>
				<span className={styles.classCardContent}>
					<h4>{props.week.title} -  Week {props.week.number}</h4>
					<div className={styles.classCardDescription}>{props.week.description}</div>
				</span>
			</div>
		</ScrollAnimation>
	)
}

export function ScheduleSection() {
	return (
		<section id="one" className={styles.section}>
			<section className={styles.inner}> 
				{Weeks.map((week) => <ClassCard week={week}/>)}
			</section>
		</section>
	)
}

// function InstructorCard(props) {
// 	return (
// 		<div className={styles.instructorCard}>
// 			<span className={styles.instructorCardThumbnail}> <img alt= "pic of person" src={require('../images/background.jpg')} /> </span>
// 			<span className={styles.instructorCardContent}>
// 				<h4>{props.title} -  Week {props.number}</h4>
// 				<div className={styles.instructorCardDescription}>{props.description}</div>
// 			</span>
// 		</div>
// 	)
// }

function InstructorCard(props) {
	return (

		<ScrollAnimation style={{display: "inline-block"}} animateIn='animate__animated animate__fadeIn'>
			<Card className={styles.instructorCard}>
			    <Card.Img variant="top" src={props.ta.img} />
			    <Card.Body>
			    	<Card.Title>{props.ta.name}</Card.Title>
	    			<Card.Subtitle className="mb-2 text-muted">EECS Major</Card.Subtitle>
			    	<Card.Text>
			        	Some quick example text to build on the card title and make up the bulkof the card's content.
			    	</Card.Text>
			    </Card.Body>
			</Card>
		</ScrollAnimation>
	)
}

export function FacilitatorsSection() {
	return (
		<section id="two" className={styles.section}>
			<div className={styles.inner}>
				<h2>Facilitators</h2>
				<p>Meet the people who will be interacting with you throughout the semester!</p>
				<div>
					{Officers.map((ta) => <InstructorCard ta={ta}/>)}
				</div>
			</div>
		</section>
	)
}








