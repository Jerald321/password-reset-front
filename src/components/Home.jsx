
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
    return (
        <div className=' flex flex-col mx-auto h-screen items-center justify-center'>
            <h1 className='text-green-700 text-4xl font-extrabold'> Welcome to our page</h1>
            <p className='text-green-700 text-2xl my-5'>login to access your account and explore all our features.</p>
            <button onClick={()=>{navigate('/Login')}}
             type="button" class="text-white text-xl bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full  px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>



        </div>
    )
}

export default Home