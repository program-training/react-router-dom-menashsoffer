import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/Users")}>Users</button>
      <button onClick={() => navigate("/Products")}>Products</button>
    </>
  );
};
export default Home;
