"use client";

import { AuthForm } from "@/components/auth-form";

import { signUpSchema } from "@/lib/validations";
import { signUp } from "@/lib/actions/auth";

export default function SignUp() {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        fullName: "",
        email: "",
        universityId: 0,
        universityCard: "",
        password: "",
      }}
      onSubmit={signUp}
    />
  );
}
