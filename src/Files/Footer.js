import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
<div>
    {/* Footer Start */}
<div className="container-fluid bg-primary footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
  <div className="container-fluid py-0">
    <div className="row g-5">
      {/* logoimg start  */}
      <div className="col-lg-3 col-md-3">
        <img src="img/instra_logo (1).jpg" style={{height: 200, width: 200, borderRadius: '30px 0px 30px 0px', marginTop: 30}} />
      </div>
      {/* logoimg end */}
      <div className="col-lg-3 col-md-3">
        <h5 className="text-white mb-4">Our Office</h5>
        <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />Plot number 472
          Chitanvis Nagar 
          Motha Tajbag, Umred road Nagpur behind panchavati Ashram near Hanuman Mandir Nagpur</p>
        <p className="mb-2"><i className="fa fa-phone-alt me-3" />+918208710419 </p>
        <p className="mb-2"><i className="fa fa-envelope me-3" />Jayshiv.associates@gmail.com </p>
      </div>
      <div className="col-lg-3 col-md-3">
        <h5 className="text-white mb-4">Menus</h5>
        <Link className="btn btn-link" to="/">Home</Link>
        <Link className="btn btn-link" to="/about">About Us</Link>
        <Link className="btn btn-link" to="/contact">Contact Us</Link>
        <Link className="btn btn-link" to="/service">Our Services</Link>
        <Link className="btn btn-link" to>Terms &amp; Condition</Link>
      </div>
      <div className="col-lg-3 col-md-3">
        <h5 className="text-white mb-4">Business Hours</h5>
        <p className="mb-1">Monday - Friday</p>
        <h6 className="text-light">09:00 am - 07:00 pm</h6>
        <p className="mb-1">Saturday</p>
        <h6 className="text-light">09:00 am - 12:00 pm</h6>
        <p className="mb-1">Sunday</p>
        <h6 className="text-light">Closed</h6>
      </div>
      {/* <div class="col-lg-3 col-md-3">
          <a class="btn btn-square btn-primary rounded-circle me-2" href="https://www.instagram.com/jay_shiv_associates/" style="width: 50px;height: 50px";><i
                  class="fab fa-instagram" style="font-size: 30px;" ></i></a>
                  <br>
          <a class="btn btn-square btn-primary rounded-circle me-2" href="https://www.facebook.com/profile.php?id=61559071919481" style="width: 50px;height: 50px";><i
                  class="fab fa-facebook-f" style="font-size: 30px;"></i></a>
                  <br>
          <a class="btn btn-square btn-primary rounded-circle me-2" href="" style="width: 50px;height: 50px";><i
                  class="fab fa-youtube" style="font-size: 30px;"></i></a>
                  <br>
          <a class="btn btn-square btn-primary rounded-circle me-2" href="" style="width: 50px;height: 50px";><i
                  class="fab fa-linkedin-in" style="font-size: 30px;"></i></a>
      </div> */}
      {/* <div class="col-lg-3 col-md-6">
          <h5 class="text-white mb-4">Newsletter</h5>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div class="position-relative w-100">
              <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                  placeholder="Your email">
              <button type="button"
                  class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
          </div> */}
      {/* socialmedialinks */}
      <div className="d-flex pt-3" style={{justifyContent: 'center'}}>
        <a className="btn btn-square btn-light rounded-circle me-2" href style={{width: 50, height: 50}} >
        <i className="fab fa-linkedin-in" style={{fontSize: 30, color: '#ff5e14'}} /></a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a className="btn btn-square btn-light rounded-circle me-2" href="https://www.instagram.com/jay_shiv_associates/" style={{width: 50, height: 50, color: '#ff5e14'}}><i className="fab fa-instagram" style={{fontSize: 30}} /></a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a className="btn btn-square btn-light rounded-circle me-2" href="https://www.facebook.com/profile.php?id=61559071919481" style={{width: 50, height: 50, color: '#ff5e14'}}><i className="fab fa-facebook-f" style={{fontSize: 30}} /></a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a className="btn btn-square btn-light rounded-circle me-2" href style={{width: 50, height: 50, color: '#ff5e14'}}><i className="fab fa-twitter" style={{fontSize: 30}} /></a>
      </div> 
      {/* socialmedialinks */}
    </div>
  </div>
</div>
{/* Footer End */}

{/* Copyright Start */}
<div className="container-fluid copyright bg-primary">
  <div className="container text-center">
    <p className="mb-2">Copyright © <a className="fw-semi-bold" href="#">2024 Jay Shiv Associates</a>, All Right Reserved.
    </p>
    <p className="copy">Designed By <a className="fw-semi-bold" href="https://www.pskitservices.com">PSK Technologies Pvt. Ltd.</a></p>
  </div>
</div>
{/* Copyright End */}
<a   href="https://wa.me/918208710419"  target="_blank"><img src="img/whatsapp.png" class="whats-app" href=""/></a>

</div>




  )
}
