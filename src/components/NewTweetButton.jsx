import { Link } from 'react-router-dom';
import Plus from '../assets/plus-content-add.svg';
import { URLs } from '../constants';

function NewTweetButton() {
  return (
    <Link to={URLs.compose}>
      <button className="bg-twitter-blue fixed bottom-20 right-4 items-start gap-2.5 rounded-full p-4 shadow-3xl">
        <img className="h-8 w-8 rounded-full" src={Plus} />
      </button>
    </Link>
  );
}

export default NewTweetButton;
