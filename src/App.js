import React from 'react';
import Body from './components/Body/Body.container';
import Toolbar from './components/Toolbar/Toolbar.container';
import SearchBody from './components/SearchBody/SearchBody.container';

function App() {
  return (
    <React.Fragment>
      {/* <Toolbar />
      <Body /> */}
      <SearchBody />
    </React.Fragment>
  );
}

export default App;
