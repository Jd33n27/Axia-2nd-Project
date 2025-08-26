import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

const TextApi = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://openlibrary.org/search.json?q=javascript"
        );
        if (!response.ok) throw new Error("Failied to fetch books");

        const data = await response.json();
        console.log(data.docs.slice(0, 5));
        setBook(data.docs.slice(0, 5));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchBooks();
  }, []);
  return (
    <section>
      <Card>
        <h2 className={`text-2xl font-semibold`}>Available Courses</h2>
        <ul>
          {book.map((book, index) => (
            <li key={index} className="border p-2 my-1 rounded">
              {book.cover_i ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                  width={50}
                />
              ) : (
                <span>No cover</span>
              )}
              <p>
                <b>{book.title}</b> by{" "}
                {book.author_name?.[0] || "Unknown Author"}
              </p>
              <small>First published: {book.first_publish_year || "N/A"}</small>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default TextApi;
