import React from 'react';

const Funding = () => {
    return (
        <div className='flex justify-center h-screen p-10 gap-4'>
           <input type="text" placeholder="Secondary" className="input input-secondary" />
            <button className="btn btn-soft btn-secondary">Donate</button>
        </div>
    );
};

export default Funding;