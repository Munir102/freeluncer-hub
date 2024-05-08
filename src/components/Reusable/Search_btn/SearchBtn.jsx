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
        <div>
            <form className='border rounded-full border-primary_color md:p-2 p-2 md:w-4/5 w-full flex items-center md:my-8 my-2 shadow-lg' onSubmit={handleSubmit}>
                    <select value={searchType} onChange={handleSearchTypeChange} className='md:px-4 px-1 py-2 rounded-l-full border-primary_color bg-white text-primary_color focus:outline-none mb-2 md:mb-0 md:text-base text-sm' required>
                        <option value="" disabled>Select</option>card relative w-96 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105
                        <option value="Projects">Projects</option>
                        <option value="Freelancers">Freelancers</option>
                    </select>
                    <input type="text" placeholder="Keyword" name="keyword" className='outline-none md:pl-6 pl-0 bg-white border-l-0 border-primary_color border-solid rounded-r-full flex-1 md:text-base text-sm' />
                    <button type="submit" className="btn md:btn-lg btn-md bg-primary_color text-neutral-50 rounded-full md:px-10 md:py-2 md:mr-2 mr-0">Search</button>
                </form>
        </div>
    );
};

export default SearchBtn;