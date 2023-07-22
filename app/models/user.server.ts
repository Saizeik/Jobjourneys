import type { Password, User, PasswordReset } from "@prisma/client";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";
import { json, redirect } from "@remix-run/node";
import { prisma } from "~/db.server";

export type { User, PasswordReset } from "@prisma/client";

export async function getUserById(id: User["id"]) {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: User["email"]) {
  return prisma.user.findUnique({ where: { email } });
}

export async function createUser(email: User["email"], password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });
}

export async function createPasswordResetToken(userId: User["id"]) {
  const token = uuidv4();
  const EXPIRATION_TIME = 3600000; // 1 hour

  return prisma.passwordReset.create({
    data: {
      token,
      userId,
      expiresAt: new Date(Date.now() + EXPIRATION_TIME),
    },
  });
}

export async function deletePasswordResetByToken(token: string) {
  return prisma.passwordReset.delete({ where: { token } });
}

export async function updatePassword(email: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  // Find the user by email and update their password
  return prisma.user.update({
    where: { email },
    data: {
      password: {
        update: {
          hash: hashedPassword,
        },
      },
    },
  });
}

export const sendResetPasswordEmail = async (
  user: User,
  token: PasswordReset
) => {
  try {
    // Send reset password email using Nodemailer
    const transporter = nodemailer.createTransport({
      // Set up your email transport configuration
      // Example: using SMTP transport with Gmail
      service: "Gmail",
      auth: {
        user: "nswalker44@gmail.com",
        pass: "tpjqkqdlgkgxupeb",
      },
    });

    const mailOptions = {
      from: "Admin@Jobjourneys.com",
      to: user.email || "",
      subject: "Password Reset",
      html: `
        <p>Hi ${user.email || ""},</p>
        <p>You have requested to reset your password for your Job Journey Account. Please click the link below to reset:</p>
        <a href="https://jobjourneys.vercel.app/password-reset?token=${encodeURIComponent(
          token.token
        )}">Reset Password</a>
        <p>If you didn't request this, you can safely ignore this email.</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Do not include the following lines in the function
    // These will cause infinite recursion and errors
    // await sendResetPasswordEmail(user, token);
    // return redirect("/PasswordResetSuccess");
  } catch (error) {
    // Handle any errors that occur during email sending
    console.error("Error sending reset password email:", error);
    // You might want to return an error response here if needed
    // return json<ActionData>({ errors: { email: "Failed to send reset password email" } }, { status: 500 });
    throw new Error("Failed to send reset password email");
  }
};

export async function deleteUserByEmail(email: User["email"]) {
  return prisma.user.delete({ where: { email } });
}

export async function verifyLogin(
  email: User["email"],
  password: Password["hash"]
) {
  const userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: true,
    },
  });

  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }

  const isValid = await bcrypt.compare(
    password,
    userWithPassword.password.hash
  );

  if (!isValid) {
    return null;
  }

  const { password: _password, ...userWithoutPassword } = userWithPassword;

  return userWithoutPassword;
}
