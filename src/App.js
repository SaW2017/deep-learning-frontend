import "./App.css";
import Header from "./components/Header";
import AddConcept from "./components/AddConcept";
import Searchbar from "./components/Searchbar";
import {useState} from "react"; // for http requests

function App() {

    return (
        <div className="App">
            <Header/>
            <Searchbar/>
        </div>
    );
}

export default App;
