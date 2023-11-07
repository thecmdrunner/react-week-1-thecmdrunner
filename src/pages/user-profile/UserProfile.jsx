import Footer from '@/components/Footer';
import NewTweetButton from '@/components/NewTweetButton';
import ProfileHeader from '@/components/ProfileHeader';
import Tweet from '@/components/Tweet';
import { useContext } from 'react';
import { TweetsStoreContext } from '../../contexts/index';
function UserProfile() {
  const { userTweets } = useContext(TweetsStoreContext);
  return (
    <div className="flex min-h-screen flex-col">
      <ProfileHeader />

      <main className="mb-16 flex-1 overflow-y-auto">
        <section>
          {[...userTweets].reverse().map((tweet, index) => (
            <Tweet key={index} {...tweet} />
          ))}
        </section>
      </main>

      <NewTweetButton />
      <Footer page="profile" />
    </div>
  );
}

export default UserProfile;
