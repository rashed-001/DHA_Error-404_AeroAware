import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        margin: "0px",
        border: "1px solid bloack",
        background: "#4CAF50",
        color: "white",
        fontSize: "20px",
      }}
    >
      <div className="container mx-auto">
        <p
          style={{
            marginLeft: "35%",
          }}
        >
          © {new Date().getFullYear()} Air Quality Monitoring. All rights
          reserved.
        </p>
        <p
          style={{
            marginLeft: "35%",
          }}
        >
          Powered by{" "}
          <a
            href="https://Error-404.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Error-404.org
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
