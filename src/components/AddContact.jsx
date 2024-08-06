import React from 'react';

class AddContact extends React.Component {
    render() {
        return (
            <div className="flex flex-col items-center mt-10">
                <div className='flex items-start mb-5'>
                    <h2 className='text-3xl font-bold'>Add Contact</h2>
                </div>
                <form action="" className='flex flex-col justify-center items-center w-[400px] p-5 bg-white shadow-lg rounded-lg'>
                    <div className='flex flex-col items-start mb-4 w-full'>
                        <label htmlFor="name" className='text-lg mb-1'>Name</label>
                        <input type="text" name='name' className='border border-gray-300 rounded-md p-2 w-full' />
                    </div>
                    <div className='flex flex-col items-start mb-4 w-full'>
                        <label htmlFor="contact" className='text-lg mb-1'>Number</label>
                        <input type="number" className='border border-gray-300 rounded-md p-2 w-full' />
                    </div>
                    <button type="submit" className='bg-blue-500 text-white rounded-md p-2 w-full hover:bg-blue-600'>Add Contact</button>
                </form>
            </div>
        );
    }
}

export default AddContact;
