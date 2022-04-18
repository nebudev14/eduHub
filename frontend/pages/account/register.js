import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../components/contexts/AuthContext";

import Error from "../../components/Error";

export default function Register() {
  const { signup } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.pw.value;

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
    } catch {
      setError("Failed to create acconut");
    }
    setLoading(false);
  };

  return (
    <div className="relative h-screen my-auto">
      <h1 className="p-2 font-sans text-5xl font-light text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-light-pink">
        Register
      </h1>
      <form
        className="flex flex-col items-center justify-center px-16 m-8"
        onSubmit={getData}
      >
        {error !== '' ? <Error text={'An error has occurred'} /> : null}
        <input
          id="email"
          name="email"
          type="text"
          autoComplete="off"
          className="p-3 m-2 transition-all border-black bg-white/30 text-deep-blue rounded-xl hover:bg-white/40 focus:bg-white focus:w-2/5"
          required
          placeholder="Email"
        />
        <input
          id="pw"
          name="pw"
          type="text"
          autoComplete="off"
          className="p-3 m-2 transition-all border-black bg-white/30 text-deep-blue rounded-xl hover:bg-white/40 focus:bg-white focus:w-2/5"
          required
          placeholder="Password"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-1/5 p-3 m-2 transition-all border-black bg-light-pink/80 text-deep-blue rounded-xl hover:bg-light-pink/100"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
