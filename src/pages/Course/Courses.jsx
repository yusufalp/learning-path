import { Link } from "react-router";
import courses from "../../data/courses.json";

export default function Courses() {
  console.log("courses :>> ", courses);
  return (
    <div>
      <h1>Courses Page</h1>

      <ul>
        {courses.map((course) => (
          <li>
            <Link to={course.id}>{course.title}</Link>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
