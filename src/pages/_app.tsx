import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

import { api } from "@utils/api";
import store from "@redux/store";
import "@/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    
    <SessionProvider session={session}>
     <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>

  );
};

export default api.withTRPC(MyApp);
