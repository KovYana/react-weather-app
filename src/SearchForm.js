import React from 'react';

import "./SearchForm.css";

export default function searchFrom() {
  return (
    <div className="SearchForm">
      <form id="search-form">
        <div className="row">
          <div className="col-sm-6">
            <input
              type="search"
              placeholder="Type your city.."
              autoFocus="on"
              autoComplete="off"
              id="city-input"
              className="form-control shadow-sm"
            />
          </div>
          <div className="col-sm-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow-sm"
              id="search-button"
            />
          </div>
          <div className="col-sm-3">
            <button
              className="btn btn-success w-100"
              id="current-location-button"
            >
              Current
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}