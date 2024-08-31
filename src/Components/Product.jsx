// import "./App.css";
const Product = () => {
  return (
    <>
      <div className="product container">
        <div className="product-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WEE'RE HERE TO HELP YOU WITH
            OUR SHOES.
          </p>

          <div className="product-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
          </div>

          <div className="shopping">
            <p>Also Available On</p>
          </div>

          <div className="brand-icon">
            <img src="/Images/amazon.png" alt="amazon" className="amazon-icon"/>
            <img src="/Images/flipkart.png" alt="flipkart" className="flipkart-icon" />

          </div>

        </div>
        <div className="product-img">
            <img src="/Images/img1.avif" alt="Sneaker-img" className="shoes-icon" />
        </div>
      </div>
    </>
  );
};

export default Product;
