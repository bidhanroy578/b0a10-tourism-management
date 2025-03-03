import { FcViewDetails } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyList = () => {

    const [list, SetList] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/spots/test@mail.com`)
            .then(res => res.json())
            .then(data => {
                SetList(data)
                console.log(data)
            })
    }, [])

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
                            list.length > 0 ? list.map((item , idx) =>
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{item.spot_name}</td>
                                    <td>{item.location}</td>
                                    <td>{item.country}</td>
                                    <td>{item.visitor}</td>
                                    <td><Link to={`/details/${item._id}`} className="btn btn-outline btn-info text-2xl"><FcViewDetails /></Link></td>
                                    <td><button className="btn btn-outline btn-warning text-2xl"><CiEdit /></button></td>
                                    <td><button className="btn btn-outline btn-error text-2xl"><MdDeleteOutline /></button></td>
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