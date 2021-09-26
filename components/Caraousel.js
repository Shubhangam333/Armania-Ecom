const Caraousel = ({ products }) => {
  let ans = [];
  products.map((product, index) => (ans[index] = product.images[0].url));

  return (
    <div className="container-fluid">
      <div className="row banner" color="primary">
        <div className="row col-md inner-banner m-4">
          <div className="col-md-6 col-sm-6 col-6   content bg-circle align-self-center text-center">
            <h1 className="text-center small-head">Welcome to Armania!</h1>
            <h5>Your one and only stop for purchasing Products</h5>
            <p className="dummy-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            
            </p>
            {/* <div className="button">
              <button type="button" className="btn">
                Shop Now{" "}
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              </button>
            </div> */}
          </div>
          <div className="col-md-6 col-sm-6 col-6 image align-end">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={ans[0]}
                    alt="First slide"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={ans[1]}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={ans[3]}
                    alt="First slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caraousel;
