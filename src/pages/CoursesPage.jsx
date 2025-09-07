import React, { useState, useEffect } from "react";
import {
  LiaBookSolid,
  LiaClockSolid,
  LiaUsersSolid,
  LiaStarSolid,
  LiaShoppingCartSolid,
} from "react-icons/lia";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

// Course/Resource Card Component
const ResourceCard = ({ item }) => {
  if (!item) return null;

  const isBook = item.type === "book";

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
            <LiaBookSolid className="text-white text-6xl" />
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              isBook
                ? "bg-green-100 text-green-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {isBook ? "Free Book" : "Course"}
          </span>
        </div>
        {item.price > 0 && (
          <div className="absolute top-4 left-4">
            <span className="bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm font-semibold">
              ${item.price}
            </span>
          </div>
        )}
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
          <div className="text-lg font-bold">
            {item.price > 0 ? `$${item.price}` : "Free"}
          </div>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 ${
              isBook
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isBook ? (
              <>
                <LiaBookSolid className="w-4 h-4" />
                Read Now
              </>
            ) : (
              <>
                <LiaShoppingCartSolid className="w-4 h-4" />
                Enroll
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

// COURSES/RESOURCES PAGE - All available courses + API data
const CoursesPage = ({ user }) => {
  const [courses, setCourses] = useState([]);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    fetchAPIData();
  }, []);

  const fetchAPIData = async () => {
    try {
      // Fetch from FakeStore API
      // const productsRes = await fetch(
      //   "https://fakestoreapi.com/products?limit=12"
      // );
      // const products = await productsRes.json();

      // // Transform to course format
      // const apiCourses = products.map((product) => ({
      //   id: `course-${product.id}`,
      //   title: product.title,
      //   instructor: "Expert Instructor",
      //   description: product.description,
      //   level: "Intermediate",
      //   duration: Math.floor(Math.random() * 20) + 5 + " hours",
      //   enrolled: Math.floor(Math.random() * 1000) + 100,
      //   rating: product.rating.rate,
      //   progress: 0,
      //   category: product.category,
      //   price: product.price,
      //   image: product.image,
      //   type: "course",
      // }));

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

      setCourses(apiCourses);
      setBooks(apiBooks);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching API data:", error);
      setLoading(false);
    }
  };

  const allContent = [...courses, ...books];
  const filteredContent =
    activeTab === "all"
      ? allContent
      : activeTab === "courses"
      ? courses
      : books;

  return (
    <div className="flex w-full h-full min-h-screen bg-gray-50">
      <Sidebar />
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

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600">
                {courses.length}
              </div>
              <div className="text-gray-600">Premium Courses</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl font-bold text-green-600">
                {books.length}
              </div>
              <div className="text-gray-600">Free Resources</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl font-bold text-purple-600">
                {allContent.length}
              </div>
              <div className="text-gray-600">Total Available</div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8 w-fit">
            {[
              { key: "all", label: "All Content", count: allContent.length },
              {
                key: "courses",
                label: "Premium Courses",
                count: courses.length,
              },
              { key: "books", label: "Free Books", count: books.length },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? "bg-white text-purple-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-xl text-gray-600">
                Loading courses and resources...
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredContent.map((item) => (
                <ResourceCard key={item.id} item={item} />
              ))}
            </div>
          )}

          {!loading && filteredContent.length === 0 && (
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
