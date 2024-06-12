import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Featured from "../components/Featured";
import Testimonials from "../components/Testimonials";
import TopMenu from "../components/TopMenu";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <TopMenu></TopMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;