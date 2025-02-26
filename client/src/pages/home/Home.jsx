import Countries from './Countries';
import PlanAtrip from './PlanAtrip';
import PopularSpots from './PopularSpots';
import Slide from './Slider';

const Home = () => {
    return (
        <>
            <div className='w-[90vw] mx-auto max-h-[90vh]'>
                <Slide />
            </div>
            <PopularSpots />
            <Countries />
            <PlanAtrip />
        </>
    );
};

export default Home;