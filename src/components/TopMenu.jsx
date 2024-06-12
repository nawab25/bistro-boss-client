import SectionTitle from "./SectionTitle";
import TopMenuStyle from "./TopMenuStyle";
import useMenu from "../hooks/useMenu";

const TopMenu = () => {
    const [menu] = useMenu();
    const popularData = menu.filter(singleMenu => singleMenu.category === 'popular');

    return (
        <div className="pb-24">
            <SectionTitle
                subHeading='Check it out'
                heading='From our menu'
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
                {
                    popularData.map(menu => <TopMenuStyle
                        key={menu._id}
                        menu={menu}></TopMenuStyle>)
                }
            </div>
            <div className="flex justify-center mt-4">
                <button className="btn btn-outline uppercase border-0 border-b-4">View full menu</button>
            </div>
        </div>
    );
};

export default TopMenu;