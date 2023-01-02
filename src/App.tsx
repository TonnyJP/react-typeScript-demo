import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/themeContext';
import { UserContextProvider } from './components/context/UserContext';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Counter } from './components/state/Counter';
import { User } from './components/context/User';
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
      <PersonList personList={NameList} /> 
      <Status status='error' /> 
      <Heading>
        {"Hello lady Oscar"}
      </Heading>
      <Button handleClick={(event) =>{console.log("Clicked", event)}} />
      <Container styles={{border: " 1px solid black", padding: "1rem", margin: "1rem"}} 
      <User />
      <Counter />/> */}
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
