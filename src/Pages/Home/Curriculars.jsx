import data from "../../data/index.json";

export default function Curriculars(){
    return (
        <section className="curriculars-section" id="curriculars">
            <div className="curriculars-container">
                <div className="curriculars-container">
                    <p className="section-title">Curriculars</p>
                    <h2 className="section-heading">Extra Programs</h2>
                </div>
                <div className="curriculars-section-container">
                {data?.curriculars?.map((item, index) => (
                    <div key={index} className="curriculars-section-card">
                        <div className="curriculars-section-img" content="width=device-width, initial-scale=1.0">
                            <img src={item.src} alt="Placeholder" />
                        </div>
                    <div className="curriculars-section-card-content">
                    <div>
                <h3 className="curriculars-section-title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
                </div>
            </div>
        </section>
    )
}