import Users from "./Components/Card";
import "./App.css";

import React, { Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { users_data: [], loading: true };

    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    document.getElementById("main").style.display = "inline-block";
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error);
      });
      document.getElementById('welcome').style.display = "none"
      
  };
 
 
  render() { 
    const toggleMode = () => {
      if(document.body.style.backgroundColor==="black") {
        document.body.style.backgroundColor = "white";
        document.getElementById('welcome').style.backgroundColor = "aqua";
        document.getElementById('welcome').style.color = "black";
      }
      else {
        document.body.style.backgroundColor = "black";
        document.getElementById('welcome').style.backgroundColor = "black";
        document.getElementById('welcome').style.color = "white";
      }
    }
    
    return (
      <div >
        <div className="navbar">
          <span className="heading">
            LGM <h8>Web Application</h8>{" "}
          </span>
          <span className="right">
            <span className="user" id="userh">
              <button onClick={this.updateState}>Get Users</button>{" "}
            </span>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={toggleMode}
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                Day / Night
              </label>
            </div>
          </span>
        </div>
          <div id="welcome">
            <h1>Welcome to Let's Grow More Internship program</h1>
            <h2>#Task-2 -> Web Application</h2>
            
          </div>
        <div className="box2">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
      </div>
    );
  }
}

export default App;
