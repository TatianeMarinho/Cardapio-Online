import { Link } from "react-router-dom";

function AsideMenu() {
    return (
        <aside>
            <Link className="link_button" to={"/"}>
            <button>Fazer Pedido</button>
            </Link>
        </aside>
    )
}

export default AsideMenu;