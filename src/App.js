import {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar.component';
import TutorialList from './components/tutorial-list.component';
import TutorialAdd from "./components/tutorial-add.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, Slide } from 'react-toastify';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container mt-3">
          <Routes>
            <Route exact path="/tutorials" element={<TutorialList/>} />
            <Route exact path="/add" element={<TutorialAdd/>} />
          </Routes>
        </div>

        <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        transition={Slide}
        closeOnClick
        />
      </div>
    );
  }
}

export default App;
