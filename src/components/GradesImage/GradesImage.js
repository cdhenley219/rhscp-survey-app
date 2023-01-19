import BaseImage from "../BaseImage/BaseImage";
import './grades-image.css';

const GradesImage = ({name}) => {
    const getTitle = () => {
        switch(name){
            case 'apple': return 'K-2';
            case 'board': return '6-8';
            default: return '3-5';
        }
    };

    return (
        <div className="grades-image">
            <div className="grades-image__title">
                <div>Grades</div>
                <div>{getTitle()}</div>
            </div>
            {name !== 'triangle' && <BaseImage name={name} />}
            {name === 'triangle' && <div className="grades-image__triangle"></div>}
        </div>
    );


};

export default GradesImage;