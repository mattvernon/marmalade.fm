import React, { Component } from 'react';
import FeaturedMix from './FeaturedMix';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <FeaturedMix />
          <div>
            <Header />
            {/* Routed Page */}
          </div>
        </div>
        <iframe
          width="100%"
          height="60"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fpelvispelvispelvis%2Fnoise-in-my-head-230614-w-pelvis%2F"
          frameBorder="0">
        </iframe>
      </div>
    );
  }
}

export default App;
