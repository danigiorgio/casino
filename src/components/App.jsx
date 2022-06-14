import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProtectedRoute from '@/components/ProtectedRoute';
import Spinner from '@/components/Spinner';

import './App.css';

function App() {
  const LoginView = lazy(() => import('../pages/LoginView/LoginView'));
  const GamesView = lazy(() => import('../pages/GamesView/GamesView'));
  const PlayView = lazy(() => import('../pages/PlayView/PlayView'));
  const GameLauncher = lazy(() => import('../components/GameLauncher'));
  const NotFound = lazy(() => import('../components/NotFound'));
  const Logo = lazy(() => import('../components/Logo'));

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner text="Loading..." />}>
        <Logo />
        <div className="container">
          <Routes>
            <Route path="/login" element={<LoginView />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<GamesView />} />
              <Route path="/play" element={<PlayView />}>
                <Route path=":gameId" element={<GameLauncher />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
