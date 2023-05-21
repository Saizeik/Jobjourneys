import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useCatch, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { motion } from "framer-motion";
import type { JobAppNote as ServerJobAppNote, PreviousPosition as ServerPreviousPosition } from "~/models/jobapp.server";
import { deleteNote } from "~/models/jobapp.server";
import { getJobAppNote } from "~/models/jobapp.server";
import { requireUserId } from "~/session.server";

type LoaderJobAppData = {
  jobappnote: ServerJobAppNote;
  previousPositions: ServerPreviousPosition[];
};
export interface JobAppNote {
  id: string;
  userId: string;
  title: string;
  yourName: string;
  phoneNumber: string;
  DesiredSalary: string;
  referenceOne: string;
  referenceTwo: string;
  referenceThree: string;
  previousPositions: ServerPreviousPosition[];
  body: string;
  createdAt: string;
  updatedAt: string;
}


export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  invariant(params.jobappnoteId, "noteId not found");

  const jobappnote = await getJobAppNote({
    userId,
    previousPositions: [],
    id: params.jobappnoteId,
  });
  if (!jobappnote) {
    throw new Response("Not Found", { status: 404 });
  }
  const previousPositions: ServerPreviousPosition[] = jobappnote.previousPositions
  return json<LoaderJobAppData>({ jobappnote, previousPositions });
};

export const action: ActionFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  invariant(params.jobappnoteId, "jobappnoteId not found");

  await deleteNote({ userId, id: params.jobappnoteId });

  return redirect("/jobappnotes");
};

export default function NoteDetailsPage() {
  const data = useLoaderData() as unknown as LoaderJobAppData;

  const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

  return (
   
    <div>
       <motion.ul
    variants={container}
    initial="hidden"
    animate="show"
  ><div className="w-full max-w-sm bg-gradient-to-br from-teal-400 to black shadow-lg border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-4 py-2 mx-0 mt-2 mb-4 hover:shadow-xl transition duration-300 ease-in-out hover:translate-x-1 ">
    <motion.li variants={item} >
     <h3 className="block text-gray-700 font-bold mb-2 text-2xl font-bold">{data.jobappnote.title}</h3></motion.li>
      <motion.li variants={item} ><p className=" block text-gray-700 font-bold mb-2 py-6 text-lg">Name: {" "} {data.jobappnote.yourName}</p></motion.li> 
      <motion.li variants={item} ><p className="block text-gray-700 font-bold mb-2 py-6 text-lg">Mobile Number: {" "} {data.jobappnote.phoneNumber}</p></motion.li>
      <motion.li variants={item} ><p className="block text-gray-700 font-bold mb-2 py-6 text-lg">Desired Salary: {" "} {data.jobappnote.DesiredSalary}</p></motion.li>
      <motion.li variants={item} ><p className="block text-gray-700 font-bold mb-2 py-6 text-lg">Reference 1: {" "}{data.jobappnote.referenceOne}</p></motion.li>
      <motion.li variants={item} ><p className="block text-gray-700 font-bold mb-2 py-6 text-lg">Reference 2: {" "}{data.jobappnote.referenceTwo}</p></motion.li>
      <motion.li variants={item} ><p className="block text-gray-700 font-bold mb-2 py-6 text-lg">Reference 3: {" "} {data.jobappnote.referenceThree}</p></motion.li>
      </div>
      </motion.ul>
     
      <div className="space-y-4">
     
          
      {data.previousPositions.map((position, index) => (
    
  <motion.ul
  variants={container}
  initial="hidden"
  animate="show"
>
<div className="w-full max-w-sm bg-custom-newColor  shadow-lg  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-4 py-2 mx-0 my-4 hover:shadow-xl transition duration-300 ease-in-out hover:translate-x-1">
  <div key={index}>
  <motion.li variants={item} ><h4 className="block font-bold text-white text-xl  mb-2 py-6  ">{position.positionTitle}</h4></motion.li>
  <motion.li variants={item} > <p className="block font-bold text-white  text-lg mb-2 py-6">Duties: {" "} {position.duties}</p></motion.li>
  <motion.li variants={item} ><p className="block font-bold text-white text-lg  mb-2 py-6">Employer Name: {" "} {position.employerName}</p></motion.li>
  <motion.li variants={item} ><p className="block font-bold text-white text-lg mb-2 py-6">Employer Address: {" "} {position.address}</p></motion.li>
  <motion.li variants={item} > <p className="block font-bold text-white  text-lg  mb-2 py-6">Start Date: {" "} {position.employmentStartDate}</p></motion.li>
  <motion.li variants={item} > <p className="block font-bold text-white  text-lg mb-2 py-6">End Date: {" "} {position.employmentEndDate}</p></motion.li>
  </div>
  </div>
  </motion.ul>
))}
     
    </div>
    <div className="w-full max-w-sm bg-gradient-to-br from-teal-400 to black shadow-lg rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-4 py-2 mx-0 my-4 hover:shadow-xl transition duration-300 ease-in-out  hover:translate-x-1">
      <p className=" block text-gray-700 font-bold text-lg mb-2 py-6">Additional Notes: {data.jobappnote.body}</p>
      </div>
      <hr className="my-4" />
      <Form method="post">
        <button
          type="submit"
          className="rounded bg-custom-newColor  py-2 px-4 text-white font-bold hover:bg-custom-spaceBlack focus:bg-custom-spaceBlack"
        >
          Delete
        </button>
      </Form>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <div>Note not found</div>;
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
