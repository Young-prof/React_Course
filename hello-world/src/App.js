// import logo from './logo.svg';
import './App.css';
import Props from './Components/Props';
import Classcom from './Components/Classcom';
import Jsx from './Components/Jsx';
import FuncCom from './Components/FuncCom';
import StateCom from './Components/StateCom';

function App() {
  return (
    <div className="App">
      {/*
      <Props name= "Franklyn" heroName= " the Engineer">
        <p>This is children props</p>
      </Props>
      <Props name= "Mark" heroName= "the software Developer">
        <button>Action</button>
      </Props>
      <Props name= "Tekena" heroName= "ML Engineer"/>
      <Classcom name= "Franklyn" heroName= " the Engineer"/>
      <Classcom name= "Mark" heroName= "the software Developer"/>
      <Classcom name= "Tekena" heroName= "ML Engineer"/>
      */}
      {/* <Jsx />  */}
      {/* <FuncCom /> */}
      <StateCom />
    </div>
  );
}

export default App;
