import GradesImage from "../GradesImage";

const GradesImageLink = ({name}) => (
    <a href="/">
        <GradesImage name={name} />
    </a>
);

export default GradesImageLink;