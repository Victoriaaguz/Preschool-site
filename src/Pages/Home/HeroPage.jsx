export default function HeroPage() {
    return(
      <div>
      {/* Hero Section with Image */}
      <section id="heroSection" className="hero-section">
          <div className="hero-section-content-box">
              <p className="section-title"></p>
              <h1 className="hero-section-title">
                  <span className="hero-section-title-color">Our School</span>
              </h1>
              <p className="hero-section-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br /> 
                  Inventore vitae delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="btn btn-primary">SCHEDULE A TOUR</button>
          </div>
      </section>
  </div>
    );
}