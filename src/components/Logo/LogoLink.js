import { Link } from "react-router-dom";
import Logo from "./Logo";

const LogoLink = () => (
    <div className="logo-link">
        <Link to="/">
            <Logo />
        </Link>
    </div>

);

export default LogoLink;