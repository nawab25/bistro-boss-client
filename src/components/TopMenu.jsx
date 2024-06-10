import { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import TopMenuStyle from "./TopMenuStyle";

const TopMenu = () => {
    const [menuData, setMenuData] = useState([]);

    useEffect(()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const pupularMenu = data.filter(menu => menu.category === 'popular')
            setMenuData(pupularMenu);
        })
    }, []);

    return (
        <div className="pb-24">
            <SectionTitle
            subHeading='Check it out'
            heading='From our menu'
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
                {
                    menuData.map(menu => <TopMenuStyle 
                        key={menu._id}
                        menu={menu}></TopMenuStyle>)
                }
            </div>
        </div>
    );
};

export default TopMenu;