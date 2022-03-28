import { Props }  from './props';
import { Link } from 'react-router-dom';
import './props.scss';

function Help() {
  return(
    <div className='props-container'>
      <h1>Help</h1>
      <p>{Props}</p>
      <Link to='/'>
        <button className='btn-props'>Home</button>
      </Link>
    </div>
  )
}
export default Help;
