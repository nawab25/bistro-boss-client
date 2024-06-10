import Banner from "../components/Banner";
import Category from "../components/Category";
import Featured from "../components/Featured";
import TopMenu from "../components/TopMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <TopMenu></TopMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;