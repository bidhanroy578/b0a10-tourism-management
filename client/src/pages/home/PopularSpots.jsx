import bg3 from '../../assets/svg/bg3.svg';
import Card from './Card';
const PopularSpots = () => {
    let list = [
        { "name": "Cox's Bazar", "image": "https://www.laurewanders.com/wp-content/uploads/2023/02/Backpacking-in-Bangladesh-00009.jpg" },
        { "name": "Angkor Wat", "image": "https://www.goworldtravel.com/wp-content/uploads/2023/02/angkor-wat-travel.jpg" },
        { "name": "Bali", "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1404/Pura-Saraswati-Temple,-Ubud,-Bali.jpg" },

    ]
    return (
        <div className='mt-16'>
            <div className='flex justify-center items-center w-full overflow-x-hidden'>
                <h3 className='text-[4vw]'>Pupular tourists spots around the South East Asia</h3>
                <img src={bg3} className='flex-1/2 max-h-screen' />
            </div>
            {/* List of popular tourist spots */}
            <div className='flex flex-auto flex-wrap justify-center justify-self-center gap-5'>
                {
                    list.map((spot, index) => <Card key={index} spot={spot} />)
                }
            </div>
        </div>
    );
};

export default PopularSpots;