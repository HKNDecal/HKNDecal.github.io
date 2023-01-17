import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Navigation from "../components/Navigation.js"
import Sections from "../components/Sections.js"

import * as styles from "../styles/index.module.css"


export const Head = () => (
  <>
    <title>Going Down the EECS Stack</title>
  </>
)

export default class Index extends React.Component {
  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll)
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    let fromTop = window.scrollY
    let aEl = document.getElementById("#intro").childNodes[0].className

    let mainNavLinks = document.querySelectorAll("nav ul li a")

    mainNavLinks.forEach(link => {
      let section = document.querySelector(link.hash)

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add(aEl)
      } else {
        link.classList.remove(aEl)
      }
    })
  }

  render() {
    return (
      <div>
        <div className={styles.nav}>
          <Navigation />
        </div>
        <div className={styles.bod}>
          <Sections />
        </div>
      </div>
    )
  }
}
