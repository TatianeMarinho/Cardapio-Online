import { CardInfoTypes } from '../../types/dataTypes';
import './cardItemMenu.css';

function CardItemMenu (info: CardInfoTypes) {
    return (
        <div className="card_item">
            <div className="item_info">
                <h5>{ info.name }</h5>                
                <h5>Valor</h5>                            
            </div>
            <p>{ info.description }</p>
            <div className="portion_info">
                { info.characteristics.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{ item.portion }</p>
                            <p>{ item.description }</p>
                            <p>{ item.price }</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default CardItemMenu;