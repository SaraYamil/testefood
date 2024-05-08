import React, { useState, Fragment, useContext, createContext } from "react";
import { Link } from "react-router-dom";
import FoodContext from "../FoodContext.jsx";

function Menu() {
  const { foods, setFoods } = useContext(FoodContext);
  return (
    <Fragment>
      <main>
        <header className="baldi-header baldi-menu-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-12 mx-auto">
                <h1 className="text-white">Menu</h1>

                <strong className="text-white">
                  Experience Morocco on Your Plate
                </strong>
              </div>
            </div>
          </div>

          <div className="overlay"></div>
        </header>

        <section className="menu section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="mb-lg-5 mb-4"> Menu</h2>
              </div>
              {foods?.map((food) => (
                <div key={food.id} className="col-lg-4 col-md-6 col-12">
                  <div className="menu-thumb">
                    <img
                      src={food.image}
                      className="img-fluid menu-image"
                      alt=""
                    />

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
      </main>
    </Fragment>
  );
}

export default Menu;
