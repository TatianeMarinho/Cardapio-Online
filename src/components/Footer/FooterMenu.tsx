import './footerMenu.css'

function FooterMenu() {
    return (
        <footer>
            <section className="footer_payment">
                <h4>COBRAMOS 10% DE TAXA DE SERVIÇO</h4>
                <p>ACEITAMOS CARTÔES DE DÉBITO E CRÉDITO</p>
                <div className="cards_accepted">
                    <ul>
                        <li><img src="src/assets/images/americanexpress.png" alt="cartao america express" /></li>
                        <li><img src="src/assets/images/card_paypal.png" alt="cartao paypal" /></li>
                        <li><img src="src/assets/images/card_visa.png" alt="cartao visa" /></li>
                        <li><img src="src/assets/images/elo.png" alt="cartao elo" /></li>
                        <li><img src="src/assets/images/hipercard.png" alt="cartao hipercard" /></li>
                        <li><img src="src/assets/images/mastercard.svg" alt="cartao mastercard" /></li>
                    </ul>
                </div>
                <p>© 2024 Bar do Peixe</p>
            </section>
            <section className="footer_info">
                <p>REFEIÇÕES SERVIDAS DE 4ª A DOMINGO, DAS 11H ÀS 17H</p>
                <p>AV. Prof. DJALMA CAVALCANTE, 231, MARECHAL HERMES</p>
                <p>TEL: (21)98924-2177</p>
            </section>
        </footer>
    )
}

export default FooterMenu;