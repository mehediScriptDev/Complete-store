import turkey from '../images/turkey.jpg'
import dubai from '../images/dubai.jpg'

const Feature = () => {
    return (
        <section className='mt-10 py-3 lg:mt-20'>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-3xl font-bold lg:text-4xl text-center '>Our latest <span className='border-b-8 rounded-lg border-bidcl'>visas</span></h1>
                <div className='grid grid-cols-3 gap-2 mt-10'>
                   <div className='col-span-2 rounded-md'>
                     <img className='h-full rounded-2xl' src={turkey} alt="" />
                   </div>
                    <img className='rounded-2xl ' src={dubai} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Feature;