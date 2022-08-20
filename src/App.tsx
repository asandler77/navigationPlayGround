import * as React from 'react';
import EntryAppNavigation from './login/EntryAppNavigation';
import {Provider} from 'react-redux';
import {store} from './state-management/store';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {ToastConfig} from './components/common/Toasts';

const App = () => {
  return (
    <Provider store={store}>
      <EntryAppNavigation />
      <Toast config={ToastConfig} />
    </Provider>
  );
};
export default App;
