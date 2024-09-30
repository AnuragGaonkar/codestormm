import React from 'react';

function LearningModules({ setCurrentModule }) {
  const modules = [
    { id: 1, title: 'Budgeting Basics', icon: '💰' },
    { id: 2, title: 'Saving Strategies', icon: '🏦' },
    { id: 3, title: 'Investment 101', icon: '📈' },
    { id: 4, title: 'Retirement Planning', icon: '🏖️' },
  ];

  return (
    <section id="modules" className="learning-modules">
      <h2>Learning Modules</h2>
      <div className="module-grid">
        {modules.map((module) => (
          <div key={module.id} className="module-card" onClick={() => setCurrentModule(module)}>
            <span className="module-icon">{module.icon}</span>
            <h3>{module.title}</h3>
            <button className="start-module-btn">Start Module</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LearningModules;