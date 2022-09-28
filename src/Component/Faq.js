import React from 'react'
import { Col, Container, Row, Accordion } from 'react-bootstrap';


function Faq() {
    const questions = [
        {
            'id': '1',
            'title': 'HTML Nedir?',
            'body': 'Hiper Metin İşaretleme Dili web sayfalarını oluşturmak için kullanılan standart metin işaretleme dilidir. Dilin son sürümü HTML5 tir. HTML, bir programlama dili olarak tanımlanamaz. Zira HTML kodlarıyla kendi başına çalışan bir program yazılamaz',
        },
        {
            'id': '2',
            'title': 'CSS Nedir?',
            'body': 'Cascading Style Sheets, HTML ek olarak metin ve format biçimlendirme alanında fazladan olanaklar sunan bir işaretleme dilidir.',
        },
        {
            'id': '3',
            'title': 'javaScript Nedir?',
            'body': 'JavaScript, HTML ve CSS ile birlikte World Wide Web in temel teknolojilerinden biri olan programlama dilidir. Web sitelerinin %97 sinden fazlası, web sayfası hareketleri için istemci tarafında JavaScript kullanırlar ve kullanılan kodlar genellikle üçüncü taraf kitaplıkları içerir.',
        },
    ]

    return (
        <>
            <Container>
                <Row className='justify-content-center align-items-center'>
                    <Col lg="8" sm="12">
                        <h3 className='p-4'> Sık Sorular Sorular </h3>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            {questions.map((qn, index) => (
                                <Accordion.Item eventKey={index}>
                                    <Accordion.Header>{qn.title}</Accordion.Header>
                                    <Accordion.Body className='text-start text-justify'>
                                        {qn.body}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Faq