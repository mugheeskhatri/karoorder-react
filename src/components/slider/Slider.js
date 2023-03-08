import React from 'react';

const Slider = () => {
    return (
        <div className='slider'>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://k.nooncdn.com/cms/pages/20211024/54432992d36e505005cf011c25216d13/en_dk-slider.png" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://k.nooncdn.com/mon/1635674504250-ckvf2d8vu0o4d0brabdsb4td6.png" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://k.nooncdn.com/cms/pages/20211101/5255ba73c69b8c3cf09f94088081c720/en_dk_uae-slider-01.gif" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </a>
      </div>
        </div>
    );
}

export default Slider;
