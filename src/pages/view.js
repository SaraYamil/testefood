import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ViewContext from "../ViewContext.jsx";

function View() {
  const { id } = useParams();
  const { selectedFood, loading, error } = useContext(ViewContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!selectedFood) {
    return <div>Food not found!</div>;
  }

  return (
    <div>
      <div id="container">
        <div className="product-details">
          <h1>{selectedFood.name} </h1>

          <span className="hint-star star">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </span>

          <p className="information">{selectedFood.Discription}</p>
          <button type="button" className="custom-btn btn btn-danger">
            {selectedFood.price}
          </button>

          {/* <div className="control">
            <button type="button" className="custom-btn btn btn-danger">
              {selectedFood.price}
            </button>
          </div> */}
        </div>

        <div className="product-image">
          <img src={`../${selectedFood.image}`} />
        </div>
      </div>
    </div>
  );
}

export default View;
