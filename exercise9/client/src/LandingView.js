import Main from "./Main";

import { MAIN_DATA } from "./data";

function LandingView() {
  return (
    <>
      <Main content={MAIN_DATA[0].content} />
    </>
  );
}

export default LandingView;
