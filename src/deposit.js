// import UserContext from './context.js'
// import { useContext,useState } from 'react';
// import {Button} from 'react-bootstrap';
// export default function Deposit(){
    
//     let users=useContext(UserContext)
//     let n=users.users.length
//     let [bal,setBal]=useState(users.users[n-1].amount)
//     let[dep,setDep]=useState(0)
//     function handleSubmit(e){
//         e.preventDefault()
//         let deposit=Number(dep)
//         setBal(bal+deposit)
        
//     }
//     users.users[n-1].amount=bal
//     return(<>
//     <form onSubmit={handleSubmit}>
//     <h1>Deposit</h1>
//     <input type="Number" onChange={(e)=>setDep(e.target.value)}></input>
//     <Button type="submit"> Submit </Button>
//     </form>
//     <h2>Balance:{bal}</h2>
    

    
    
    
    
//     </>)
// }
import UserContext from './context.js';
import { useContext, useState } from 'react';
import { Button, Card, Form, Container, Alert } from 'react-bootstrap';
import './App.css';

export default function Deposit() {
    let users = useContext(UserContext);
    let n = users.users.length;
    let [bal, setBal] = useState(users.users[n - 1].amount);
    let [dep, setDep] = useState('');
    let [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        let deposit = Number(dep);

        if (deposit <= 0 || isNaN(deposit)) {
            setError('Please enter a valid amount greater than 0.');
            return;
        }

        setBal(bal + deposit);
        users.users[n - 1].amount = bal + deposit;
        setDep('');
        setError('');
    }

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: '25rem', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Deposit</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Enter Deposit Amount</Form.Label>
                            <Form.Control
                                type="number"
                                value={dep}
                                onChange={(e) => setDep(e.target.value)}
                                placeholder="Enter amount"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">Submit</Button>
                    </Form>
                    <h4 className="text-center mt-4">Balance: ${bal}</h4>
                </Card.Body>
            </Card>
        </Container>
    );
}


