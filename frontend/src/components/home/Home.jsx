import Navbar from "../navbar/Navbar";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Guest" };

  return (
    <div>
      <Navbar user={user} />
      <h1>Welcome to the Real-Time Chat Application</h1>
    </div>
  );
};

export default Home;
