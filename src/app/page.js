import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Project Management Dashboard
      </h1>
      <ProjectForm />
      <ProjectList />
    </div>
  );
}
