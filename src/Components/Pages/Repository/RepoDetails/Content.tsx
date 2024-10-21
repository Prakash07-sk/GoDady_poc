import { Badge, Card, Col, Nav, Row } from "react-bootstrap";
import { MdStarOutline } from "react-icons/md";
import { TbLicense } from "react-icons/tb";
import { TbShovelPitchforks } from "react-icons/tb";
import { GoIssueOpened } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";






interface propsData {
    value: any
}
export default function Content({ value }: propsData) {


    return (
        <>
            <Card.Title className="text-primary mr-5 d-flex align-items-center">
                <Nav.Link href={value?.html_url} className="text-primary" style={{ textDecoration: 'none' }}>
                    {value?.name}
                </Nav.Link>
                <span
                    className="badge pill_data ml-3"
                    style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', borderRadius: '10rem' }}
                >
                    {value?.owner?.user_view_type}
                </span>
            </Card.Title>
            <Card.Text className="small">
                {value?.description}
            </Card.Text>
            <Card.Footer className="mt-4 small">
                <Row>
                    <Col md={2} className="text-info" >
                        {value?.language}
                    </Col>
                    <Col md={2} className="text-secondary">
                        <MdStarOutline /> {value?.stargazers_count}
                    </Col>
                    <Col md={2}>
                        <TbLicense /> {value?.license?.key?.toUpperCase()}
                    </Col>
                    <Col md={2} >
                        <TbShovelPitchforks /> {value?.forks}
                    </Col>
                    <Col md={2} className="text-warning">
                        <GoIssueOpened /> {value?.open_issues}
                    </Col>
                    <Col md={2} className="text-success">
                        <IoEyeOutline /> {value?.watchers}
                    </Col>
                </Row>
            </Card.Footer>
        </>
    )
}