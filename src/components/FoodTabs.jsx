import FoodCard from "./FoodCard";

const FoodTabs = ({ items }) => {
    return (
        <div className="grid md:grid-cols-3 gap-6 mt-12">
            {
                items.map(item => <FoodCard 
                    key={item._id}
                    item={item}></FoodCard>)
            }
        </div>
    );
};

export default FoodTabs;