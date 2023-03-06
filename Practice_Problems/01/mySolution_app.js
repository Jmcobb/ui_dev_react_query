import * as React from "react";
import { useQuery } from "react-query";

/**
 * Set up React Query, including creating a query client
 * and providing it in the App component.
 *
 * Write your query in the APIStatus component and have it
 * query an API with the
 * url `https://ui.dev/api/courses/react-query/status`
 *
 * Make sure you handle the loading state. You'll know its
 * working when you see `{status: "ok"}` on the page.
 */

function APIStatus() {
  const statusQuery = useQuery([], () =>
    fetch("https://ui.dev/api/courses/react-query/status").then((res) =>
      res.json()
    )
  );

  const data = statusQuery.data; // Replace this with the data from your query.

  if (statusQuery.isLoading) return <p>Is Loading...</p>;

  if (statusQuery.isError) return <p>Somthing went wrong try again!</p>;

  if (statusQuery.isSuccess) return <pre>{JSON.stringify(data)}</pre>;
}

export default function App() {
  return <APIStatus />;
}
