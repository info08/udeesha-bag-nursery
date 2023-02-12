import { Link } from "react-router-dom";
import logoFile from "../logoU.jpg";

export default function Navbar() {
  return (
    <div>
      <nav
        className="fixed-top navbar navbar-expand-lg navbar-light bg-success"
        style={{ padding: "5px" }}
      >
        <Link className="navbar-brand text-white" to="/">
          Udeesha Bag Nursery
        </Link>
        <Link className="txt-admin text-white left-text" to="/admin">
          Admin
        </Link>
      </nav>
    </div>
  );
}
