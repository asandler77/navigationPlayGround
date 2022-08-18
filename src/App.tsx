import * as React from 'react';
import EntryAppNavigation from './login/EntryAppNavigation';
import {Provider} from 'react-redux';
import {store} from './state-management/store';

const App = () => {
  return (
    <Provider store={store}>
      <EntryAppNavigation />
    </Provider>
  );
};
export default App;
