import React from "react"
import { Container, Col, Row } from "react-bootstrap"

import * as styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <h6>Some Advice</h6>
            <p>
              Professor Sahai notes in his unofficial advice page 1 , “Set
              yourself a goal of understanding some system from top to bottom
              before you graduate. For example, you might want to know how the
              entire process of downloading and listening to an MP3 or OGG file
              works. This can be a good tool for integrating knowledge across
              different courses.” Since taking every EECS course may be
              infeasible and inefficient under the current system, we would like
              to provide a cocktail-party level of understanding so students can
              make educated decisions about which classes to explore. Even if
              you never take an EECS class after this one, this DeCal will be
              worthwhile if you enjoy learning about a variety of topics.
            </p>
          </Col>
          <Col xs={6} md={3}>
            <h6>Email</h6>
            <p>Decal: decal[at]hkn.eecs.berkeley.edu</p>
            <p>General: hkn[at]hkn.eecs.berkeley.edu</p>
          </Col>
          <Col xs={6} md={3}>
            <h6>Our Offices</h6>
            <p>290 Cory Hall | (510) 642-7346</p>
            <p>345 Soda Hall | (510) 642-9952</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
