import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';

const  Header = (props) => {
    return (
        <Container>
            <Navbar  
                expand="lg" 
                className="bg-body-tertiary">
                <Container style={{justifyContent:"center"}}>
                    <Navbar.Brand>
                    <h2><p className="p">{props.title}</p></h2>
                    </Navbar.Brand>                    
                </Container>
            </Navbar>
        </Container>
    );
}

export default Header