import { Link } from "react-router-dom";
import Icon from "../ui/Icon";
import type { ICourseCard } from "../../types/couses.type";

interface Props {
  course: ICourseCard;
}

const CourseCard = ({ course }: Props) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={course.img}
          alt={course.title}
          className="aspect-5/3 w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-xs font-semibold ${course.tagColor}`}
        >
          {course.tag}
        </span>
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-white/90 px-2 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
          <Icon.star className="h-3.5 w-3.5 text-amber-400" />
          {course.rating}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-bold text-slate-900">{course.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
          {course.desc}
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Icon.calendar className="h-4 w-4 text-slate-400" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Icon.clock className="h-4 w-4 text-slate-400" />
            {course.lessons}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex flex-col">
            {course.oldPrice && (
              <span className="text-xs text-slate-400 line-through">
                {course.oldPrice}
              </span>
            )}
            <span className="font-bold text-slate-900">{course.price}</span>
          </div>
          <Link
            to="/courses/1"
            className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
          >
            Batafsil
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
