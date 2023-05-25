import React from 'react';
import Navigation from './src/Navigation';
import {GlobalProvider} from './src/components/context/GlobalContext';

function App(): JSX.Element {
  return (
    <GlobalProvider>
      <Navigation />
    </GlobalProvider>
  );
}
export default App;
