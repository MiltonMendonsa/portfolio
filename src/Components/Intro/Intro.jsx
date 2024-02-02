import React from 'react'
import './Intro.css'
import { useContext } from "react"
import GitHub from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import ThumbUp from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glasses from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { Link } from 'react-scroll'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Intro = () => {

      // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id='Intro'>
        <div className="i-left">
            <div className="i-name">
            <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                <span>Milton Mendonsa</span>
                <span>Highly poised and dedicated with a strong education in design principles and programming languages.</span>
            </div>
            <Link to="contact" spy={true} smooth={true}>
                <button className="button i-button">Hire Me</button>
            </Link>
            <div className="i-icons">
                <a href="https://github.com/MiltonMendonsa">
                <img src={GitHub} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/milton-mendonsa-973746234/">
                <img src={LinkedIn} alt="" />
                </a>
                <a href="https://www.instagram.com/milton_mendonsa/">
                <img src={Instagram} alt="" />
                </a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Boy} alt="" />
       
          {/* animation */}
          <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glasses}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv img={Crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatingDiv img={ThumbUp} text1="Java" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  )
}

export default Intro
