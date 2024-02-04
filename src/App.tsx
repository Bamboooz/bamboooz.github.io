import "./App.css";
import { PiGithubLogo } from "react-icons/pi";

const App = () => {
    const openGithubPage = () => {
        window.open("https://github.com/Bamboooz", "_blank");
    }

    return (
        <div className="App">
            <section>
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
                       <p className="who-am-i">backend developer</p>
                       <button onClick={openGithubPage} className="github-button">
                           <PiGithubLogo size={32} />
                       </button>
                   </div>
                </div>
            </section>
        </div>
    );
}

export default App;
