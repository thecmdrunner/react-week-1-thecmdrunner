import Button from '@/components/Button';
import { useNavigate } from "react-router-dom";
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import { URLs } from '@/constants.js';
import { Link } from 'react-router-dom';

function TweetMain() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch(API_URL + `/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "batman@example.com",
        password: "gothamrocks",
      }),
    });
    if (!res.ok) {
      return alert(`Error: ${res.statusText}`)
    }
    console.log(await res.json());
    navigate(URLs.feed);
  };

  return (
    <main className="bg-neutral-1000 flex w-full flex-grow items-center justify-center">
      <section className="flex w-full flex-col gap-10 px-7">
        <section className="flex flex-col gap-3">
          <Heading>Happening now</Heading>
          <Text text="Join today." />
        </section>
        <Link to={URLs.signUpStep1}>
          <Button variant="default" disabled={false}>
            Create account
          </Button>
        </Link>
        <div className="flex items-center">
          <hr className="mr-2 flex-grow border-t-2 border-neutral-700" />
          <span className="font-regular text-base leading-normal text-neutral-50">
            or
          </span>
          <hr className="ml-2 flex-grow border-t-2 border-neutral-700" />
        </div>
        <section className="flex flex-col gap-5">
          <Text text="Already have an account?" />
          
          <Button
            onClick={() => handleLogin()}
            variant="outline"
            type="primary"
            size="full"
           >
              Sign in
          </Button>
        </section>
      </section>
    </main>
  );
}

export default TweetMain;
