import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "../components/Navigation.js"
import Sections from "../components/Sections.js"

import styles from "../styles/index.module.css"


const IndexPage = () => (
	<div>
		<div className={styles.nav}> 
			<Navigation /> 
		</div>
		<div className={styles.bod}>
			<Sections />
		</div>
	</div>
)

export default IndexPage
