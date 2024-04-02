import React from 'react'
import { useContext } from "react"
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import { themeContext } from "../../Context"
import { motion } from "framer-motion"
import Resume from './milton_resume.pdf'

const Services = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
    // transition
    const transition = {
      duration: 1,
      type: "spring",
    };

  return (
    <div className="services" id='Services'>
        {/* left-side */}
        <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>By understanding the requirements of the role I'll contribute my best to the organization. 
            <br />
            {/* By understanding the requirements of the role I'll contribute my best to the organization. */}
            </span>
            <a href={Resume} download>
              <button className="button s-button">Downlod CV</button>
            </a>
        <div className="blur s-blur1" style={{ background : "#ABF1FF94"}}></div>
        </div>

        {/* right-side */}
        <div className="cards">
            <motion.div
             initial={{ left: "25rem" }}
             whileInView={{ left: "14rem" }}
             transition={transition}>
              <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {'UI/UX, HTML, CSS, React, Tailwind CSS, Photoshop and Poster'}
              />
            </motion.div>

            <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}>
              <Card
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {'Java, J2EE, Hibernate, Spring Boot, Javascript, ReactJs and NextJs, SQL'}
              />
            </motion.div>

            <motion.div
             initial={{ top: "19rem", left: "25rem" }}
             whileInView={{ left: "12rem" }}
             transition={transition}>
              <Card
                emoji = {Humble}
                heading = {'Maintain'}
                detail = {'Server, DataBase, CMS, Updation and Fixing, Backup, SEO'}
              />
            </motion.div>

            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services
