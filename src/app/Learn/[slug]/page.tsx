import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Ticker from "@/components/ticker";
import { formatPostDate } from "@/lib/blogs";
import { getCourseContent } from "@/lib/course_content";
import { courses, getCourseBySlug } from "@/lib/courses";

type CoursePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  const content = getCourseContent(slug);

  if (!course || !content) {
    return (
      <div className="h-full w-full bg-white inter">
        <Ticker />
        <Header />
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Course not found</h2>
            <Link
              href="/Learn"
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              ← Back to courses
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="h-fit w-full bg-white inter">
      <Ticker />
      <Header />

      <div className="relative h-[70vh] w-full overflow-hidden border-b border-gray-200 px-4 lg:h-[80vh]">
        <div
          className="
            relative mx-auto flex h-full w-full max-w-350
            flex-col items-start justify-end overflow-hidden
            border-x border-gray-200
            px-4 py-6
            sm:px-6 sm:py-10
          "
        >
          <Image
            src={course.image || "/noise.avif"}
            alt={course.title}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1400px) 100vw, 1400px"
          />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/65 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[url(/noise.avif)] bg-repeat opacity-20 mix-blend-overlay" />

          <div className="relative z-10 w-full text-white sm:max-w-170">
            <div className="text-sm text-white/70">
              <Link href="/Learn" className="hover:text-white">
                Learn
              </Link>{" "}
              / {course.title}
            </div>

            <h1 className="mt-5 text-3xl leading-[115%] lora sm:text-4xl">
              {course.title}
            </h1>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-book-open-icon lucide-book-open"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-medium">{course.author}</p>
                <p className="text-sm text-white/70">
                  {course.difficulty} · {course.category}
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-wide text-white/70">
              <span>{formatPostDate(course.publishedAt)}</span>
              <span>{course.category}</span>
              <span>{course.difficulty}</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="border border-white/30 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-sm">
                {course.difficulty}
              </span>
              <span className="border border-white/30 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-sm">
                {course.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto flex w-full max-w-350 border-x border-gray-200 px-4 pb-20 sm:px-6 sm:pb-32">
        <section className="min-h-80 min-w-0 flex-1 border-t border-gray-200 py-10 sm:py-14">
          <h2 className="text-2xl lora sm:text-3xl">Course Content</h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            {course.description}
          </p>
          <article className="mt-8 space-y-8 text-base leading-8 text-gray-700">
            {content.lessons.map((lesson) => (
              <div
                key={lesson.title}
                className="border-b border-gray-100 pb-8 last:border-0"
              >
                <h3 className="text-xl font-semibold text-black lora sm:text-2xl">
                  {lesson.title}
                </h3>
                <div className="mt-4 space-y-4">
                  {lesson.content.map((paragraph, index) => (
                    <p key={`${lesson.title}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-8">
              <Link
                href="/Learn"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-black"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to all courses
              </Link>
            </div>
          </article>
        </section>
      </main>

      <div className="w-full bg-black">
        <Footer />
      </div>
    </div>
  );
}
