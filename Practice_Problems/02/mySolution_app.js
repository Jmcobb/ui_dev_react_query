import * as React from "react";
import { useQuery } from "react-query";

/**
 * Add a query to the `https://ui.dev/api/courses/react-query/labels`
 * endpoint.
 *
 * The UI for rendering the labels is already in place,
 * but you need to add a loading state.
 */

export default function App() {
  const labelsQuery = useQuery(["label"], () =>
    fetch("https://ui.dev/api/courses/react-query/labels").then((res) =>
      res.json()
    )
  );

  if (labelsQuery.isLoading) return <div>Loading...</div>;

  const labels = labelsQuery.data;

  if (labelsQuery.data)
    return (
      <div>
        <h1>Labels</h1>
        <ul>
          {labels.map((label) => (
            <li key={label.id}>
              <span style={{ color: label.color }}></span> {label.name}
            </li>
          ))}
        </ul>
      </div>
    );
}
