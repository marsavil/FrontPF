import React from "react";
import "./comment.css";
import { BsFillPersonFill } from "react-icons/bs";
function Comment() {
  function nComentarios() {
    let li = document.createElement("li");
    let valorIngresado = document.getElementById("nuevoComentarios").value;
    let text = document.createTextNode(valorIngresado);
    li.appendChild(text);

    if (valorIngresado === "") {
      alert("Please enter a comment.");
    } else {
      document.getElementById("comentarios").appendChild(li);
    }
    document.getElementById("nuevoComentarios").value = "";
    li.className = "comentario";
    let borrar = document.createElement("p");
    borrar.innerHTML = "Borrar";
    borrar.className = "close";
    li.appendChild(borrar);
    let close = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < close.length; i++) {
      close[i].onClick = function () {
        let div = this.parentElement;
        div.style.display = "none";
      };
    }
  }

  return (
    <div className="contenedor">
      <div className="contenedor-1">
        <section className="contenedor-sec">
          <div className="img-user">
            <BsFillPersonFill className="img" />
          </div>
          <div>
            <input
              type="text"
              id="nuevoComentarios"
              className="input-com"
              placeholder="Enter your comment please ...."
            />
            <div className="btn-comment">
              <button className="btn" onClick={nComentarios}>
                Comment
              </button>
            </div>
          </div>
        </section>
      </div>
      <ul id="comentarios" className="contenedor-2"></ul>
    </div>
  );
}
export default Comment;
