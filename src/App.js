import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import CheckboxWithLabel from './components/CheckboxWithLabel';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
      <CheckboxWithLabel />
    </div>
  );
}

export default App;
