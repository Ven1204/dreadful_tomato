import { Props }  from './props';
import { Link } from 'react-router-dom';
import './props.scss';

function Notice() {
  return(
  <div className='props-container'>
    <h1>Legal Notice</h1>
    <p>{Props}</p>
    <Link to='/'>
      <button className='btn-props'>Home</button>
    </Link>
  </div>
)
}
export default Notice;
