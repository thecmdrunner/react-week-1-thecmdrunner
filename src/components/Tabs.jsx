function Tabs() {
  // { name, callback, active }
  return (
    <div className="flex w-full flex-1 justify-around border-b border-b-neutral-700 bg-neutral-1000 backdrop-blur-md">
      <div className="flex w-full flex-col items-center hover:bg-neutral-800">
        <input
          type="radio"
          className="peer/foryou_tab hidden w-full"
          id="foryou_tab"
          defaultValue="foryou_tab"
          name="home_tabs"
          defaultChecked
        />
        <label
          htmlFor="foryou_tab"
          className="block w-full cursor-pointer py-4 text-center font-medium text-neutral-400 transition-all duration-100 peer-checked/foryou_tab:font-bold peer-checked/foryou_tab:text-neutral-50"
        >
          For you
        </label>
        <div className="rounded-2.5xl bg-twitter-blue hidden h-1 w-14 peer-checked/foryou_tab:block" />
      </div>
      <div className="flex w-full flex-col items-center hover:bg-neutral-900">
        <input
          type="radio"
          className="peer/following hidden w-full"
          id="following"
          defaultValue="following"
          name="home_tabs"
        />
        <label
          htmlFor="following"
          className="border-twitter-blue block w-full cursor-pointer py-4 text-center font-medium text-neutral-400 transition-all duration-100 peer-checked/following:font-bold peer-checked/following:text-neutral-50"
        >
          Following
        </label>
        <div className="rounded-2.5xl bg-twitter-blue hidden h-1 w-[4.3rem] peer-checked/following:block" />
      </div>
    </div>
  );
}

// Tabs.propTypes = {
//   name: PropTypes.string.isRequired,
//   callback: PropTypes.func.isRequired,
//   active: PropTypes.bool.isRequired,
// };

export default Tabs;
