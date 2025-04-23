import { Input } from "../Input";
import { useState } from "react";
import { memo, useMemo } from "react";
import { useCallback } from "react";
import { Select } from "../Select";
import TextArea from "../Textarea";

import "./Form.css";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [textArea, setTextArea] = useState("");
  const [gpa, setGpa] = useState(0);
  console.log(name);

  return (
    <form action="">
      <div className="heading">
        <Input
          type="text"
          labelName="Name"
          placeHolder="Your Name"
          setState={setName}
        />
        <Input
          type="text"
          labelName="Email"
          placeHolder="Your email"
          setState={setEmail}
        />
      </div>
      <TextArea
        labelName="Biographical Statement"
        placeHolder="A bit about you"
        setState={setTextArea}
        type="textarea"
      />
      <div className="Main">
        <Select />

        <Input type="number" labelName="Gpa" placeHolder="" setState={setGpa} />
      </div>
      <div className="Hobbies">
        <Input value="Paddling" type="checkbox" labelName="Hobbies" />
        <Input value="Surfing" type="checkbox" />
        <Input value="Running" type="checkbox" />
        <Input value="Biking" type="checkbox" />
      </div>
      <div className="Hobbies">
        <Input value="Physics" type="radio" labelName="Major" />
        <Input value="Math" type="radio" />
        <Input value="Chemisty" type="radio" />
        <Input value="Computer Science" type="radio" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
