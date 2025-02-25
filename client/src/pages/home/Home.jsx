import Slide from './Slider';

const Home = () => {
    return (
        <div>
            this is home component

            <div className='w-[90vw] mx-auto max-h-[90vh] border-8 border-r-red-600 text-black'>
                <Slide />
            </div>
        </div>
    );
};

export default Home;