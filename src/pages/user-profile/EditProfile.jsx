import AddImageIcon from '@/assets/add-image.svg';
import BackArrow from '@/assets/back.svg';
import CancelIcon from '@/assets/cancel-g.svg';
import ProfileAvatar from '@/assets/profile_avatar.png';
import Banner from '@/components/Banner';
import Button from '@/components/Button';
import Fieldset from '@/components/Fieldset';
import { URLs } from '@/constants';
import { UserContext } from '@/contexts/UserContext';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function EditProfile() {
  const { formData, setFormData } = useContext(UserContext);
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    name: formData.name,
    bio: formData.bio,
    location: formData.location,
    website: formData.website,
  });

  const handleChange = (key) => (value) => {
    setInputValues((current) => ({
      ...current,
      [key]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setFormData({
          ...formData,
          ...inputValues,
        });
        navigate(URLs.profile);
      }}
      className="px-4"
    >
      <header className="flex flex-col items-start gap-3">
        <section className="flex items-center justify-between self-stretch py-3">
          <div className="flex items-center gap-5">
            <Link to={URLs.profile}>
              <img src={BackArrow} />
            </Link>
            <p className="text-base font-bold leading-normal text-neutral-50">
              Edit profile
            </p>
          </div>
          <Button size="md">Save</Button>
        </section>
        {/* Banner Image */}
        <div className="relative flex w-full">
          <Banner />
          <div className="absolute flex h-full w-full items-center justify-center gap-2">
            <img src={AddImageIcon} />
            <img src={CancelIcon} />
          </div>
        </div>
      </header>
      <main className="relative">
        {/* Profile Icon */}
        <img
          className="absolute -top-12 left-1 h-[4.2rem] w-[4.2rem] rounded-7xl border-4 border-neutral-1000"
          src={ProfileAvatar}
        />
        <section className="relative flex flex-col items-center gap-5 self-stretch pt-5">
          <Fieldset
            text="Name"
            inputValue={inputValues.name}
            onInputChange={handleChange('name')}
            type="text"
          />
          <Fieldset
            text="Bio"
            inputValue={inputValues.bio}
            onInputChange={handleChange('bio')}
            type="text"
          />
          <Fieldset
            text="Location"
            inputValue={inputValues.location}
            onInputChange={handleChange('location')}
            type="text"
          />
          <Fieldset
            text="Website"
            inputValue={inputValues.website}
            onInputChange={handleChange('website')}
            type="text"
          />
        </section>
      </main>
    </form>
  );
}

export default EditProfile;
