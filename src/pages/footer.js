import React from 'react'


export default function Footer() {
  return (
    <footer className="baldi-footer section-padding">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h4 className="text-white mb-4 me-5">BeldiFood</h4>
            </div>
            <div className="col-lg-4 col-md-7 col-xs-12 tooplate-mt30">
                <h6 className="text-white mb-lg-4 mb-3">Location</h6>
                <p>Marrakech, Morocco</p>
                <a href="https://www.google.com/maps/place/Marrakech/@31.6348079,-8.1726687,11z/data=!3m1!4b1!4m6!3m5!1s0xdafee8d96179e51:0x5950b6534f87adb8!8m2!3d31.6225224!4d-7.9898258!16zL20vMDU0cnc?entry=ttu" className="custom-btn btn btn-dark mt-2">Directions</a>
            </div>
            <div className="col-lg-4 col-md-5 col-xs-12 tooplate-mt30">
                <h6 className="text-white mb-lg-4 mb-3">Opening Hours</h6>
                <p className="mb-2">Monday - Sunday</p>
                <p>08:00 AM - 11:00 PM</p>
                <p>Tel: <a href="tel: 010-02-0340" className="tel-link">010-02-0340</a></p>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 tooplate-mt30">
                <h6 className="text-white mb-lg-4 mb-3">Copyright</h6>
                <p className="copyright-text tooplate-mt60">Copyright BeldiFood.
                    <br />
                    Designed by:
                    <br />
                    SARA YAMIL
                    <br />
                    LAHNINE FATIMA EZZAHRA
                </p>
            </div>
        </div>
    </div>
</footer>
  )
}
