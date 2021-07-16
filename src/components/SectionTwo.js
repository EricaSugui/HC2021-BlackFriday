import logo from '../assets/logo.jpg';

function SectionTwo() {
 
    const onClick = e => {
        e.preventDefault();
        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let data = {
            nome,
            email,
        }
        function mascara(email) {
            var emailMasc = email.replace(/([^@.])/g, "*").split('');
            var precede	= "";
            for(let i=0;i<emailMasc.length;i++){
                if (i<=2 || precede === "." || precede === "@"){
                    emailMasc[i] = email[i];
                }
                precede = email[i];
            }
            return emailMasc.join('');
        }
        let emailMascarado = mascara(email)
    
        let convertData = JSON.stringify(data);
    
        localStorage.setItem('lead', convertData);

        let content2 = document.getElementById('content2')
    
        let carregando = `
        <div style="text-align: center; align-items: center">
        <br/>
        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <p>Carregando</p>
        </div>
        `
    
        let pronto = `
        <p>Pronto, ${nome}!</p>
        <br/>
        <p>Você receberá em primeira mão as nossas ofertas
        no email ${emailMascarado} .</p>
        `
    
        let card = document.getElementById('card')
    
        content2.innerHTML = carregando
    
        setTimeout(() => {
            card.innerHTML = pronto
        }, 2000)
    }
 
    return (
      
      <section className="section-container background-section section-two">
        <div className="card" id="card">
            <div className="card-container">
                <div id="content1">
                    <img className="img" src={logo} alt="Logo" />
                    <p className="text">Cadastre-se e receba as nossas ofertas em primeira mão!</p>
                </div>
    
                <div id="content2">
                    <form onSubmit={onClick} id="form">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" placeholder="Insira seu nome" required="required" id="nome" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" id="inputEmail" required="required" placeholder="Insira seu melhor email" id="email" />
                            <small id="emailHelp" className="form-text text-muted">Nós nunca compartilharemos seu email com outras pessoas.</small>
                        </div>
                        
                        <button className="btn" type="submit">Cadastrar</button>
        
                    </form>
                </div> 
    
            </div>
        </div>
      </section>
     
    );
  };
  
  export default SectionTwo;