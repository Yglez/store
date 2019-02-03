import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="page-footer font-small pt-4">
        <div className="container">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-md-4">
                <h5 className="text-uppercase">Contact</h5>
              </div>
              <div className="col-md-4">
                <ul className="list-unstyled">
                  <li className="nav-item">
                    <a
                      className="nav-link navFooter"
                      href="https://github.com/Yglez/"
                    >
                      <i class="fab fa-github" />
                      <span> GitHub</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-unstyled">
                  <li className="nav-item">
                    <a
                      className="nav-link navFooter"
                      href="https://www.linkedin.com/in/yglez/"
                    >
                      <i class="fab fa-linkedin" />
                      <span> LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">
            <span>
              <p>
                © 2018 Copyright:{" "}
                <a className="navFooter" href="https://yglez.netlify.com/">
                  Yesenia Gonzalez{" "}
                </a>
              </p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
