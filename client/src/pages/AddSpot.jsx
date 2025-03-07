import { useContext } from "react";
import { AuthContext } from "../providers/Contexts";

const AddSpot = () => {

    const { user } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const spot_name = form.spot_name.value
        const country = form.country.value
        const location = form.location.value
        const cost = form.cost.value
        const duration = form.duration.value
        const image = form.image.value
        const visitor = form.visitor.value
        const usr_email = form.usr_email.value
        const usr_name = form.usr_name.value
        const description = form.description.value
        const summer = form.summer.checked
        const winter = form.winter.checked
        const newSpot = { country, summer, winter, spot_name, location, cost, duration, image, visitor, usr_email, usr_name, description, }

        fetch(`https://travel-nest-sigma.vercel.app/spots`, {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-[90vh]">
                <div className="hero-content flex flex-col space-y-6">
                    <div className="text-center ">
                        <h3 className="text-5xl font-bold">Please  fill up the details <br /> to add a place in the list</h3>
                    </div>
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl text-xl">
                        <div className="card-body text-lg">
                            <form onSubmit={handleSubmit} className="fieldset">
                                <inputset className='md:flex gap-5'>
                                    <inputset className='w-full space-y-3'>
                                        <label className="fieldset-label">Tourists spot name</label>
                                        <input name="spot_name" type="text" className="input" placeholder="Tourists spot name" required />
                                        <label className="fieldset-label">Country name</label>
                                        <input name="country" type="text" className="input" placeholder="Country name" required />
                                        <label className="fieldset-label">Location</label>
                                        <input name="location" type="text" className="input" placeholder="Location" required />
                                        <label className="fieldset-label">Average cost</label>
                                        <input name="cost" type="text" className="input" placeholder="Average cost" required />
                                    </inputset>
                                    <inputset className='w-full space-y-3'>
                                        <label className="fieldset-label">Travel duration</label>
                                        <input name="duration" type="text" className="input" placeholder="Travel duration" required />
                                        <label className="fieldset-label">Visitors per year</label>
                                        <input name="visitor" type="text" className="input" placeholder="Visitors per year" required />
                                        <label className="fieldset-label">User Email</label>
                                        <input name="usr_email" type="text" defaultValue={user?.email || ''} className="input" placeholder="User Email" required />
                                        <label className="fieldset-label">User name</label>
                                        <input name="usr_name" type="text" defaultValue={user?.displayName || ''} className="input" placeholder="User name" required />
                                    </inputset>
                                </inputset>
                                <label className="fieldset-label">image url</label>
                                <input name="image" type="text" className="input w-full" placeholder="image url" required />
                                {/* check box */}
                                <fieldset className="fieldset flex gap-5 text-md p-4 bg-base-100 border border-base-300 rounded-box">
                                    <legend className="fieldset-legend">Seasonality</legend>
                                    <label className="fieldset-label">
                                        <input type="checkbox" name="summer" value='summer' defaultChecked className="checkbox" />
                                        Summer
                                    </label>
                                    <label className="fieldset-label">
                                        <input type="checkbox" name="winter" value='winter' defaultChecked className="checkbox" />
                                        Winter
                                    </label>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Description of the spot</legend>
                                    <textarea name="description" className="textarea h-30 w-full" placeholder="Description"></textarea>
                                </fieldset>
                                {/* <label className="fieldset-label">Email</label>
                                <input type="text" className="input" placeholder="Email" /> */}
                                {/* <label className="fieldset-label">Email</label>
                                <input type="text" className="input" placeholder="Email" /> */}
                                <button className="btn btn-neutral mt-4">Add Place</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSpot;