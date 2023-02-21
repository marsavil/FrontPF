import { useSelector } from "react-redux";
import invitado from "../../Media/invitado.png";
import "./user.css"

export const User = () => {
  
  const user = useSelector((state) => state.userLogged);
  const image = user ? user.image : null;
  const name = user ? user.name :null
  return (
    <div className="user-container">
      <div>
        {user  ? <img className="profileImg"src={image} alt="" height="40px" width="40px" /> : <img className="profileImg"src={invitado} alt="" height="40px" width="40px" />}
      </div>
      <div className="name-container">
      {user ? <h4 className="name">{name}</h4> : <h4 className="name">Invitado</h4> }
      </div>
    </div>
  );
};
export default User;
