import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './containers/CakeContainer';
import HooksCakeContainer from './containers/HooksCakeContainer';
import IceCreamContainer from './containers/IceCreamContainer';
import HooksIceCreamContainer from './containers/HooksIceCreamContainer';
import NewCakeContainer from './containers/NewCakeContainer';
import UserContainer from './containers/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <NewCakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
