//This component demonstrates rendering a list of modules with dynamic data passed as props. It also highlights the importance of using unique keys when rendering lists in React to optimize performance and avoid rendering issues.

function ModuleList({ modules }) {
  return (
    <ul className="module-list">
      {modules.map((module) => (
        // KEY IS MANDATORY when rendering arrays
        <li key={module.id} className="module-item">
          {module.name} – {module.cpu} CPU
        </li>
      ))}
    </ul>
  );
}

export default ModuleList;
