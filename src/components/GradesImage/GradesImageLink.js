import { Link } from "react-router-dom";
import GradesImage from "./GradesImage";

const GradesImageLink = ({name, url}) => (
    <Link to={url}>
        <GradesImage name={name} />
    </Link>
);

export default GradesImageLink;