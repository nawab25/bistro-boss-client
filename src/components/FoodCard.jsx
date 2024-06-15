import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const { name, recipe, image, price, _id } = item;
    const navigate = useNavigate()
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleOrder = () => {
        if (user && user?.email) {
            const cartData = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price
            }
            axiosSecure.post('/cart', cartData)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success('Added to cart')
                        //refetch data immediately
                        refetch();
                    }

                })

        }
        else {
            Swal.fire({
                title: "You must login first",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }

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
                    <button
                        onClick={handleOrder}
                        className="btn border-b-2 border-yellow-600 hover:bg-slate-900 text-yellow-600 uppercase border-0">Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;