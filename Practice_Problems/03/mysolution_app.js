import * as React from "react";
import { useQuery } from "react-query";

/**
 * Write a query that fetches a single user
 * record from the
 * `https://ui.dev/api/courses/react-query/users/:userId` endpoint.
 *
 * The user IDs are `u_1`, `u_2`, `u_3`, and `u_4`
 *
 * There is already UI for displaying the user,
 * but you need to add a loading state.
 */

export default function App() {
  const [userId, setUserId] = React.useState("u_1");

  console.log(userId);

  const userQuery = useQuery(["user", userId], () =>
    fetch(`https://ui.dev/api/courses/react-query/users/${userId}`).then(
      (res) => res.json()
    )
  );
  // Replace this with the results of the query

  if (userQuery.isLoading) return <div>Loading...</div>;

  const user = userQuery.data;

  console.log(user);

  if (userQuery.data)
    return (
      <div>
        <UserPicker userId={userId} setUserId={setUserId} />
        <h1>User: {user.name}</h1>
        <img src={user.profilePictureUrl} alt={user.name} />
      </div>
    );
}

function UserPicker({ userId, setUserId }) {
  return (
    <ul>
      <li>
        <button
          onClick={() => setUserId("u_1")}
          style={{ fontWeight: userId === "u_1" ? 800 : 400 }}
        >
          User 1
        </button>
      </li>
      <li>
        <button
          onClick={() => setUserId("u_2")}
          style={{ fontWeight: userId === "u_2" ? 800 : 400 }}
        >
          User 2
        </button>
      </li>
      <li>
        <button
          onClick={() => setUserId("u_3")}
          style={{ fontWeight: userId === "u_3" ? 800 : 400 }}
        >
          User 3
        </button>
      </li>
      <li>
        <button
          onClick={() => setUserId("u_4")}
          style={{ fontWeight: userId === "u_4" ? 800 : 400 }}
        >
          User 4
        </button>
      </li>
    </ul>
  );
}
