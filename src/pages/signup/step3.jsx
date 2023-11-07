import Button from '@/components/Button';
import Fieldset from '@/components/Fieldset';
import StepHeading from '@/components/StepHeading';
import { URLs } from '@/constants';
import { UserContext } from '@/contexts/UserContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccountStep3() {
  const navigate = useNavigate();

  const { formData } = useContext(UserContext);

  const [verificationCode, setverificationCode] = useState('');

  return (
    <>
      <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl px-[0.9rem] pb-5">
        <div className="flex w-full flex-col gap-3 self-stretch">
          <StepHeading>We sent you a code</StepHeading>
          <p className="text-sm font-normal leading-normal text-neutral-500">
            Enter it below to verify {formData.email}
          </p>
          <Fieldset
            inputValue={verificationCode}
            onInputChange={(value) => setverificationCode(value)}
            required
            text="Verification code"
            type="text"
          />
          <p className="text-twitter-blue flex justify-end text-sm font-normal leading-normal">
            {`Didn't receive a code?`}
          </p>
        </div>
      </section>

      <div className="fixed bottom-16 left-1/2 w-[20.8rem] -translate-x-1/2 -translate-y-1/2 transform">
        <Button
          onClick={() => {
            navigate(URLs.signUpStep4);
          }}
          variant="default"
          disabled={verificationCode.length < 6}
        >
          Next
        </Button>
      </div>
    </>
  );
}
export default CreateAccountStep3;
