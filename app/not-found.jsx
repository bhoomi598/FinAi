// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// export default function NotFound() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
//       <h1 className="text-6xl font-bold gradient-title mb-4">404</h1>
//       <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
//       <p className="text-gray-600 mb-8">
//         Oops! The page you&apos;re looking for doesn&apos;t exist or has been
//         moved.
//       </p>
//       <Link href="/">
//         <Button>Return Home</Button>
//       </Link>
//     </div>
//   );
// }

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-50">
      {/* Illustration */}
      <div className="mb-20 mt-30">
        <img
          src="/404-illustration.png" // Add your own 404 image in public folder
          alt="Page not found"
          className="w-64 h-64 md:w-80 md:h-80 mx-auto animate-bounce-slow"
        />
      </div>

      {/* Main Text */}
      <h1 className="text-7xl font-extrabold text-gray-900 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Uh-oh! Page not found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Sorry, we couldn’t find the page you’re looking for. It might have been
        removed, had its name changed, or is temporarily unavailable.
      </p>

      {/* Return Home Button */}
      <Link href="/">
        <Button className="px-8 py-3">Go Back Home</Button>
      </Link>
    </div>
  );
}
