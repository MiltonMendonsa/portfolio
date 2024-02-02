import React from 'react'
import { useContext } from "react";
import './Education.css'
import { themeContext } from "../../Context";
import {motion} from 'framer-motion'

const Education = () => {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

        // transition
        const transition = {
          duration: 1,
          type: "spring",
        };

    const educationData = [
        {
           degree: 'Java FullStack Development',
           institution: 'JSpiders, Hebbal',
           year: '2023 - 2024',
        },
        {
          degree: 'Master of Computer Application',
          institution: 'CMR Institute Of Technology, Bangalore',
          year: '2021 - 2023',
        },
        {
            degree: 'Bachelor of Computer Application',
            institution: 'SDM Degree College, Honnavar',
            year: '2018 - 2021',
          },
          
        // Add more education entries as needed
      ];
    
      return (
        <div className="education" id='Education'>
          <span style={{color: darkMode?'white': ''}}>My Recent Qualifications</span>
          <span>Education</span>
          <ul>
            {educationData.map((edu, index) => (
              <motion.li key={index} className='e-div' 
              initial={{ left: "25rem" }}
              whileInView={{ left: "0rem" }}
              transition={transition}
              >
                <h3>{edu.degree}</h3>
                <p style={{color: darkMode?'white': ''}}>{edu.institution}</p>
                <p style={{color: darkMode?'white': ''}}>{edu.year}</p>
              </motion.li>
            ))}
          </ul>
        </div>   
  )
}

export default Education
