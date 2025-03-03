import { useLoaderData } from "react-router-dom";

const Details = () => {
    const { country, summer, winter, spot_name, location, cost, duration, image, visitor, usr_email, description, } = useLoaderData()
    
    return (
        <div className="mb-10">
            <img className="w-full" src={image} />
            <h3 className=" text-center uppercase text-4xl my-5">{spot_name}</h3>
            <p>Location: {location}</p>
            <p>Country: {country}</p>
            <p>Average cost: 💲{cost}</p>
            <p>Tour Duration: {duration} days</p>
            <p>Visitors per year: {visitor}</p>
            <p> Seasons : {summer && 'Summer '} {winter && 'Winter'}</p>
            <p>Added By: {usr_email}</p>
            <p>Description: {description}</p>
        </div>
    );
};

export default Details;