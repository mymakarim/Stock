import React from "react";
import { connect } from "react-redux";
import actions from "../redux/actions";
import initialize from "../utils/initialize";
import Layout from "../components/Layout";
import Link from 'next/link';


class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  static getInitialProps(ctx) {
    initialize(ctx);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(
      { email: this.state.email, password: this.state.password },
      "signin"
    );
  }

  render() {
    return (
      <Layout title="Sign In">
      <div className="grid grid-cols-1 sm:grid-cols-2 flex items-center">
                <div className="h-screen bg-gray-100 bg-cover bg-center w-full" style={{backgroundImage: `url(https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1500)`}}>

                </div>
                <div className="p-5 sm:p-10 lg:p-20">
                    <h1 className="text-gray-700 font-bold text-2xl md:text-4xl">Login to...</h1>
                    <form onSubmit={this.handleSubmit.bind(this)} >
                    <div className="w-full max-w-sm my-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Email Address
                        </label>
                        <input className="appearance-none border block w-full bg-gray-200 text-gray-700 rounded p-5 mb-3 leading-tight focus:outline-none focus:bg-white" type="email" placeholder="admin@admin.com" required value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                    </div>
                    <div className="w-full max-w-sm my-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                          Password
                        </label>
                        <input className="appearance-none border block w-full bg-gray-200 text-gray-700 rounded p-5 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="password" placeholder="admin" required value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                        <p className="text-right">
                            <Link href="/reset"><a className="text-sm font-medium text-red-600">Forgot Password?</a></Link>
                        </p>
                    </div>
                    <div className="w-full max-w-sm my-6">
                        <button type="submit" className="bg-red-600 p-5 text-center w-full rounded text-white">Sign in</button>
                    </div>
                    </form>
                    <p className="sm:mt-10 text-center sm:text-left">
                        <Link href="/reset"><a className="text-sm font-medium text-red-600">Forgot Password?</a></Link>
                    </p>
                </div>
            </div>
      </Layout>
    );
  }
}

export default connect(
  state => state,
  actions
)(Signin);
