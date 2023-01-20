import './base-image.css';

const baseUrl = 'https://ik.imagekit.io/ptbmshrys';

const BaseImage = ({name, width, height}) => (
    <img src={`${baseUrl}/${name}.jpg`} alt={name} className="base-image" style={{width: width || '100%', height: height || '100%'}}/>
);

export default BaseImage;