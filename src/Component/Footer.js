import { Container, Row } from 'react-bootstrap';
function Footer() {
    return (
        <>
            <Container>
                <Row>
                    <div className='d-flex justify-content-center align-items-center bg-danger' style={{ height: "50px" }}>
                        <span>
                            <a href='https://www.linkedin.com/in/engin-ulger/' className='text-decoration-none' style={{ color: "white" }} target="_blank" rel="noopener noreferrer">Engin Ülger</a>
                        </span>
                    </div>
                </Row>
            </Container>

        </>
    )

}
export default Footer