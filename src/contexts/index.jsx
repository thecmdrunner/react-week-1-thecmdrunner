import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
export const TweetsStoreContext = createContext(null);

export const TweetsStoreProvider = ({ children }) => {
  const [storeData, setStoreData] = useState(defaultTweets);

  return (
    <TweetsStoreContext.Provider
      value={{ userTweets: storeData, setUserTweets: setStoreData }}
    >
      {children}
    </TweetsStoreContext.Provider>
  );
};

TweetsStoreProvider.propTypes = {
  children: PropTypes.node,
};

const defaultTweets = [
  {
    id: '0987654321',
    name: 'Pranav ⚡',
    username: 'thecmdrunner',
    postedAt: '1699279318868',
    tweetText: 'Why are you using twitter?',
    comments: 0,
    retweets: 0,
    likes: 0,
    reach: 0,
    isLiked: false,
    isRetweeted: false,
  },
  {
    id: '1234567890',
    name: 'Pranav ⚡',
    username: 'thecmdrunner',
    postedAt: '1699379518868',
    tweetText: 'Go outside?',
    comments: 0,
    retweets: 0,
    likes: 0,
    reach: 0,
    isLiked: false,
    isRetweeted: false,
  },
];
