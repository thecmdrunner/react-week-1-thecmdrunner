import CancelIcon from '@/assets/cancel.svg';
import Button from '@/components/Button';
import TweetInput from '@/components/TweetInput';
import { POST_CHARACTER_LIMIT, URLs } from '@/constants';
import { TweetsStoreContext } from '@/contexts';
import { UserContext } from '@/contexts/UserContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ComposeTweet() {
  const navigate = useNavigate();
  const { userTweets, setUserTweets } = useContext(TweetsStoreContext);
  const { formData: userData } = useContext(UserContext);
  const [tweetText, setTweetText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isTweetExceedingLimit = tweetText.length > POST_CHARACTER_LIMIT;

  return (
    <div>
      <header className="flex items-center justify-between  px-4 py-3">
        <button onClick={() => navigate(-1)}>
          <img src={CancelIcon} />
        </button>
        <Button
          disabled={isTweetExceedingLimit || !tweetText}
          variant="solid"
          size="md"
          onClick={async () => {
            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const newTweetId =
              Math.floor(Math.random() * (10000000 - 1000000 + 1)) + 1000000;

            setUserTweets([
              ...userTweets,
              {
                id: newTweetId.toString(),
                timestamp: Date.now().toString(),
                name: userData.name,
                username: userData.username,
                postedAt: '10h',
                comments: 0,
                retweets: 0,
                likes: 0,
                reach: 0,
                tweetText,
                isLiked: false,
                isRetweeted: false,
              },
            ]);
            console.log(userTweets);
            navigate(URLs.feed);
            setIsLoading(false);
            setTweetText('');
          }}
        >
          <span className="flex h-10 items-center justify-center whitespace-nowrap text-center text-base font-bold not-italic leading-normal text-neutral-50">
            {isLoading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // width={24}
                // height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 animate-spin"
              >
                <line x1={12} x2={12} y1={2} y2={6} />
                <line x1={12} x2={12} y1={18} y2={22} />
                <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
                <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
                <line x1={2} x2={6} y1={12} y2={12} />
                <line x1={18} x2={22} y1={12} y2={12} />
                <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
                <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
              </svg>
            ) : (
              <span>Post</span>
            )}
          </span>
        </Button>
        {/* <button
          className="text-white"
          onClick={() => console.log(`Tweets are :`, userTweets)}
        >
          showTweet
        </button> */}
      </header>
      <TweetInput tweetText={tweetText} setTweetText={setTweetText} />

      <footer className="fixed bottom-0 flex items-center gap-5 px-4 py-3">
        <p
          className={`text-sm font-normal leading-normal tracking-wider text-neutral-500`}
        >
          <span
            className={
              isTweetExceedingLimit ? 'text-error' : 'text-neutral-500'
            }
          >
            {isTweetExceedingLimit
              ? POST_CHARACTER_LIMIT - tweetText.length
              : tweetText.length}
          </span>
          /{POST_CHARACTER_LIMIT}
        </p>
      </footer>
    </div>
  );
}

export default ComposeTweet;
