import './App.css';
import Login from './pages/Login';
import Grid from '@mui/material/Grid';
import SignUp from './pages/SignUp';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://freesvg.org/img/1544686251.png' className="App-logo" alt="🤮🤮🤮🤮" />
        <h1>My super fantastic form app</h1>
      </header>

      <Grid container spacing={2}>
        {/* component for login form */}
        <Grid item>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/login">Login</Link>
          <br/>
          <Link to="/SignUp">SignUp</Link>
        </Grid>
        
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
        </Routes>
      </Grid>

    </div>

  );
}

export default App;

