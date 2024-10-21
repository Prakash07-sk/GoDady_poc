import { Card, Placeholder } from "react-bootstrap";


export default function CardPlaceHolder() {
    return (
        <>
            <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={2} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={2} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={2} /> <Placeholder xs={8} />
            </Placeholder>
        </>
    );
}