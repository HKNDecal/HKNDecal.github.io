import React from "react"
import { Card, Button } from "react-bootstrap"
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"

import { Officers, Weeks, About, Configs } from  "./data.js"
import styles from "./Sections.module.css"
import Footer from "../components/Footer.js"
import logo from "../images/decal-logo.png"

export default function Sections() {

	return (
		<div className={styles.wrapper}>
			<IntroSection />
			<OverviewSection />
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
				<div className={styles.introCard}>
					<div className={styles.introContent}>
						<span className={styles.introLogo}>
							<img className={styles.image} src={logo} alt="Logo" />
						</span>
						<div>
							<h1>Going Down the EECS Stack</h1>
							<p>With so many EE and CS classes at Berkeley, it is important that students know which classes best match their personal and career interests. This DeCal is offered to provide students with a broad survey of topics within EECS and a general sense of the courses and subfields within the major. We aim to cover each topic in totality, so no EE or CS experience is required.</p>
							<Button variant="info" className={styles.button} href="https://hkn.mu/decalapp"> Enroll Now! </Button>
							<Button variant="secondary" className={styles.button} href="#overview"> Learn More </Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

function DetailCard(props) {
	return (
		<ScrollAnimation animateIn='animate__animated animate__fadeIn' animateOnce={Configs.animateOnce}>
			<h3>{props.title}</h3>
			<p>{props.desc}</p>
		</ScrollAnimation>
	)
}

export function OverviewSection() {
	return (
		<section id="overview" className={styles.section}>
			<section className={styles.inner}> 
				{About.map((details, i) =>
					<DetailCard key={i} title={details.title} desc={details.description}/>
				)}
			</section>
		</section>
	)
}

function ClassCard(props) {
	if (props.week.slides == "") {
		return (
			<ScrollAnimation animateIn='animate__animated animate__fadeInUp' animateOnce={Configs.animateOnce}>
				<div className={styles.classCard}>
					<span className={styles.classCardThumbnail}>
						<div className={styles.classCardImageContainer}>
							<div className={styles.classCardTText}> {props.week.title} </div>
							<img className={styles.image} alt= "pic of person" src={props.week.image} /> 
						</div>
					</span>
					<span className={styles.classCardContent}>
						<h4 className={styles.classCardTitle}>{props.week.title} -  Week {props.week.number}</h4>
						<div className={styles.classCardDescription}>{props.week.description}</div>
					</span>
				</div>
			</ScrollAnimation>
		)
	}
	return (
		<ScrollAnimation animateIn='animate__animated animate__fadeInUp' animateOnce={Configs.animateOnce}>
			<div className={styles.classCard}>
				<span className={styles.classCardThumbnail}>
					<div className={styles.classCardImageContainer}>
						<div className={styles.classCardTText}> {props.week.title} </div>
						<img className={styles.image} alt= "pic of person" src={props.week.image} /> 
					</div>
				</span>
				<span className={styles.classCardContent}>
					<h4 className={styles.classCardTitle}>{props.week.title} -  Week {props.week.number}</h4>
					<Button target="_blank"href={props.week.slides} variant="info" size="sm">Slides</Button>
					<div className={styles.classCardDescription}>{props.week.description}</div>
				</span>
			</div>
		</ScrollAnimation>
	)
}

export function ScheduleSection() {
	return (
		<section id="schedule" className={styles.section}>
			<section className={styles.inner}> 
				{Weeks.map((week, i) => <ClassCard key={i} week={week}/>)}
			</section>
		</section>
	)
}

function InstructorCard(props) {
	return (

		<ScrollAnimation
			style={{display: "inline-block", "vertical-align": "top"}}
			animateIn='animate__animated animate__fadeIn'
			animateOnce={Configs.animateOnce}
		>
			<Card className={styles.instructorCard}>
			    <Card.Img variant="top" src={props.ta.img} />
			    <Card.Body>
			    	<Card.Title>{props.ta.name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						{props.ta.year}
					</Card.Subtitle>
					<ul className={styles.instructorList}>
						{props.ta.about.map((item, i) =>
						    <li key={i}>{item}</li>
						)}
					</ul>
			    </Card.Body>
			</Card>
		</ScrollAnimation>
	)
}

export function FacilitatorsSection() {
	return (
		<section id="facilitators" className={styles.section}>
			<div className={styles.inner}>
				<h2>Facilitators</h2>
				<p>Meet the people who will be interacting with you throughout the semester!</p>
				<div>
					{Officers.map((ta, i) => <InstructorCard key={i} ta={ta}/>)}
				</div>
			</div>
		</section>
	)
}








