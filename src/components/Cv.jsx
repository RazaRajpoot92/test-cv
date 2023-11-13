import React from "react";
import rea from "../assets/react.svg"

const Cv = ()=>{
    return(
        <>
         <div className="cv-container">



            <div className="left-con">

                <div className="img-con">
                    <img src={rea} width={"100%"} height={"100%"} />
                </div>
                <div className="content">
                    <h1>Ahmad Raza</h1>
                    <div className="line"></div>
                    <p>Frontend Developer (React)</p>
                </div>

                <div className="details-con">
                    <h1>Details</h1>
                    <ul>
                        <li><span>Address:</span> Lahore,Pakistan</li>
                        <li><span>Email:</span> razarajpoot99598@gmail.com</li>
                        <li><span>Phone:</span> 03242108192</li>
                    </ul>
                </div>

                <div className="skill-con">

                    <h1>Skills</h1>

                    <div className="skill-wrap">
                    <h4>HTML</h4>
                    <div className="html-line">
                        <div id="html" className="inner-line"></div>
                    </div>
                    </div>

                    <div className="skill-wrap">
                        <h4>CSS</h4>
                        <div className="html-line">

                            <div className="inner-line"></div>

                        </div>
                    </div>

                    <div className="skill-wrap">
                        <h4>Javascript</h4>

                        <div className="html-line">

                            <div id="javascript" className="inner-line"></div>

                        </div>
                    </div>

                    <div className="skill-wrap" >
                        <h4>React JS</h4>
                        <div className="html-line">

                            <div id="react" className="inner-line"></div>

                        </div>
                    </div>

                    <div className="skill-wrap">
                        <h4>Mongodb</h4>
                        <div className="html-line">

                            <div className="inner-line"></div>

                        </div>
                    </div>


                </div>

            </div>


            <div className="right-con">right-side</div>

         </div>



        </>
    )
}

export default Cv;