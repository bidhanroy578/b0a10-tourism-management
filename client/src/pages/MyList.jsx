import { FcViewDetails } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/Contexts";
import Swal from "sweetalert2";

const MyList = () => {
    const { user } = useContext(AuthContext)
    const [list, SetList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://travel-nest-sigma.vercel.app/spots/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                SetList(data)
                setLoading(false)
            })
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://travel-nest-sigma.vercel.app/spots/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                confirmButtonColor: "#3085d6",
                            });
                            SetList(list.filter(item => item._id !== id))
                        }
                    })
            }
        });
    }

    if (loading) return <div className='flex justify-center min-h-[50vh]'><div className="loading loading-spinner text-info loading-xl"></div></div>
    return (
        <div>
            <h3></h3>
            <div className="overflow-x-auto">
                <table className="table max-w-[1400px] text-center mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Spot Name</th>
                            <th>Location</th>
                            <th>Country</th>
                            <th>Visitors/Year</th>
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>1</td>
                            <td>Coxs bazar</td>
                            <td>Cox bazar</td>
                            <td>Bangladesh</td>
                            <td>1000000</td>
                            <td><button className="btn btn-outline btn-info text-2xl"><FcViewDetails /></button></td>
                            <td><button className="btn btn-outline btn-warning text-2xl"><CiEdit /></button></td>
                            <td><button className="btn btn-outline btn-error text-2xl"><MdDeleteOutline /></button></td>
                        </tr> */}
                        {
                            list.length > 0 ? list.map(
                                (item, idx) =>
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>{item.spot_name}</td>
                                        <td>{item.location}</td>
                                        <td>{item.country}</td>
                                        <td>{item.visitor}</td>
                                        <td><Link to={`/details/${item._id}`} className="btn btn-outline btn-info text-2xl"><FcViewDetails /></Link></td>
                                        <td><Link to={`/edit-spot/${item._id}`} className="btn btn-outline btn-warning text-2xl"><CiEdit /></Link></td>
                                        <td><button onClick={() => handleDelete(item._id)} className="btn btn-outline btn-error text-2xl"><MdDeleteOutline /></button></td>
                                    </tr>
                            )
                                :
                                <tr>
                                    <td colSpan="8" className="text-center font-bold">No Data Found please <Link className="btn btn-link" to='/add-spots'>add spots</Link></td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;