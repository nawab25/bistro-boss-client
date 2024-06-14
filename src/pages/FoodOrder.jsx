import Cover from "../shared/Cover";
import orderImg from "../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../hooks/useMenu";
import FoodTabs from "../components/FoodTabs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const FoodOrder = () => {
    const categories = ['salad', 'pizza', 'soups', 'desserts', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const drinks = menu.filter(singleMenu => singleMenu.category === 'drinks');
    const salad = menu.filter(singleMenu => singleMenu.category === 'salad');
    const pizza = menu.filter(singleMenu => singleMenu.category === 'pizza');
    const dessert = menu.filter(singleMenu => singleMenu.category === 'dessert');
    const soup = menu.filter(singleMenu => singleMenu.category === 'soup');

    return (
        <div className="min-h-[calc(100vh-225px)]">
            <Helmet><title>Bistro Boss | Order Food</title></Helmet>
            <Cover img={orderImg} title="Our shop"></Cover>
            <Tabs className="py-20" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className="flex justify-center uppercase">
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <FoodTabs items={salad}></FoodTabs>
                </TabPanel>
                <TabPanel>
                    <FoodTabs items={pizza}></FoodTabs>
                </TabPanel>
                <TabPanel>
                    <FoodTabs items={soup}></FoodTabs>
                </TabPanel>
                <TabPanel>
                    <FoodTabs items={dessert}></FoodTabs>
                </TabPanel>
                <TabPanel>
                    <FoodTabs items={drinks}></FoodTabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default FoodOrder;