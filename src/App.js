import Person from './Person'
import './App.css';

function App() {
  let data=[{id:'1as',name:'Amal',age:22},{id:'weq',name:'Akhil',age:20}];
  return (
    <div className="App">
      {data.map((per)=>{return (<Person x={per.name} y={per.age} key={per.id}/>)})}
    </div>
  );
}

export default App;