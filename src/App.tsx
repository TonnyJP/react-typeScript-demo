import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

const NameList = [
  {
    fname: "Tonny",
    lname: "Piper"
  },
  {
    fname: "Yorobor",
    lname: "Colbert"
  },
  {
    fname: "Zongo",
    lname: "Boire ton sang"
  }
]
function App() {
  return (
    <div className="App">
      {/* <Greet name='Tonny' messageCount={20} isLoggedIn={true}/>
      <Person lname='Bruce' fname='Wayne' />
      <PersonList personList={NameList} /> */}
      <Status status='error' /> 
      <Heading>
        {"Hello lady Oscar"}
      </Heading>
      <Button handleClick={(event) =>{console.log("Clicked", event)}} />
    </div>
  );
}

export default App;
