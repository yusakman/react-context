import "./App.css";
import Card from "./component/Card";
import LayoutContextProvider from "./context/LayoutContextNew";
// import MainContextProvider from './context/MainContext'
import MainContextProviderNew from "./context/MainContextNew";

function App() {
  // const [data, setData] = useState({
  //   name: 'Lucy Chen',
  //   ava: 'https://reqres.in/img/faces/7-image.jpg'
  // })

  // const mainContextValue = {
  //   data
  // }

  return (
    <div className="App">
      <LayoutContextProvider>
        {/* <MainContext.Provider value={mainContextValue}> */}
        {/* <MainContextProvider> */}
        {/* <Card /> */}
        {/* </MainContextProvider> */}
        <MainContextProviderNew>
          <Card />
        </MainContextProviderNew>
      </LayoutContextProvider>
    </div>
  );
}

export default App;
