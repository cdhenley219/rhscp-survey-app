import BaseImage from "./BaseImage";

const GradesImage = ({name}) => {
    const title = name === 'apple' ? 'K-2' : '6-8';

    return (
        <div className="grades-image">
            <div className="grades-image__title">
                <div>Grades</div>
                <div>{title}</div>
            </div>
            <BaseImage name={name} />
        </div>
    );


};

export default GradesImage;