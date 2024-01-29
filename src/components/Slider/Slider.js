import React from 'react';
import Data from '../../Data.json';

const Slider = () => {
    return (
        <>
            <div className="slider w-100  d-flex justify-content-center my-4">
                <div id="carouselExampleDark" className="carousel carousel-dark slide  w-75" data-bs-ride="carousel" >
                    <div className="carousel-indicators   " >
                        {Data.projects.map((project, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to={index}
                                className={index === 0 ? 'active' : ''}
                                aria-current={index === 0 ? 'true' : 'false'}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                    <div className="carousel-inner">
                        {Data.projects.map((project, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="1000">
                                <img src={require(`../../assets/${project.img}`)} className="d-block w-100" alt={project.title} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="bg-light">{project.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Slider;
