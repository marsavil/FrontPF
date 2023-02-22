import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllProducts,
  getUsers,
  getComments,
  getLowStockProducts,
} from "../../Redux/actions";
import StockTable from "./StockTable";
import ProductsTable from "./products";
import "./Admin.css";

const Admin = () => {
  const dispatch = useDispatch();

  const [bool, setBool] = useState(false);

  useEffect(() => {
    dispatch(getLowStockProducts(1, 10));
    dispatch(getAllProducts());
    dispatch(getComments());
    dispatch(getUsers());
    setTimeout(() => {
      setBool(true);
    }, 3000);
  }, [dispatch]);

  const products = useSelector((state) => state.product);
  const comments = useSelector((state) => state.comments);
  const users = useSelector((state) => state.users);
  const lowStock = useSelector((state) => state.lowStock);

  if (bool) {
    return (
      <div className="container">
        <ProductsTable products={products} />
        <StockTable lowStock={lowStock} />
      </div>
    );
  } else {
    return <div>Mejor suerte para la próxima</div>;
  }

  // <div className="container">
  //   <div>Productos
  //     <div>Productos de escaso stock{lowStock ? lowStock.map ((p) => (<div key={p.id}><h3>{p.id}</h3><h3>{p.model}</h3> <h3>{p.stock}</h3></div>)): <p>No hay productos con bajo stock</p>}</div>
  //     <div>Productos publicados {products.map ((p) => (<div key={p.id}><h3>{p.id}</h3><h3>{p.model}</h3> <h3>{p.price}</h3><h3>{p.stock}</h3></div>))}</div>
  //     <div>Seleccionar producto para borrado lógico "se pasa el id del producto por body"</div>
  //     <div>Modificar stock de un producto pasar por body id del producto y propiedad a modificar con su nuevo valor</div>
  //   </div>
  //   <div>Commentarios
  //   <div>Productos de escaso stock{comments ? comments.map ((p) => (<div key={p.id}><h3>{p.id}</h3><h3>{p.text}</h3> <h3>{p.postedBy}</h3><h3>{p.product}</h3></div>)): <p>No hay comentarios</p>}</div>
  //     <div>traer todos los comentarios que no esten moderados</div>
  //     <div>modificar la propiedad moderated del comentario y dejar visible u oculto el mismo segun corresponda</div>
  //   </div>
  //   <div>Usuarios
  //   <div>Productos de escaso stock{users ? users.map ((p) => (<div key={p.id}><h3>{p.id}</h3><h3>{p.name}</h3> <h3>{p.email}</h3><h3>{p.visible.toString()}</h3></div>)): <p>No hay usuarios registrados</p>}</div>
  //     <div>enviar email de notificaciones a todos lo usuarios</div>
  //     <div>modificar la propiedad visible de un usuario  segun corresponda</div>
  //   </div>
  // </div>
};

export default Admin;
