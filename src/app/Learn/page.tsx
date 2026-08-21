import Footer from "@/components/footer";
import Header from "@/components/header";
import Ticker from "@/components/ticker";
import { Course, courses } from "@/lib/courses";

// Mock course data
// const courses = [
//   {
//     id: 1,
//     title: "Bitcoin Fundamentals",
//     description:
//       "Understand the history, technology, and economics of Bitcoin.",
//     level: "Beginner",
//     duration: "4 hours",
//     color: "bg-orange-200",
//   },
//   {
//     id: 2,
//     title: "Ethereum & Smart Contracts",
//     description:
//       "Learn how Ethereum works and how to build decentralized apps.",
//     level: "Intermediate",
//     duration: "6 hours",
//     color: "bg-blue-200",
//   },
//   {
//     id: 3,
//     title: "DeFi Deep Dive",
//     description: "Explore lending, borrowing, and yield farming in DeFi.",
//     level: "Advanced",
//     duration: "5 hours",
//     color: "bg-green-200",
//   },
//   {
//     id: 4,
//     title: "NFTs & Digital Art",
//     description: "Create, buy, and sell NFTs across major marketplaces.",
//     level: "Beginner",
//     duration: "3 hours",
//     color: "bg-purple-200",
//   },
// ];

export default function Learn() {
  return (
    <div className="h-full w-full bg-white inter">
      <Ticker />
      <Header />

      {/* Main content */}
      <div className="relative min-h-[80vh] w-full overflow-hidden border-b border-gray-200 px-4 lg:min-h-[80vh]">
        <div
          className="
              relative mx-auto flex h-full w-full max-w-350
              flex-col items-start justify-start overflow-hidden
              border-x border-gray-200
              px-4 py-6
              sm:px-6 sm:py-10
            "
        >
          {/* Heading */}
          <div className="flex w-full max-w-150 flex-col gap-5">
            <div className="text-black">
              <a href="/News" className="text-gray-700 hover:underline">
                Home
              </a>{" "}
              / Learn
            </div>

            <div className="text-4xl leading-[120%] sm:text-6xl">
              Learn Bitcoin, Ethereum, DeFi & NFTs and Beyond
            </div>
          </div>

          {/* Courses grid */}
          <div className="mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col overflow-hidden rounded-sm"
              >
                {/* Course image */}
                <div className="flex h-48 w-full items-center justify-center overflow-hidden bg-gray-100">
                  {course.image ? (
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <svg
                      className="h-16 w-16 text-gray-400 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  )}
                </div>

                {/* Course info */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-semibold text-black">
                    {course.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-gray-600">
                    {course.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500">
                    <span className="rounded-full bg-gray-100 px-3 py-1">
                      {course.difficulty}
                    </span>
                    <span>{course.publishedAt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-black">
        <Footer />
      </div>
    </div>
  );
}
