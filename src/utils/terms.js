import { Props }  from './props';
import { Link } from 'react-router-dom';
import './props.scss';

function Terms() {
  return(
  <div className='props-container'>
    <h1>Terms of Use</h1>
    <p>{Props}</p>
    <Link to='/'>
      <button className='btn-props'>Home</button>
    </Link>
  </div>
)
}
export default Terms;
