import React from "react";

export default function Footer() {
  return (
    <div className="w-100">
      <div className="row">
        <div className="col">
          <div
            style={{
              backgroundColor: "tomato",
              height: "40px",
              fontSize: "20px",
              color: "white",
              textAlign: "center",
            }}
          >
            <p className="text-center pt-2">
              All rights reserved &copy {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
