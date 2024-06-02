import { useEffect } from "react";
import Bannner from "../../components/Bannner/Bannner";
import Countdown from "../Countdown/Countdown";
import Chooseprovider from "../chooseProvider/Chooseprovider";
import GetProject from "../Get_project/GetProject";
import Subcribe from "../Subscribe/Subcribe";
import Hired_developer from "../Hired_developer/Hired_developer";


const Home = () => {

    useEffect(() => {
        document.title = 'Task Titans - Home';
    })

    return (
        <div>
            <div className="md:max-w-7xl mx-auto">
                <Bannner></Bannner>
                <Countdown></Countdown>
            </div>
            
            <Chooseprovider></Chooseprovider>

            <div className="md:max-w-7xl mx-auto">
                <GetProject></GetProject>
            </div>

            <Subcribe></Subcribe>
            
            <div className="md:max-w-7xl mx-auto">
                <Hired_developer></Hired_developer>
            </div>
        </div>
    );
};

export default Home;