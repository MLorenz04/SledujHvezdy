import { React } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
export const Header = () => (
  <div className="header">
    <div className="menu">
      <ul className="menu_list">
        <Link to="/" relative="path">
          <li className="menu_list_item">Domů</li>
        </Link>{" "}
        <Link to="/hvezdy" relative="path">
          <li className="menu_list_item">Hvězdy</li>{" "}
        </Link>{" "}
        <Link to="/souhvezdi" relative="path">
          <li className="menu_list_item">Souhvězdí</li>{" "}
        </Link>
        <Link to="/add" relative="path">
          <li className="menu_list_item">Přidat hvězdu</li>{" "}
        </Link>
      </ul>
    </div>
  </div>
);
