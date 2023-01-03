const baseUrl = 'https://ik.imagekit.io/ptbmshrys';

const BaseImage = ({name}) => (
    <img src={`${baseUrl}/${name}.jpg`} className="base-image"/>
);

export default BaseImage;