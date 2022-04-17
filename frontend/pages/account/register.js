import axios from "axios";

export default function Register() {
  const getData = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    axios.post("http://localhost:4000/account/create", {
      name: name,
      email: email,
    });
    
  };

  return (
    <div className="relative">
      <h1 className="text-5xl font-light font-sans text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-light-pink p-2 text-center">Register</h1>
      <form
        className="flex flex-col items-center justify-center px-16 m-8"
        onSubmit={getData}
      >
        <input
          id="email"
          name="email"
          type="text"
          autoComplete="off"
          className="bg-white/30 text-deep-blue p-3 border-black rounded-xl m-2 hover:bg-white/40 focus:bg-white focus:w-2/5 transition-all"
          required
          placeholder="Email"
        />
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="off"
          className="bg-white/30 text-deep-blue p-3 border-black rounded-xl m-2 hover:bg-white/40 focus:bg-white focus:w-2/5 transition-all" 
          required
          placeholder="Name"
        />
        <button
          type="submit"
          className="w-1/5 bg-light-pink/80 text-deep-blue p-3 border-black rounded-xl m-2 hover:bg-light-pink/100 transition-all"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
