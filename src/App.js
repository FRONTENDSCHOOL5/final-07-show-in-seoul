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
import PostEditPage from './Pages/PostEditPage';
import ProfileEditPage from './Pages/ProfileEditPage';
import ProfileDetailPage from './Pages/ProfileDetailPage';
import ProfileSettingPage from './Pages/ProfileSettingPage';
import SearchPage from './Pages/SearchPage';
import ShowDetailPage from './Pages/ShowDetailPage';
import SignupPage from './Pages/SignupPage';
import LayoutStyle from './Styles/LayoutStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <LayoutStyle>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/*" element={<ErrorPage />} />
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
          <Route path="/posteditpage" element={<PostEditPage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/errorpage" element={<ErrorPage />} />
          <Route path="/categorypage" element={<CategoryPage />} />
        </Routes>
      </LayoutStyle>
    </>
  );
}
export default App;
