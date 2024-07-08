import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../stateManagement/Store';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import { update_user } from '../stateManagement/user_slice';
const SignUpForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const modeBit = useSelector((state: RootState) => state.themeMode);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!name || !email || !password) {
            setError('Please fill in all fields');
            return;
        } else {
            setError('');
            let user = {
                name: name,
                email: email,
                password: password
            }
            await axios.post('http://localhost:3000/signup', user)
                .then(response => {
                    let { name, profile_pic } = response.data
                    dispatch(update_user(response.data)) 
                    console.log({ name, profile_pic })
                    navigate('/');
                })
                .catch(error => toast.error(error.response.data.message))

        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="flex items-center justify-center min-h-[86.5vh]">
            <Toaster />
            <form onSubmit={handleSubmit} className={`${modeBit ? "bg-black shadow-md shadow-[#2563eb] border-[#2563eb] border" : "bg-white"} p-6 rounded-md shadow-black shadow-lg w-full max-w-sm`}>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#2563eb]">Sign Up</h2>
                {error && <div className="mb-4 text-red-500">{error}</div>}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`${modeBit ? "bg-[#1a1f2c]" : "bg-white border"} mt-1 block w-full px-3 py-2 focus:border focus:border-[#2563eb] rounded-lg shadow-sm focus:outline-none focus:ring-2`}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`${modeBit ? "bg-[#1a1f2c]" : "bg-white border"} mt-1 block w-full px-3 py-2 focus:border focus:border-[#2563eb] rounded-lg shadow-sm focus:outline-none focus:ring-2`}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`${modeBit ? "bg-[#1a1f2c]" : "bg-white border"} mt-1 block w-full px-3 py-2 focus:border focus:border-[#2563eb] rounded-lg shadow-sm focus:outline-none focus:ring-2`}
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            {passwordVisible
                                ? <FaRegEyeSlash />
                                : <FaRegEye />
                            }
                        </button>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <Link to={'/signin'} className='w-fit px-4 py-2 hover:text-white hover:bg-[#2563eb] border rounded-lg focus:outline-none focus:ring-2'>SignIn</Link>
                    <button
                        type="submit"
                        className="w-fit px-4 py-2 rounded-lg focus:outline-none focus:ring-2 bg-[#2563eb] bg-opacity-[0.1] hover:bg-opacity-[0.9] hover:text-white font-bold"
                    >
                        <img src="a.svg" alt="" />
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
