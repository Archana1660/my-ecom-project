import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { getLoginDetail } from '../../../store/LoginSlice';
import { WorkInProgress } from '../../molecules/WorkInProgress';
import loginPagePic from '../../../assets/loginShopping.jpg'
import facebookLogo from '../../../assets/facebook-logo.png'
import gmailLogo from '../../../assets/gmail-logo.png';
import { useValidCheckUserNamePassword } from './validUserNamePassword';

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userCredential, setUserCredential] = useState({ username: null, password: null })

    const { loginData } = useSelector(state => state.LOGIN)

    let isDisabled = useValidCheckUserNamePassword(userCredential) ?? true;

    const validateUser = (token) => {
        if (token === true) {
            navigate('/')     
        }
}
    const handleFormSubmit = (e) => {
        e.preventDefault()
        dispatch(getLoginDetail(userCredential))
          if (loginData?.token) {
              window.localStorage.setItem('token', loginData.token)
              validateUser(loginData?.token)
          }
    }


    return (
        <div className='flex items-center justify-center min-h-screen bg-rose-50'>
            <div className='relative flex flex-col m-6 space-y-4 bg-white shadow-2xl rounded-lg md:flex-row md:space-y-0 '>
                <div className='p-10 flex flex-col space-y-5 md:p-20'>
                    <h2 className='font-mono font-bold text-4xl mt-4'>Log In</h2>
                    <p className='max-w-sm font-sans font-light text-gray-500'>Get all the exciting product in discounts! </p>
                    <form action='' method='post' onSubmit={(e) => handleFormSubmit(e)}>
                        <input type='text' className='border border-gray-600 rounded-lg p-3 w-full placeholder:font-sans placeholder:font-light' placeholder='Enter your user name' onChange={(e) => {
                            return setUserCredential({ ...userCredential, username: e.target.value })
                        }} />
                        <input type='password' className='border border-gray-600 rounded-lg p-3 w-full placeholder:font-sans placeholder:font-light my-5' placeholder='Enter your password' onChange={(e) => {
                            return setUserCredential({ ...userCredential, password: e.target.value })
                        }} />
                        <div className='flex flex-col items-center justify-between space-y-3 text-cyan-700 font-thin md:flex-row md:space-y-0'>
                            <Link className='group relative'>
                                <WorkInProgress />
                                <p>Forgot password</p>
                            </Link>
                            <button className='bg-cyan-500 text-white px-5 py-3 rounded-lg w-full md:w-auto active:bg-cyan-700 disabled:bg-cyan-800' disabled={isDisabled}>Next</button>
                        </div>
                    </form>

                    <p className='border-t text-gray-500 text-center p-2 '> or login with</p>

                    <div className='flex flex-col items-center space-y-5 md:flex-row md:space-y-0 justify-between md:px-5'>
                        <Link className='flex items-center group relative'><WorkInProgress /><img src={facebookLogo} alt="facebook" className='w-10 h-10 mr-2  group-hover:scale-105 duration-200' /> Facebook</Link>
                        <Link className='flex items-center group relative'><WorkInProgress /><img src={gmailLogo} alt="facebook" className='max-w-auto h-10  group-hover:scale-105 duration-200' /> Google</Link>
                    </div>
                </div>
                <img className='w-[430px] hidden md:block rounded-r-xl' src={loginPagePic} alt="shopping" />
            </div>
        </div >
    )
}

export default LoginPage