import './App.css';
import SignIn from './component/SignIn/SignIn';

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {

  return (
    
      <Router>
        <Routes>
         
       
         <Route path="/"  element={<SignIn/>}/>
       
        </Routes>
       
      
      </Router>
    
      // <SignIn/>
   
  );
}

export default App;