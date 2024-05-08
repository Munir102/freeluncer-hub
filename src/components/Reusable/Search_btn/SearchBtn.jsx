import { useState } from "react";

const SearchBtn = () => {

    const [searchType, setSearchType] = useState('');

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchType);
    };


    return (
        <div className="md:p-0 p-4">
            <form className='border md:rounded-full rounded-lg border-primary_color md:p-2 p-2 md:w-4/5 w-full flex flex-col md:flex-row items-center md:my-8 my-2 shadow-lg' onSubmit={handleSubmit}>
                <select 
                    value={searchType} 
                    onChange={handleSearchTypeChange} 
                    className='md:px-4 px-3 py-2 rounded-l-full border-primary_color bg-white text-primary_color focus:outline-none mb-2 md:mb-0 md:text-base text-sm w-full md:w-auto'
                    required
                >
                    <option value="" disabled>Select</option>
                    <option value="Projects">Projects</option>
                    <option value="Freelancers">Freelancers</option>
                </select>
                <input 
                    type="text" 
                    placeholder="Keyword" 
                    name="keyword" 
                    className='outline-none md:pl-6 pl-3 bg-white border-l-0 border-primary_color border-solid rounded-r-full flex-1 md:text-base text-sm md:ml-0 ml-2 mb-2 md:mb-0 w-full md:w-auto'
                />
                <button 
                    type="submit" 
                    className="btn md:btn-lg btn-md bg-primary_color text-neutral-50 md:text-lg text-base rounded-full md:px-6 px-20 py-2"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBtn;