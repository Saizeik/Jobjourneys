import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import {
  createPasswordResetToken,
  createUser,
  getUserByEmail,
  getUserById,
} from "~/models/user.server";
import { getUserId, createUserSession } from "~/session.server";
import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { safeRedirect, validateEmail } from "~/utils";
import type { Password, User, PasswordReset } from "@prisma/client";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};

interface ActionData {
  errors: {
    email?: string;
    password?: string;
    id?: string;
  };
}

export const action: ActionFunction = async ({ request }) => {
  const queryParams = new URLSearchParams(request.url.split("?")[1]);
  const id = parseInt(queryParams.get("id") || "", 10);
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const token = queryParams.get("token");

  if (!token) {
    // Token is missing, handle the error
    return redirect("/error");
  }

  const passwordReset = await createPasswordResetToken(token);

  if (!passwordReset || passwordReset.expiresAt) {
    // Invalid token or expired token, handle the error
    return redirect("/error");
  }

  const user = await getUserById(passwordReset.userId);

  if (!user) {
    // User not found, handle the error
    return redirect("/error");
  }

  if (!user) {
    // Invalid token, handle the error
    return redirect("/error");
  }

  if (!validateEmail(email)) {
    return json<ActionData>(
      { errors: { email: "Email is invalid" } },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json<ActionData>(
      { errors: { password: "Password is required" } },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return json<ActionData>(
      { errors: { password: "Password is too short" } },
      { status: 400 }
    );
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return json<ActionData>(
      { errors: { email: "A user already exists with this email" } },
      { status: 400 }
    );
  }

  return json({ user });
};

export default function ResetPasswordForm() {
  const actionData = useActionData();

  if (actionData?.success) {
    return (
      <p>
        Password reset successful. You can now log in with your new password.
      </p>
    );
  }

  return (
    <Form method="post">
      <input type="hidden" name="token" value={actionData?.token} />

      <label htmlFor="password">New Password</label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autoComplete="new-password"
      />

      {actionData?.error && <p>{actionData.error}</p>}

      <button type="submit">Reset Password</button>
    </Form>
  );
}
