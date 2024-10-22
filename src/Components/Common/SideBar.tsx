import { Button, Card, Image, Nav } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa';
import { UserDetails } from "./Labes";


export default function SideBar() {

    const { name, gitName, email, role, image } = UserDetails;
    return (
        <div style={{ width: '350px', height: '100vh', backgroundColor: '#f8f9fa' }}>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Card style={{ width: '18rem', margin: '1rem', backgroundColor: 'transparent', border: 'none' }}>
                    <Card.Body >
                        <div className="text-center">
                            <Image
                                src= {image}
                                alt="No image found.."
                                roundedCircle
                                style={{ width: '250px', height: '250px' }}
                            />

                        </div>
                        <Card.Title className="mt-3">{name}</Card.Title>

                        <Card.Subtitle className="mb-2 text-muted mt-1">{gitName}</Card.Subtitle>
                        <Card.Text className="mt-4">
                            <FaUserCircle /> {email}
                        </Card.Text>
                        <p className="mt-4 font-weight-light">
                            {role}
                        </p>
                        <div className="d-grid gap-2">
                            <Button variant="secondary">Edit Profile</Button>
                        </div>

                    </Card.Body>
                </Card>
            </Nav>


        </div>
    );
}