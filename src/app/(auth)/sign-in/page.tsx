"use client";

import { AuthForm } from "@/components/auth-form";

import { signInShcema } from "@/lib/validations";

export default function SignIn() {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInShcema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={() => {}}
    />
  );
}
