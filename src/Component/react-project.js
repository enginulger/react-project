import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Context() {

    return (
        <>
            <Container>
                <Row>
                    <Col lg="1" className='bg-danger'></Col>
                    <Col lg="10" className='pt-3 pb-3'>
                        <div className="d-flex flex-wrap gap-3 m-3 rounded-3 btn-group" role="group">
                            <NavLink to="/faq">
                                <button type="button" className="btn btn-secondary rounded-3">Sık Sorulan Sorular?</button>
                            </NavLink>
                            <NavLink to="/faq">
                                <button type="button" className="btn btn-secondary rounded-3">Carousel Slider</button>
                            </NavLink>
                            <NavLink to="/faq">
                                <button type="button" className="btn btn-secondary rounded-3">Kimlik Doğrulama!</button>
                            </NavLink>


                        </div>
                    </Col>
                    <Col lg="1" className='bg-danger'></Col>


                </Row>
            </Container>

        </>
    )
}
export default Context