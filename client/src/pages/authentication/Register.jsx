// import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import bg2 from './../../assets/svg/bg2.svg';
import { useContext } from "react";
import { AuthContext } from "../../providers/Contexts";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
// import { AuthContext } from "../../context_provider/AuthContext";
// import { updateProfile } from "firebase/auth";
// import auth from "../../firebase/__config__";

const Register = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const { registerWithEmail, loginWithGoogle, } = useContext(AuthContext)

    function successAlert() {
        Swal.fire({
            title: "Successfull!",
            text: "Your account registered successfully",
            icon: "success",
            confirmButtonColor: "#01f702",
            confirmButtonText: "Ok"
        }).then((result) => {
            if (result.isConfirmed) {
                navigate(location?.state || '/')
            }
        });
    }
    function errorAlert(errorMessage) {
        Swal.fire({
            title: "Invalid email or password!!",
            text: errorMessage,
            icon: "error",
            confirmButtonColor: "#f60002",
            confirmButtonText: "Ok"
        });
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user)
                successAlert()
            }).catch(err => {
                console.error(err);
                errorAlert(err.message)
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name);
        if (password.length < 6) {
            errorAlert('password must be at least 6 characters')
            return
        }
        registerWithEmail(email, password)
            .then(result => {
                console.log(result.user)
                updateProfile(result.user, {
                    displayName: name,
                })
                    .then(() => {
                        successAlert()
                    }).catch((error) => {
                        console.error(error);
                        errorAlert(error.message)
                    })
            }).catch(err => {
                console.error(err);
                errorAlert(err.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg2})` }}>
            <div className="hero-content backdrop-blur-[3px] flex-col w-full max-w-md">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                </div>
                <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label text-black">Name</label>
                            <input type="text" name="name" className="input" placeholder="Name" />
                            <label className="fieldset-label text-black">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="fieldset-label text-black">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <button className="btn bg-blue-300 text-black mt-4">Register</button>
                            <p className="text-blue-400">Already have an account? <Link to='/login' className="link hover:text-red-400 font-rancho text-[15px]">login here</Link></p>
                        </fieldset>
                    </form>
                    <button onClick={handleGoogleLogin} className="btn bg-blue-300 text-black mt-4">Sign In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;