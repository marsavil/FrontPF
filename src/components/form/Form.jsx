import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, postProduct } from "../../Redux/actions";
import "./form.css";
import axios from "axios";

export default function Form() {
  const dispatch = useDispatch();

  const history = useHistory();

  const [input, setInput] = useState({
    marca: "",
    model: "",
    condition: "",
    price: "",
    ram: "",
    camera: "",
    image: "",
    os: "",
    stock: "",
  });
  //const [uploadedImage, setuploadedImage] = useState("");

  var uploadedImage = "";

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  // function handleDeleteType(e){
  //     setInput({
  //         ...input,
  //         types: input.types.filter((t) => t !== e),
  // });

  // }

  const uploadImage = (e) => {

    const formData = new FormData();

    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "uq7hpsv9");

    axios
      .post("https://api.cloudinary.com/v1_1/dlzp43wz9/image/upload", formData)
      .then((response) => {
        console.log(response);
        uploadedImage = response.data.secure_url;
        console.log(uploadedImage)
        setInput({
            ...input,
            image: uploadedImage,
        })
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (
      input.marca.length >= 1 &&
      input.model.length >= 1 &&
      input.price >= 5000 &&
      input.price <= 1200000 &&
      input.condition.length >= 1 &&
      input.ram.length >= 1 &&
      input.camera.length >= 1 &&
      input.stock.length >= 1 &&
      input.os.length > 0
    ) {
      dispatch(postProduct(input));
      alert("Success");
      setInput({
        marca: "",
        model: "",
        condition: "",
        price: "",
        ram: "",
        camera: "",
        image: "",
        os: "",
        stock: "",
      });

      history.push("/home");
    } else {
      alert("Complete the form correctly before sending it");
    }
  }

  return (
    <div>
      <div>
        <Link to="/home">
          <button>Return to home</button>
        </Link>
      </div>

      <div className="contGral">
        <div className="card">
          <div className="contTitle">
            <div className="title">Add your phone</div>
          </div>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form">
              <div className="izq">
                <div>
                  <div>Marca:</div>
                  <input
                    type="text"
                    value={input.marca}
                    name="marca"
                    onChange={(e) => handleChange(e)}
                    placeholder="marca"
                    className="inputs"
                  />
                </div>

                <div>
                  <div>Model:</div>
                  <input
                    type="text"
                    value={input.model}
                    name="model"
                    onChange={(e) => handleChange(e)}
                    placeholder="Model"
                    className="inputs"
                  />
                </div>

                <div>
                  <div>Price:</div>
                  <input
                    type="number"
                    value={input.price}
                    name="price"
                    onChange={(e) => handleChange(e)}
                    placeholder="Price"
                    className="inputs"
                  />
                  {(input.price > 1200000 || input.price < 5000) && (
                    <div className="error">
                      The price can't be greater than $1.200.000 nor smaller than
                      $5000
                    </div>
                  )}
                </div>

                <div>
                  <div>Condition:</div>
                  <input
                    type="text"
                    value={input.condition}
                    name="condition"
                    onChange={(e) => handleChange(e)}
                    placeholder="condition"
                    className="inputs"
                  />
                  <div>Ram:</div>
                  <input
                    type="text"
                    value={input.ram}
                    name="ram"
                    onChange={(e) => handleChange(e)}
                    placeholder="ram"
                    className="inputs"
                  />
                </div>
              </div>

              <div className="der">
                <div>
                  <div>Camera:</div>
                  <input
                    type="text"
                    value={input.camera}
                    name="camera"
                    onChange={(e) => handleChange(e)}
                    placeholder="pixeles"
                    className="inputs"
                  />
                </div>

                <div>
                  <div>Stock:</div>
                  <input
                    type="text"
                    value={input.stock}
                    name="stock"
                    onChange={(e) => handleChange(e)}
                    placeholder="stock"
                    className="inputs"
                  />
                </div>

                <div>
                  <div>Os</div>
                  <input
                    type="text"
                    value={input.os}
                    name="os"
                    onChange={(e) => handleChange(e)}
                    placeholder="Os"
                    className="inputs"
                  />
                </div>

                <div>
                  <div>Image:</div>
                  {/* <input
                    type="text"
                    value={input.image}
                    name="image"
                    onChange={(e) => handleChange(e)}
                    placeholder="URL"
                    className="inputs"
                  /> */}
                  <input
                    type="file"
                    name="image"
                    value={uploadedImage}
                    onChange={uploadImage}
                  />
                </div>
                <div>
                  <img src={input.image} alt="" width={"100px"} />
                  Preview
                </div>
                <button id="bt" className="button" onClick={handleSubmit}>
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <form>
        <div></div>
      </form>
    </div>
  );
}
