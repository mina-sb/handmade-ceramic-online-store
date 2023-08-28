import React, { useEffect, useState } from "react";
import "./AddProduct.scss";
import { AiFillDelete } from "react-icons/ai";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [required, setRequired] = useState(false);
  const [status, setStatus] = useState(0);
  const [categoryList, setCategoryList] = useState([]);
  const [images, setImages] = useState([]);
  const [removeItem, setRemoveItem] = useState(-1);

  const add = async () => {
    setRequired(true);
    if (title.length && price.length && description.length !== 0) {
      const res = await fetch("https://api.escuelajs.co/api/v1/products/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          price: parseInt(price),
          description: description,
          categoryId: category === "" ? 1 : parseInt(category),
          images: ["https://placeimg.com/640/480/any"],
        }),
      });
      const content = await res.json();

      if (res.status == "201") {
        setTitle("");
        setPrice("");
        setDescription("");
        setRequired(false);
      }
      res.status == "201" ? setStatus(1) : setStatus(2);
    }
  };
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setStatus(0);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, [status]);
  const getCategories = async () => {
    const res = await fetch(
      "https://places.iran.liara.run/api/products/categories/categories"
    );
    const data = await res.json();
    setCategoryList(data.categories);
    console.log(data.categories)
  };
  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
  }, [images]);

  const priceValidation = (e) => {
    var reg = /^\d+$/;
    if (e.target.value != "") {
      if (e.target.value.match(reg)) {
        setPrice(e.target.value);
      } else {
      }
    } else {
      setPrice(e.target.value);
    }
  };

  const removeFile = (index) => {
    setRemoveItem(index);
  };
  useEffect(() => {
    const temp = [...images];
    temp.splice(removeItem, 1);
    setImages(temp);
  }, [removeItem]);

  return (
    <div>
      <div className="add-product-container">
        <h3 className="form-title">Add a Product</h3>
        <hr className="hr" />
        <input
          placeholder="Title"
          className={`form-input ${
            required ? (title.length == 0 ? "required" : "") : ""
          }`}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <div className="input-container">
          <input
            placeholder="Price"
            className={`form-input price-input ${
              required ? (price.length == 0 ? "required" : "") : ""
            }`}
            value={price}
            onChange={(e) => {
              priceValidation(e);
            }}
          />
          <span className="form-tooltip">Only Enter Number!</span>
        </div>
        <br />
        <select
          id="framework"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          {categoryList.map((item) => {
            return <option value={item.id}>{item.categoryName}</option>;
          })}
        </select>
        <br />
        <textarea
          rows={6}
          placeholder="Description"
          className={`form-input ${
            required ? (description.length == 0 ? "required" : "") : ""
          }`}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <input
          class="custom-file-input"
          type="file"
          multiple
          onChange={(e) => {
            setImages([...images, ...e.target.files]);
          }}
        />
        <br />
        {images.map((item, index) => {
          return (
            <div className="upload-list">
              <span>{item.name}</span>
              <AiFillDelete
                onClick={() => {
                  removeFile(index);
                }}
                className="remove-item"
              />
            </div>
          );
        })}
        <br />
        <a className="form-btn" onClick={add}>
          Add Product
        </a>
        {
          <a
            className={`status ${
              status == 1 ? "success" : status == 2 ? "error" : ""
            }`}
          >
            {status == 1
              ? "Product Added Successfully"
              : status == 2
              ? "Some Thing Went Run"
              : ""}
          </a>
        }
      </div>
    </div>
  );
};

export default AddProduct;
