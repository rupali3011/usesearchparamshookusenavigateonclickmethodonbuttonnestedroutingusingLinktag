import { Link, Outlet } from "react-router-dom";
function Contact() {
  return (
    <>
      <h2>Contact page</h2>
      <Link to="Company">Company</Link>
      <Link to="Channel">Channel</Link>
      <Outlet />
    </>
  );
}
export default Contact;
