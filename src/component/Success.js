import { useEffect } from "react";

export const SuccessPage = () => {
  useEffect(() => {
    document.title = "Thanks for your Application";
  }, []);
  return <div>Success</div>;
};
