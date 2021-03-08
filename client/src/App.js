import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      {/* from here we call the navigation bar.
      This is the main entry to our web app*/}
      <NavBar/>
    </Router>
    
    </>
  );
}

export default App;
