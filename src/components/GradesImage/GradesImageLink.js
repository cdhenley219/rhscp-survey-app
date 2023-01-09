import GradesImage from "./GradesImage";

const GradesImageLink = ({name, url}) => (
    <a href={url}>
        <GradesImage name={name} />
    </a>
);

export default GradesImageLink;