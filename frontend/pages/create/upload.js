import { getSession } from "next-auth/react";

export default function Upload({ data }) {
  return (
    <div className="flex items-center justify-center h-screen">{data}</div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/account/register",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: "pain",
      session,
    },
  };
}
