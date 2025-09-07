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
    // Mock enrolled courses
    const enrolledCourses = [
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
      {
        id: 3,
        title: "JavaScript ES6+",
        instructor: "Mike Johnson",
        description:
          "Master modern JavaScript features including arrow functions, destructuring, async/await.",
        level: "Intermediate",
        duration: "6 weeks",
        enrolled: 2156,
        rating: 4.7,
        progress: 15,
        category: "Programming",
      },
      {
        id: 4,
        title: "UI/UX Design Principles",
        instructor: "Emily Chen",
        description:
          "Learn design thinking, user research, wireframing, and prototyping.",
        level: "Beginner",
        duration: "12 weeks",
        enrolled: 934,
        rating: 4.6,
        progress: 25,
        category: "Design",
      },
    ];

    setCourses(enrolledCourses);
    setLoading(false);
  }, []);

  const categories = ["All", "Frontend", "Backend", "Programming", "Design"];
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
        {console.log(user)}
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
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
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
