import React, {Component} from "react";
import './App.css';
import PhoneForm from "./components/PhoneForm";

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }

  render() {
    return (
      <PhoneForm>
        onCreate={this.handleCreate}
      </PhoneForm>
    );
  }
}

export default App;
