import Banner from "../components/Banner";
import Category from "../components/Category";
import Featured from "../components/Featured";
import Testimonials from "../components/Testimonials";
import TopMenu from "../components/TopMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <TopMenu></TopMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;