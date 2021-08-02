import React from "react";
import Header from "../../header/Header";
import "./shop.css";

const Shop = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container-shop">
          <h2 className="main-heading main-heading-shop">Каталог товаров</h2>
        </div>
      </main>
    </>
  )
}

export default Shop;