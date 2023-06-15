import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './Styles/GlobalStyle';
import SplashPage from './Pages/SplashPage';
import LoginPage from './Pages/LoginPage';
import CategoryPage from './Pages/CategoryPage';
import ErrorPage from './Pages/ErrorPage';
import MainPage from './Pages/MainPage';
import PostDetailPage from './Pages/PostDetailPage';
import PostingPage from './Pages/PostingPage';
import PostPage from './Pages/PostPage';
import ProfileEditPage from './Pages/ProfileEditPage';
import ProfileDetailPage from './Pages/ProfileDetailPage';
import ProfileSettingPage from './Pages/ProfileSettingPage';
import SearchPage from './Pages/SearchPage';
import ShowDetailPage from './Pages/ShowDetailPage';
import SignupPage from './Pages/SignupPage';
import Profile from './Pages/Profile';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignupPage />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path="/showdetailpage" element={<ShowDetailPage />} />
        <Route path="/profilesettingpage" element={<ProfileSettingPage />} />
        <Route path="/profileeditpage" element={<ProfileEditPage />} />
        <Route path="/profiledetailpage" element={<ProfileDetailPage />} />
        <Route path="/postpage" element={<PostPage />} />
        <Route path="/postingpage" element={<PostingPage />} />
        <Route path="/postdetailpage" element={<PostDetailPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/errorpage" element={<ErrorPage />} />
        <Route path="/categorypage" element={<CategoryPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
export default App;
