import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from 'modules/Footer';
import Header from './modules/Header';

import Container from 'shared/components/Container';
import Loader from 'shared/components/Loader';

import PublicRoute from 'shared/components/PublicRoute';
import PrivateRoute from 'shared/components/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const MainPage = lazy(() => import('pages/MainPage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const ContactPage = lazy(() => import('pages/ContactPage'));
const AwardPage = lazy(() => import('pages/AwardPage'));
const PlanningPage = lazy(() => import('pages/PlanningPage'));

const ClientsRoutes = () => {
  return (
    <>
      <Container>
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>


            <Route path="/" element={<PublicRoute redirectTo="/auth" />}>
              <Route index element={<HomePage />} />
            </Route>

            <Route path="/contacts" element={<PublicRoute />}>
              <Route index element={<ContactPage />} />
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

            <Route path="/award" element={<PrivateRoute redirectTo="/" />}>
              <Route index element={<AwardPage />} />
            </Route>

            <Route path="/planning" element={<PrivateRoute redirectTo="/" />}>
              <Route index element={<PlanningPage />} />
            </Route>
          </Routes>
        </Suspense>
        <Footer />
      </Container>
    </>
  );
};

export default ClientsRoutes;
