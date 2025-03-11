import { useSelector } from 'react-redux';

function MyAccount() {
    
  const {loading, user} = useSelector(state => state.user);
  console.log(loading , user);
  
  return (
    <div>MyAccount</div>
  )
}

export default MyAccount