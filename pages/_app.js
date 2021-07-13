import 'tailwindcss/tailwind.css';
import "@material-tailwind/react/tailwind.css";
import Head from 'next/head'
// import Providers from 'next-auth/providers';

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
      />
    </Head>

    <Component {...pageProps} />

    {/* <Providers session={pageProps.session}>
      <Component {...pageProps} />
    </Providers> */}
  </>);
}

export default MyApp
