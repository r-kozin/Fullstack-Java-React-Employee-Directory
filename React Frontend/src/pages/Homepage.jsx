import React from "react";
import "../styles/Homepage.css";

export const Homepage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Full Stack Employee Directory</h1>
      </header>

      <section>
        <h2>Project Summary</h2>
        <p>
          A comprehensive Employee Directory web application that streamlines
          the management of employee information. This project merges frontend
          and backend technologies to create a feature-rich directory for
          employees.
        </p>
      </section>

      <section>
        <h2>Functionality</h2>
        <ul>
          <li>Easily add new employees to the system.</li>
          <li>Modify existing employee details with ease.</li>
          <li>View a complete list of all employees.</li>
          <li>
            Access detailed information on each employee through individual
            employee cards.
          </li>
          <li>Search list of employees for a specific employee.</li>
          <li>Delete employees from the system.</li>
        </ul>
      </section>
      <section>
        <h2>Technologies Used</h2>
        <h3>Frontend</h3>
        <ul>
          <li>
            <img
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              alt="JavaScript"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              alt="React"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
              alt="React Router"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
              alt="Redux"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"
              alt="Vite"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white"
              alt="Material UI"
            />
          </li>
        </ul>

        <h3>Backend</h3>
        <ul>
          <li>
            <img
              src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
              alt="Java"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white"
              alt="Spring"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white"
              alt="Hibernate"
            />
          </li>
        </ul>

        <h3>Database</h3>
        <ul>
          <li>
            <img
              src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"
              alt="MySQL"
            />
          </li>
        </ul>
        <h3>Built with</h3>
        <ul>
          <li>
            <img
              src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"
              alt="Visual Studio Code"
            />
          </li>
        </ul>
        </section>
        <section>
          <h2>Hosting and Docker</h2>
          <ul>
            <li>
              <img src="https://img.shields.io/badge/Netlify-%2300C7B7.svg?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify" />
            </li>
            <li>
              <img src="https://img.shields.io/badge/Docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
            </li>
            <li>
              <img src="https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white" alt="Render" />
            </li>
          </ul>
          <p>
            The live version is hosted on Netlify, with seamless
            connectivity to a MySQL database in the cloud. The backend operates
            within Docker containers hosted on Render.com. To
            optimize resource utilization, the server may take up to 2 minutes
            to initialize during the initial load. <b>Please be patient!</b>
          </p>
        </section>
    </div>
  );
};
