import { Link, Outlet, useLocation, useNavigate } from "react-router";
import bg2 from './../../assets/svg/bg2.svg';
import { useContext } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../../providers/Contexts";

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const { loginWithGoogle, loginWithEmail, } = useContext(AuthContext)

    function successAlert() {
        Swal.fire({
            title: "Successfull!",
            text: "You are logged in successfully",
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
            .then(() => {
                successAlert()
            }).catch(err => {
                console.error(err);
                errorAlert(err.message)
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            errorAlert("Password should be at least 6 characters long.")
            return
        }
        loginWithEmail(email, password)
            .then(() => {
                successAlert()
            }).catch(err => {
                console.error(err);
                errorAlert(err.message)
            })
    }
    return (
        <>
            <Outlet></Outlet>
            <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg2})` }}>
                <div className="hero-content backdrop-blur-[3px] flex-col w-full max-w-md">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login Now!</h1>
                    </div>
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" required />
                                <label className="fieldset-label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" required />
                                {/* <div><a className="link link-hover text-amber-200 font-bold">Forgot password?</a></div> */}
                                <button className="btn bg-blue-300 text-black mt-4">Login</button>
                                <p className="text-blue-400">New here? <Link to='/register' className="link hover:text-red-400 font-rancho text-[15px]">create new account</Link></p>
                            </fieldset>
                        </form>
                        <button onClick={handleGoogleLogin} className="btn bg-blue-300 text-black mt-4">Sign In With Google</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;