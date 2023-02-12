
import gifFile from '../loadingImg.gif';

const Spinner = (props) =>{
  return(
    <div className='text-center'>
    <img src={gifFile}  alt="newsGhost"  width='50px' />
  </div>
  )
}

export default Spinner;
