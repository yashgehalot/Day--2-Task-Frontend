import React from 'react';
import Card from './Card'; 

const Home = () => {
  return (
    <div className="container py-5">
      {/* --- Section 1: Hero Section --- */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold text-primary">Join the Finance Club</h1>
          <p className="lead text-muted mb-4">
            Stop managing money alone. Track expenses, set group budgets, and achieve financial freedom together with your team or family.
          </p>
          <button className="btn btn-primary btn-lg px-4 me-2">Join Club Now</button>
          <button className="btn btn-outline-secondary btn-lg px-4">View Demo</button>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0">
          {/* THIS IS THE IMAGE LINE WE CHANGED */}
          <img 
            src="https://img.freepik.com/free-vector/flat-design-finance-leaders-concept-illustration_23-2149153848.jpg" 
            alt="Finance Team Leaders" 
            className="img-fluid rounded-3 shadow"
          />
        </div>
      </div>

      {/* --- Section 2: Club Features --- */}
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2 className="fw-bold">Why Join Our Club?</h2>
          <p className="text-muted">Powerful tools for personal and team finance.</p>
        </div>

        {/* Card 1 */}
        <Card 
          title="Team Expenses"
          description="Create a group for your business or family. Track shared bills and split costs instantly."
          category="Collaboration"
          imageUrl="https://img.freepik.com/free-vector/business-team-brainstorming-discussing-startup-project_74855-6573.jpg"
        />

        {/* Card 2 */}
        <Card 
          title="Smart Tracking"
          description="Link your bank accounts or scan receipts. We categorize everything automatically."
          category="Automation"
          imageUrl="https://img.freepik.com/free-vector/personal-finance-concept-illustration_114360-5396.jpg"
        />

        {/* Card 3 */}
        <Card 
          title="Savings Goals"
          description="Set a target for your vacation or new car. Watch your savings grow with our progress tracker."
          category="Savings"
          imageUrl="https://img.freepik.com/free-vector/investing-concept-illustration_114360-5154.jpg"
        />
      </div>
    </div>
  );
};

export default Home;