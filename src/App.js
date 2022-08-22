import { useState } from 'react';
import './App.css';
import Card from './component/Card';
import LayoutContextProvider from './context/LayoutContextNew';
import { MainContext } from './context/MainContext'

function App() {
  const [data, setData] = useState({
    name: 'Lucy Chen',
    ava: 'https://reqres.in/img/faces/7-image.jpg'
  })

  const mainContextValue = {
    data
  }

  return (
    <div className="App">
      <LayoutContextProvider>
        <MainContext.Provider value={mainContextValue}>
          <Card />
        </MainContext.Provider>
      </LayoutContextProvider>
      
    </div>
  );
}

export default App;
