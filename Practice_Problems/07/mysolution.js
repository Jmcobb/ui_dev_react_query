import * as React from "react";
import { useQuery, useQueryClient } from "react-query";

/**
 * Create a component that fetches data from the
 * `https://ui.dev/api/courses/react-query/users` endpoint.
 * It should include a loading indicator, and render the
 * data to a list of users (name only). Give the query a
 * stale time of 5 minutes.
 *
 * Finally, include a button that will invalidate the query,
 * causing a refetch.
 */
export default function App() {
  const queryClient = useQueryClient();
  const userQuery = useQuery(
    ["user"],
    () =>
      fetch(`https://ui.dev/api/courses/react-query/users`).then((res) =>
        res.json()
      ),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  const invalidate = () =>
    queryClient.invalidateQueries({ queryKey: ["user"] });
  if (userQuery.isLoading) return <p>Loading, boing, boing...</p>;
  return (
    <div>
      {userQuery.data.map((data) => (
        <div>{data.name}</div>
      ))}
      <button onClick={() => invalidate()}>Invalidate!</button>
    </div>
  );
}
