import React from 'react';
import './Slider.css';

const Slider = () => {
    return (
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://img.freepik.com/free-vector/flat-design-travel-facebook-cover_23-2149131721.jpg?w=2000" alt="" />
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/premium-vector/happy-travel-banner-modern-train-transportation-tourism_48369-8834.jpg?w=2000" alt="" />
                </div>
                <div className="carousel-item">
                    <img src="https://previews.123rf.com/images/redlinevector/redlinevector1701/redlinevector170103252/69237284-happy-travel-lettering-happy-travel-inscription-with-photos-of-famous-landmarks-on-wooden-background.jpg" alt="" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Slider;