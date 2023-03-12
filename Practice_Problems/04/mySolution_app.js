import * as React from "react";
import { useQuery } from "react-query";

/**
 * For this practice, you'll be querying two APIs.
 * First, query the
 *
 * `https://ui.dev/api/courses/react-query/labels`
 *
 * API and create a button for each label in a list.
 * When you click on one of these labels, it should
 * make a query to the
 *
 * `https://ui.dev/api/courses/react-query/issues`
 *
 * API and return a list of issues that have that label.
 *
 * Example: `https://ui.dev/api/courses/react-query/issues?labels[]=bug`
 *
 * Remember, React Query is declarative. Think about how
 * you will let React Query know that it needs to query the
 * issues API when the user clicks on a label. It might also
 * help to think about what the issues API query key is.
 *
 * Hint: This is a form of dependent query.
 */

export default function App() {
  const [buttonID, setButtonID] = React.useState("");

  const labelsQuery = useQuery(["labels"], () =>
    fetch("https://ui.dev/api/courses/react-query/labels").then((res) =>
      res.json()
    )
  );

  const issuesListQuery = useQuery([buttonID], () =>
    fetch(
      `https://ui.dev/api/courses/react-query/issues?labels[]=${buttonID}`
    ).then((res) => res.json())
  );

  console.log(issuesListQuery);

  if (labelsQuery.isLoading) return <p>Loading...</p>;

  if (labelsQuery.data)
    return (
      <div>
        <h2>Issues</h2>
        <hr />
        <p>Select button to see associated issues</p>
        {labelsQuery.data.map((element) => {
          return (
            <button
              key={element.id}
              style={{ backgroundColor: element.color }}
              onClick={() => setButtonID(element.id)}
            >
              {element.name}
            </button>
          );
        })}
        <hr />
        {buttonID === "" ? (
          <p>please select button to continue</p>
        ) : issuesListQuery.isLoading ? (
          <p>Loading related issues...</p>
        ) : (
          <ul>
            {issuesListQuery.data.map((element) => (
              <li key={element.id}>
                <div id="issue-item">
                  <h4>Title: {element.title}</h4>
                  <p>Status: {element.status ? element.status : "noStatus"}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}
