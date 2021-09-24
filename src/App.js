import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwmALuU19xPRQx_5_ZQK8QqG5HpA79AD5Iw&usqp=CAU' />
      </header>
      <nav className='nav'>
        <div>Profile</div>
        <div>Messages</div>
        <div>News</div>
        <div>Music</div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU' />
        </div>
        <div>
          ava +  description
        </div>
        <div>
          my posts
          <div>
            New posts
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2q
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
