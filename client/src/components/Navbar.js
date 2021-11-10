import '../stylesheet/Navbar.css'
import { Link, useHistory } from 'react-router-dom'
import { setUserinfo, setIsLogin } from '../redux/action'
import { useDispatch } from 'react-redux'
import { initialState } from '../redux/reducer/Initialstate'
import axios from 'axios'

function Navbar ({ OpenModal, isLogin, userinfo }) {
  const dispatch = useDispatch()
  const history = useHistory()
  const logout = () => {
    axios.post('http://localhost:80/users/logout', null, {
      headers: {
        Authorization: `Bearer ${localStorage.accessToken}`
      }
    })
      .then((data) => {
        dispatch(setUserinfo({}))
        dispatch(setIsLogin(false))
        localStorage.clear()
        history.push('/')
      })
      .catch((err) => {
        if (err) console.log(err)
      })
  }
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='container__logo'>
          <Link to='/' className='runners_High'>Runner's High</Link>
        </div>
        <div className='navbar_link'>
          <Link to='/main'>러너 모집</Link>
          <Link to='/create'>글쓰기</Link>
          <Link to='/chat'>채팅하기</Link>
          {isLogin
            ? <><Link to='/mypage'>마이페이지</Link><div onClick={logout}>로그아웃 </div></>
            : <div onClick={OpenModal}>로그인</div>}

        </div>

      </div>
    </div>
  )
}

export default Navbar
