import './App.css';
import React from 'react';
import {TranslatePage} from "./pages/TranslatePage";
import {HashRouter as Router, Route, Routes} from "react-router-dom";

export class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!window.localStorage.getItem("origin language")) {
            window.localStorage.setItem("origin language", "English")
        }
        if (!window.localStorage.getItem("target language")) {
            window.localStorage.setItem("target language", "Russian")
        }
    }

    render() {
    return (
        <Router>
          <div className="App">
            <main>
              <Routes>
                <Route path='' element={<TranslatePage/>}/>
              </Routes>
            </main>
          </div>
        </Router>
    )
  }



}

export default App;