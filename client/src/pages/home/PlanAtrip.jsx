import bg6 from '../../assets/svg/bg6.svg'
const PlanAtrip = () => {
    return (
        <div>
            <div className='flex w-full justify-self-center items-center p-2'>
                <h3 className='text-[4vw] min-w-[45vw]'>Plan a trip for your Desired Destination with Us</h3>
                <img src={bg6} className='flex-1/2 max-w-[45vw]' />
            </div>
        </div>
    );
};

export default PlanAtrip;