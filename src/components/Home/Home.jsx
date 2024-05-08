import { useEffect } from "react";
import Bannner from "../../components/Bannner/Bannner";
import Countdown from "../Countdown/Countdown";
import Chooseprovider from "../chooseProvider/Chooseprovider";
import GetProject from "../Get_project/GetProject";


const Home = () => {

    useEffect(() => {
        document.title = 'Task Titans - Home';
    })

    return (
        <div>
            <Bannner></Bannner>
            <Countdown></Countdown>
            <Chooseprovider></Chooseprovider>
            <GetProject></GetProject>
        </div>
    );
};

export default Home;