import React from "react";

const admin = () => {
  /* const createItem = async () => {
    const res = await fetch("/api/Item/add", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        desc: desc,
        price: price,
        img: img,
      }),
    });
    const data = await res.json();
    console.log(data);
  }; */

  return (
    <div className="admin__container">
      <div className="input__container">
        <form action="/api/item/add" method="post">
          <label htmlFor="name">Item Name</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="item">Item Description</label>
          <input type="text" id="item" name="item" />

          <label htmlFor="price">Item Price</label>
          <input type="text" id="price" name="price" />

          <label htmlFor="img">Item Image URL</label>
          <input type="text" id="img" name="img" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default admin;
