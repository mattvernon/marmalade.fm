/*global Mixcloud*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import FeaturedMix from './FeaturedMix';
import Header from './Header';

const Home = () => <h1>Home</h1>
const Archive = () => <h1>Archive</h1>
const About = () => <h1>About</h1>

class App extends Component {
  mountAudio = async () => {
    const widget = Mixcloud.PlayerWidget(this.player);
    await widget.ready;
    await widget.play();
    console.log(widget);
  };

  componentDidMount() {
    this.mountAudio()
  }

  render() {
    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            <FeaturedMix />
            <div className="w-50-l relative z-1">
              <Header />
              {/* Routed Page */}
              <Route exact path="/" component={Home} />
              <Route path="/archive" component={Archive} />
              <Route path="/about" component={About} />
            </div>
          </div>
          <iframe
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fpelvispelvispelvis%2Fnoise-in-my-head-230614-w-pelvis%2F"
            frameBorder="0"
            className="db fixed bottom-0 z-5"
            // this allows us to target the html element
            ref={player => (this.player = player)}
          />
        </div>
      </Router>
    );
  }
}

export default App;
