import React from 'react'
import me from "../img/me.jpg"
import "../style/porthome.css"
export default function Bio() {
    return (
        <div>
            <img className="me-bio p-2" src={me} alt="AmberLee" />
            <i><b className="about-me">Creative Front End Web Developer </b></i>and experienced Customer Service professional who values
            teamwork and collaboration. Her client-facing expertise encompasses visual effects production coordination
            at Lucasfilm, as well as, local business outreach for the Print and Marketing division at Staples. <br/>

            Motivated by challenges from the pandemic, Amber began to explore other career opportunities where she could
            continue to be creative, apply customer service skills, work with a team and better support her family.
            Having an interest in technical space while at Lucasfilm, she naturally gravitated back to software and
            achieved a Full-Stack Web Development certificate from the University of Washington. Her technical skills
            now include: CSS, HTML, JavaScript, jQuery, MySQL, MongoDB, Node.js, Express.js, and React. <br/><br/>

            With a newly found enthusiasm for coding, Amber now has the ability to apply aspects of UX and agile
            development to build single-page MERN applications that help communities connect and businesses thrive. She
            is passionate about using technology to bridge differences amongst people, make connection easier and
            aspires to work on projects that include all and exclude none.
        </div>
    )
}
