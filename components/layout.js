import Head from 'next/head';
import Header from './header';

const Layout = (props) => (
  <>
    <Head>
      <title>PitchJutsu</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Header />
    <main>
      <div className='container2'>{props.children}</div>
    </main>
    {/* <style jsx global>{`
      * {
        font-family: sans-serif !important;
        outline: none;
      }
      .container {
        max-width: 42rem;
        margin: 0 auto;
        padding: 0 10px;
      }
    `}</style> */}
  </>
);

export default Layout;
