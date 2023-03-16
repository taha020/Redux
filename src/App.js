import { Provider } from 'react-redux';

import Module1 from './components/Module1';
import Module2 from './components/Module2';
import store from './Redux/Store';

function App() {

  return (
    <Provider store={store} >
      <div>
        <Module1 />
        <Module2 />
      </div>
    </Provider>
  );
}

export default App;
