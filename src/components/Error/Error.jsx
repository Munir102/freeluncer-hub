
const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl font-extrabold text-gray-700 mb-6">404 - Not Found</h1>
            <p className="text-gray-600 mb-4">Oops! The page you are looking for does not exist.</p>
            <p className="text-gray-600">Return <a href="/" className="text-blue-500 hover:underline">home</a>.</p>
        </div>
    );
};

export default Error;