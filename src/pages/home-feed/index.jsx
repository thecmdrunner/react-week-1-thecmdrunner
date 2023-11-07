import Tweet from '@/components/Tweet';

// import Toast from "@/components/Toast";

import ProfileAvatar from '@/components/Avatar';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NewTweet from '@/components/NewTweetButton';
import Tabs from '@/components/Tabs';
import { TweetsStoreContext } from '../../contexts/index';

import { useContext } from 'react';

function Home() {
  const { userTweets } = useContext(TweetsStoreContext);

  return (
    <div className="bg-neutral-1000">
      <header className="bg-neutral-1000 top-0 flex w-full flex-col items-center">
        <section className="flex w-full items-center border-b border-neutral-700 px-4 py-5">
          <ProfileAvatar />
          <Header />
        </section>
      </header>
      <Tabs />
      <main className="flex min-h-full w-full grow flex-col pb-20">
        <section>
          {[...userTweets].reverse().map((tweet, index) => (
            <Tweet key={index} {...tweet} />
          ))}
        </section>

        {/* <Toast message="Copied to clipboard." /> */}

        <NewTweet />

        <Footer page="home" />
      </main>
    </div>
  );
}

export default Home;
