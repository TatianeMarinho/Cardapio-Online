import './leftBox.css';

function LeftBox() {
    return (
        <section className="left_box">
            <p id='bem_vindo'>Seja Bem Vindo ao</p>
            <img src="/src/assets/images/logo.png" alt="Logo do restaurante Bar do Peixe" />

            <div>
                <p>Funcionamento: Quarta A DOMINGO, <br/> DAS 11H ÀS 17H</p>
                <p>Endereço: AV. Prof. DJALMA CAVALCANTE, <br/> 231, MARECHAL HERMES</p>
                <p>Contato: (21)98924-2177</p>
            </div>
        </section>
    )
}

export default LeftBox;