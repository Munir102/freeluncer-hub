import { useEffect } from "react";
import Bannner from "../../components/Bannner/Bannner";
import Countdown from "../../components/Countdown/Countdown";
import Chooseprovider from "../../components/chooseProvider/Chooseprovider";
import GetProject from "../../components/Get_project/GetProject";
import Subcribe from "../../components/Subscribe/Subcribe";
import Hired_developer from "../../components/Hired_developer/Hired_developer";
import TopReview from "../../components/TopReview/TopReview";


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

            <div className="md:max-w-7xl mx-auto">
                <TopReview></TopReview>
            </div>
        </div>
    );
};

export default Home;