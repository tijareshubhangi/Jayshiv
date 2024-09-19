import React from 'react'

export default function Testimonial() {
  return (
    <div>
<div>
  {/* Page Header Start */}
  <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
      <h1 className="display-3 text-white animated slideInRight">Testimonial</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb animated slideInRight mb-0">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Porjects</a></li>
          <li className="breadcrumb-item active" aria-current="page">Testimonial</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Testimonial Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <p className="fw-medium text-uppercase text-primary mb-2">Testimonial</p>
        <h1 className="display-5 mb-5">What Our Clients Say!</h1>
      </div>
      <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
        <div className="testimonial-item text-center">
          <div className="testimonial-img position-relative">
            <img className="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-1.jpg" />
            <div className="btn-square bg-primary rounded-circle">
              <i className="fa fa-quote-left text-white" />
            </div>
          </div>
          <div className="testimonial-text text-center rounded p-4">
            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
            <h5 className="mb-1">Client Name</h5>
            <span className="fst-italic">Profession</span>
          </div>
        </div>
        <div className="testimonial-item text-center">
          <div className="testimonial-img position-relative">
            <img className="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-2.jpg" />
            <div className="btn-square bg-primary rounded-circle">
              <i className="fa fa-quote-left text-white" />
            </div>
          </div>
          <div className="testimonial-text text-center rounded p-4">
            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
            <h5 className="mb-1">Client Name</h5>
            <span className="fst-italic">Profession</span>
          </div>
        </div>
        <div className="testimonial-item text-center">
          <div className="testimonial-img position-relative">
            <img className="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-3.jpg" />
            <div className="btn-square bg-primary rounded-circle">
              <i className="fa fa-quote-left text-white" />
            </div>
          </div>
          <div className="testimonial-text text-center rounded p-4">
            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
            <h5 className="mb-1">Client Name</h5>
            <span className="fst-italic">Profession</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
</div>

    </div>
  )
}
