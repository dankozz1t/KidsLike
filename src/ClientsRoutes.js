import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './modules/Header';

import Container from 'shared/components/Container';
import Loader from 'shared/components/Loader';

import PublicRoute from 'shared/components/PublicRoute';
import PrivateRoute from 'shared/components/PrivateRoute';
import ContactPage from 'pages/ContactPage';

const HomePage = lazy(() => import('pages/HomePage'));
const MainPage = lazy(() => import('pages/MainPage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const AwardPage = lazy(() => import('pages/AwardPage'));
const PlanningPage = lazy(() => import('pages/PlanningPage'));

const ClientsRoutes = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<PublicRoute redirectTo="/auth" />}>
              <Route index element={<HomePage />} />
              <Route path='contacts' index element={<ContactPage />} />
            </Route>

            <Route
              path="/auth"
              element={<PublicRoute restricted redirectTo="/" />}
            >
              <Route index element={<AuthPage />} />
            </Route>

            <Route path="/main" element={<PrivateRoute redirectTo="/" />}>
              <Route index element={<MainPage />} />
            </Route>

            <Route path="/award" >
              <Route index element={<AwardPage />} />
            </Route>

            <Route path="/planning" >
              <Route index element={<PlanningPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};

export default ClientsRoutes;
