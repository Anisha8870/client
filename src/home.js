import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() 
{
    return (
        <div 
            className="container-fluid d-flex flex-column justify-content-center align-items-center" 
            style={{ 
                minHeight: '90vh',
                backgroundImage: "url('./bank.gif')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <h1 className="mb-4" style={{ color: 'black', textAlign: 'center' }}>Welcome to MY BANK</h1>
            <p style={{ color: 'black', textAlign: 'center' }}>Your trusted partner for safe and secure banking.</p>
        </div>
    );
}    

export default Home;
