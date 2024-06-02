

const SubscribeOption = () => {
    return (
        <div className="py-4 flex items-center">
            <input type="email" name="email" id="email" placeholder="email address" className="md:py-5 py-3 md:px-6 px-3 md:w-80 w-40 rounded-l-full border border-gray-300 focus:outline-none focus:border-primary_color shadow-xl transform hover:shadow-md transition duration-300"/>
            <button type="submit" className="btn md:btn-lg btn-md bg-primary_color text-neutral-50 hover:bg-primary_color-dark rounded-r-full ml-2 md:px-6 px-3 shadow-xl transform hover:shadow-md transition duration-300">
                Subscribe
            </button>
        </div>

    );
};

export default SubscribeOption;