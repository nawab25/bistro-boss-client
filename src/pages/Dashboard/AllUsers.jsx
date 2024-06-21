import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/allUsers')
            return data;
        }
    })

    //delete users
    const deleteUser = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this user?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/allUsers/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            toast.success('Deleted successfully')
                        }
                    })
            }
        });
    }

    //make user admin
    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make this user admin?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            toast.success(`${user.name} is admin now`);
                        }
                    })
            }
        });

    }

    return (
        <div>
            <h1 className="text-4xl font-semibold">Total Users: {users.length}</h1>

            <div className="divider"></div>

            {/* users table  */}
            <div className="mt-6">
                <div className="overflow-x-auto">
                    <table className="table  w-full">
                        {/* head */}
                        <thead className="bg-yellow-600 text-white uppercase rounded-lg">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, idx) => <tr
                                    key={user._id}
                                    className="hover:bg-base-200">
                                    <td>
                                        <p>{idx + 1}</p>
                                    </td>
                                    <td>
                                        <h1>{user.name}</h1>
                                    </td>
                                    <td>
                                        <p>{user.email}</p>
                                    </td>
                                    <td>
                                        {
                                            user?.role === 'admin' ? 'Admin'
                                                :
                                                <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className="btn text-xl text-white bg-yellow-600"><FaUsers></FaUsers></button>
                                        }
                                    </td>
                                    <th>
                                        <button
                                            onClick={() => deleteUser(user._id)}
                                            title="delete user"
                                            className="btn text-xl text-white bg-red-700"><FaTrash></FaTrash></button>
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

export default AllUsers;