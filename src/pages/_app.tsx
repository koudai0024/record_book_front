import "reset.css";

import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

const App = (props: AppProps) => {
  return (
    <>
      <RecoilRoot>
        <props.Component {...props.pageProps} />
      </RecoilRoot>
    </>
  );
};

export default App;
