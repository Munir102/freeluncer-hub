import { useEffect } from "react";
import Bannner from "../Bannner/Bannner";


const Home = () => {

    useEffect(() => {
        document.title = 'FH - Home';
    })

    return (
        <div>
            <Bannner></Bannner>
        </div>
    );
};

export default Home;