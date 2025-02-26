import bg1 from './../../assets/svg/bg1.svg';
const Contact = () => {
    return (
        <div className='bg-cover' style={{backgroundImage : `url(${bg1})`}}>
            <h3 className='text-center text-5xl'>Contact with Us</h3>
            <form className="max-w-md mx-auto">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Your name</legend>
                    <input name="name" type="text" className="input" placeholder="Your name" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Your name</legend>
                    <input name="name" type="text" className="input" placeholder="Your name" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Your name</legend>
                    <input name="name" type="text" className="input" placeholder="Your name" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Your name</legend>
                    <input name="name" type="text" className="input" placeholder="Your name" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Your name</legend>
                    <input name="name" type="text" className="input" placeholder="Your name" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Your bio</legend>
                    <textarea className="textarea h-24" placeholder="your query"></textarea>
                </fieldset>
                <input type="submit" className="btn btn-lg w-full btn-success" value="Submit" />
            </form>
        </div>
    );
};

export default Contact;