import { ReactNode } from "react";
import NavContent from "./NavContent";
import { Col, Row } from "react-bootstrap";
import SideBar from "../../Common/SideBar";

type propsData = {
    children: ReactNode
}
export default function NavBar(props: propsData) {
    const { children } = props;
    return (
        <>
            <NavContent />
            <div style={{ overflow: 'hidden', maxHeight: '100%' }}>
                <Row>
                    <Col md = {3}>
                        <SideBar />
                    </Col>
                    <Col md = {9}>
                    {children}
                    </Col>
                </Row>
               

            </div>

        </>

    );
}