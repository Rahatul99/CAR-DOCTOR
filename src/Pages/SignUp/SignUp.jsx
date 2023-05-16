import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { authContext } from '../../Providers/AuthProviders';

const SignUp = () => {

    const {createUser} = useContext(authContext);


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const conformPassword = form.conformPassword.value;
        console.log(name, email, password, conformPassword);

        createUser(email, password)
        .then(res => {
            const user = res.user;
            console.log(user);
        })
        .then(error => console.log(error))
    }
    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-12">
        <img src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-3xl text-center font-bold">Sign Up</h1>
        <form onSubmit={handleSignUp}>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Name" name='name' className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" name='email' className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name='password' className="input input-bordered" />
            </div>
            <div className='form-control'>
                <label className="label">
                <span className="label-text">Conform Password</span>
                </label>
                <input type="password" placeholder="Conform Password" name='conformPassword' className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
            <input type="submit" value="signUp" className="btn btn-primary" />
            </div>
        </form>
        <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignUp;