import { Link, useParams } from "react-router";

import courses from "../../data/courses.json";
import profiles from "../../data/profiles.json";
import modules from "../../data/modules.json";

import { getFullName } from "../../utils/profile";

export default function CourseDetails() {
  const { courseId } = useParams();

  const course = courses.find((course) => course.id === courseId);

  const instructor = profiles.find(
    (profile) => profile.user_id === course.instructor_user_id,
  );

  const instructorFullName = getFullName(
    instructor.first_name,
    instructor.middle_name,
    instructor.last_name,
  );

  return (
    <div>
      <h1>Course Details Page</h1>

      <p>
        <strong>{course.title}</strong> by {instructorFullName}
      </p>
      <p>
        <strong>Description: </strong>
        {course.description}
      </p>

      <h2>Modules</h2>
      {modules
        .filter((module) => module.course_id === courseId)
        .map((module) => (
          <ul>
            <li>
              <Link to={`modules/${module.id}`}>{module.title}</Link>
            </li>
            <li>{module.description}</li>
          </ul>
        ))}
    </div>
  );
}
