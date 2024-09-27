"use client";

import { useState } from "react";
import { sampleProjects } from "../data/projects";

const ProjectForm = () => {
  const [projectData, setProjectData] = useState({
    projectName: "",
    members: "",
    roles: "",
    situation: "",
    background: "",
    assessment: "",
    recommendation: "",
  });
  const [projects, setProjects] = useState(sampleProjects);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: projects.length + 1,
      ...projectData,
      members: projectData.members.split(",").map((member) => member.trim()),
      roles: projectData.roles.split(",").map((role) => role.trim()),
    };
    setProjects([...projects, newProject]);
    setProjectData({
      projectName: "",
      members: "",
      roles: "",
      situation: "",
      background: "",
      assessment: "",
      recommendation: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-xl font-bold mb-4">Add New Project</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Project Name
        </label>
        <input
          type="text"
          name="projectName"
          placeholder="Enter project name"
          value={projectData.projectName}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Members
        </label>
        <input
          type="text"
          name="members"
          placeholder="Enter members, comma separated"
          value={projectData.members}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Roles
        </label>
        <input
          type="text"
          name="roles"
          placeholder="Enter roles, comma separated"
          value={projectData.roles}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Situation
        </label>
        <textarea
          name="situation"
          placeholder="Describe the situation"
          value={projectData.situation}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Background
        </label>
        <textarea
          name="background"
          placeholder="Describe the background"
          value={projectData.background}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Assessment
        </label>
        <textarea
          name="assessment"
          placeholder="Provide assessment"
          value={projectData.assessment}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Recommendation
        </label>
        <textarea
          name="recommendation"
          placeholder="Provide recommendations"
          value={projectData.recommendation}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Project
      </button>
    </form>
  );
};

export default ProjectForm;
