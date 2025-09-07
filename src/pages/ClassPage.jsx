import React, { useState, useEffect } from "react";
import { LiaBookSolid } from "react-icons/lia";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";

// CLASS PAGE - Current enrolled courses
const ClassPage = ({ user }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        // Fetch users from dummyjson for instructors
        const usersResponse = await fetch(
          "https://dummyjson.com/users?limit=6"
        );
        const usersData = await usersResponse.json();

        // Fetch books from openlibrary for courses
        const booksResponse = await fetch(
          "https://openlibrary.org/search.json?q=programming&limit=6&fields=key,title,author_name,subject,first_publish_year"
        );
        const booksData = await booksResponse.json();

        const categories = [
          "Frontend",
          "Backend",
          "Programming",
          "Design",
          "Data Science",
          "Mobile",
        ];
        const levels = ["Beginner", "Intermediate", "Advanced"];

        // Transform API data into course format
        const enrolledCourses = booksData.docs
          .slice(0, 6)
          .map((book, index) => ({
            id: index + 1,
            title: book.title || "Programming Course",
            instructor: usersData.users[index]
              ? `${usersData.users[index].firstName} ${usersData.users[index].lastName}`
              : "Unknown Instructor",
            description: `Learn ${
              book.title || "programming concepts"
            } with hands-on projects and real-world examples.`,
            level: levels[Math.floor(Math.random() * levels.length)],
            duration: `${Math.floor(Math.random() * 8) + 4} weeks`,
            enrolled: Math.floor(Math.random() * 2000) + 500,
            rating: (Math.random() * 1.5 + 3.5).toFixed(1),
            progress: Math.floor(Math.random() * 80) + 10,
            category: categories[Math.floor(Math.random() * categories.length)],
          }));

        setCourses(enrolledCourses);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course data:", error);

        // Fallback mock data if API fails
        const fallbackCourses = [
          {
            id: 1,
            title: "React Fundamentals",
            instructor: "John Smith",
            description:
              "Learn the basics of React including components, state management, and hooks.",
            level: "Beginner",
            duration: "8 weeks",
            enrolled: 1234,
            rating: 4.8,
            progress: 75,
            category: "Frontend",
          },
          {
            id: 2,
            title: "Node.js Backend Development",
            instructor: "Sarah Wilson",
            description:
              "Build scalable backend applications with Node.js, Express, and MongoDB.",
            level: "Intermediate",
            duration: "10 weeks",
            enrolled: 856,
            rating: 4.9,
            progress: 40,
            category: "Backend",
          },
        ];

        setCourses(fallbackCourses);
        setLoading(false);
      }
    };

    fetchCoursesData();
  }, []);

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Programming",
    "Design",
    "Data Science",
    "Mobile",
  ];
  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="flex w-full h-full min-h-screen bg-gray-50">
      <Sidebar />
      <section className="w-full float-right md:w-[80%]">
        <Navbar user={user} />
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              My Classes
            </h1>
            <p className="text-gray-600">Continue your enrolled courses</p>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                    selectedCategory === category
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <LiaBookSolid className="mx-auto text-6xl text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No courses found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ClassPage;
