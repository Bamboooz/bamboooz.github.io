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
	        
            <div className="text-container">
               <p className="username">BAMBOOOZ</p>
               <div className="me-container">
                   <p className="who-am-i">web developer</p>
                   <button onClick={openGithubPage} className="page-button">
                       <PiGithubLogo size={32} />
                   </button>
                   <button onClick={openBuyMeACoffeePage} className="page-button">
                       <CiCoffeeBean size={32} />
                   </button>
               </div>
            </div>
        </div>
    );
}

export default App;
