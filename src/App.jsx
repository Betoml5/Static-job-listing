import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/data")
      .then((res) => res.json())
      .then((data) => setJobs(data));
    console.log(jobs);
  }, []);

  return (
    <div className="App">
      <header className="header"></header>

      <section>
        {tags.map((tag) => (
          <div>
            <p>{tag}</p>
            <div>
              <img src="/icon-remove.svg" alt="" />
            </div>
          </div>
        ))}
      </section>

      <section className="jobs__container">
        {jobs.map((job) => (
          <div className="job__container-card">
            <img src={job.logo} alt={job.company} />
            <div className="job__container-company-name">
              <h3>{job.company}</h3>
              {job.new && <p className="job__new">New!</p>}
              {job.featured && <p className="job__featured">Featured!</p>}
            </div>
            <p className="job__container-position">{job.position}</p>
            <div className="job__container-date">
              <p>{job.postedAt}</p>
              <p>{job.contract}</p>
              <p>{job.location}</p>
            </div>
            <div className="jobs__container-card-tools">
              {job.tools.map((tool) => (
                <p key={tool}>{tool}</p>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
