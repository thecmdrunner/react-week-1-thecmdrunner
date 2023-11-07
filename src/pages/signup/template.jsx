import StepHeader from '@/components/StepHeader';
import PropTypes from 'prop-types';
export default function BaseTemplate({ children, step = '1' }) {
  return (
    <main className="mx-auto flex h-screen w-full max-w-lg">
      <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl px-[0.9rem] pb-5">
        <StepHeader step={step} />
        {children}
      </section>
    </main>
  );
}
BaseTemplate.propTypes = {
  children: PropTypes.node,
  step: PropTypes.string,
};
