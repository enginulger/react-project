import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
function Header() {
    return (
        <>
            <Container>
                <Row>

                    <div className='bg-danger d-flex justify-content-center align-items-center' style={{ height: '50px' }}>
                        <NavLink to="/react-project" className='text-decoration-none'><h3 style={{ color: "white" }}>React Projects</h3></NavLink>
                    </div>
                </Row>
            </Container>

        </>
    )

}
export default Header