import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import "./Navbar.scss";
import { Badge } from "@material-ui/core";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="left">
            <span className="language">EN</span>
            <div className="search">
              <input />
              <Search style={{ color: "grey", fontSize: "16px" }} />
            </div>
          </div>
          <div className="center">
            <h1>
              HealthCare<span>Mart</span>
            </h1>
          </div>
          <div className="right">
            <div className="item">REGISTER</div>
            <div className="item">SIGN IN</div>
            <div className="item">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
