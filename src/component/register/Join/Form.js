import { useState, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import SelectForm from "./SelectForm";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { firestore } from "../../../firebase/base";

export const Form = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profiency: "",
    experience: "",
  });
  const inputRef = useRef();

  const [pdf, setPdf] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showExit, setShowExit] = useState(false);
  const UpdateResume = (e) => {
    const file = e.target.files[0];
    const saveFile = URL.createObjectURL(file);
    console.log(saveFile);

    // to get reference for storage
    const storageRef = getStorage();
    const uploadFile = ref(storageRef, "pdf/ " + file.name);
    const resumeUpload = uploadBytesResumable(uploadFile, file);

    // to push to firebase to create a storage bucket
    resumeUpload.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(Math.floor(progress));
        setProgress(Math.floor(progress));
      },
      (err) => {
        console.log(err.message);
      },
      () => {
        getDownloadURL(resumeUpload.snapshot.ref).then((download) => {
          console.log(download);
          setPdf(file.name);
        });
      }
    );
  };
  useEffect(() => {
    document.title = "Join Our Global Talent Network | Andela";
  });
  return (
    <FormHolder>
      <InputHolder>
        <Inputt>
          <Label>First Name</Label>
          <Input type="text" required name="firstName" />
        </Inputt>
        <Inputt>
          <Label>Last Name</Label>
          <Input type="text" required name="lastName" />
        </Inputt>
      </InputHolder>
      <InputHolder>
        <Inputt>
          <Label>Email</Label>
          <Input type="email" name="email" required ref={inputRef} />
        </Inputt>
        <Inputt>
          <Label>Country</Label>
          <SelectForm />
        </Inputt>
      </InputHolder>
      <InputHolder>
        <Inputt>
          <Label>English Profiecicy</Label>
          <Select name="proficiency">
            <option value="Select...">Select...</option>
            <option value="Native">Native</option>
            <option value="Advanced C1/C2">Advanced C1/C2</option>
            <option value="Intermediate B1/B2">Intermediate B1/B2</option>
            <option value="Beginner A1/12">Beginner A1/12</option>
          </Select>
        </Inputt>
        <Inputt>
          <Label>Years of Working experience</Label>
          <Select name="experience">
            <option value="Select...">Select...</option>
            <option value="Associate (0-3 yrs professional experience)">
              Associate (0-3 yrs professional experience)
            </option>
            <option value="Mid-level (3-8 yrs professional experience)">
              Mid-level (3-8 yrs professional experience)
            </option>
            <option value="Senior (8-12 yrs professional experience)">
              Senior (8-12 yrs professional experience)
            </option>
            <option value="Principal (12+ yrs professional experience)">
              Principal (12+ yrs professional experience)
            </option>
          </Select>
        </Inputt>
      </InputHolder>{" "}
      <InputHolder>
        <Inputt>
          <Label>Primary SKill</Label>
          <Select name="skill">
            <option value="Select...">Select...</option>
            <option value=".NET">.NET</option>
            <option value="[cross platform] React Native">[cross platform] React Native</option>
            <option value="[JavaScript] Angular">[JavaScript] Angular</option>
            <option value="[JavaScript] React">[JavaScript] React</option>
            <option value="[JavaScript] Vue">[JavaScript] Vue</option>

            <option value="Android">Android</option>
          </Select>
        </Inputt>
        <Inputt>
          <Label>Years of Experience with Primary skill</Label>
          <Select name="experienceYears">
            <option value="Select...">Select...</option>
            <option value="<1 year"> 1 year </option>
            <option value="1-2 years">1-2 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="6-10 years">6-10 years</option>
            <option value=" >10 years">10 years</option>
          </Select>
        </Inputt>
      </InputHolder>
      <InputHolder>
        <Inputt>
          <Label style={{ marginBottom: "20px" }}>Resume</Label>
          <LabelHelper htmlFor="pdf">Drag files here or click to add file</LabelHelper>
          <Input
            id="pdf"
            type="file"
            required
            name="firstName"
            placeholder="resume"
            accept="application/pdf"
            style={{ display: "none" }}
            onChange={UpdateResume}
          />
          {progress > 0 && (
            <ResumeName>
              {pdf}
              <div>
                <span style={{ padding: "3px" }}>{progress >= 99.9 ? "completed" : progress}</span>
                <span style={{ cursor: "pointer" }}>x</span>
              </div>
            </ResumeName>
          )}
        </Inputt>
        <Inputt>
          <Label>Last Name</Label>
          <Input type="text" required name="lastName" />
        </Inputt>
      </InputHolder>
    </FormHolder>
  );
};

const ResumeName = styled.div`
  width: 280px;
  height: 20px;
  background: #eeeeee;
  margin: 20px auto;
  border-radius: 2px;
  padding: 5px 20px;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LabelHelper = styled.label`
  border: 1px solid lightgray;
  width: 100px;
  margin: 50px 0;
  padding: 10px 67px;
  border-radius: 5px;
  cursor: pointer;
  font-style: italic;
  font-size: 13px;
  opacity: 0.3;
`;
const Select = styled.select`
  width: 320px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  outline: none;
  padding: 5px 10px;
  background: white;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("joinlogo.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: 15px;
`;
const Inputt = styled.div`
  margin: 0 15px;
`;
const Input = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 5px;
  outline: none;
  padding: 5px 10px;

  &:required {
    color: red;
  }
`;

const InputHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Label = styled.div`
  font-size: 13px;
  opacity: 0.6;
  margin: 10px 0;
`;
const FormHolder = styled.div``;
