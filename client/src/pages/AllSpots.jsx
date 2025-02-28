import { useLoaderData } from "react-router-dom";

const AllSpots = () => {
    const allSpots = useLoaderData()
    console.log(allSpots)
    // const allSpots = [
    //     { "name": "Angkor Wat", "image": "https://www.goworldtravel.com/wp-content/uploads/2023/02/angkor-wat-travel.jpg" },
    //     { "name": "Angkor Wat", "image": "https://www.goworldtravel.com/wp-content/uploads/2023/02/angkor-wat-travel.jpg" },
    //     { "name": "Angkor Wat", "image": "https://www.goworldtravel.com/wp-content/uploads/2023/02/angkor-wat-travel.jpg" },
    //     { "name": "Angkor Wat", "image": "https://www.goworldtravel.com/wp-content/uploads/2023/02/angkor-wat-travel.jpg" },
    //     { "name": "Angkor Wat", "image": "https://www.goworldtravel.com/wp-content/uploads/2023/02/angkor-wat-travel.jpg" },
    //     { "name": "Angkor Wat", "image": "https://www.goworldtravel.com/wp-content/uploads/2023/02/angkor-wat-travel.jpg" },
    //     { "name": "Angkor Wat", "image": "https://www.goworldtravel.com/wp-content/uploads/2023/02/angkor-wat-travel.jpg" },
    //     { "name": "Angkor Wat", "image": "https://www.goworldtravel.com/wp-content/uploads/2023/02/angkor-wat-travel.jpg" },
    // ]

    return (
        <div className="flex flex-auto flex-wrap gap-5 justify-center w-full my-16">
            {
                allSpots.map((spot, index) => (
                    <div key={index} className="card card-side shadow-blue-300 shadow-lg ">
                        <figure className='flex-1/2 max-w-sm object-cover'>
                            <img src={spot.image} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{spot.spot_name}</h2>
                            <p>average cost here</p>
                            <p><span> 10000/year </span> <span> 7 days plan </span> </p>
                            <div className="card-actions">
                                <div className="badge badge-outline">summer</div>
                                <div className="badge badge-outline">winter</div>
                            </div>
                            <div className="card-actions">
                                <button className="btn w-full bg-blue-400">Details</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AllSpots;