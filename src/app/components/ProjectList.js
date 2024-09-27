import { sampleProjects } from "../data/projects";

const ProjectList = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Project List</h2>
      {sampleProjects.map((project) => (
        <div
          key={project.id}
          className="bg-white p-6 mb-4 rounded-lg shadow-md border-l-4 border-blue-500"
        >
          <h3 className="text-xl font-semibold mb-2">{project.projectName}</h3>
          <p className="text-gray-600">
            <strong>Members:</strong> {project.members.join(", ")}
          </p>
          <p className="text-gray-600">
            <strong>Roles:</strong> {project.roles.join(", ")}
          </p>
          <p className="text-gray-600">
            <strong>Situation:</strong> {project.situation}
          </p>
          <p className="text-gray-600">
            <strong>Background:</strong> {project.background}
          </p>
          <p className="text-gray-600">
            <strong>Assessment:</strong> {project.assessment}
          </p>
          <p className="text-gray-600">
            <strong>Recommendation:</strong> {project.recommendation}
          </p>
          <p className="text-gray-600">
            <strong>Documents:</strong> {project.documents.join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
