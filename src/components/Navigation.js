import React from "react"

import * as styles from "./Navigation.module.css"

function ListItem(props) {
  return (
    <li className={styles.li}>
      <a id={props.href} className={styles.a} href={props.href}>
        <div className={styles.active}></div>
        {props.children}
      </a>
    </li>
  )
}

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <ListItem href="#intro">Welcome</ListItem>
        <ListItem href="#overview">Course Overview</ListItem>
        <ListItem href="#schedule">Class Schedule</ListItem>
        <ListItem href="#facilitators">Teaching Assistants</ListItem>
      </ul>
    </nav>
  )
}
