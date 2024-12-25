"use client";

import { Suggestion } from "@/types";

import { List } from "flowbite-react";
import { Button } from "flowbite-react";
import { useCallback, useState } from "react";
import { Label, Textarea } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@awesome.me/kit-361830ecc8/icons/duotone/light";


const addNew = <FontAwesomeIcon icon={faCirclePlus} fontSize={"2rem"} className="" />;

const SuggestionRow: React.FC<{ suggestion: Suggestion; onChange: (id: number, name: string, value: string) => void }> = ({
  suggestion,
  onChange,
}) => {
  return (
    <List.Item className="flex w-full gap-8 mb-4">
      <div className="basis-1/2">
        <div className="mb-2 block">
          <Label htmlFor={`mattText-${suggestion.id}`} value="What matt wrote:" className="text-[var(--form-invalid)] font-medium" />
        </div>
        <Textarea id={`mattText-${suggestion.id}`} className="w-[98%]  ml-auto mr-auto" />
      </div>

      <div className="basis-1/2">
        <div className="mb-2 block">
          <Label
            htmlFor={`userText-${suggestion.id}`}
            value="A better way to say it:"
            className="text-[var(--form-valid-muted)] font-medium"
          />
        </div>
        <Textarea id={`userText-${suggestion.id}`} className="w-[98%] ml-auto mr-auto" />
      </div>
    </List.Item>
  );
};

function SuggestionList() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([{ id: 1, mattText: "", userText: "" }]);

  const handleAddNew = useCallback(() => {
    setSuggestions((prev) => [...prev, { id: prev.length + 1, mattText: "", userText: "" }]);
  }, []);

  const handleChange = useCallback((id: number, name: string, value: string) => {
    setSuggestions((prev) => prev.map((suggestion) => (suggestion.id === id ? { ...suggestion, [name]: value } : suggestion)));
  }, []);

  return (
    <List unstyled className="mb-4">

      { suggestions.map((suggestion) => ( <SuggestionRow key={suggestion.id} suggestion={suggestion} onChange={handleChange} /> )) }

      <List.Item className="flex items-center">
        <button
          type="button"
          className="ml-auto text-[var(--p2cls)] bg-transparent hover:text-white focus:ring-inset focus:outline-none  rounded-full text-sm p-2.5 text-center inline-flex items-center dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500"
          onClick={handleAddNew}>
          {addNew}
          <span className="sr-only">add new suggestion icon</span>
        </button>
      </List.Item>
    </List>
  );
}

export default SuggestionList;
