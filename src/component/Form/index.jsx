import { Input } from "../Input";
import { useState } from "react";
import { memo, useMemo } from "react";
import { useCallback } from "react";
import { Select } from "../Select";
import TextArea from "../Textarea";

import "./Form.css";
import { Checkbox } from "../Checkbox";
import { Radio } from "../Radio";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [gpa, setGpa] = useState(0);
  const [level, setLevel] = useState("");
  const [major, setMajor] = useState("");
  const [hobbie, setHobbies] = useState("");

  const hobbies = ["Paddling", "Surfing", "Running", "Biking"];
  const majors = ["Physics", "Math", "Chemistry", "Computer Science"];
  const levels = ["FreshMan", "Junior", "Middle Junior", "Senior"];
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleTextArea = (e) => {
    setTextArea(e.target.value);
  };

  const handleGpa = (e) => {
    setGpa(e.target.value);
  };
  const handleLevel = (e) => {
    setLevel(e.target.value);
  };
  const handleMajor = (e) => {
    setMajor(e.target.value);
  };
  const handleHobbies = (e) => {
    setMajor(e.target.value);
  };
  console.log(name);

  return (
    <form action="">
      <div className="heading">
        <Input
          value={name}
          type="text"
          labelName="Name"
          placeHolder="Your Name"
          name="name"
          id="name"
          onChange={handleName}
        />
        <Input
          value={email}
          type="text"
          labelName="Email"
          placeHolder="Your email"
          name="surname"
          id="surname"
          onChange={handleEmail}
        />
      </div>
      <TextArea
        value={textArea}
        labelName="Biographical Statement"
        placeHolder="A bit about you"
        onChange={handleTextArea}
        type="text"
        id="textArea"
        name="textArea"
      />
      <div className="Main">
        <Select
          labelName="Level"
          options={levels}
          value={level}
          onChange={handleLevel}
        />

        <Input
          value={gpa}
          type="number"
          labelName="Gpa"
          placeHolder=""
          name="gpa"
          id="gpa"
          onChange={handleGpa}
        />
      </div>
      <Checkbox array={hobbies} labelName="Hobbies" onChange={handleHobbies} />
      <Radio
        array={majors}
        labelName="Majors"
        name="majors"
        onChange={handleMajor}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
