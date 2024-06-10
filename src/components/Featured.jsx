import SectionTitle from "./SectionTitle";
import featuredImg from '../assets/home/featured.jpg'
const Featured = () => {
    return (
        <div className="py-20 px-16 text-white bg-fixed" style={
            {
                backgroundImage: `url(${featuredImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                
            }
        }>
            <SectionTitle subHeading='Check it out' heading='From our menu'></SectionTitle>
            <div className="md:flex items-center gap-10 mt-10 w-full h-full">
                <div>
                    <img src={featuredImg} alt="featured img" />
                </div>
                <div>
                    <h3>March 20, 2023</h3>
                    <h1 className="uppercase text-lg">Where can i get some?</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam tempore ratione repellat nihil aliquid. Tenetur nemo perferendis cum nesciunt aliquid sunt amet error inventore quia consequatur quasi, iste necessitatibus. Quas totam numquam similique tenetur ullam atque saepe quod iusto facere. Eveniet optio voluptate, facere fugiat adipisci non esse aut quae?</p>
                    <button className="btn btn-outline btn-info mt-5">READ MORE</button>
                </div>
            </div>
            </div>
    );
};

export default Featured;