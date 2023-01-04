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
import { Counter } from './components/class/Counter';
import { User } from './components/context/User';
import { Status } from './components/Status';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateLitterals/Toast';

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
      <Counter />/> 
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Counter message="The current counter is:" />
     <Private isLoggedIn={true} component={Profile} />
     <List items={['banana', 'Superman', 'Wonder woman']} onClick= {(item) =>alert(item.toString() +" has been clicked")} />
  <List items={[1,2,3]} onClick= {(item) =>alert(item.toString() +" has been clicked")} /> 
     <List items={[
  {
    id: 1,
    fname: "Tonny",
    lname: "Piper"
  },
  {
    id: 2,
    fname: "Yorobor",
    lname: "Colbert"
  },
  {
    id: 3,
    fname: "Zongo",
    lname: "Boire ton sang"
  }
]} onClick= {(item) =>alert(item.toString() +" have been clicked")} />
  <RandomNumber value={10} isPositive/> */}
  <Toast position='center-bottom' />
    </div>
  );
}

export default App;
