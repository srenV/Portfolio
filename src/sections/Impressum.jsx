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
          &#83;&#246;&#114;&#101;&#110;&#32;&#84;&#105;&#109;&#111;&#32;&#86;&#111;&#105;&#103;&#116;
          <br />
          &#65;&#109;&#32;&#66;&#114;&#117;&#99;&#104;&#32;&#56;
          <br />
          &#53;&#55;&#53;&#55;&#55;&#32;&#72;&#97;&#109;&#109;&#32;&#40;&#83;&#105;&#101;&#103;&#41;
        </p>

        <h2 className="text-xl md:text-2xl mt-6 mb-4">Kontakt</h2>
        <p>
          Telefon:{" "}
          <a href="tel:&#48;&#49;&#55;&#54;&#50;&#55;&#57;&#57;&#52;&#50;&#54;&#56;">
            &#48;&#49;&#55;&#54; &#50;&#55;&#57;&#57;&#52;&#50;&#54;&#56;
          </a>
          <br />
          E-Mail:{" "}
          <a href="mailto:&#118;&#111;&#105;&#103;&#116;&#115;&#114;&#101;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
            &#118;&#111;&#105;&#103;&#116;&#115;&#114;&#101;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
          </a>
        </p>
        <hr className="text-(--color-primary) mt-2 mb-2" />
      </div>
    </div>
  );
};
