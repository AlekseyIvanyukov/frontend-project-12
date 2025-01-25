import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Flip } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Navigation from './Components/navigation';
import AuthProvider from './contexts/AuthProvider';
import routes from './routes';
import MainPage from './Pages/MainPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import NotFoundPage from './Pages/NotFoundPage';

const App = () => (
  <div className="d-flex flex-column h-100">
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme="light"
        transition={Flip}
      />
      <Provider store={store}>
        <AuthProvider>
        <Navigation />
        <Routes>
          <Route path={routes.mainPagePath()} element={<MainPage />} />
          <Route path={routes.loginPagePath()} element={<LoginPage />} />
          <Route path={routes.signupPagePath()} element={<SignupPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  </div>
);

export default App;