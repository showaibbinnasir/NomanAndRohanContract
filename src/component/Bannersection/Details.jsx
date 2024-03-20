import cover from '../../assets/cover.png'
import phone from '../../assets/Symbol.png'
const Details = () => {
    return (
        <div className="mt-14 lg:mx-24 mx-5">
            <div className='flex flex-col-reverse lg:flex-row gap-10'>
                <img className='lg:w-[40%] w-[100%]' src={cover} alt="" />
                <div className='flex items-center'>
                    <div>
                        <h1 className='lg:text-3xl text-xl text-center font-bold'>Home & Office Maintenance Services in Abu-Dhabi</h1>
                        <h1 className='lg:text-xl text-md text-justify my-5'>Are you looking for a home renovation job? Need a fresh and refreshing paint job for your home? Or need any sort of MEP Services in Abu Dhabi? Then you have come to the right place.</h1>
                        <h1 className='lg:text-md text-sm text-justify'><span className='text-[#4C81D1] font-semibold'>Noman & Rohan General Contracting and Maintenance</span> stands as a premier maintenance Services in Abu Dhabi, distinguished by an extensive and varied portfolio encompassing apartments, villas, offices, schools, hospitals, and warehouses. Renowned as the top maintenance Service in Abu Dhabi , we invite you to collaborate with us, ensuring that you can consistently rely on our comprehensive service coverage.</h1>
                        <div className='flex justify-center'>
                            <div className='flex gap-4 mt-3'>
                                <div className='bg-[#F3F3F3] p-3 rounded-full'>
                                    <img className='lg:w-12 w-10' src={phone} alt="" />
                                </div>
                                <div className='flex items-center'>
                                    <div>
                                        <h1 className='lg:text-2xl text-lg font-semibold'>+971  050 603 6488</h1>
                                        <h1 className='lg:text-2xl text-lg font-semibold'>+971  055 91 2 9049</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;