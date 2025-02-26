// import PropTypes from 'prop-types';

const Countries = () => {

    const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Un-bangladesh.png/200px-Un-bangladesh.png'
    return (
        <div>
            <h3 className="text-5xl text-center my-10">All Listed Countries</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-self-center gap-8">
                {/* card 1 */}
                <div className="w-60 h-72 bg-cover bg-center" style={{backgroundImage : `url(${image})`}}>
                    <div className="font-semibold text-xl text-black h-full text-center content-center hover:backdrop-blur-[2px]">
                        <h3>Bangladesh</h3>
                        <p>cox&apos;s bazar </p>
                    </div>
                </div>
                {/* card 1 */}
                <div className="w-60 h-72 bg-cover bg-center" style={{backgroundImage : `url(${image})`}}>
                    <div className="font-semibold text-xl text-black h-full text-center content-center hover:backdrop-blur-[2px]">
                        <h3>Bangladesh</h3>
                        <p>cox&apos;s bazar </p>
                    </div>
                </div>
                {/* card 1 */}
                <div className="w-60 h-72 bg-cover bg-center" style={{backgroundImage : `url(${image})`}}>
                    <div className="font-semibold text-xl text-black h-full text-center content-center hover:backdrop-blur-[2px]">
                        <h3>Bangladesh</h3>
                        <p>cox&apos;s bazar </p>
                    </div>
                </div>
                {/* card 1 */}
                <div className="w-60 h-72 bg-cover bg-center" style={{backgroundImage : `url(${image})`}}>
                    <div className="font-semibold text-xl text-black h-full text-center content-center hover:backdrop-blur-[2px]">
                        <h3>Bangladesh</h3>
                        <p>cox&apos;s bazar </p>
                    </div>
                </div>
                {/* card 1 */}
                <div className="w-60 h-72 bg-cover bg-center" style={{backgroundImage : `url(${image})`}}>
                    <div className="font-semibold text-xl text-black h-full text-center content-center hover:backdrop-blur-[2px]">
                        <h3>Bangladesh</h3>
                        <p>cox&apos;s bazar </p>
                    </div>
                </div>
                {/* card 1 */}
                <div className="w-60 h-72 bg-cover bg-center" style={{backgroundImage : `url(${image})`}}>
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