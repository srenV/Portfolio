import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { HomeIcon } from "lucide-react";

export const Legal = () => {
  return (
    <div className=" mx-auto px-3 md:px-30 pt-32 pb-20 relative z-10">
      <button
        className="fixed bottom-30 right-5 w-fit md:bottom-20 md:right-5  bg-(--color-primary) p-2 rounded-3xl"
        size="lg"
      >
        <Link to={"/"}>
          {typeof window !== "undefined" && window.innerWidth < 450 ? (
            <HomeIcon />
          ) : (
            "Zurück zum Portfolio"
          )}
        </Link>
      </button>
      <div className="bg-(--color-muted) p-5 md:p-15 rounded-4xl">

        <p className="text-sm text-gray-500 italic mb-8 border-l-4 border-(--color-primary) pl-4">
    Note: As this website is hosted and operated from Germany, the legal notices below are provided in German in accordance with local laws (DSGVO/GDPR).
  </p>
        <h1 className="text-2xl md:text-4xl mb-4">
          Datenschutz&shy;erkl&auml;rung
        </h1>

        <p>
          Diese Datenschutzerklärung gilt für die Website von Sören Timo Voigt
          sowie für alle Projekte und Showcases, die unter den Domains von
          github.io oder vercel.app bereitgestellt werden.
        </p>

        <hr className="text-(--color-primary) mt-6" />
        <h2 className="text-xl md:text-3xl mt-6 mb-4">
          1. Datenschutz auf einen Blick
        </h2>
        <h3 className="text-lg md:text-2xl mt-4 mb-3">Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen &Uuml;berblick
          dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie
          diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
          denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
          Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie
          unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.
        </p>

        <h3 className="text-lg md:text-2xl mt-4 mb-3">
          Datenerfassung auf dieser Website
        </h3>
        <h4 className="text-base md:text-xl mt-3 mb-2">
          Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?
        </h4>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt
          &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser
          Datenschutzerkl&auml;rung entnehmen.
        </p>
        <h4 className="text-base md:text-xl mt-3 mb-2">
          Wie erfassen wir Ihre Daten?
        </h4>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
          in ein Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder
          Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
          automatisch, sobald Sie diese Website betreten.
        </p>
        <h4 className="text-base md:text-xl mt-3 mb-2">
          Wof&uuml;r nutzen wir Ihre Daten?
        </h4>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur
          Analyse Ihres Nutzerverhaltens verwendet werden.
        </p>
        <h4 className="text-base md:text-xl mt-3 mb-2">
          Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?
        </h4>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
          Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
          personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
          Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen.
          Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
          k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft
          widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten
          Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
        </p>

        <hr className="text-(--color-primary) mt-6" />

        <h2 className="text-xl md:text-3xl mt-6 mb-4">2. Hosting</h2>
        <p>Wir hosten die Inhalte unserer Website bei folgenden Anbietern:</p>
        <h3 className="text-lg md:text-2xl mt-4 mb-3">
          Externes Hosting (GitHub & Vercel)
        </h3>
        <p>
          Diese Website wird extern gehostet. Die personenbezogenen Daten, die
          auf dieser Website erfasst werden, werden auf den Servern des Hosters
          / der Hoster gespeichert. Hierbei kann es sich v.&nbsp;a. um
          IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Namen und
          Websitezugriffe handeln.
        </p>
        <p>
          Das externe Hosting erfolgt im Interesse einer sicheren, schnellen und
          effizienten Bereitstellung unseres Online-Angebots durch
          professionelle Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
        <p>
          <strong>Eingesetzte Hoster:</strong>
          <br />
          GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107,
          USA
          <br />
          Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA
        </p>
        <p>
          Beide Unternehmen sind nach dem „EU-US Data Privacy Framework“ (DPF)
          zertifiziert, was ein angemessenes Datenschutzniveau garantiert.
        </p>
        <h4 className="text-base md:text-xl mt-3 mb-2">Auftragsverarbeitung</h4>
        <p>
          Wir haben Vertr&auml;ge &uuml;ber Auftragsverarbeitung (AVV) zur
          Nutzung der oben genannten Dienste geschlossen. Dies
          gew&auml;hrleistet, dass diese Anbieter Daten nur nach unseren
          Weisungen und unter Einhaltung der DSGVO verarbeiten.
        </p>
        <hr className="text-(--color-primary) mt-6" />

        <h2 className="text-xl md:text-3xl mt-6 mb-4">
          3. Allgemeine Hinweise und Pflicht&shy;informationen
        </h2>
        <h3 className="text-lg md:text-2xl mt-4 mb-3">
          Hinweis zur verantwortlichen Stelle
        </h3>
        <p>
          Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser
          Website ist:
        </p>
        <p>
          Sören Timo Voigt
          <br />
          Am Bruch 8<br />
          57577 Hamm (Sieg)
        </p>
        <p>
          Telefon: 017627994268
          <br />
          E-Mail: voigtsren@gmail.com
        </p>

        <h3 className="text-lg md:text-2xl mt-4 mb-3">Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt
          (z.B. nach Abschluss Ihrer Anfrage via Kontaktformular). Zwingende
          gesetzliche Aufbewahrungsfristen bleiben unber&uuml;hrt.
        </p>

        <h3 className="text-lg md:text-2xl mt-4 mb-3">
          Rechtsgrundlagen der Datenverarbeitung
        </h3>
        <p>
          Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a
          (Einwilligung), lit. b (Vertragserfüllung) oder lit. f (berechtigtes
          Interesse) DSGVO. Details entnehmen Sie den jeweiligen Abschnitten.
        </p>

        <h3 className="text-lg md:text-2xl mt-4 mb-3">
          Widerruf Ihrer Einwilligung
        </h3>
        <p>
          Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
          ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine
          bereits erteilte Einwilligung jederzeit widerrufen.
        </p>

        <h3 className="text-lg md:text-2xl mt-4 mb-3">
          Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen
          (Art. 21 DSGVO)
        </h3>
        <p>
          SIE HABEN DAS RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN
          SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN
          DATEN WIDERSPRUCH EINZULEGEN.
        </p>

        <h3 className="text-lg md:text-2xl mt-4 mb-3">
          SSL- bzw. TLS-Verschl&uuml;sselung
        </h3>
        <p>
          Diese Seite nutzt eine SSL- bzw. TLS-Verschl&uuml;sselung, um die
          &Uuml;bertragung vertraulicher Inhalte (z.B. Anfragen via
          Kontaktformular) zu sch&uuml;tzen.
        </p>
        <hr className="text-(--color-primary) mt-6" />

        <h2 className="text-xl md:text-3xl mt-6 mb-4">
          4. Datenerfassung auf dieser Website
        </h2>
        <h3 className="text-lg md:text-2xl mt-4 mb-3">Cookies</h3>
        <p>
          Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;.
          Dies sind kleine Datenpakete, die technisch notwendig sind oder zur
          Analyse eingesetzt werden (Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <h3 className="text-lg md:text-2xl mt-4 mb-3">Server-Log-Dateien</h3>
        <p>
          Der Provider speichert automatisch Informationen in Server-Log-Dateien
          (Browsertyp, Betriebssystem, Referrer URL, IP-Adresse). Dies ist
          technisch notwendig (Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <h3 className="text-lg md:text-2xl mt-4 mb-3">
          Kontaktformular und Versand via EmailJS
        </h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
          Bearbeitung der Anfrage gespeichert.
        </p>
        <p>
          <strong>Einsatz von EmailJS:</strong> Wir nutzen für den technischen
          Versand der E-Mails den Dienst EmailJS (EmailJS Inc., 700 S. Rosemary
          Ave, Suite 204, West Palm Beach, FL 33401, USA). Hierbei werden Ihre
          Daten an die Server von EmailJS übertragen. Die Nutzung erfolgt auf
          Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
          effizienter Kommunikation). EmailJS ist nach dem EU-US Data Privacy
          Framework zertifiziert.
        </p>

        <hr className="text-(--color-primary) mt-6" />
      </div>
    </div>
  );
};
