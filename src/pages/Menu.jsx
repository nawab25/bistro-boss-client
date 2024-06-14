import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
import menuImg from "../assets/menu/banner3.jpg"
import dessertImg from "../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../assets/menu/pizza-bg.jpg"
import saladImg from "../assets/menu/salad-bg.jpg"
import soupImg from "../assets/menu/soup-bg.jpg"
import useMenu from "../hooks/useMenu";
import SectionTitle from "../components/SectionTitle";
import MenuCategory from "../components/MenuCategory";
const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(singleMenu => singleMenu.category === 'offered');
    const salad = menu.filter(singleMenu => singleMenu.category === 'salad');
    const pizza = menu.filter(singleMenu => singleMenu.category === 'pizza');
    const dessert = menu.filter(singleMenu => singleMenu.category === 'dessert');
    const soup = menu.filter(singleMenu => singleMenu.category === 'soup');

    return (
        <div className="min-h-[calc(100vh-225px)]">
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='Our menu'></Cover>
            <SectionTitle subHeading="Don't miss" heading="Today's offer"></SectionTitle>
            <MenuCategory items={offered} btnTitle="order your favourite food" category="offered"></MenuCategory>
            <Cover img={dessertImg} title="Desserts"></Cover>
            <MenuCategory items={dessert} btnTitle="order your favourite food" category="desserts"></MenuCategory>
            <Cover img={pizzaImg} title="Pizza"></Cover>
            <MenuCategory items={pizza} btnTitle="order your favourite food" category="pizza"></MenuCategory>
            <Cover img={saladImg} title="Salads"></Cover>
            <MenuCategory items={salad} btnTitle="order your favourite food" category="salad"></MenuCategory>
            <Cover img={soupImg} title="Soups"></Cover>
            <MenuCategory items={soup} btnTitle="order your favourite food" category="soups"></MenuCategory>
        </div>
    );
};

export default Menu;