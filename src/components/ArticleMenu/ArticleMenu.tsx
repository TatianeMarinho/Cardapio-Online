import DATA from "../../data/data";
import CardItemMenu from "../CardItemMenu/CardItemMenu";
import './articleMenu.css'

function ArticleMenu() {
    const SNACK = DATA.dishes.filter((item) => item.type === 'snack');
    const COMMERCIAL = DATA.dishes.filter((item) => item.type === 'commercial');
    const PORTION = DATA.dishes.filter((item) => item.type === 'portion');
    const PASTA = DATA.dishes.filter((item) => item.type === 'pasta');
    const DRINKS = DATA.drinks;
    const DESSERT = DATA.dishes.filter((item) => item.type === 'dessert');

    return (
        <article>
            <section id="snack" >Refeições</section>
                {
                    SNACK.map((item) => {
                        return (
                            <CardItemMenu key={item.id} id={item.id} name={item.name} description={item.description}  image={item.image} characteristics={item.characteristics} />
                        )
                    })
                }
            <section id="commercial" >Comerciais</section>
                {
                    COMMERCIAL.map((item) => {
                        return (
                            <CardItemMenu key={item.id} id={item.id} name={item.name} description={item.description}  image={item.image} characteristics={item.characteristics} />
                        )
                    })
                }
            <section id="portion" >Porções</section>
                {
                    PORTION.map((item) => {
                        return (
                            <CardItemMenu key={item.id} id={item.id} name={item.name} description={item.description}  image={item.image} characteristics={item.characteristics} />
                        )
                    })
                }
            <section id="pasta" >Massas</section>
                {
                    PASTA.map((item) => {
                        return (
                            <CardItemMenu key={item.id} id={item.id} name={item.name} description={item.description}  image={item.image} characteristics={item.characteristics} />
                        )
                    })
                }
            <section id="drinks" >Bebidas</section>
                {
                    DRINKS.map((item) => {
                        return (
                            <CardItemMenu key={item.id} id={item.id} name={item.name} description={item.brand}  image={item.characteristics[0].image} characteristics={item.characteristics} />
                        )
                    })
                }
            <section id="dessert">Sobremesas</section>
                {
                    DESSERT.map((item) => {
                        return (
                            <CardItemMenu key={item.id} id={item.id} name={item.name} description={item.description}  image={item.image} characteristics={item.characteristics} />
                        )
                    })
                }
        </article>
    )
}

export default ArticleMenu;