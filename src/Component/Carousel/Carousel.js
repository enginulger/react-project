import { Container } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

import './carousel.scss'

const hizmetler = ["Muhasebe Hizmeti", "İnternet Hizmeti", "Danışmanlık Hizmeti", "Ar-Ge Hizmeti", "Sigorta Hizmeti"];

export default class Responsive extends Component {
    render() {
        var settings = {
            //dots: true,
            infinite: true,
            //centerMode: true,
            speed: 500,
            slidesToShow: 4, // 4 adet
            slidesToScroll: 1, // 1 adet geçiş yap
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 2000,
            //centerMode: true,
            //variableWidth: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
            ],
        };


        return (
            <Container className="px-5 py-5">
                <Slider {...settings} className="carousel">
                    {hizmetler.map((kategori, index) => (
                        <div key={index} className="carousel-item border border-danger rounded-3 d-flex justify-content-center align-items-center flex-wrap">
                            <NavLink to="/carousel" className="ahref">
                                {kategori}
                            </NavLink>
                        </div>
                    ))}
                </Slider>
            </Container>
        );
    }
}

/*
1.Yöntem
const todos= [1,2,3,4]
{todos.map(todo => (
  <li>
  {todo}
  </li>
))}

2.Yöntem
const todos= [1,2,3,4]
{todos.map((todo,index) => (
  <li key={index}>
  {todo}
  </li>
))}

3.Yöntem
const todos= [1,2,3,4]
{todos.map(fuction(todo,index) {
  return <li key={index}>{todo}</li>
})}

4. Süslü parentez açılırsa return demek gerekiyor.
{todos.map(() => {
  return 
})}
4. Süslü parentez kullanılmazsa return demek gerekmiyor.
{todos.map(() => (
))}
5. Obje olarak göndermek için
{todos.map(() => ( 
{

}
))}





*/
