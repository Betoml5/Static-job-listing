import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((res) => res.json())
      .then((data) => setJobs(data));
    console.log(jobs);
  }, []);

  return (
    <div className="App">
      <header className="header"></header>

      <section></section>

      <section className="jobs__container">
        {jobs.map((job) => (
          <div className="job__container-card">
            <img src={job.logo} alt={job.company} />
            <h3>{job.company}</h3>
            <p>{job.position}</p>
            <div>
              <p>{job.postedAt}</p>
              <p>{job.contract}</p>
              <p>{job.location}</p>
            </div>
            <div>
              {job.tools.map((tool) => (
                <p>{tool}</p>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
