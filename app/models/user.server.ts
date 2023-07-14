import type { Password, User, PasswordReset } from "@prisma/client";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';

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

export async function updatePassword(email: User["email"], password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.update({
    where: { email},
    data: {
      email,
      password: {
        update: {
          hash: hashedPassword,
        },
      },
    },
    
  });
}


// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  // Configure your email service provider here
  // ...
});

// Handler for sending the password reset email
async function sendPasswordResetEmail(email: User["email"], token: PasswordReset["token"]) {
  const PASSWORD_RESET_URL = '/passwordReset';
  const emailContent = `
    <p>Dear User,</p>
    <p>Click the following link to reset your password:</p>
    <a href="${PASSWORD_RESET_URL}?token=${token}">Reset Password</a>
    <p>Regards,</p>
    <p>Your Application</p>
  `;

  // Send the email
  await transporter.sendMail({
    from: 'admin@jobjourney',
    to: email,
    subject: 'Password Reset',
    html: emailContent,
  });
}

// Example usage
export async function handlePasswordResetRequest(email: User["email"], token: PasswordReset["token"]) {
  try {
    // Generate the email and send it
    await sendPasswordResetEmail(email, token);
    console.log('Password reset email sent successfully');
  } catch (error) {
    console.error('Error sending password reset email:', error);
  }
}

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
