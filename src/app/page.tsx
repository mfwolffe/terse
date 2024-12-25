"use client"

import Transducer     from "./components/Transducer";
import ComplaintForm  from "./components/ComplaintForm";
import FootNav        from "./components/FootNav/FootNav";
import Typewriter     from "./components/Typewriter/Typewriter";


import { Si1001Tracklists } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@awesome.me/kit-361830ecc8/icons/classic/brands";
import { faCodeCompare } from "@awesome.me/kit-361830ecc8/icons/duotone/solid";

const mattIco = <Si1001Tracklists fontSize={20} color="#faae7b" />
const thisGH  = <FontAwesomeIcon icon={faGithub} fontSize={20} color="#faae7b" />
const mattGH  = <FontAwesomeIcon icon={faCodeCompare} fontSize={20} color="#faae7b" />

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2  sm:items-start mt-0 overflow-auto">
        <div className="ml-12 mr-auto text-left" id="typewriter-container">
          <Typewriter />
        </div>
        <div className="ml-auto mr-auto text-center">
          <h3 className="w-10/12 ml-auto mr-auto mt-6">
            matt wrote you a long, roundabout email, didn't he?
          </h3>

          <h3 className="ml-auto mr-auto mt-4 mb-4 subpixel-antialiased" style={{color: "var(--p2end"}}>
            We're here to help
          </h3>

          <div className="mt-6">
            <p>
              Who are we?
              We're matt!
              From a different time though, you see...
              a time when matt wasn't (or isn't) so verbose.
            </p>

            <Transducer />
          </div>

          <h3 className="ml-auto mr-auto mt-6 mb-6 subpixel-antialiased" style={{color: "var(--p2end)"}}>
            How does it work?
          </h3>

          <p>
            <span className="text-amber-500 subpixel-antialiased">No form fields are required. </span>
            Just fill it out as you see fit!
          </p>

          <p>
            (If you want to give <span className="subpixel-antialiased text-amber-500">tailored</span> feedback, select a different dropdown item
            -
            <span className="subpixel-antialiased text-amber-500"> otherwise, just hit submit to update matt's records</span>)
          </p>
        </div>

        <div className="flex-1 justify-center w-1/2  ml-auto mr-auto">
          <ComplaintForm />
        </div>

      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <FootNav navPath="https://musicsian.com" linkText="who's matt?" linkIconImg={mattIco} />
        <FootNav navPath="https://github.com/mfwolffe" linkText="matt's github" linkIconImg={mattGH} />
        <FootNav navPath="https://github.com/mfwolffe/terse" linkText="this site's code" linkIconImg={thisGH} />
      </footer>
    </div>
  );
}
