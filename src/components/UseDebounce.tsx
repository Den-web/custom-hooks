import React, { useState, useEffect } from "react";
import { useDebounce } from "../utils/hooks/useDebounce";
// import "./styles.css";

export function UseDebounce() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const onSearch = useDebounce(() => {
    // Hit the API
    const response = searchQuery.toUpperCase();
    setSearchResults(response);
  }, 500);

  useEffect(() => {
    onSearch();
  }, [searchQuery, onSearch]);

  return (
    <>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>{searchResults}</div>
    </>
  );
}
