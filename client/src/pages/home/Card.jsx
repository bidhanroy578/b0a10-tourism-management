import PropTypes from 'prop-types';

const Card = ({ spot }) => {
    const { image, name } = spot;
    return (
        <div className="card dark:bg-slate-400 w-96 shadow-sm">
            <figure>
                <img src={image}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                   {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">2000 / year</div>
                    <div className="badge badge-outline">country</div>
                    <button className="btn dark:bg-black dark:text-white">Details</button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    spot: PropTypes.object,
};

export default Card;