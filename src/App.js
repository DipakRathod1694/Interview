import './App.css';
import Cards from './Cards';

function App() {
  return (
    <div className="App">
      <Cards number={1} name={"Dipak"} age={21}/>
      <Cards number={2} name={"Dip"} age={22}/>
      <Cards number={3} name={"Dipa"} age={25}/>
    </div>
  );
}

export default App;
