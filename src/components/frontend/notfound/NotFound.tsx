import { Link } from "react-router-dom";

const style = {
  margin: "0 auto",
  width: "50%",
  border: "3px solid green",
  padding: "10px",
};

const NotFound = () => (
  <div style={style}>
    <h4>I'm a flexbox container!</h4>
    <Link to={"/"}>Back to Home</Link>
  </div>
);

export default NotFound;
