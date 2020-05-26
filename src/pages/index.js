import React from "react"
import { Helmet } from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "../components/Navigation.js"
import Sections from "../components/Sections.js"

import styles from "../styles/index.module.css"


const IndexPage = () => (
	<div>
		<Helmet>
			<meta charSet="utf-8" />
			<title>Going Down the EECS Stack</title>
		</Helmet>

		<div className={styles.nav}> 
			<Navigation /> 
		</div>
		<div className={styles.bod}>
			<Sections />
		</div>
	</div>
)

export default IndexPage
