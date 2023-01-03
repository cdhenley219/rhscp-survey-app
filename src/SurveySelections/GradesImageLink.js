import { Link } from "react-router-dom";
import GradesImage from "../GradesImage";

const GradesImageLink = ({name}) => (
    <Link to="/">
        <GradesImage name={name} />
    </Link>
);

export default GradesImageLink;