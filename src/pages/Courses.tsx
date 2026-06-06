import {
  CourseCard,
  CoursesFilters,
  CoursesHero,
  CoursesToolbar,
  Pagination,
} from "../components/courses";
import { courseList } from "../data/courses.data";

const Courses = () => {
  return (
    <div className="bg-white">
      <CoursesHero />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <CoursesToolbar total={courseList.length} />

        <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]">
          <CoursesFilters />

          <div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {courseList.map((course) => (
                <CourseCard key={course.title} course={course} />
              ))}
            </div>

            <Pagination totalPages={8} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
