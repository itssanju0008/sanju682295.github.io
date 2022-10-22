import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img style={{width:"300px",borderRadius:"50%"}} src="/profile_Pic.jpg" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Sanjeev Singh</h6>
            <h3>Full stack web Developer</h3>
            
            <p>
            Analytical and detail-oriented aspiring Full Stack Web
Developer capable of writing production-ready code using
MERN stack.Passionate about coding and intensely
interested in working in a product-based company.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;