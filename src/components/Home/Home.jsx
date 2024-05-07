import { useEffect } from "react";
import Bannner from "../../components/Bannner/Bannner";
import Countdown from "../Countdown/Countdown";
import Chooseprovider from "../chooseProvider/Chooseprovider";


const Home = () => {

    useEffect(() => {
        document.title = 'Task Titans - Home';
    })

    return (
        <div>
            <Bannner></Bannner>
            <Countdown></Countdown>
            <Chooseprovider></Chooseprovider>
        </div>
    );
};

export default Home;