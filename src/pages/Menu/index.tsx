import ArticleMenu from "../../components/ArticleMenu/ArticleMenu";
import AsideMenu from "../../components/Aside/AsideMenu";
import FooterMenu from "../../components/Footer/FooterMenu";
import HeaderMenu from "../../components/Header/HeaderMenu";
import NavbarMenu from "../../components/NavBar/NavbarMenu";

function Menu() {
    return (
        <>
            <HeaderMenu />
            <NavbarMenu />
            <main>
                <ArticleMenu />
                <AsideMenu />
            </main>
            <FooterMenu />
        </>
    )
}

export default Menu;