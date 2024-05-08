import React, { useState, Fragment, useContext, createContext } from "react";
import { Link } from "react-router-dom";
import FoodContext from "../FoodContext.jsx";

function Index() {
  const { foods, setFoods } = useContext(FoodContext);

  return (
    <Fragment>
      <main>
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
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center mb-lg-5 mb-4">Special Menus</h2>
              </div>
              {foods?.map((food) => (
                <div key={food.id} className="col-lg-4 col-md-6 col-12">
                  <div className="menu-thumb">
                    <div className="menu-image-wrap">
                      <img
                        src={food.image}
                        className="img-fluid menu-image"
                        alt=""
                      />

                      <span className="menu-tag bg-warning">{food.catig}</span>
                    </div>

                    <div className="menu-info d-flex flex-wrap align-items-center">
                      <h4 className="mb-0">{food.name}</h4>

                      <span className="price-tag bg-white shadow-lg ms-4">
                        {food.price}
                      </span>

                      <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                        <h6 className="reviews-text mb-0 me-3">
                          {food.review}
                        </h6>

                        <i>
                          <img src="assets/images/stars.png" alt="" />
                        </i>
                        <Link to={`/view/${food.id}`}>
                          <button
                            type="button"
                            className="custom-btn btn btn-danger"
                          >
                            View more
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/*end*/}
            </div>
          </div>
        </section>

        <section className="BgImage"></section>

        <section className="related-news section-padding bg-white">
          <div className="container">
            <div className="row">
              <h2 className="text-center mb-lg-5 mb-4">Related News</h2>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="news-thumb mb-4">
                  <a href="news-detail3.html">
                    <img
                      src="assets/images/news/evnt1.jpg"
                      className="img-fluid news-detail-image"
                      alt="fine dining experience"
                    />
                  </a>

                  <div className="news-text-info">
                    <span className="category-tag me-3 bg-info">
                      Chef's Recipe
                    </span>

                    <strong>26 March 2024</strong>

                    <h5 className="news-title mt-2">
                      <a href="news-detail3.html" className="news-title-link">
                        Bissara perfection tip: Flavor with finesse
                      </a>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="news-thumb mb-4">
                  <a href="news-detail1.html">
                    <img
                      src="assets/images/news/event2.jpg"
                      className="img-fluid news-image"
                      alt=""
                    />
                  </a>

                  <div className="news-text-info">
                    <span className="category-tag me-3 bg-info">News</span>

                    <strong>12 March 2024</strong>

                    <h5 className="news-title mt-2">
                      <a href="news-detail1.html" className="news-title-link">
                        Varied Ftour Ramadan buffet at only 249dh
                      </a>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="news-thumb mb-4">
                  <a href="news-detail2.html">
                    <img
                      src="assets/images/news/event3.jpg"
                      className="img-fluid news-image"
                      alt=""
                    />
                  </a>

                  <div className="news-text-info">
                    <span className="category-tag me-3 bg-info">Events</span>

                    <strong>12 April 2024</strong>

                    <h5 className="news-title mt-2">
                      <a href="news-detail2.html" className="news-title-link">
                        Birthday with a Moroccan touch
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default Index;
