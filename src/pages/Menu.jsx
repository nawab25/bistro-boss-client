import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
import menuImg from "../assets/menu/banner3.jpg"
const Menu = () => {
    return (
        <div className="min-h-[calc(100vh-225px)]">
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='Our menu'></Cover>
        </div>
    );
};

export default Menu;