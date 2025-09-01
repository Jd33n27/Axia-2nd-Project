import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import {
  LiaBookSolid,
  LiaClipboardListSolid,
  LiaPencilRulerSolid,
} from "react-icons/lia";

const DashboardPage = ({ user, onLogout }) => {
  // Safety check
  if (!user) {
    return (
      <>
        <Navbar />
        <Card>
          <h1>No user data found</h1>
          <p>Please log in first.</p>
        </Card>
      </>
    );
  }

  return (
    <div className="flex w-full h-full">
      <nav className="hidden float-left w-[20%] h-dvh p-4 flex-col space-y-4 text-sm md:flex">
        <Logo className={"bg-BrightPurple rounded-xl p-2"}/>
        <Link to="/Dashboard" className="py-2 md:text-xl">
          <LiaBookSolid className="inline-flex size-7 mx-2 items-center" />
          DashBoard
        </Link>
        <Link to="/ClassPage" className="py-2 md:text-xl">
          <LiaPencilRulerSolid className="inline-flex size-7 mx-2 items-center" />
          Classes
        </Link>
        <Link to="/AssignPAge" className="py-2 md:text-xl">
          <LiaClipboardListSolid className="inline-flex size-7 mx-2 items-center" />
          Assignments
        </Link>
      </nav>

      <section className="w-full float-right md:w-[80%]">
        <Navbar user={user}/>
        <Card>
          <h1>Welcome to your Dashboard!</h1>
          <p>
            <strong>Full Name:</strong> {user.full_name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>token:</strong> {user.token}
          </p>
          <button onClick={onLogout}>Logout</button>
        </Card>
      </section>
    </div>
  );
};

export default DashboardPage;
