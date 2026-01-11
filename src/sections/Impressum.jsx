import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export const Impressum = () => {
  return (
    <div className="mx-auto min-h-screen px-10 md:px-30 pt-32 pb-20 relative z-10 items-center justify-center md:flex">
      
      <button
        className=" absolute md:fixed bottom-10 right-10 bg-(--color-primary) p-2 rounded-3xl"
        size="lg"
      >
        {/* Kleinere Geräte zeigen das Icon, größere Geräte Text */}
        <Link to={"/"}>
          {typeof window !== "undefined" && window.innerWidth < 450 ? (
            <Home />
          ) : (
            "Zurück zum Portfolio"
          )}
        </Link>
      </button>
      <div className="bg-(--color-muted) p-5 rounded-3xl md:w-1/3">
        <hr className="text-(--color-primary) mt-2 mb-2" />
        <h1 className="text-2xl md:text-4xl  mb-4">Impressum</h1>

        <p>
          S&ouml;ren Timo Voigt
          <br />
          Am Bruch 8
          <br />
          57577 Hamm
        </p>

        <h2 className="text-xl md:text-2xl mt-6 mb-4">Kontakt</h2>
        <p>
          Telefon: 017627994268
          <br />
          E-Mail: voigtsren@gmail.com
        </p>
        <hr className="text-(--color-primary) mt-2 mb-2" />
      </div>
    </div>
  );
};
