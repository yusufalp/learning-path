import { Link } from "react-router";

import courses from "../../data/courses.json";
import enrollments from "../../data/enrollments.json";

import { useAuth } from "../../context/auth/useAuth";

export default function Courses() {
  const { user } = useAuth();

  const userEnrollments = enrollments.filter(
    (enrollment) => enrollment.user_id === user._id,
  );

  const enrolledCourses = userEnrollments.map((enrollment) =>
    courses.find((course) => course.id === enrollment.course_id),
  );

  return (
    <div>
      <h1>Courses Page</h1>

      <ul>
        {enrolledCourses.map((course) => (
          <li>
            <Link to={course.id}>{course.title}</Link>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
