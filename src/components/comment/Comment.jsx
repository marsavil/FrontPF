import { useState } from "react";
import "./comment.css";
import { FormComment } from "./FormComment";
import { PostedComment } from "./PostedComment";
import { useSelector } from "react-redux";

export const Comment = () => {
  const user =  useSelector((state) => state.userLogged);
  //simulacion de los comentarios traidos de la base de datos
  //llenar este hook con una consulta a la base
  const [postedComments, setPostedComments] = useState([
    {
      text: "",
    },
  ]);

  

  return (
    <div className="d-flex flex-row justify-content-center">
      <div className="row">
        <div className="col-sm-5 col-md-6 col-12 pb-4">
          <h1 className="texts">Comments</h1>
          {postedComments.length > 0 ? (
            postedComments.map((e) => (
              <div key={e.id} className="d-flex flex-column align-items-center">
                <PostedComment key={e.id} name={e.name} comment={e.comment} />
              </div>
            ))
          ) : (
            <h2 className="texts">No hay comentarios</h2>
          )}
        </div>
      </div>


      <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4 mb-4 user">
        {user ? <FormComment />
        :
        <h2>Debes iniciar sesión para poder comentar</h2>}
      </div>
    </div>
  );
};


export default Comment;

