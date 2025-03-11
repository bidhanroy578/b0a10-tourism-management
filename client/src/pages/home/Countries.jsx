// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import bg5 from './../../assets/svg/bg5.svg'
import { useEffect, useState } from 'react';
const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://travel-nest-sigma.vercel.app/countries')
            .then(res => res.json())
            .then(data => {
                setCountries(data)
            })
    }, [])
    return (
        <div>
            <div className='flex justify-center items-center w-full overflow-x-hidden'>
                <img src={bg5} className='flex-1/2 max-w-[50vw]' />
                <h3 className="text-xl lg:text-[4vw] min-w-[45vw] my-5 ">Countries we covered as of now</h3>
            </div>
            <div className="flex flex-auto flex-wrap justify-self-center justify-center gap-3 md:gap-8">
                {
                    countries.map((country, index) =>
                        <Link to={`/spots/${country}`} key={index} className='p-4 sm:px-14 sm:py-10 text-xl text-black font-bold bg-blue-300 rounded-xl hover:scale-105 active:scale-100 transition'>{country}</Link>
                    )
                }
            </div>
        </div>
    );
};

// Countries.propTypes = {

// };

export default Countries;