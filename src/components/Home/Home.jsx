import { useEffect } from "react";
import Bannner from "../Bannner/Bannner";


const Home = () => {

    useEffect(() => {
        document.title = 'Task Titans - Home';
    })

    return (
        <div>
            <Bannner></Bannner>
        </div>
    );
};

export default Home;