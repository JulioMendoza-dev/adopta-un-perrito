import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function Tags(props) {
    return (
        <Stack direction="horizontal"  gap={2}>
            <Badge pill bg={props.bgColor} style={{ width: '100%' }}>
                {props.raza}
            </Badge>
        </Stack>
            );
}

export default Tags;