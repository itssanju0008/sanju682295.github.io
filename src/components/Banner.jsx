import React from "react";
import {AiOutlineDownload} from "react-icons/ai"
function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img style={{width:"300px",borderRadius:"50%",margin:"auto"}} src="/profile_Pic.jpg" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Sanjeev Singh</h6>
            <h3>Full stack web Developer</h3>
            
            <p style={{marginBottom:"20px"}}>
            Analytical and detail-oriented aspiring Full Stack Web
Developer capable of writing production-ready code using
MERN stack.Passionate about coding and intensely
interested in working in a product-based company.

            </p>
           <a href="resume.pdf" download='Sanjeev Singh' style={{border:"1px",backgroundColor:"#cd3128",borderRadius:"5px",padding:"5px 15px 5px 15px",display:"flex",maxWidth:"fit-content"}}>Resume<AiOutlineDownload style={{marginLeft:"10px",fontSize:"20px"}} /></a>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;