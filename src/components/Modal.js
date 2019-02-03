import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="modalContainer">
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>Item added to cart</h5>
                      <img src={img} alt="product" className="img-fluid" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price ${price}</h5>
                      <Link to="/">
                        <button
                          className="btn btn-outline-info my-2 my-sm-0"
                          onClick={() => closeModal()}
                        >
                          Continue Shopping
                        </button>
                      </Link>
                      <Link to="/cart">
                        <button
                          className="btn btn-outline-warning my-2 my-sm-0"
                          onClick={() => closeModal()}
                        >
                          Go to Cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
