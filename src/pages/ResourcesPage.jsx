import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import {
  LiaBookSolid,
  LiaSearchSolid,
  LiaSpinnerSolid,
  LiaExternalLinkAltSolid,
  LiaStarSolid,
} from "react-icons/lia";

const BookCard = ({ book }) => {
  const getCoverUrl = (coverId) => {
    if (!coverId) return "/api/placeholder/200/300";
    return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
  };

  const getAuthorName = (authors) => {
    if (!authors || authors.length === 0) return "Unknown Author";
    return authors[0].name || "Unknown Author";
  };

  const getPublishYear = (book) => {
    return book.first_publish_year || "Unknown Year";
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={getCoverUrl(book.cover_i)}
          alt={book.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = "/api/placeholder/200/300";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-purple-600 p-2 rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition-colors">
            <LiaExternalLinkAltSolid className="text-lg" />
          </button>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {book.title}
        </h3>

        <p className="text-gray-600 text-sm mb-2">
          By {getAuthorName(book.author_name)}
        </p>

        <p className="text-gray-500 text-xs mb-3">
          First published: {getPublishYear(book)}
        </p>

        {book.ratings_average && (
          <div className="flex items-center gap-1 mb-3">
            <LiaStarSolid className="text-yellow-500" />
            <span className="text-sm text-gray-600">
              {book.ratings_average.toFixed(1)} ({book.ratings_count || 0}{" "}
              reviews)
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {book.subject &&
            book.subject.slice(0, 3).map((subject, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
              >
                {subject}
              </span>
            ))}
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Read Online
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const ResourcesPage = ({ user }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("web development");
  const [selectedCategory, setSelectedCategory] = useState("web development");

  const categories = [
    "web development",
    "javascript",
    "react",
    "node.js",
    "python",
    "data science",
    "machine learning",
    "ui ux design",
    "mobile development",
    "database design",
  ];

  const fetchBooks = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(
          query
        )}&limit=12&fields=key,title,author_name,first_publish_year,ratings_average,ratings_count,cover_i,subject`
      );
      const data = await response.json();

      // Filter books to ensure they have relevant content
      const filteredBooks = data.docs.filter(
        (book) => book.title && book.author_name && book.author_name.length > 0
      );

      setBooks(filteredBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(selectedCategory);
  }, [selectedCategory]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      fetchBooks(searchTerm);
      setSelectedCategory("");
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchTerm(category);
  };

  return (
    <div className="flex w-full h-full min-h-screen bg-gray-50">
      <Sidebar />

      {/* Main Content */}
      <section className="w-full float-right md:w-[80%]">
        <Navbar user={user} />

        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Learning Resources
            </h1>
            <p className="text-gray-600">
              Discover books and materials to enhance your skills
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <form onSubmit={handleSearch} className="relative max-w-2xl">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for books, topics, or authors..."
                className="w-full py-3 pl-4 pr-12 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-purple-600 transition-colors"
              >
                <LiaSearchSolid className="text-xl" />
              </button>
            </form>
          </div>

          {/* Category Pills */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Browse by Category
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 font-medium capitalize ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <LiaSpinnerSolid className="text-4xl text-purple-600 animate-spin" />
              <span className="ml-3 text-gray-600">Loading books...</span>
            </div>
          )}

          {/* Books Grid */}
          {!loading && books.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {books.map((book, index) => (
                <BookCard key={`${book.key}-${index}`} book={book} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && books.length === 0 && (
            <div className="text-center py-12">
              <LiaBookSolid className="mx-auto text-6xl text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No books found
              </h3>
              <p className="text-gray-500">
                Try searching with different keywords
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
