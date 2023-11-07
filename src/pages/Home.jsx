import Header from '@/components/Header';
import LoginMain from '@/components/Login/LoginMain';

function Home() {
  return (
    <div className="mx-auto flex h-screen max-w-lg flex-col border-x border-x-neutral-600">
      <Header />
      <LoginMain />
    </div>
  );
}

export default Home;
