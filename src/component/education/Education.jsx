import React from 'react'
import "./Education.scss"

function Education() {
  return (
    <div className='education' id='education'>
      <div className="container">
        <div className='certification'>
            <p className='title'>Education and Skills</p>
        </div>
        <div className='slide'>
            <div className="card2">
              <div className="educ">
                <strong>Education</strong>
              </div>
              <div className="details">
                <p className='careers'>
                  <strong> BS in Computer Science: May</strong> (2023) <br/>
                  New Jersey City University <br/>(3.5 GPA)
                </p>
                <p className='careers'>
                <strong> Associate in Electronic engineering technologic:<br/> (May 2020)</strong><br/>
                Hudson community County College – Jersey City, NJ <br/>
                (3.4 GPA)
                </p>
                <p className='careers'><strong>Logisctic specialist</strong> (2017) <br/>
                U.S Army National Guard School Virginia
                </p>
                <p className='careers'>
                <strong> University of Yaoundé I, NGOA EKELE, Cameroon </strong> <br/>                                         
                Associate in applied mathematics & physics <br/> (October 2014)
                </p>
              </div>
            </div>
            <div className="card1"> 
               <p className="career"><strong>Skills</strong></p>
               <p className="details">
                 <ul>
                   <li>Sotfware Engineering</li>
                   <li>Object Oriented Programming</li>
                   <li>Javascript, HTML and Css</li>
                   <li> Python </li>
                   <li> Node js </li>
                   <li> React js, React Native </li>
                   <li> Java (not proficient)</li>
                   <li> C++ (Basics)</li>
                   <li>Data Strucures and Alogorithm</li>
                   <li>Linux Operating System</li>
                   <li>Gith Version Control</li>
                   <li>integrated circuits in design system </li>
                   <li>Sql and Postman</li>
                  </ul> 
               </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Education