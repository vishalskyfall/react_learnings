import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Table from "./Table";
import { Users } from "./user";
import axios  from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const keys = ["first_name", "last_name", "email"];

  // like this it will work
  // console.log(Users[0]["email"]);
  const search = (data) => {
    return data.filter(
      (item) => keys.some((key) => item[key].toLowerCase().includes(query))
      //some will do same job as || means or
      // (user) => user.first_name.toLowerCase().includes(query)
    );
  };
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?query=${query}`);
      setData(res.data);
    };
    if(query.length===0 || query.length>=2) fetchUsers();
  }, [query]);


  return (
    <>
      <div className="app">
        <input
          type="text"
          className="search"
          placeholder="Now, Learn AWS elastic search "
          onChange={(e) => setQuery(e.target.value)}
        />
        <Table data={data} />{" "}
        {/*  <Table data={data} />   WITH API-SERVER SIDE ONLY*/}
        {/* <Table data={search(Users)} />  WITH CLIENT SIDE ONLY*/}
        {/* <ul className="list">
          {Users.filter((user) =>
            user.first_name.toLowerCase().includes(query)
          ).map((user) => (
            <li key={user.id} className="listItem">
              {user.first_name}
            </li>
          ))}
         
        </ul> */}
        {/* <li className="listItem">test</li> */}
      </div>
    </>
  );
}

export default App;
