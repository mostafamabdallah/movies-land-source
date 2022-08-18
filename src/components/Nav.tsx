import React from 'react'
import { Link } from 'react-router-dom'

const Nav: React.FC = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex w-11/12 mx-auto flex-row py-6 items-center justify-between'>
                <div className='w-1/2 md:w-2/12'>
                    <Link to ="/" className='text-3xl font-bold'>Movies<span className='text-primary'>Land</span></Link>
                </div>
                <div className='w-1/2 md:w-2/12 text-right'>
                    <Link to ="/" className='text-xl '>Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav