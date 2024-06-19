import { Link } from 'react-router-dom';
import './rigthBox.css';

function RigthBox() {

    return (
        <section className="right_box">
            <Link className='link_button' to={'/menu'}>
            <button className='menu_button'>Acessar Cardápio</button>
            </Link>
            <p>OU</p>
            <button>Fazer um pedido</button>
        </section>
    )
}

export default RigthBox;