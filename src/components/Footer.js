import React from "react"
import { Container, Col, Row} from "react-bootstrap"

import styles from "./Footer.module.css"

export default function Footer() {
	return (
		<footer className={styles.footer}>
		<Container>
			<Row>
				<Col sm={12} md={6}>
					<h6>About</h6>
            		<p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
				</Col>
				<Col xs={6} md={3}>
				<h6>Categories</h6>
		            <ul class="footer-links">
		            	<li><a href="#/c-language/">C</a></li>
		            </ul>
				</Col>
				<Col xs={6} md={3}>
				<h6>Quick Links</h6>
		            <ul class="footer-links">
		            	<li><a href="#/about/">About Us</a></li>
		            </ul>
            	</Col>
			</Row>
		</Container>
		<Container>
			<Row>
				<Col md={8} sm={6} xs={12}>
					<p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
			        	<a href="/#">Scanfcode</a>.
					</p>
				</Col>
				<Col md={8} sm={6} xs={12}>
					<ul className={styles.socialIcons}>
						<li><a class="facebook" href="/#"><i class="fa fa-facebook"></i></a></li>
						<li><a class="twitter" href="/#"><i class="fa fa-twitter"></i></a></li>
						<li><a class="dribbble" href="/#"><i class="fa fa-dribbble"></i></a></li>
						<li><a class="linkedin" href="/#"><i class="fa fa-linkedin"></i></a></li>   
					</ul>
				</Col>
			</Row>
		</Container>
		</footer>
	)
}