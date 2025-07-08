import { useState } from "react";
import "./App.css";
import { Head } from "@impalajs/react/head";

interface AppProps {
  title: string;
}

export const App: React.FC<React.PropsWithChildren<AppProps>> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Practice de-escalating a workplace conflict. Sam, your coworker, is upset about a missed deadline. Respond as you would in a real work environment to calm the situation" />
      </Head>
      {children}
    </>
  );
};
