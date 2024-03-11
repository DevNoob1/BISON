import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { cn } from "./utils/cn";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { BackgroundBeams } from "./components/ui/background-beams";
// import { motion } from "framer-motion";

const welcomeText = "Welcome to Virtual Palette.ai";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform login logic here
    navigate("/palette");
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex  bg-white text-black justify-center items-center min-h-screen bg-gray-100">
      <div className="dark:bg-black max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white relative z-10">
        <h2 className="font-bold text-xl text-white text-neutral-800">
          <TextGenerateEffect words={welcomeText} />
        </h2>
        <p className="text-neutral-600 text-white text-sm max-w-sm mt-2">
          {isSignUp ? "Sign up for an account" : "Login to your account"}
        </p>

        {isSignUp ? (
          <SignupForm />
        ) : (
          <LoginForm
            email={email}
            setEmail={setEmail}
            handleSubmit={handleSubmit}
          />
        )}

        <div className="bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-8 h-[1px] w-full" />

        <button
          className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={toggleMode}
        >
          {isSignUp ? "Login" : "Sign Up"}
        </button>
      </div>
      <BackgroundBeams />
    </div>
  );
};

const LoginForm: React.FC<{
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}> = ({ email, setEmail, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="my-8">
      <div className="mb-4">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-gray-100 text-gray-900"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

const SignupForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form className="my-8 " onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row  space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="firstname">First name</Label>
          <Input
            id="firstname"
            placeholder="Tyler"
            type="text"
            className="bg-black text-gray-900"
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="lastname">Last name</Label>
          <Input
            id="lastname"
            placeholder="Durden"
            type="text"
            className="bg-white text-gray-900"
          />
        </LabelInputContainer>
      </div>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="projectmayhem@fc.com"
          type="email"
          className="bg-white text-gray-900"
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="••••••••"
          type="password"
          className="bg-white text-gray-900"
        />
      </LabelInputContainer>

      <button
        className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Sign up &rarr;
        <BottomGradient />
      </button>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-8 h-[1px] w-full" />

      <div className="flex flex-col space-y-4">
        <button
          className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50"
          type="submit"
        >
          <IconBrandGithub className="h-6 w-6 text-neutral-800" />
          <span className="text-neutral-700 text-sm">GitHub</span>
          <BottomGradient />
        </button>
        <button
          className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50"
          type="submit"
        >
          <IconBrandGoogle className="h-6 w-6 text-neutral-800" />
          <span className="text-neutral-700 text-sm">Google</span>
          <BottomGradient />
        </button>
      </div>
    </form>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Login;