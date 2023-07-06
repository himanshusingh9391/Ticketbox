
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/logo.png';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login'
import SignUp from './Components/SignUp';
import Home from './Components/Home';



function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element:<Login/>,
    },
    {
      path:'/signup',
      element:<SignUp />,
    },
    {
      path:'/home',
      element:<Home />,
    }
  ]);

  return (
    <div>
       <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Ticket Box
          </Navbar.Brand>
        </Container>
      </Navbar>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
