"use client";

import { Card } from 'flowbite-react'
import { Button } from "flowbite-react";
import { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSpaceStationMoonConstruction } from "@awesome.me/kit-361830ecc8/icons/duotone/solid";

const deathStarMini     = <FontAwesomeIcon icon={faSpaceStationMoonConstruction} fade className="self-center mr-2" />


interface InsulterProps {
  insult: string;
}

interface InsultViewerProps {
  insult: string;
  setInsult: (insult: string) => void;
}

interface InsultCardProps {
  insult: string;
}


const Insulter: React.FC<InsulterProps> = ({ insult }) => {
  return (
    <p className="text-4xl  text-rose-600 text-center">
      { insult }
    </p>
  )
}

const InsultCard: React.FC<InsultCardProps> = ({ insult }) => {
  return (
      <Card className='!w-1/2 ml-auto mr-auto mt-6 mb-4 bg-stone-300 shadow-stone-400 drop-shadow-xl' >
          { <Insulter insult={insult} />}
      </Card>
  );
}

const InsultViewer: React.FC<InsultViewerProps> = ({ insult, setInsult }) => {
  const [waiting, setWaiting] = useState(false);

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
    <div className='h-fit'>
      <Button className="ml-auto mr-auto flex items-center justify-center !text-[var(--background)] !bg-[var(--hover-pink-light)] dark:hover:!bg-[var(--hover-pink-darker)] hover:!bg-[var(--hover-pink-darker)] dark:hover:!text-white]  hover:!text-white" onClick={handleInsultGen}>{ waiting && deathStarMini } Generate...</Button>
      { !!insult && <InsultCard insult={insult} /> }
    </div>
  );
}

export default InsultViewer;
