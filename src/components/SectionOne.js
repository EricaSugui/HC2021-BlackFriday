import logo from '../assets/logo.jpg';

function SectionOne() {
    return (
      
      <section className="section-container background-section section-one">
        <div className="black">
            <div className="black1">
                <img className= "logo" src={logo} alt="Logo" />
            </div>
            <div className="black2">
                <p>Contagem regressiva para as melhores ofertas do planeta!</p>
            </div>
            
        </div>
      </section>
     
    );
  };
  
  export default SectionOne;