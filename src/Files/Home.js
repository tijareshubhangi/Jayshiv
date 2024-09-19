import React from 'react'

export default function Home() {
  return (
    <div>
<div>
  {/* Carousel Start */}
  <div className="container-fluid px-0 mb-5">
    <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100" src="img/dhanjode1.jpg" alt="Image" style={{height: 700}} />
          <div className="carousel-caption">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10 text-start">
                  {/* <p class="fs-5 fw-medium text-primary text-uppercase animated slideInRight">25 Years
                                  of Working Experience</p> */}
                  <h1 className="display-1 text-white mb-5 animated slideInRight">Industrial Solution
                    Providing Company</h1>
                  {/* <a href="" class="btn btn-primary py-3 px-5 animated slideInRight">Explore More</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src="img/background2.jpg" alt="Image" style={{height: 700}} />
          <div className="carousel-caption">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10 text-start">
                  {/* <p class="fs-5 fw-medium text-primary text-uppercase animated slideInRight">25 Years
                                  of Working Experience</p> */}
                  <h1 className="display-1 text-white mb-5 animated slideInRight">The Best Reliable
                    Industry Solution</h1>
                  {/* <a href="" class="btn btn-primary py-3 px-5 animated slideInRight">Explore More</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  {/* Carousel End */}
  {/* About Start */}
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
          <h1 className="display-5 mb-4">We Are Best construction Company in Nagpur</h1>
          <p className="mb-4">JaiShiv Associates is a leading name in the construction business.
            We provide all types of services related to commercial and residential property projects. 
            When it comes to interior decoration, renovation, modular kitchen, structural planning, 
            and all types of services to make your dream home beautiful,
          </p>
          <div className="d-flex align-items-center mb-4">
            <div className="flex-shrink-0 bg-primary p-4">
              <h1 className="display-2">5+</h1>
              <h5 className="text-white">Years of</h5>
              <h5 className="text-white">Experience</h5>
            </div>
            <div className="ms-4">
              <p><i className="fa fa-check text-primary me-2" />Interior and exterior design</p>
              <p><i className="fa fa-check text-primary me-2" />Structural Planning</p>
              <p><i className="fa fa-check text-primary me-2" />Construction and renovation work</p>
              <p><i className="fa fa-check text-primary me-2" /> Modular Kitchen and Furniture Design</p>
              <p><i className="fa fa-check text-primary me-2" /> Residential and commercial projects</p>
              <p className="mb-0"><i className="fa fa-check text-primary me-2" /> Designer False Ceiling and Them-Based Interior</p>
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
                  <h5 className="call1"> Jayshiv.associates@gmail.com</h5>
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
          <h1 className="display-2 text-primary mb-0" data-toggle="counter-up">25</h1>
          <span className="fs-5 fw-semi-bold text-white">Years Experience</span>
        </div>
      </div>
      <div className="col-md-6 col-xl-3 wow fadeIn fc" data-wow-delay="0.3s">
        <div className="text-center border p-5">
          <i className="fa fa-users-cog fa-3x text-white mb-3" />
          <h1 className="display-2 text-primary mb-0" data-toggle="counter-up">135</h1>
          <span className="fs-5 fw-semi-bold text-white">Team Members</span>
        </div>
      </div>
      <div className="col-md-6 col-xl-3 wow fadeIn fc" data-wow-delay="0.5s">
        <div className="text-center border p-5">
          <i className="fa fa-users fa-3x text-white mb-3" />
          <h1 className="display-2 text-primary mb-0" data-toggle="counter-up">957</h1>
          <span className="fs-5 fw-semi-bold text-white">Happy Clients</span>
        </div>
      </div>
      <div className="col-md-6 col-xl-3 wow fadeIn fc" data-wow-delay="0.7s">
        <div className="text-center border p-5">
          <i className="fa fa-check-double fa-3x text-white mb-3" />
          <h1 className="display-2 text-primary mb-0" data-toggle="counter-up">1839</h1>
          <span className="fs-5 fw-semi-bold text-white">Projects Done</span>
        </div>
      </div>
    </div>
  </div>
  {/* Facts End */}
  {/* Features Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="position-relative me-lg-4">
            <img className="img-fluid w-100" src="img/logo.png" alt />
            <span className="position-absolute top-50 start-100 translate-middle bg-white rounded-circle d-none d-lg-block" style={{width: 120, height: 120}} />
            <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
              <span />
            </button>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <p className="fw-medium text-uppercase text-primary mb-2">Why Choosing Us!</p>
          <h1 className="display-5 mb-4">Few Reasons Why People Choosing Us!</h1>
          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
            eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className="row gy-4">
            <div className="col-12">
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                  <i className="fa fa-check text-white" />
                </div>
                <div className="ms-4">
                  <h4>Experienced Workers</h4>
                  <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                    dolore erat amet</span>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                  <i className="fa fa-check text-white" />
                </div>
                <div className="ms-4">
                  <h4>Reliable Industrial Services</h4>
                  <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                    dolore erat amet</span>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                  <i className="fa fa-check text-white" />
                </div>
                <div className="ms-4">
                  <h4>24/7 Customer Support</h4>
                  <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                    dolore erat amet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features End */}
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
  {/* Service Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto pb-4 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <p className="fw-medium text-uppercase text-primary mb-2">Our Services</p>
        <h1 className="display-5 mb-4">We Provide Best Construction Services</h1>
      </div>
      <div className="row gy-5 gx-4">
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item">
            <img className="img-fluid" src="img/services1.png" alt />
            <div className="service-img">
              <img className="img-fluid" src="img/services1.png" alt />
            </div>
            <div className="service-detail">
              <div className="service-title">
                <hr className="w-25" />
                <h3 className="mb-0">Interior design and planning</h3>
                <hr className="w-25" />
              </div>
              <div className="service-text">
                <p className="text-white mb-0">We provide our clients flawless, 
                  high-quality interior design solutions that improve 
                  the visual appeal of their spaces and give them a cozy,
                  healthy place to live.</p>
              </div>
            </div>
            {/* <a class="btn btn-light" href="">Read More</a> */}
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item">
            <img className="img-fluid" src="img/services2.png" alt />
            <div className="service-img">
              <img className="img-fluid" src="img/services2.png" alt />
            </div>
            <div className="service-detail">
              <div className="service-title">
                <hr className="w-25" />
                <h3 className="mb-0">Exterior design</h3>
                <hr className="w-25" />
              </div>
              <div className="service-text">
                <p className="text-white mb-0">We deliver impeccable, high-quality exterior design 
                  solutions that enhance the visual appeal of outdoor 
                  spaces, providing a comfortable and healthy environment.</p>
              </div>
            </div>
            {/* <a class="btn btn-light" href="">Read More</a> */}
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item">
            <img className="img-fluid" src="img/services3.png" alt />
            <div className="service-img">
              <img className="img-fluid" src="img/services3.png" alt />
            </div>
            <div className="service-detail">
              <div className="service-title">
                <hr className="w-25" />
                <h3 className="mb-0">Structural planning</h3>
                <hr className="w-25" />
              </div>
              <div className="service-text">
                <p className="text-white mb-0">Explore our expert structural planning 
                  services for precise and efficient construction projects. 
                  Our team focuses on creating robust designs that not only 
                  meet rigorous safety standards but also optimize space utilization, 
                  ensuring functional and cost-effective solutions tailored to your 
                  project's needs.</p>
              </div>
            </div>
            {/* <a class="btn btn-light" href="">Read More</a> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* Project Start */}
  <div className="container-fluid py-5 my-5 px-0">
    <div className="text-center mx-auto wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: 600}}>
      <p className="fw-medium text-uppercase text-primary mb-2">Our Projects</p>
      <h1 className="display-5 mb-5">See What We Have Completed Recently</h1>
    </div>
    <div className="owl-carousel project-carousel bg-drak wow fadeIn" data-wow-delay="0.1s">
      <a className="project-item" href>
        <img className="img-fluid" src="img/interior1.jpeg" style={{height: 400}} alt />
        <div className="project-title">
          <h5 className="gallary">Interior Designer</h5>
        </div>
      </a>
      <a className="project-item" href>
        <img className="img-fluid" src="img/houseplan2.jpg" style={{height: 400}} alt />
        <div className="project-title">
          <h5 className="gallary">House Plan</h5>
        </div>
      </a>
      <a className="project-item" href>
        <img className="img-fluid" src="img/dhanjode1.jpg" style={{height: 400}} alt />
        <div className="project-title">
          <h5 className="gallary">Duplex </h5>
        </div>
      </a>
      <a className="project-item" href>
        <img className="img-fluid" src="img/house1.jpeg" style={{height: 400}} alt />
        <div className="project-title">
          <h5 className="gallary">Villa</h5>
        </div>
      </a>
      {/* <a class="project-item" href="">
          
           <video src="img/interior21.mp4"   controls> </video>
          <div class="project-title">
              <h5  class="gallary" class="text-primary mb-0">Energy Engineering</h5>
          </div>
      </a> */}
      {/* <a class="project-item" href="">
         
          <video src="img/interior2aa.mp4"   controls> </video>
          <div class="project-title">
              <h5 class="text-primary mb-0">Residential Interior</h5>
          </div>
      </a> */}
    </div>
  </div>
  {/* <div class="container-fluid bg-dark pt-5 my-5 px-0">
  <div class="text-center mx-auto mt-5 wow fadeIn" data-wow-delay="0.1s" style="max-width: 600px;">
      <p class="fw-medium text-uppercase text-primary mb-2">Our Projects</p>
      <h1 class="display-5 text-white mb-5">See What We Have Completed Recently</h1>
  </div>
  <div class="owl-carousel project-carousel wow fadeIn" data-wow-delay="0.1s">
      <a class="project-item" href="">
          <img class="img-fluid" src="img/project-1.jpg" alt="">
          <div class="project-title">
              <h5 class="text-primary mb-0">Auto Engineering</h5>
          </div>
      </a>
      <a class="project-item" href="">
          <img class="img-fluid" src="img/project-2.jpg" alt="">
          <div class="project-title">
              <h5 class="text-primary mb-0">Civil Engineering</h5>
          </div>
      </a>
      <a class="project-item" href="">
          <img class="img-fluid" src="img/project-3.jpg" alt="">
          <div class="project-title">
              <h5 class="text-primary mb-0">Gas Engineering</h5>
          </div>
      </a>
      <a class="project-item" href="">
          <img class="img-fluid" src="img/project-4.jpg" alt="">
          <div class="project-title">
              <h5 class="text-primary mb-0">Power Engineering</h5>
          </div>
      </a>
      <a class="project-item" href="">
          <img class="img-fluid" src="img/project-5.jpg" alt="">
          <div class="project-title">
              <h5 class="text-primary mb-0">Energy Engineering</h5>
          </div>
      </a>
      <a class="project-item" href="">
          <img class="img-fluid" src="img/project-6.jpg" alt="">
          <div class="project-title">
              <h5 class="text-primary mb-0">Water Engineering</h5>
          </div>
      </a>
  </div>
    </div> */}
  {/* Project End */}
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

    </div>
  )
}
