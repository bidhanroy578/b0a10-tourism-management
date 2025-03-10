import { useEffect, useState } from 'react';
import bg3 from '../../assets/svg/bg3.svg';
import Card from './Card';
const PopularSpots = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('https://travel-nest-sigma.vercel.app/popular_spots')
            .then(res => res.json())
            .then(data => {
                setList(data)
                console.log(data)
            })
    }, [])

    return (
        <div className='mt-16'>
            <div className='flex justify-center items-center w-full p-4'>
                <h3 className='text-[4vw] w-full min-w-[45vw]'>Pupular tourists spots around the South East Asia</h3>
                <img src={bg3} className='max-w-[50vw] flex-1/2' />
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