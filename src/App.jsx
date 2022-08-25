import { useState } from "react";
import "./App.css";
import Table from "./Table";
import { Users } from "./user";

function App() {
  const [query, setQuery] = useState("");

  const keys=["first_name","last_name","email"]

  // like this it will work 
  console.log(Users[0]["email"]);
  const search = (data) => {
    return data.filter((item)=> keys.some(key=>item[key].toLowerCase().includes(query))
    //some will do same job as || means or
      // (user) => user.first_name.toLowerCase().includes(query)
    );
  };

  return (
    <>
      <div className="app">
        <input
          type="text"
          className="search"
          placeholder="search . . "
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* <Table data={Users} /> */}
        <Table data={search(Users)} />
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
