import Link from "next/link";
import { useRouter } from "next/router";

export default function Auth() {
  return (
    <div>
      <form className="px-16 py-12 mb-8 border border-black">
        <h1>Sign In</h1>
        <button type="submit"></button>
      </form>

      <h1 className="text-4xl">
        Don't have an account? Register{" "}
        <Link href="/account/register">
          <u className="duration-200 hover:text-pink-600 hover:cursor-pointer">
            here.
          </u>
        </Link>
      </h1>
    </div>
  );
}
