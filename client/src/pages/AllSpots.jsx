import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const AllSpots = () => {

    const [allSpots, setAllSpots] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`https://travel-nest-sigma.vercel.app/spots`)
            .then(res => res.json())
            .then(data => {
                setAllSpots(data)
                setLoading(false)
            })

    }, [])
    if (loading) return <div className='flex justify-center min-h-[50vh]'><div className="loading loading-spinner text-info loading-xl"></div></div>

    return (
        <div className="flex flex-auto flex-wrap gap-5 justify-center w-full my-16">
            {
                allSpots.map((spot, index) => (
                    <Fade
                        key={index}
                        direction="right"
                    >
                        <div className="card lg:card-side shadow-blue-300 shadow-lg flex-col lg:flex-row lg:w-md">
                            <figure className='flex-1/2 max-w-2xs object-cover'>
                                <img src={spot.image} />
                            </figure>
                            <div className="card-body p-2">
                                <h2 className="card-title">{spot.spot_name}</h2>
                                <p>Cost: {spot.cost}💲<span>{spot.duration} days plan </span></p>
                                <p><span>Visitor: {spot.visitor}/year </span></p>
                                <div className="card-actions">
                                    <div className="badge badge-outline">summer</div>
                                    <div className="badge badge-outline">winter</div>
                                </div>
                                <div className="card-actions">
                                    <Link to={`/details/${spot._id}`} className="btn w-full bg-blue-400">Details</Link>
                                </div>
                            </div>
                        </div>
                    </Fade>
                ))
            }
        </div>
    );
};

export default AllSpots;