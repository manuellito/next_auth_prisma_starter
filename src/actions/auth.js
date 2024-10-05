"use server";

import { signIn } from "@/auth";

export const loginMagicLink = async (formData) => {
  console.log("formData", formData);
  await signIn("resend", formData);
}