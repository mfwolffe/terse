"use client";


import { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, ToggleSwitch, Tooltip } from "flowbite-react";
import { faBriefcase } from "@awesome.me/kit-361830ecc8/icons/duotone/regular";
import { faSpaceStationMoonConstruction } from "@awesome.me/kit-361830ecc8/icons/duotone/solid";


import styles from './InsultViewer.module.css'
import AlertModal from '../AlertModal/AlertModal';


interface InsulterProps {
  insult: string;
}

interface InsultViewerProps {
  insult:     string;
  setInsult: (insult: string) => void;
}

interface InsultCardProps {
  insult:       string;
  sanitize:     boolean;
  setSanitize: (sanitze: boolean) => void;
}


const corporateNotMini = <FontAwesomeIcon icon={faBriefcase} color='var(--background)' />
const corporateMini    = <FontAwesomeIcon icon={faBriefcase} fade className="self-center mr-2" />
const deathStarMini    = <FontAwesomeIcon icon={faSpaceStationMoonConstruction} fade className="self-center mr-2" />

const Insulter: React.FC<InsulterProps> = ({ insult }) => {
  return (
    <p className="text-4xl  text-rose-600 text-center">
      { insult }
    </p>
  )
}

const InsultCard: React.FC<InsultCardProps> = ({ insult, sanitize, setSanitize }) => {
  return (
      <Card className='!w-1/2 ml-auto mr-auto mt-6 mb-4 bg-stone-300 shadow-stone-400 drop-shadow-xl' >
          { <Insulter insult={insult} />}
          <div className="flex items-center gap-2">
            <ToggleSwitch className='ml-auto' checked={sanitize} onChange={() => setSanitize(!sanitize)} />
            { corporateNotMini }
          </div>
      </Card>
  );
}

const InsultViewer: React.FC<InsultViewerProps> = ({ insult, setInsult }) => {
  const [warned, setWarned]     = useState(false);
  const [waiting, setWaiting]   = useState(false);
  const [showing, setShowing]   = useState(false);
  const [sanitize, setSanitize] = useState(false);

  const handleWarning   = useCallback(() => { setShowing(true); }, []);
  const handleInsultGen = useCallback(() => { setWaiting(true); }, []);

  useEffect(() => {
    if (!waiting) return;

    const grabInsult = async () => {
      try {
        const response  = await fetch("https://insult.mattbas.org/api/insult.json?who=matt%27s+writing");
        const result    = await response.json();

        setInsult(result.insult);
      } catch (error) {
        console.error('fetching insult:', error);
      }
    };

    grabInsult();
  }, [waiting]);

  useEffect(() => {
    if (!insult) return;
    setWaiting(false);
  }, [insult]);


  return (
    <>
      <div className='h-fit'>
        <Button className="ml-auto mr-auto flex items-center justify-center !text-[var(--background)] !bg-[var(--hover-pink-light)] dark:hover:!bg-[var(--hover-pink-darker)] hover:!bg-[var(--hover-pink-darker)] dark:hover:!text-white]  hover:!text-white" onClick={!warned ? handleWarning : handleInsultGen}>
          { waiting && (sanitize ? corporateMini : deathStarMini) } Generate...
        </Button>
        { !!insult && <InsultCard insult={insult} sanitize={sanitize} setSanitize={setSanitize} /> }
      </div>
      <AlertModal showing={showing} setShowing={setShowing} setWarned={setWarned} sanitize={sanitize} setSanitize={setSanitize} setWaiting={setWaiting} />
    </>
  );
}

export default InsultViewer;
