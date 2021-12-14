import { firestore } from "../../firebase/base";
import { addDoc, collection } from "firebase/firestore";

export const postApplication = async(
    firstName,
    lastName,
    email,
    profieciency,
    experience,
    skill,
    experienceYears,
    refereer,
    country
) => {
    const collectionRef = collection(firestore, "applicationData");
    const payload = {
        firstName,
        lastName,
        email,
        profieciency,
        experience,
        skill,
        experienceYears,
        refereer,
        country,
    };
    await addDoc(collectionRef, payload);
};