import React, { useState, useEffect } from "react";
import {
  LiaBookSolid,
  LiaClockSolid,
  LiaUsersSolid,
  LiaStarSolid,
} from "react-icons/lia";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

// Resource Card Component
const ResourceCard = ({ item }) => {
  if (!item) return null;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
            <LiaBookSolid className="text-white text-6xl" />
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
            Free Book
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-lg">
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {item.description}
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <LiaStarSolid className="text-lg text-yellow-500" />
            <span>{item.rating?.toFixed(1) || "4.5"}</span>
          </div>
          <div className="flex items-center gap-1">
            <LiaClockSolid className="text-lg" />
            <span>{item.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <LiaUsersSolid className="text-lg" />
            <span>{item.enrolled || "Free"}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">"Free"</p>
          <button className="px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 bg-green-600 text-white hover:bg-green-700">
            <LiaBookSolid className="w-4 h-4" />
            Read Now
          </button>
        </div>
      </div>
    </div>
  );
};

// COURSES PAGE All available courses
const CoursesPage = ({ user }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAPIData();
  }, []);

  const fetchAPIData = async () => {
    try {
      // Fetch from Open Library
      const booksRes = await fetch(
        "https://openlibrary.org/subjects/programming.json?limit=8"
      );
      const booksData = await booksRes.json();

      const apiBooks =
        booksData.works?.map((book, index) => ({
          id: `book-${index}`,
          title: book.title,
          instructor: "Open Library",
          description: `Free programming resource: ${book.title}. Learn at your own pace with this comprehensive guide.`,
          level: "All Levels",
          duration: "Self-paced",
          enrolled: "Free Access",
          rating: 4.2 + Math.random() * 0.8,
          progress: 0,
          category: "programming",
          price: 0,
          image: book.cover_id
            ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
            : null,
          type: "book",
        })) || [];

      setBooks(apiBooks);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching API data:", error);
      setLoading(false);
    }
  };

  const allContent = [...books];

  return (
    <div className="flex w-full h-full min-h-screen bg-gray-50">
      <Sidebar />
      {/* Main Content */}
      <section className="w-full float-right md:w-[80%]">
        <Navbar user={user} />
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Explore Learning Materials
            </h1>
            <p className="text-gray-600">
              Discover courses from our catalog and free resources from Open
              Library
            </p>
          </div>

          {/* count Tabs */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8 w-fit">
            <button className="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-BrightPurple text-gray-600 hover:text-gray-900">
              All Content ({allContent.length})
            </button>
          </div>
            {/* Courses Grid */}
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-xl text-gray-600">
                Loading courses and resources...
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allContent.map((item) => (
                <ResourceCard key={item.id} item={item} />
              ))}
            </div>
          )}
            {/* Empty State */}
          {!loading && allContent.length === 0 && (
            <div className="text-center py-12">
              <LiaBookSolid className="mx-auto text-6xl text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No content found
              </h3>
              <p className="text-gray-500">Please try again later</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
