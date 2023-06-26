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
import RequireAuth from './Route/RequireAuth';

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
          <Route
            path="/errorpage"
            element={
              <RequireAuth to="/">
                <ErrorPage />
              </RequireAuth>
            }
          />
          <Route
            path="/searchpage"
            element={
              <RequireAuth to="/">
                <SearchPage />
              </RequireAuth>
            }
          />
          <Route
            path="/showdetailpage"
            element={
              <RequireAuth to="/">
                <ShowDetailPage />
              </RequireAuth>
            }
          />
          <Route
            path="/profilesettingpage"
            element={
              <RequireAuth to="/signuppage">
                <ProfileSettingPage />
              </RequireAuth>
            }
          />
          <Route
            path="/profileeditpage"
            element={
              <RequireAuth to="/">
                <ProfileEditPage />
              </RequireAuth>
            }
          />
          <Route
            path="/profiledetailpage"
            element={
              <RequireAuth to="/">
                <ProfileDetailPage />
              </RequireAuth>
            }
          />
          <Route
            path="/postpage"
            element={
              <RequireAuth to="/">
                <PostPage />
              </RequireAuth>
            }
          />
          <Route
            path="/postingpage"
            element={
              <RequireAuth to="/">
                <PostingPage />
              </RequireAuth>
            }
          />
          <Route
            path="/postdetailpage"
            element={
              <RequireAuth to="/">
                <PostDetailPage />
              </RequireAuth>
            }
          />
          <Route
            path="/posteditpage"
            element={
              <RequireAuth to="/">
                <PostEditPage />
              </RequireAuth>
            }
          />
          <Route
            path="/mainpage"
            element={
              <RequireAuth to="/">
                <MainPage />
              </RequireAuth>
            }
          />
          <Route
            path="/categorypage"
            element={
              <RequireAuth to="/">
                <CategoryPage />
              </RequireAuth>
            }
          />
        </Routes>
      </LayoutStyle>
    </>
  );
}
export default App;
