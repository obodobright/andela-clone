import { useState, useEffect } from "react";
import styled from "styled-components";
import SelectForm from "./SelectForm";
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { Link } from "react-router-dom";
import { postApplication } from "../../hooks/PostApplication";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  // All state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profieciency, setProfieciency] = useState("");
  const [experience, setExperience] = useState("");
  const [skill, setSkill] = useState("");
  const [experienceYear, setExperienceYear] = useState("");
  const [refereer, setRefereer] = useState("");
  const [country, setCountry] = useState("");
  const [err, setErr] = useState(null);
  const [pdf, setPdf] = useState("");
  const [progress, setProgress] = useState(0);
  const [showExit, setShowExit] = useState(true);
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const enabled =
    firstName.length > 0 &&
    lastName.length > 0 &&
    email.length > 0 &&
    profieciency.length > 0 &&
    experience.length > 0 &&
    skill.length > 0 &&
    pdf.length > 0 &&
    refereer.length > 0;

  // navigate to application success
  const navigate = useNavigate();

  // cancel resume upload
  const handleExit = () => {
    setShowExit(false);
  };
  const handleChange = (arg) => {
    setTerms(!arg);
    setPrivacy(!arg);
  };

  // handle submit application
  const handleSubmit = () => {
    const success = postApplication(
      firstName,
      lastName,
      email,
      profieciency,
      experience,
      skill,
      experienceYear,
      refereer,
      country
    );

    if (success) {
      navigate("/join-andela/success");
    }

    console.log("submit");
  };

  useEffect(() => {
    if (!enabled) {
      console.log("err");
    }
  }, []);

  // get resume target value and post to firebase storage buckect
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
        setShowExit(true);
      },
      (err) => {
        console.log(err.message);
        setPdf();
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
          <Input
            type="text"
            required
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Inputt>
        <Inputt>
          <Label>Last Name</Label>
          <Input
            type="text"
            required
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Inputt>
      </InputHolder>
      <InputHolder>
        <Inputt>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Inputt>
        <Inputt>
          <Label>Country</Label>
          <SelectForm values={country} name="country" change={(e) => setCountry(e.target.value)} />
        </Inputt>
      </InputHolder>
      <InputHolder>
        <Inputt>
          <Label>English Profieciency</Label>
          <Select
            name="proficiency"
            value={profieciency}
            onChange={(e) => setProfieciency(e.target.value)}
          >
            <option value="Select...">Select...</option>
            <option value="Native">Native</option>
            <option value="Advanced C1/C2">Advanced C1/C2</option>
            <option value="Intermediate B1/B2">Intermediate B1/B2</option>
            <option value="Beginner A1/12">Beginner A1/12</option>
          </Select>
        </Inputt>
        <Inputt>
          <Label>Years of Working experience</Label>
          <Select
            name="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
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
          <Select name="skill" value={skill} onChange={(e) => setSkill(e.target.value)}>
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
          <Select
            name="experienceYears"
            value={experienceYear}
            onChange={(e) => setExperienceYear(e.target.value)}
          >
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

          {showExit && progress > 0 && (
            <ResumeName>
              {pdf}
              <div>
                <span style={{ padding: "3px" }}>{progress >= 99.9 ? "completed" : progress}</span>
                <span style={{ cursor: "pointer" }} onClick={handleExit}>
                  x
                </span>
              </div>
            </ResumeName>
          )}
        </Inputt>
        <Inputt>
          <Label>Referred By (First & Last)</Label>
          <Input
            type="text"
            required
            name="referrer"
            value={refereer}
            onChange={(e) => setRefereer(e.target.value)}
          />
        </Inputt>
      </InputHolder>
      <CheckHolder>
        <div>
          <input type="checkbox" value={terms} onChange={() => setTerms(!terms)} />
          <label htmlFor="Terms">
            I agree to Andela's <Link to="/">Terms and Conditions</Link>{" "}
          </label>
        </div>
        <div>
          <input type="checkbox" value={privacy} onChange={() => setPrivacy(!privacy)} />
          <label>
            I understand that Andela will process my information in accordance with their{" "}
            <Link to="/">Privacy Policy</Link>. I may withdraw my consent through unsubscribe links
            at any time.
          </label>
        </div>
      </CheckHolder>
      <Button onClick={handleSubmit} disabled={!enabled}>
        Submit
      </Button>
    </FormHolder>
  );
};

const Button = styled.button`
  width: 200px;
  height: 40px;
  background: blue;
  margin-bottom: 20px;
  margin-left: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: 0;
  font-size: 16px;
`;
const CheckHolder = styled.div`
  margin: 25px 20px;

  label {
    margin: 0 20px;
    font-size: 15px;
    word-wrap: break-word;
  }
  div {
    margin: 10px 0;
    max-width: 650px;
    display: flex;
  }
`;
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
    color: black;
  }
`;

const InputHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Label = styled.div`
  font-size: 13px;
  opacity: 0.6;
  margin: 10px 0;
`;
const FormHolder = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
