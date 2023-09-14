import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [members, setMembers] = useState([]);

  const memberHandler = () => {
    axios.get("http://localhost:8081/members").then((res) => {
      console.log(res.data);
      setMembers(res.data);
    });
  };
  useEffect(() => {
    memberHandler();
  }, []);

  return (
    <div className="App">
      <h1>Members</h1>
      {members.map((member) => {
        return (
          <div>
            <div>{member.id}</div>
            <div>{member.name}</div>
            <div>{member.job}</div>
            <div>{member.home}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
