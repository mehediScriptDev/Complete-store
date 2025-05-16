import { Link } from 'react-router-dom';
import image from '../images/error-404.gif'
import Nav from './Nav';

const Error = () => {
    return (
        <section className='w-10/12 mx-auto flex flex-col justify-center items-center mt-10'>
          
            <div className='flex justify-center items-center'><img className='' src={image} alt="" /></div>
            <Link to={'/'} className='btn '>back</Link>
        </section>
    );
};

export default Error;