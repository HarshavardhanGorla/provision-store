import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Productpage() {
  const [productData, setProductData] = useState([]);
  const [search, setSearch] = useState("");

  const get_products = () => {
    axios
      .get("https://api.kalpav.com/api/v1/product/category/retail")
      .then((response) => {
        console.log(response.response);
        setProductData(response.data.response);
      })
      .catch((error) => {
        console.error("Error making token request:", error);
      });
  };

  useEffect(() => {
    get_products();
  }, []);

  const get_products_filter_data = () => {
    return productData.filter((product) => {
      if (
        product.productCategory.productCategoryName
          .toLowerCase()
          .includes(search.toLowerCase())
      ) {
        return product;
      }
    });
  };

  return (
    <>
      <div className="container mt-2 ">
        <div className="row mb-4">
          <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  Product Page
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a
                        class="nav-link disabled"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                      ></a>
                    </li>
                  </ul>
                  <form class="d-flex">
                    <input
                      class="form-control me-2"
                      type="search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="row">
          {get_products_filter_data()?.map((product, index) => (
            <div key={index} className="col-md-3 mb-3">
              <div className="card" style={{ width: "18rem", height: "100%" }}>
                <div className="card-body" style={{ height: "100%" }}>
                  <img
                    src={product.productCategory.productCategoryImage}
                    alt="Logo"
                    style={{
                      width: "50px",
                      height: "auto",
                      marginBottom: "10px",
                    }}
                  />
                  <h5 className="card-title">
                    {product.productCategory.productCategoryName}
                  </h5>
                  <p className="card-text">
                    WholeSale {product.productCategory.wholeSale}
                  </p>
                  <p className="card-text">
                    Retail {product.productCategory.retail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
