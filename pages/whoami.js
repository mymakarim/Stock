import axios from "axios";
import { connect } from "react-redux";
// import { API } from "../config";
import initialize from "../utils/initialize";
import Layout from "../components/Layout";
import devLogger from "dev-logger-simple";

const Whoami = ({ user }) => {
  // devLogger(user)
  return (
    <Layout title="Who Am I">
      {(user && (
        <h3 className="title is-3">
          You are logged in as {user.name}
          .
        </h3>
      )) || (
        <h3 className="title is-3 has-text-danger	">
          You are not authenticated.
        </h3>
      )}
    </Layout>
  );
};

Whoami.getInitialProps = async ctx => {
  initialize(ctx);
  const token = ctx.store.getState().authentication.token;
  if (token) {
    // let id = jwt_decode(token).id;
    try {
      const response = await axios.get(
        `https://stock321.herokuapp.com/api/v1/user/me`,
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      );
      const user = response.data;
      return {
        user:user.data
      };
    } catch (error) {
      devLogger("this is the error=> ",error.response.data);
    }
  }
};

export default connect(state => state)(Whoami);
