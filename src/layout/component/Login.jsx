import { useEffect, useState } from "react";
import Api, { endpoints } from "../../Api";
import cookies from "react-cookies";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     console.log("LOGIN");
  //     console.info(Math.random());
  //   });
  const login = async (e) => {
    e.preventDefault();
    let res = await Api.post(endpoints["login"], {
      client_id: "2mtyp2HsylLOoOdTT9wadaAtEmA7omvQGM3CigGn",
      client_secret:
        "98UnOMm0dyVQ7OU3GzoizcGlyhPNlq9fqU5lZozAyBXiH1fudwrw7WnrAz7JItRuW2Qi9ozCcPS35jLZS2aiHlAb0fe18IBdjw2nCv5fYGFvwnLYXLejtS5R8biedUWs",
      username: username,
      password: password,
      grant_type: "password",
    });
    console.info(res.data);
    cookies.save("access_token", res.data.access_token);
    let user = await Api.get(endpoints["current-user"], {
      headers: {
        Authorization: `Bearer ${cookies.load("access_token")}`,
      },
    });
    console.info(user.data);
    cookies.save("user", user.data);
    navigate("/");
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <form style={{ width: "333px" }} onSubmit={login}>
          <div data-mdb-input-init class="form-outline mb-4">
            <label class="form-label" for="form2Example1">
              Username
            </label>
            <input
              type="text"
              id="username"
              class="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div data-mdb-input-init class="form-outline mb-4">
            <label class="form-label" for="form2Example2">
              Password
            </label>
            <input
              type="password"
              id="password"
              class="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  // checked
                />
                <label class="form-check-label" for="form2Example31">
                  Remember me
                </label>
              </div>
            </div>

            <div class="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <button
            type="submit"
            data-mdb-button-init
            data-mdb-ripple-init
            class="btn btn-primary btn-block mb-4"
          >
            Sign in
          </button>

          <div class="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>
            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              class="btn btn-link btn-floating mx-1"
            >
              <i class="fab fa-facebook-f"></i>
            </button>

            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              class="btn btn-link btn-floating mx-1"
            >
              <i class="fab fa-google"></i>
            </button>

            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              class="btn btn-link btn-floating mx-1"
            >
              <i class="fab fa-twitter"></i>
            </button>

            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              class="btn btn-link btn-floating mx-1"
            >
              <i class="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
      ;
    </>
  );
};

export default Login;
