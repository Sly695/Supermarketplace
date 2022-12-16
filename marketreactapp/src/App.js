import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSignUp from './Screens/SignInSignUp/signInSignUp';
import Dashboard from './Screens/Dashboard/dashboard';

//Redux
import {Provider} from 'react-redux';
import { createStore, combineReducers } from "redux";
import user from './Reducers/user';
import products from './Reducers/product';

const store = createStore(combineReducers({ 
  user,
  products
}));

function App() {
  
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path='/' element={<SignInSignUp />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
