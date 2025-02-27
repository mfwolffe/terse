"use client";

import { affiliations } from "../data/data";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@awesome.me/kit-361830ecc8/icons/duotone/light";


import InsultViewer from "./InsultViewer/InsultViewer";
import TimedTransducer from "./TimedTransducer/TimedTransducer";
import SuggestionList from "./UserFeedbackTable/UserFeedbackTable";


const clock = <FontAwesomeIcon icon={faClock} fontSize={14} shake />


interface ComplaintSelectProps {
  minutes: number;
  setMinutes: (minutes: number) => void;
}

const ComplaintSelect: React.FC<ComplaintSelectProps> = ({ minutes=-1, setMinutes }) => {
  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e) return;

    const value = Number(e.target.value);
    if (isNaN(value) || value < 0) return;

    setMinutes(value);
  }

  useEffect(() => {
    console.log(minutes);
  }, [minutes]);

  return (
      <div className="w-4/5 ml-auto mr-auto text-center">
        <label htmlFor="minutes-input" className="block mb-2 text-sm font-medium">Choose quantity:</label>
        <div className="relative flex items-center max-w-[12rem] ml-auto mr-auto">
            <button disabled={+minutes == 0} onClick={() => setMinutes(+minutes - 1)} type="button" id="decrement-button" data-input-counter-decrement="minutes-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                </svg>
            </button>
            <input name="minutes-input" onChange={(e) => handleMinutesChange(e)} value={minutes} type="text" id="minutes-input" data-input-counter data-input-counter-min="1" data-input-counter-max="5" aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-red-300 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-300" placeholder="" required />
            <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                { clock }
                <span>Minutes</span>
            </div>
            <button onClick={() => setMinutes(+minutes + 1)} type="button" id="increment-button" data-input-counter-increment="minutes-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                </svg>
            </button>
        </div>
        <p id="helper-text-explanation" className="mt-2 text-sm">How many minutes of your time did I waste?</p>
      </div>
  );
}

export default function ComplaintForm() {
  const [mode, setMode] = useState(-1);
  const [insult, setInsult] = useState('');
  const [minutes, setMinutes] = useState(-1);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [suggesterVisible, setSuggesterVisible] = useState(false);


  function handleModeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    if (!e) return;    
    const value = Number(e.target.value);
    setMode(value);
  }

  useEffect(() => {
    switch (+mode) {
      case 5:
        setMinutes(3);
      case 1:
        setSuggesterVisible(false);
        setSubmitDisabled(false);  
        break;
      case 3:
        // ehhh
      case 2:
        setSuggesterVisible(true);
        setSubmitDisabled(false);
        break;
      case 4:
        setSuggesterVisible(false);
        setSubmitDisabled(false);
        break;
      default:
        return;
    }
  }, [mode]);


  return (
    <form className="w-100 mb-12 mt-8" action={"https://formspree.io/f/meooppvj"} method="POST">
      <div className="mb-8">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">

          <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-500 peer form-underline" placeholder=" " />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-slate-50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-amber-500 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="affiliation" id="affiliation" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-500 peer form-underline" placeholder=" " data-tooltip-target="tooltip-affiliation" data-tooltip-placement="top" data-tooltip-trigger="click" />
            <div id="tooltip-affiliation" role="tooltip"  className="absolute z-10 invisible text-center inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-1000 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              i.e., where do we know each other from?
              <br />
              Like
              <TimedTransducer strings={affiliations} delay={1500} />
              for instance
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <label htmlFor="affiliation" className="peer-focus:font-medium absolute text-sm text-slate-50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-amber-500 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Affiliation</label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="first_name" id="first_name" className="block py-2.5 px-0 w-full text-sm text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-500 peer" placeholder=" " />
            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-slate-50 dark:text-slate-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="last_name" id="last_name" className="block py-2.5 px-0 w-full text-sm text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-500 peer" placeholder=" " />
            <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-slate-50 dark:text-slate-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
          </div>
        </div>

        <label htmlFor="underline_select" className="sr-only"></label>
        <select onChange={(e) => handleModeSelect(e)} defaultValue={"1"} id="underline_select" className="block py-2.5 px-0 w-2/5 ml-auto mr-auto text-sm text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-amber-500 peer ">
          <option value="0" disabled>Feedback Type</option>
          <option value="1">Log it (for metrics!)</option>
          <option value="2">Suggest Revisions - you write them</option>
          <option value="4">Complain - autogenerate a random insult for matt</option>
          <option value="5">Complain - just let me know how much of your time I wasted</option>
        </select>
      </div>


      { suggesterVisible && <SuggestionList /> }
      { mode === 5 && <ComplaintSelect minutes={minutes} setMinutes={setMinutes} /> }
      { mode === 4 && <InsultViewer insult={insult} setInsult={setInsult} /> }

      <input type="hidden" name="log-only?" value={JSON.stringify(mode === 1)} />
      <div className="ml-auto mr-auto w-100 flex justify-end">
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </div>
    </form>
  );
}