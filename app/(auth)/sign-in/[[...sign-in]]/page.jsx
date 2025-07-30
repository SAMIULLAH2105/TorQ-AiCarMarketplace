import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return <SignIn />;
};

export default SignInPage;

/* Here we are using optional one.
Catch-all	docs/[...slug]/	/docs/a/b/c
Optional Catch-all	docs/[[...slug]]/	/docs, /docs/x/y
 */
