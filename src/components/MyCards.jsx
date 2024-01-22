import Card from 'react-bootstrap/Card';
import Tags from './Tags';

function MyCards(props) {
    return (
        <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={props.urlImg} />
        <Card.Body>
            <Card.Title >{props.title}</Card.Title>
            <Card.Text>
                {props.comentario}
            </Card.Text>
            <Tags raza={props.raza} bgColor={props.bgColor}/>
        </Card.Body>
        </Card>
);
}

export default MyCards;