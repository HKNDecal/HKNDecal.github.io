import React from "react"

import styles from "./Navigation.module.css"

export default function Navigation() {
	return (
		<nav className={styles.nav}>
			<ul className={styles.ul}>
				<li className={styles.li}><a className={styles.a} href="#intro">Welcome</a> </li>
				<li className={styles.li}><a className={styles.a} href="#overview">Course Overview</a> </li>
				<li className={styles.li}><a className={styles.a} href="#schedule">Class Schedule</a> </li>
				<li className={styles.li}><a className={styles.a} href="#facilitators">Intructors/TAs</a> </li>
			</ul>
		</nav>
	)
}