"use client";

import { AuthForm } from "@/components/auth-form";

import { signInShcema } from "@/lib/validations";
import { signInWithCredentials } from "@/lib/actions/auth";

export default function SignIn() {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInShcema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={signInWithCredentials}
    />
  );
}
