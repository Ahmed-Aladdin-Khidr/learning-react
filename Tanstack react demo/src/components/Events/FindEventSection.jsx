import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";

export default function FindEventSection() {
  const searchElement = useRef();
  const [search, setSearch] = useState();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", { search }],
    queryFn: ({signal}) => fetchEvents({ signal, searchTerm: search }),
    staleTime: 5000,
    gcTime: 30000,
    enabled: search !== undefined,
  });

  function handleSubmit(event) {
    event.preventDefault();
    setSearch(searchElement.current.value);
  }

  let content = <p>Please enter a search term and to find events.</p>;
  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || "Failed to fetch events."}
      />
    );
  }

  if (data){
    if (data.length === 0) {
      content = <p>No events found.</p>;
    } else {
      content = (
        <ul className="events-list">
          {data.map((event) => (
            <li key={event.id}>
              <EventItem event={event} />
            </li>
          ))}
        </ul>
      );
    }
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
