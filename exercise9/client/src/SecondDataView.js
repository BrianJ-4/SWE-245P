import Main from "./Main";

import { MAIN_DATA } from "./data";

function SecondDataView() {
  return (
    <>
      <Main content={MAIN_DATA[1].content} />
    </>
  );
}

export default SecondDataView;