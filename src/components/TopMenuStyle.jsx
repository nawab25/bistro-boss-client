const TopMenuStyle = ({ menu }) => {
    const {name, recipe, image, price} = menu;
    return (
        <div className="flex gap-6 mb-5">
            <img style={{borderRadius: '0 200px 200px 200px'}} src={image} className="w-[118px] h-[104px]" alt={name} />
            <div className="flex ">
                <div>
                    <h1 className="uppercase text-lg">{name}--------------------</h1>
                    <p>{recipe}</p>
                </div>
                <p className="text-yellow-600 w-1/5">${price}</p>
            </div>
        </div>
    );
};

export default TopMenuStyle;