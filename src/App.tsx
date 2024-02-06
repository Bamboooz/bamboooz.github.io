import "./App.css";
import { PiGithubLogo } from "react-icons/pi";
import { CiCoffeeBean } from "react-icons/ci";

const App = () => {
    const openGithubPage = () => {
        window.open("https://github.com/Bamboooz", "_blank");
    }

    const openBuyMeACoffeePage = () => {
        window.open("https://www.buymeacoffee.com/Bamboooz", "_blank"); 
    }

    return (
        <div className="App">
            {/* stars */}
            <div className="star-container">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
	        
            <div className="text-container">
               <p className="username">BAMBOOOZ</p>
               <div className="me-container">
                   <p className="who-am-i">web developer</p>
                   <button onClick={openGithubPage} className="page-button">
                       <PiGithubLogo className="icon" />
                   </button>
                   <button onClick={openBuyMeACoffeePage} className="page-button">
                       <CiCoffeeBean className="icon" />
                   </button>
               </div>
            </div>
        </div>
    );
}

export default App;
