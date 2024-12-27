"use client";


import { Alert, Button, Modal } from "flowbite-react";
import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@awesome.me/kit-361830ecc8/icons/duotone/solid";


interface AlertModalProps {
  showing:      boolean;
  sanitize:     boolean;
  setWarned:   (warned:    boolean) => void;
  setShowing:  (showing:   boolean) => void;
  setWaiting:  (waiting:   boolean) => void;
  setSanitize: (corporate: boolean) => void;
}


const warningICO = <FontAwesomeIcon icon={faBell} className="self-center mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" shake />

const AlertModal: React.FC<AlertModalProps> = ({ showing, sanitize, setWarned, setShowing, setSanitize, setWaiting }) => {

  const handleDismiss = useCallback(() => {
    setWarned(true);
    setWaiting(true);
    setShowing(false);
  }, []);

  const handleSwitchMode = useCallback(() => {
    setSanitize(true);
  }, []);

  // TODO @mfwolffe rethink or move or idk?
  useEffect(() => {
    if (!sanitize) return;

    setWarned(true);
    setShowing(false);
  }, [sanitize]);

  return (
      <Modal show={showing} size="lg" onClose={() => setShowing(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <Alert color="failure" className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              <p>{ warningICO }</p>
              This generator makes use of 
              the <a href="https://insult.mattbas.org/" target="_blank" className="text-[var(--modal-link-unvisit)] dark:text-[var(--modal-link-unvist)] hover:text-[var(--modal-link-unvisit-hover)] hover:dark:text-[var(--modal-link-unvisit-hover)]">LibInsult API</a>.
            </Alert>

            <Alert color="warning" className="mb-5 font-normal text-gray-500 dark:text-gray-400">
              It often produces insults with expletives.
              There's a "corporate" mode which will sanitize insults to keep them SFW.
            </Alert>

            <h3  className="mb-5 font-normal text-[var(--deep-red)] dark:text-[var(--deep-red)]">
              Proceed?
            </h3>

            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDismiss} className="font-bold">
                Continue
              </Button>
              <Button color="gray" onClick={handleSwitchMode}>
                Corporate Mode
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
  );
}

export default AlertModal;
