import { FaDeleteLeft } from "react-icons/fa6";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Cart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

    //delete items
    const deleteItem = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this item?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/carts/${id}`)
              .then(res => {
                if(res.data.deletedCount > 0) {
                    refetch();
                    toast.success('Deleted successfully')
                }
              })
            }
          });
    }
    return (
        <div>
            <div className="flex justify-evenly">
                <h1 className="text-4xl font-semibold">Total items: {cart.length}</h1>
                <h1 className="text-4xl font-semibold">Total price: ${totalPrice}</h1>
                <button className="btn btn-secondary">Pay</button>
            </div>

            {/* items table  */}
            <div className="mt-6">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(item => <tr key={item._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-20">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h1 className="text-xl font-semibold">{item.name}</h1>
                                    </td>
                                    <td className="text-lg font-bold">${item.price}</td>
                                    <th>
                                        <button onClick={()=>deleteItem(item._id)} title="delete item" className="btn btn-ghost btn-xs text-xl"><FaDeleteLeft></FaDeleteLeft></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    );
};

export default Cart;