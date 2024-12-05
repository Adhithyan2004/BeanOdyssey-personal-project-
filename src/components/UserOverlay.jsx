import React, { useState } from "react";

const UserOverlay = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-primary rounded-lg shadow-lg p-6 w-full max-w-md relative">
          <button
            onClick={onClose}
            className="absolute text-lg top-2 right-2 text-secondary hover:text-red-500"
          >
            close
          </button>
          <h2 className="text-2xl text-center mb-4">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>
          <form className="flex flex-col gap-4">
            {isSignUp && (
              <div>
                <label className="block text-xl">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full bg-secondary outline-none placeholder:text-primary text-primary rounded px-3 py-2 mt-1"
                />
              </div>
            )}
            <div>
              <label className="block text-xl ">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="bg-secondary outline-none placeholder:text-primary text-primary w-full rounded px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label className="block text-xl ">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                className="bg-secondary outline-none placeholder:text-primary text-primary w-full  rounded px-3 py-2 mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-48 mx-auto bg-secondary text-xl text-primary rounded py-2 my-4 hover:bg-orange-400 transition"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
          <p className="text-center text-xl mt-4">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={toggleForm}
              className="text-secondary hover:underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    )
  );
};

export default UserOverlay;
