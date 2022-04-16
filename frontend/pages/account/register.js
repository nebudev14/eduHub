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
    <div>
      <h1 className="text-4xl text-pink-600">Register</h1>
      <form
        className="flex flex-col items-center justify-center px-16 py-12 mb-8 border border-black"
        onSubmit={getData}
      >
        <input
          id="email"
          name="email"
          type="text"
          autoComplete="off"
          className="p-3 border border-b-0 border-black textBox rounded-t-3xl"
          required
          placeholder="Email"
        />
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="off"
          className="p-3 border border-black textBox rounded-b-3xl"
          required
          placeholder="Name"
        />
        <button
          type="submit"
          className="px-2 py-2 mt-4 duration-200 border border-black rounded-2xl hover:scale-110"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
