import './base-video.css';


const baseUrl = 'https://ik.imagekit.io/ptbmshrys';

const VideoImage = ({name, width, height}) => 
(
 /*   <iframe title='Video' width="420" height="345" 
    src={`${baseUrl}/${name}.mov`} alt={name} className="base-video" 
    style={{width: width || '100%', height: height || '100%'}}>
    </iframe>
*/
 

<video width="750" height="500" controls >
<source src={`${baseUrl}/${name}.mov`} />
</video>

);
   
export default VideoImage;