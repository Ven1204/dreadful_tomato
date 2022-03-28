import { Props }  from './props';
import { Link } from 'react-router-dom';
import './props.scss';

function Account() {
return(
  <div className='props-container'>
    <h1>Manage Account</h1>
    <p>{Props}</p>
    <Link to='/'>
      <button className='btn-props'>Home</button>
    </Link>
  </div>
)
}
export default Account;
