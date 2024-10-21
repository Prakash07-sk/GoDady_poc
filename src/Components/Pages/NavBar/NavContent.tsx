
import { Container, Navbar } from "react-bootstrap";
import { display_text } from "../../Common/Labes";
import { FaRegCircleUser } from "react-icons/fa6";
export default function NavContent() {

    const { LNavBar: {brand, user} } = display_text;
    return(

        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand >{brand?.title}</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                       <FaRegCircleUser/> {user}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}