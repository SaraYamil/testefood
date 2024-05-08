import React from 'react'

export default function Resrv() {
  return (
    <div>   <main>
    <section className="site">
      <div className="video-wrap">
        <video
          autoplay=""
          loop=""
          muted=""
          className="custom-video"
          poster=""
        >
          <source src="video/production_ID_3769033.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="overlay"></div>
    </section>
    <section className="menu section-padding">
      <div>
        <h1> YOU'R Reservation is done </h1>
      </div>
    </section>

    <section className="BgImage"></section>
  </main></div>
  )
}
