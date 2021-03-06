import Illustration from "../Illustration";
import image from "../../assets/images/signup.svg";
import SignupForm from "./SignupForm";

const Singup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={image} />
        <SignupForm />
      </div>
    </>
  );
};

export default Singup;
