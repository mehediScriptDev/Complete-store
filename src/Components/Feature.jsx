import turkey from '../images/turkey.jpg'
import dubai from '../images/dubai.jpg'
import anatalya from '../images/anatalya.jpg'
import anatalya2 from '../images/anatalya2.jpg'
import anatalya3 from '../images/3.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Feature = () => {
    return (
        <section className='mt-10 py-3 lg:mt-20'>
            <div className='w-10/12 mx-auto overflow-hidden'>
                <h1 className='text-3xl font-bold lg:text-4xl text-center '>Our latest <span className='border-b-8 rounded-lg border-bidcl'>visas</span></h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 mt-10 '>
                   <Link to={'/turkey/visa'} className='sm:col-span-2 lg:col-span-2 relative'>
                     <img className='h-full rounded-2xl' src={turkey} alt="place" />
                     <p className='absolute top-4 right-4 bg-gray-700 text-white p-3 rounded-xl text-md font-semibold'>TURKEY</p>
                     <p className='absolute bottom-6 left-5 text-2xl lg:text-4xl text-white/65 flex items-center gap-4'>Request Now <FaArrowRightLong /></p>
                   </Link>
                    <Link to={'/dubai/visa'} className='relative'>
                        <img className='rounded-2xl ' src={dubai} alt="place" />
                       <p className='absolute top-4 right-4 bg-gray-700 text-white p-3 rounded-xl text-md font-semibold'>DUBAI</p>
                        <p className='absolute bottom-6 left-5 text-2xl lg:text-3xl text-white/65 flex items-center gap-4'>Request Now <FaArrowRightLong /></p>
                    </Link>
                    <Link to={'/turkey/visa'} className='relative'>
                        <img className='rounded-2xl w-full object-cover' src={anatalya} alt="" />
                       <p className='absolute top-4 right-4 bg-gray-700 text-white p-3 rounded-xl text-md font-semibold'>ANATALYA</p>
                        <p className='absolute bottom-6 left-5 text-2xl lg:text-3xl text-white/65 flex items-center gap-4'>Request Now <FaArrowRightLong /></p>
                    </Link>
                    <Link to={'/turkey/visa'} className='relative'>
                        <img className='rounded-2xl w-full object-cover' src={anatalya2} alt="" />
                       <p className='absolute top-4 right-4 bg-gray-700 text-white p-3 rounded-xl text-md font-semibold'>KIRMAN</p>
                        <p className='absolute bottom-6 left-5 text-2xl lg:text-3xl text-white/65 flex items-center gap-4'>Request Now <FaArrowRightLong /></p>
                    </Link>
                    <Link to={'/turkey/visa'} className='relative'>
                        <img className='rounded-2xl w-full object-cover' src={anatalya3} alt="" />
                       <p className='absolute top-4 right-4 bg-gray-700 text-white p-3 rounded-xl text-md font-semibold'>LOPSAN</p>
                        <p className='absolute bottom-6 left-5 text-2xl lg:text-3xl text-white/65 flex items-center gap-4'>Request Now <FaArrowRightLong /></p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Feature;