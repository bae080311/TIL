# useParams()

react-router-dom에서 제공하는 Hooks 중 하나로 Prameter(파라미터) 값을 URL을 통해서 넘겨받은 페이지에서 사용할 수 있게 해주는 훅이라고 합니다

ex)

```js
// app.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import User from "./User";

function App() {
  return (
    <Router>
      <div>
        <h1>Users</h1>
        <ul>
          <li>
            <Link to="/user/1">User 1</Link>
          </li>
          <li>
            <Link to="/user/2">User 2</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

```js
// User.js
import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return (
    <div>
      <h2>User ID: {id}</h2>
    </div>
  );
}

export default User;
```
