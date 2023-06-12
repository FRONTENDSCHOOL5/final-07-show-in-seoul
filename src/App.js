import { Routes, Route } from 'react-router-dom';
import TestPage from './Pages/TestPage';
import GlobalStyle from './Styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<TestPage />} />
      </Routes>
    </>
  );
}
export default App;
