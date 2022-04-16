export default function Register() {
  return (
    <div>
      <h1 className="text-4xl text-pink-600">Register</h1>
      <form className="flex flex-col items-center justify-center px-16 py-12 mb-8 border border-black">
        <input id="user" name="user" type="text" autoComplete="off" className="border border-b-0 border-black textBox" required />
        <input id="password" name="password" type="text" autoComplete="off" className="border border-black textBox" required />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
