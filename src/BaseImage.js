const baseUrl = 'https://ik.imagekit.io/ptbmshrys';

const BaseImage = ({name}) => (
    <img src={`${baseUrl}/${name}.jpg`} alt={name} className="base-image"/>
);

export default BaseImage;