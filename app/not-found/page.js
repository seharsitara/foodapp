import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-5xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl text-gray-600 mt-2">Page Not Found</h2>
      <p className="text-gray-500 mt-4 text-center">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
