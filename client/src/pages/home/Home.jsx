import { Fade } from 'react-awesome-reveal';
import Contact from './Contact';
import Countries from './Countries';
import PlanAtrip from './PlanAtrip';
import PopularSpots from './PopularSpots';
import Slide from './Slider';

const Home = () => {
    return (
        <Fade
            cascade
            damping={0.09}
            triggerOnce
        >
            <div className='w-[90vw] mx-auto max-h-[90vh]'>
                <Slide />
            </div>
            <PopularSpots />
            <Countries />
            <PlanAtrip />
            <Contact />
        </Fade>
    );
};

export default Home;