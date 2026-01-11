import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t-2 border-(--color-primary)">
      <div className="flex justify-between p-5">
        <div>© Sören Timo Voigt 2025 - {new Date().getFullYear()}</div>
        <nav className="flex gap-5 flex-col md:flex-row items-end">
          <div className="flex gap-5">
            <a
              href="https://github.com/srenV"
              target="_blank"
              className="hover:text-(--color-primary) transition-all"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/soren-timo-voigt/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-(--color-primary) transition-all"
            >
              <Linkedin />
            </a>
          </div>
          <div className="flex gap-5">
            <Link
              className="hover:text-(--color-primary) transition-all"
              to={"/impressum"}
            >
              Impressum
            </Link>
            <Link
              className="hover:text-(--color-primary) transition-all"
              to={"/legal"}
            >
              Legal
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};
