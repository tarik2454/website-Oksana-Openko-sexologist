import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Layout from './Layout/Layout';
// import HomePage from '../pages/Homepage';
// import ConsultationPage from '../pages/ConsultationPage';
// import PsychotherapyPage from 'pages/PsychotherapyPage';
// import SexEducationPage from 'pages/SexEducationPage';
// import PlayingWithCardsPage from 'pages/PlayingWithCardsPage';
// import SelfSatisfactionWorkPage from 'pages/SelfSatisfactionWorkPage';
// import InvitedSpeakerPage from 'pages/InvitedSpeakerPage';
import NotFound from 'pages/NotFound';

const HomePage = lazy(() => import('../pages/Homepage'));
const ConsultationPage = lazy(() => import('../pages/ConsultationPage'));
const PsychotherapyPage = lazy(() => import('../pages/PsychotherapyPage'));
const SexEducationPage = lazy(() => import('../pages/SexEducationPage'));
const PlayingWithCardsPage = lazy(() =>
  import('../pages/PlayingWithCardsPage')
);
const SelfSatisfactionWorkPage = lazy(() =>
  import('../pages/SelfSatisfactionWorkPage')
);
const InvitedSpeakerPage = lazy(() => import('../pages/InvitedSpeakerPage'));

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="consultation" element={<ConsultationPage />} />
          <Route path="sex-education" element={<SexEducationPage />} />
          <Route path="psychotherapy" element={<PsychotherapyPage />} />
          <Route path="invited-speaker" element={<InvitedSpeakerPage />} />
          <Route
            path="self-satisfaction-workshop"
            element={<SelfSatisfactionWorkPage />}
          />
          <Route path="playing-with-cards" element={<PlayingWithCardsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
