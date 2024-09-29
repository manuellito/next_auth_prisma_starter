"use server";

import { LoginSchema, RegisterSchema } from "@/schemas/auth";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { getUserByEmail, getUserByUsername } from "@/lib/user";


export const register = async (values) => {

  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    
    return { error: "Invalid fields" };
  }

  const { username, firstname, lastname, email, password, confirmPassword } = validatedFields.data;

  if(password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }

  const existingUserEmail = await getUserByEmail(email);
  if (existingUserEmail) {
    return { error: "Email already exists" };
  }

  const existingUsername = await getUserByUsername(username);

  if (existingUsername) {
    return { error: "Username already exists" };
  } 

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      username,
      firstname,
      lastname,
      email,
      password: hashedPassword,      
    }
  });

  return { success: "User created!" };

};

export const login = async (values) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields.data;
  
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  } catch (error) {
    if(error instanceof AuthError){
      switch(error.type){
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
}