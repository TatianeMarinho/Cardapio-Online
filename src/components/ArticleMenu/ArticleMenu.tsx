import CardItemMenu from "../CardItemMenu/CardItemMenu";

function ArticleMenu() {
    return (
        <article>
            <section id="snack" >Refeições</section>
                <CardItemMenu />
            <section id="commercial" >Comerciais</section>
            <section id="portion" >Porções</section>
            <section id="pasta" >Massas</section>
            <section id="drinks" >Bebidas</section>
            <section id="dessert">Sobremesas</section>
        </article>
    )
}

export default ArticleMenu;