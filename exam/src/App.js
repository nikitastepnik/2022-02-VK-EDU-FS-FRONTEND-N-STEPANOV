import './App.css';
import React from 'react';
import {TranslatePage} from "./pages/TranslatePage";
import {HashRouter as Router, Route, Routes} from "react-router-dom";

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.translateMessage = this.translateMessage.bind(this)
    }

  translateMessage(event) {
      event.preventDefault()
  }

  render() {
    return (
        <Router>
          <div className="App">
            <main>
              <Routes>
                <Route path='' element={<TranslatePage/>} translateMessage={this.translateMessage}/>
              </Routes>
            </main>
          </div>
        </Router>
    )
  }



}

export default App;