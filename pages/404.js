import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      //router.go(-1)
      router.push("/");
    }, 4000);
  }, []);

  return (
    <>
      <Head>
        <title>Ninja | Error</title>
      </Head>
      <div className="not-found">
        <h1>Oooops....</h1>
        <h2>This page cannot be found.</h2>
        Go back to the{" "}
        <Link href="/" legacyBehavior>
          Homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound;
