import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ spot }) => {
    const { image, spot_name, visitor, location, country, _id } = spot;
    console.log(spot)
    return (
        <div className="card dark:bg-slate-400 w-2xs md:w-xs lg:w-sm shadow-blue-400 shadow-md">
            <figure>
                <img src={image} className='h-52 w-full object-cover object-center' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{spot_name}</h2>
                <p>{location} </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{visitor} / year</div>
                    <div className="badge badge-outline">{country}</div>
                    <Link to={`/details/${_id}`} className="btn btn-xs bg-blue-400"> Details </Link>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    spot: PropTypes.object,
};

export default Card;