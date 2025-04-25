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
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [gpaError, setGpaError] = useState(false);

  const hobbies = ["Paddling", "Surfing", "Running", "Biking"];
  const majors = ["Physics", "Math", "Chemistry", "Computer Science"];
  const levels = ["FreshMan", "Junior", "Middle Junior", "Senior"];
  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
    if (value.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!value.endsWith("@gmail.com")) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleTextArea = (e) => {
    setTextArea(e.target.value);
  };

  const handleGpa = (e) => {
    const value = e.target.value;
    setGpa(value);
    if (value < 85) {
      setGpaError(true);
    } else {
      setGpaError(false);
    }
  };
  const handleLevel = (e) => {
    setLevel(e.target.value);
  };
  const handleMajor = (e) => {
    setMajor(e.target.value);
  };
  const handleHobbies = (e) => {
    const value = e.target.value;
    setHobbies((prev) => {
      if (prev.includes(value)) {
        return prev.filter((hobbie) => hobbie !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted with the following data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Biographical Statement:", textArea);
    console.log("GPA:", gpa);
    console.log("Level:", level);
    console.log("Major:", major);
    console.log("Hobbies:", hobbie);
  };

  return (
    <form onSubmit={handleSubmit}>
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
        {nameError && (
          <p className="error-message">Name 3 herfden az ola bilməz!!!</p>
        )}
        <Input
          value={email}
          type="text"
          labelName="Email"
          placeHolder="Your email"
          name="surname"
          id="surname"
          onChange={handleEmail}
        />
        {emailError && <p className="errorMessage">Duzgun daxil edilmeyib</p>}
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
        {gpaError && <p className="errorMessage">GPA 85-dən az ola bilməz!</p>}
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
