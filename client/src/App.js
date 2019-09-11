import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Users from './components/Users';

function App() {
  return (
    <Provider store={store}>
      {/* router here. whatever you want. nothing special */}
      <Users />
    </Provider>
  );
}

export default App;
