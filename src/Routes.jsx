import { URLs } from '@/constants';
import { TweetsStoreProvider } from '@/contexts/index';
import { UserProvider } from '@/contexts/UserContext';
import ComposeTweet from '@/pages/compose-tweet/ComposeTweet';
import Home from '@/pages/Home';
import HomeFeed from '@/pages/home-feed';
import CreateAccountStep1 from '@/pages/signup/step1';
import CreateAccountStep2 from '@/pages/signup/step2';
import CreateAccountStep3 from '@/pages/signup/step3';
import CreateAccountStep4 from '@/pages/signup/step4';
import BaseTemplate from '@/pages/signup/template';
import EditProfile from '@/pages/user-profile/EditProfile';
import Profile from '@/pages/user-profile/UserProfile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: URLs.home,
    element: <Home />,
  },
  {
    path: URLs.signUpStep1,
    element: (
      <BaseTemplate step="1">
        <CreateAccountStep1 />
      </BaseTemplate>
    ),
  },
  {
    path: URLs.signUpStep2,
    element: (
      <BaseTemplate step="2">
        <CreateAccountStep2 />
      </BaseTemplate>
    ),
  },
  {
    path: URLs.signUpStep3,
    element: (
      <BaseTemplate step="3">
        <CreateAccountStep3 />
      </BaseTemplate>
    ),
  },
  {
    path: URLs.signUpStep4,
    element: (
      <BaseTemplate step="4">
        <CreateAccountStep4 />
      </BaseTemplate>
    ),
  },
  {
    path: URLs.feed,
    element: <HomeFeed />,
  },
  {
    path: URLs.profile,
    element: <Profile />,
  },
  {
    path: URLs.edit,
    element: <EditProfile />,
  },
  {
    path: URLs.compose,
    element: <ComposeTweet />,
  },
]);

export default function App() {
  return (
    <UserProvider>
      <TweetsStoreProvider>
        {/* <div className="bg-neutral-1000 "> */}
        <RouterProvider router={router} />
        {/* </div> */}
      </TweetsStoreProvider>
    </UserProvider>
  );
}
