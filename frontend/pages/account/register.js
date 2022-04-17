import axios from "axios";

export default function Register() {
//   const getData = async (event) => {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const name = event.target.name.value;
//     axios.post("http://localhost:4000/account/create", {
//       name: name,
//       email: email,
      
//     });
//   };

  return (
    <div className="relative h-screen my-auto">
      <h1 className="p-2 font-sans text-5xl font-light text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-light-pink">
        Register
      </h1>
      <form
        className="flex flex-col items-center justify-center px-16 m-8"
        
      >
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
          id="name"
          name="name"
          type="text"
          autoComplete="off"
          className="p-3 m-2 transition-all border-black bg-white/30 text-deep-blue rounded-xl hover:bg-white/40 focus:bg-white focus:w-2/5"
          required
          placeholder="Name"
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
          className="w-1/5 p-3 m-2 transition-all border-black bg-light-pink/80 text-deep-blue rounded-xl hover:bg-light-pink/100"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
