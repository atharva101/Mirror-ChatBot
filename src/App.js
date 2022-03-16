import logo from './logo.svg';
import './App.css';
import { chatpage } from './Pages/ChatPage/chatPage.component';
import {Header} from './Components/header/header.component'
function App() {
  return (
    <div className="App">
      <chatpage/>
      <Header/>
    </div>
  );
}

export default App;
