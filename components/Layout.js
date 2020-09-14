// import Link from "next/link";
import Head from "next/head";
import { connect } from "react-redux";
import actions from "../redux/actions";
import Link from 'next/link'

const Layout = ({ children, title, isAuthenticated, deauthenticate }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      {(isAuthenticated, deauthenticate)}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>
    <div className="md:border-bottom-2 fixed top-0 right-0 left-0" style={{backgroundColor: 'rgba(255,255,255,.6)'}}>
      <div className="max-w-screen-xl mx-auto px-4 sm:p-0">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:space-x-10">
          <div className="">
            <a href="https://componentity.com" target="_blank" className="flex">
              <img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/logo-componentity-%E2%80%93-9.png" className="w-32" />
            </a>
          </div>
          <nav className="hidden md:flex space-x-10 ml-auto">
            <Link href="/">
              <a className="text-base leading-6 font-semibold text-indigo-600 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                Home
              </a>
            </Link>
            {
               isAuthenticated &&
              <Link href="/whoami">
                <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                  Profile
                </a>
              </Link>
            }
            { !isAuthenticated &&
              <Link href="/signin">
                <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                  Login
                </a>
              </Link>
            }
            {isAuthenticated &&
              <a onClick={e => {
                  e.preventDefault();
                  deauthenticate();
                }} className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150 cursor-pointer">
                  Signout
                </a>
            }
          </nav>
        </div>
      </div>
    </div>
    <main>
      {children}
    </main>
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.authentication.token
});

export default connect(
  mapStateToProps,
  actions
)(Layout);
