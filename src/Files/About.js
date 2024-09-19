import React from 'react'

export default function About() {
  return (
<div>{/* Page Header Start */}
<div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
  <div className="container py-5">
    <h1 className="display-3 text-white animated slideInRight">About Us</h1>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb animated slideInRight mb-0">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Pages</a></li>
        <li className="breadcrumb-item active" aria-current="page">About Us</li>
      </ol>
    </nav>
  </div>
</div>
{/* Page Header End */}

  <div>
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="row gx-3 h-100">
              <div className="col-6 align-self-start wow fadeInUp" data-wow-delay="0.1s">
                <img className="img-fluid" src="img/sir1.jpeg" />
              </div>
              <div className="col-6 align-self-end wow fadeInDown" data-wow-delay="0.1s">
                <img className="img-fluid" src="img/madem1.jpeg" /> 
                {/*<img class="img-fluid" src="img/madem1.jpeg" >*/}
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <p className="fw-medium text-uppercase text-primary mb-2">About Us</p>
            <h1 className="display-5 mb-4">We Are Best construction Company in Nagpur </h1>
            <p className="mb-4">JaiShivAssociates is a leading name in the construction business we provide all types of services related to Commercial and Residential property projects .When it comes to Interior decoration, Renovation, Modular Kitchen 
              , structural planner and all types of Services to make your Dream Home Beautiful
            </p>
            <div className="d-flex align-items-center mb-4">
              <div className="flex-shrink-0 bg-primary p-4">
                <h1 className="display-2">5+</h1>
                <h5 className="text-white">Years of</h5>
                <h5 className="text-white">Experience</h5>
              </div>
              <div className="ms-4">
                <p><i className="fa fa-check text-primary me-2" />Interior &amp; Exterior designing</p>
                <p><i className="fa fa-check text-primary me-2" />Structural Planning</p>
                <p><i className="fa fa-check text-primary me-2" />Construction &amp; Renoviation work</p>
                <p><i className="fa fa-check text-primary me-2" />Modular Kitchen &amp; FurnitureDesign</p>
                <p><i className="fa fa-check text-primary me-2" />Residential &amp; Commercial Projects</p>
                <p className="mb-0"><i className="fa fa-check text-primary me-2" />Designer False Ceiling &amp; Them Based Interior</p>
              </div>
            </div>
            <div className="row pt-2">
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-envelope-open text-white" />
                  </div>
                  <div className="ms-3">
                    <p className="call1">Email us</p>
                    <h5 className="call1">Jayshiv.associates@gmail.com</h5>
                  </div>
                </div>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-phone-alt text-white" />
                  </div>
                  <div className="ms-3">
                    <p className="call1">Call us</p>
                    <h5 className="call1">+918208710419</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Facts Start */}
    <div className="container-fluid facts my-5 p-5">
      <div className="row g-5">
        <div className="col-md-6 col-xl-3 wow fadeIn fc" data-wow-delay="0.1s">
          <div className="text-center border p-5">
            <i className="fa fa-certificate fa-3x text-white mb-3" />
            <h1 className="display-2 text-primary mb-0" data-toggle="counter-up">5</h1>
            <span className="fs-5 fw-semi-bold text-white">Years Experience</span>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 wow fadeIn fc" data-wow-delay="0.3s">
          <div className="text-center border p-5">
            <i className="fa fa-users-cog fa-3x text-white mb-3" />
            <h1 className="display-2 text-primary mb-0" data-toggle="counter-up">15</h1>
            <span className="fs-5 fw-semi-bold text-white">Team Members</span>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 wow fadeIn fc" data-wow-delay="0.5s">
          <div className="text-center border p-5">
            <i className="fa fa-users fa-3x text-white mb-3" />
            <h1 className="display-2 text-primary mb-0" data-toggle="counter-up">100</h1>
            <span className="fs-5 fw-semi-bold text-white">Happy Clients</span>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 wow fadeIn fc" data-wow-delay="0.7s">
          <div className="text-center border p-5">
            <i className="fa fa-check-double fa-3x text-white mb-3" />
            <h1 className="display-2 text-primary mb-0" data-toggle="counter-up">100</h1>
            <span className="fs-5 fw-semi-bold text-white">Projects Done</span>
          </div>
        </div>
      </div>
    </div>
    {/* Facts End */}
    {/* Team Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
          <p className="fw-medium text-uppercase text-primary mb-2">Our Team</p>
          <h1 className="display-5 mb-5">Dedicated Team Members</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item">
              <img className="img-fluid" src="img/sir1.jpeg" style={{height: 350, width: 350, borderRadius: 40}} alt />
              <div className="d-flex">
                <div className="flex-shrink-0 btn-square bg-primary" style={{width: 90, height: 90}}>
                  <i className="fa fa-2x fa-share text-white" />
                </div>
                <div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4" style={{height: 90}}>
                  <h5>Sushant Bargat</h5>
                  <span className="text-primary">CEO &amp; Founder</span>
                  <div className="team-social">
                    <a className="btn btn-square btn-dark rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-dark rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-dark rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item">
              <img className="img-fluid" src="img/madem1.jpeg" style={{height: 350, width: 350, borderRadius: 40}} alt />
              <div className="d-flex">
                <div className="flex-shrink-0 btn-square bg-primary" style={{width: 90, height: 90}}>
                  <i className="fa fa-2x fa-share text-white" />
                </div>
                <div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4" style={{height: 90}}>
                  <h5>Er.Sonali Bargat</h5>
                  <span className="text-primary">Designer &amp; Architech</span>
                  <div className="team-social">
                    <a className="btn btn-square btn-dark rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-dark rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-dark rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item">
              <img className="img-fluid" src="img/logo.png" style={{height: 350, width: 350, borderRadius: 40}} alt /> 
              <div className="d-flex">
                <div className="flex-shrink-0 btn-square bg-primary" style={{width: 90, height: 90}}>
                  <i className="fa fa-2x fa-share text-white" />
                </div>
                {/* <div class="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4"
                          style="height: 90px;"> */}
                <h5>Jay Shiv Associates</h5>
                {/* <span class="text-primary">Engineer</span> */}
                {/* <div class="team-social">
                              <a class="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                                      class="fab fa-facebook-f"></i></a>
                              <a class="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                                      class="fab fa-twitter"></i></a>
                              <a class="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                                      class="fab fa-instagram"></i></a>
                          </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Video Modal Start */}
  <div className="modal modal-video fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          {/* 16:9 aspect ratio */}
          <div className="ratio ratio-16x9">
            <iframe className="embed-responsive-item" src id="video" allowFullScreen allowscriptaccess="always" allow="autoplay" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Video Modal End */}
</div>

  )
}
