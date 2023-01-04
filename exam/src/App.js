import './App.css';
import React from 'react';
import {HashRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {TranslatePage} from "./pages/TranslatePage";
import {HistoryPage} from "./pages/HistoryPage"

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
                            <Route path='' element={<Navigate to="translate"/>}/>
                            <Route path={"translate"} element={<TranslatePage></TranslatePage>}></Route>
                            <Route path={"history"} element={<HistoryPage></HistoryPage>}></Route>
                        </Routes>
                    </main>
                </div>
            </Router>
        )
    }


}

export default App;