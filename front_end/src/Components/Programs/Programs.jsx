import React from 'react';
import './Programs.css';
import Program1 from '../../assets/Program1.jpg'
import Program2 from '../../assets/Program2.jpg'
import Program3 from '../../assets/Program3.jpg'
import Program4 from '../../assets/Program4.jpg'
import Program5 from '../../assets/Program5.jpg'
const Programs = () => {
  return (
    <div className='programs '>
     <div className="program">
      <img src={Program1} alt="" />
        <p>CSE</p>
        </div>   
        <div className="program">
      <img src={Program2} alt="" />
      <p>CSBS</p>
        </div>  
        <div className="program">
      <img src={Program3} alt="" />
       <p>ECE</p>
        </div>
        <div className="program">
      <img src={Program4} alt="" />
      <p>EEE/EE</p>
        </div>
        <div className="program">
      <img src={Program5} alt="" />
      <p>ME</p>
        </div>
    </div>
  )
}

export default Programs
