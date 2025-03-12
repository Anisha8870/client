import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {HashRouter,Routes,Route} from 'react-router-dom'
import Register from './register.js'
import Deposit from './deposit.js'
import Cashback from './cashback.js'
import Alldata from './alldata.js'
import UserContext from './context.js'
function App() {
  return (<>
    <Navbar bg="info" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">🏦MY BANK</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home💹</Nav.Link>
            <Nav.Link href="#register">Register📜</Nav.Link>
            <Nav.Link href="#deposit">Deposit💵</Nav.Link>
            <Nav.Link href="#cashback">Cashback🤑</Nav.Link>
            <Nav.Link href="#alldata">Alldata💱</Nav.Link>

            </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <HashRouter>
      <UserContext.Provider value={{"users":[{
        name:"xyz",
        email:"xyz@gmail.com",
        password:"xyz",
        amount:1000}
       ]}}>
      <Routes>
      <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/deposit' element={<Deposit></Deposit>}></Route>
        <Route path='/cashback' element={<Cashback></Cashback>}></Route>
        <Route path='/alldata' element={<Alldata></Alldata>}></Route>
      </Routes>
      </UserContext.Provider>
    </HashRouter>
  </>);
}

export default App;