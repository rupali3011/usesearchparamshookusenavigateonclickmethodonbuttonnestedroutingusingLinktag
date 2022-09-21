import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  /*const NavToPage=()=>{
    navigate("/about");
  }*/
  const NavToPage = (url) => {
    navigate(url);
  };
  return (
    <>
      <h2>About page</h2>
      <button onClick={() => navigate("/")}>home</button>
      <button onClick={() => NavToPage("/about")}>aboutpage</button>
      {/* <button onClick={()=>NavToPage()}*/}

      <button>contact</button>
    </>
  );
}
export default About;
