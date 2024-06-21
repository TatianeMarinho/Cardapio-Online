import './cardItemMenu.css';

function CardItemMenu () {
    return (
        <div className="card_item">
            <div className="item_info">
                <h5>nome</h5>                
                <h5>Valor</h5>                            
            </div>
            <p>description</p>
            <div className="portion_info">
                <p>portion</p>
                <p>descricao detalhada da porçao</p>
                <p>price</p>
            </div>
        </div>
    )
};

export default CardItemMenu;