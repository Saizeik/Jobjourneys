import type {  LoaderFunction } from "@remix-run/node";
import{json} from  "@remix-run/node";
import { createPasswordResetToken } from "~/models/user.server";
import { requireUserId } from "~/session.server";
import { prisma } from "~/db.server";
import{ PasswordReset, User,Password} from "@prisma/client";
import ResetPasswordForm from "../ResetPasswordForm";



export const loader: LoaderFunction = async ({ request, params }) => {
    const userId = await requireUserId(request);

  
  const queryParams = new URLSearchParams(request.url.split('?')[1]);
  const id = parseInt(queryParams.get('id') || '', 10);



  // Check if the token is valid and not expired
  async function getPasswordResetById(id: number): Promise<PasswordReset | null> {
    const passwordReset = await prisma.passwordReset.findUnique({
      where: { id:id },
    });
  
    return passwordReset ?? null; // Ensure to return null if passwordReset is undefined
  }

  const passwordReset = await getPasswordResetById(id);
  
  if (passwordReset) {
    console.log("Token:", passwordReset.token);
    console.log("User ID:", passwordReset.userId);
    // Access other properties as needed
  } else {
    console.log("No password reset found for the specified ID.");
  }

 
  const newToken = await createPasswordResetToken(userId);

  return json({ token: newToken });
};

export default function PasswordReset() {
    return (  <ResetPasswordForm />)
  }