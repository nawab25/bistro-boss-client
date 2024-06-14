const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt={name} /></figure>
            <div className="absolute top-2 right-5 bg-slate-900 text-white px-4 py-2">
                <p>${price}</p>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn border-b-2 border-yellow-600 hover:bg-slate-900 text-yellow-600 uppercase border-0">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;