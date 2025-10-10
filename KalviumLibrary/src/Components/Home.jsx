import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [book, setBook] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => {
        const output = res.data.books;
        setBook(output);
      })
      .catch((err) => {
        if (err.response?.status === 404) {
          console.log("Error fetching data");
        }
      });
  }, []);

  const handleChange = (e) => {
    const input = e.target.value.toLowerCase();
    if (input.trim() === "") {
      setSearch([]);
    } else {
      const searchedName = book.filter((item) =>
        item.title.toLowerCase().includes(input)
      );
      setSearch(searchedName);
    }
  };

  const displayBooks = search.length > 0 ? search : book;

  return (
    <div className="home-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search for a book..."
          onChange={handleChange}
        />
      </div>

      <div className="book-grid">
        {displayBooks.map((item) => (
          <div className="book-card" key={item.id}>
            <img src={item.imageLinks.smallThumbnail} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.authors?.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;