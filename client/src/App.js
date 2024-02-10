import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageRender from './customRouter/PageRender';
import PrivateRouter from './customRouter/privateRouter';
import Home from './pages/home';
import Login from './pages/login'
import Register from './pages/register'
import Alert from './components/alert/Alert';
import { useSelector, useDispatch } from 'react-redux'
import { refreshToken } from './redux/actions/authAction'
import Header from './components/header/Header';
import StatusModal from './components/statusModal';
import { getPosts } from './redux/actions/postAction';

function App() {
  const { auth, status, modal } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())

  }, [dispatch])

  useEffect(() => {
    if (auth.token) dispatch(getPosts(auth.token))
  }, [dispatch, auth.token])

  return (
    <Router>
      <Alert />
      <input type="checkbox" id="theme" />
      <div className={`App ${(status || modal) && 'mode'}`}>
        <div className='main'>
          {auth.token && <Header />}
          {status && <StatusModal />}
          <Routes>
            <Route exact path="/" element={auth.token ? <Home /> : <Login />} />
            <Route exact path="/Register" element={<Register />} />


            <Route exact path="/:page" element={<PrivateRouter><PageRender /></PrivateRouter>} />
            <Route exact path="/:page/:id" element={<PrivateRouter><PageRender /></PrivateRouter>} />
          </Routes>
        </div>
      </div>

    </Router>

  );
}

export default App;
