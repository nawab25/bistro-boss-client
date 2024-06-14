import { Link } from "react-router-dom";
import TopMenuStyle from "./TopMenuStyle";

const MenuCategory = ({ items, btnTitle, category }) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
                {
                    items.map(menu => <TopMenuStyle
                        key={menu._id}
                        menu={menu}></TopMenuStyle>)
                }
            </div>
            <div className="flex justify-center mt-4 pb-20">
                <Link to={`/order/${category}`}>
                    <button className="btn btn-outline uppercase border-0 border-b-4">{btnTitle}</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;