// import PropTypes from 'prop-types';
import bg5 from './../../assets/svg/bg5.svg'
const Countries = () => {

    const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Un-bangladesh.png/200px-Un-bangladesh.png'
    return (
        <div>
            <div className='flex justify-center items-center w-full overflow-x-hidden'>
                <img src={bg5} className='flex-1/2 max-h-screen'/>
                <h3 className="text-[4vw] my-5 ">Countries we covered as of now</h3>
            </div>
            <div className="flex flex-auto flex-wrap justify-self-center justify-center gap-8">
                {/* card 1 */}
                <div className="w-60 h-72 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
                    <div className="font-semibold text-xl text-black h-full text-center content-center hover:backdrop-blur-[2px]">
                        <h3>Bangladesh</h3>
                        <p>cox&apos;s bazar </p>
                    </div>
                </div>
                {/* card 1 */}
                <div className="w-60 h-72 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
                    <div className="font-semibold text-xl text-black h-full text-center content-center hover:backdrop-blur-[2px]">
                        <h3>Bangladesh</h3>
                        <p>cox&apos;s bazar </p>
                    </div>
                </div>
                {/* card 1 */}
                <div className="w-60 h-72 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
                    <div className="font-semibold text-xl text-black h-full text-center content-center hover:backdrop-blur-[2px]">
                        <h3>Bangladesh</h3>
                        <p>cox&apos;s bazar </p>
                    </div>
                </div>
                {/* card 1 */}
                <div className="w-60 h-72 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
                    <div className="font-semibold text-xl text-black h-full text-center content-center hover:backdrop-blur-[2px]">
                        <h3>Bangladesh</h3>
                        <p>cox&apos;s bazar </p>
                    </div>
                </div>
                {/* card 1 */}
                <div className="w-60 h-72 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
                    <div className="font-semibold text-xl text-black h-full text-center content-center hover:backdrop-blur-[2px]">
                        <h3>Bangladesh</h3>
                        <p>cox&apos;s bazar </p>
                    </div>
                </div>
                {/* card 1 */}
                <div className="w-60 h-72 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
                    <div className="font-semibold text-xl text-black h-full text-center content-center hover:backdrop-blur-[2px]">
                        <h3>Bangladesh</h3>
                        <p>cox&apos;s bazar </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Countries.propTypes = {

// };

export default Countries;