import React from 'react';
export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-14 pl-16 pr-3">
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl p-8 bg-white shadow-md rounded-md">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Library Management System</h1>
          <p className="text-gray-600">Welcome to our library!</p>
        </header>

        {/* Featured Books */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Books</h2>
          {/* Include your featured books here */}
        </section>

        {/* User Login */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">User Login</h2>
          {/* Include your user login form or component here */}
        </section>

        {/* Library Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Library Information</h2>
          {/* Include information about the library */}
        </section>

        {/* Footer */}
        <footer>
          <p className="text-gray-600 text-sm">© 2024 Library Management System. All rights reserved.</p>
        </footer>
      </div>
    </div>
    </div>
  );
};