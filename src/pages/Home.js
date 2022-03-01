import React from "react";
import "../styles.css";
const Home = () => {
  return (
    <div className="body">
      <div className="center">
        <div className="avatar">
          <img
            src="https://www.mitti.se/_internal/cimg!0/f58r1gt8drfhp4maarsb4ascgadla12.jpeg"
            alt="backgroundimg"
          />
        </div>

        <div className="content">
          <h1 className="h1">Elahe Eskandari</h1>
          <h2 className="h2">Frontend developer student</h2>

          <p className="pDescription">
            Dear sir/madame, Although I still have one year left of my
            education, I embraced the flexibility of online learning  and  have
            studied at my own pace. I am therefore ahead of my school and done
            all the courses in advance plus learned Typescript, Material UI and
            Usecontext which are not included in the course material but which I
            have used in my projects. All of this has been done while working
            part time at pharmacy. I am therefore ready for internship as the
            next step for me to develop and be challenged. One trait I value in
            myself is my willpower and once I invest in something, I give my
            best to succeed. I am confident that my positive attitude and
            ability to stay calm during  stressful situations contributes to a
            positive environment. The fact that I put all my effort and really
            obsess about solving the problem at hand, has so far helped me
            exceed my own expectations and personal goals since I started
            coding. Looking forward to hear from you. Kind regards Elahe
          </p>
          <h3 className="h3">Contact</h3>
        </div>
        <div className="social">
          <a href="https://github.com/elaheesk/movies-app">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/elahe-eskandari-4393b6b7/">
            <i className="fab fa-linkedin" />
          </a>

          <a href="file:///Users/elahesaccount/Downloads/CV%20Elahe%20Eskandari%20%231%20-%20Kopia%20(1).pdf">
            CV
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
