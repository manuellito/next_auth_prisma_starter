"use server";

import { db } from "@/lib/db";

export const getUserByEmail = async (email) => {
  return await db.user.findUnique({
    where: {
      email,
    },
  });
};

export const getUserByUsername = async (username) => {
  return await db.user.findUnique({
    where: {
      username,
    },
  });
};

export const getUserById = async (id) => {
  try {
  const user = await db.user.findUnique({
    where: {
      id,
    },
  });

  return user;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const currentRole = async () => {
  const session = await auth();

  return session?.user?.role;
};