import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate()

    return (
        <div>
            <DotLottieReact
                src="https://lottie.host/4181a20a-b64b-46e4-90bf-3fc4ab6398f9/Wv6InLLEhV.lottie"
                loop={false}
                autoplay
            />
            <h1 className='absolute text-3xl top-1/4 w-full text-center backdrop-blur-2xl'>Error 404: Page Not Found <br /> <span onClick={() => navigate(-1)} className='link text-red-600 font-bold link-hover'>Go to previous page ...</span></h1>
        </div>
    );
};

export default Error;