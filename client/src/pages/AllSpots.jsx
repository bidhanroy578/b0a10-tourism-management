import { Link, useLoaderData } from "react-router-dom";

const AllSpots = () => {
    const allSpots = useLoaderData()
    console.log(allSpots)

    return (
        <div className="flex flex-auto flex-wrap gap-5 justify-center w-full my-16">
            {
                allSpots.map((spot, index) => (
                    <div key={index} className="card lg:card-side shadow-blue-300 shadow-lg flex-col lg:flex-row lg:w-md">
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
                ))
            }
        </div>
    );
};

export default AllSpots;