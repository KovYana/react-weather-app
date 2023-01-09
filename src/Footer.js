import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="text-center">
        <p>
          The project was coded by <strong>Yana Kovalchuk</strong> and is{" "}
          <a href="https://github.com/KovYana/react-weather-app" id="github-link"_blank>
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://chipper-gumption-6f60c4.netlify.app/"
            id="github-link"
            _blank
          >
            hosted on Netlify.
          </a>
        </p>
      </div>
    </div>
  );
}
