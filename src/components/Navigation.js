import React from "react"

import styles from "./Navigation.module.css"

export default function Navigation() {
	return (
		<nav className={styles.nav}>
			<ul className={styles.ul}>
				<li className={styles.li}><a href="#intro">Welcome</a> </li>
				<li className={styles.li}><a href="#one">Class Schedule</a> </li>
				<li className={styles.li}><a href="#two">Intructors/TAs</a> </li>
				<li className={styles.li}><a href="#three">????</a> </li>
			</ul>
		</nav>
	)
}