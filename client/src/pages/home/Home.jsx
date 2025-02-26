import Countries from './Countries';
import PopularSpots from './PopularSpots';
import Slide from './Slider';

const Home = () => {
    return (
        <div>
            <div className='w-[90vw] mx-auto max-h-[90vh]'>
                <Slide />
            </div>
            <PopularSpots />
            <Countries />
        </div>
    );
};

export default Home;