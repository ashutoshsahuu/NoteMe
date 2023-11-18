import React from 'react'
import { MdSearch } from 'react-icons/md';

const Search = ({ searchNoteHandler }) => {

    const searchHandler = (event) => {
        searchNoteHandler(event.target.value)
    }

    return (
        <div>
            <div className='flex bg-slate-200 rounded-md p-2 px-4 mb-5 items-center mt-4 '>
                <MdSearch className='text-[1.4em]' />
                <input onChange={searchHandler} type="text" placeholder='Search Note' className='border-none w-full bg-slate-200/30 outline-none mx-1' />
            </div>
        </div>
    )
}

export default Search