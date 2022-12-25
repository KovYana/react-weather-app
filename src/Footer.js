import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="text-center">
        <p>
          The project was coded by <strong>Yana Kovalchuk</strong> and is{" "}
          <a href="https://github.com/KovYana/Weather-app " id="github-link">
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/moonlit-custard-9e267a/deploys/"
            id="github-link"
          >
            hosted on Nestify.
          </a>
        </p>
      </div>
    </div>
  );
}
