import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postComments } from "../../Redux/actions";

export const FormComment = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user =  useSelector((state) => state.userLogged)
  const product =  useSelector((state) => state.detail)

  const [comment, setComment] = useState({
    text: "",
    moderated: false,
    postedBy: user.id,
    product: product.id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.text.length > 0) {
      dispatch(postComments(comment));
      alert("Success");
      setComment({
        text: "",
        moderated: false,
        postedBy: user.id,
        product: product.id,
      });
      setInterval("location.reload()",500)
      
    } else {
      alert("Add a comment");
    }
    //validar que haya un comentario y guardarlo en la base de datos
  };
  function handleChange(e) {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
      
    });
    console.log(comment)
  }
  const handleComment = (e) => {
    setComment(e.target.value);
  };

  return (
    <form id="algin-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <h4 className="texts">Leave a comment</h4>
        {user ? <textarea
          name = "text"
          // value = {comment.text}
          onKeyUp={(e) => handleChange(e)}
          cols="30"
          rows="5"
          className="form-control form-textarea"
          required
        ></textarea>
        :
        <textarea
          name = "text"
          // value = {comment.text}
          cols="30"
          rows="5"
          className="form-control form-textarea"
          required
        >Debes registrarte para poder comentar</textarea>}
      </div>
      <div className="form-group">
        <button type="submit" id="post" className="back" onClick={handleSubmit}>
          Post Comment
        </button>
      </div>
    </form>
  );
};
