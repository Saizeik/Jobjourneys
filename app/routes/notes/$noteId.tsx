import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useCatch, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { motion } from "framer-motion";
import type { Note } from "~/models/note.server";
import { deleteNote } from "~/models/note.server";
import { getNote } from "~/models/note.server";
import { requireUserId } from "~/session.server";

type LoaderData = {
  note: Note;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  invariant(params.noteId, "noteId not found");

  const note = await getNote({ userId, id: params.noteId });
  if (!note) {
    throw new Response("Not Found", { status: 404 });
  }
  return json<LoaderData>({ note });
};

export const action: ActionFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  invariant(params.noteId, "noteId not found");

  await deleteNote({ userId, id: params.noteId });

  return redirect("/notes");
};

export default function NoteDetailsPage() {
  const data = useLoaderData() as unknown as LoaderData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div>
      <motion.ul variants={container} initial="hidden" animate="show">
        <div className="bg-custom-newColor mx-0 my-4  w-full  max-w-sm rounded-lg border border-gray-200 px-4 py-2 shadow shadow-lg transition duration-300 ease-in-out hover:translate-x-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
          <motion.li variants={item}>
            <h2 className="mb-2 block py-6 text-xl  font-bold text-white  ">
              {data.note.title}
            </h2>
          </motion.li>
          <motion.li variants={item}>
            <p className="mb-2 block py-6  text-lg font-bold text-white">
              {data.note.body}
            </p>
          </motion.li>
        </div>
        <hr className="my-4" />
        <Form method="post">
          <button
            type="submit"
            className="hover:bg-custom-newColor focus:bg-custom-newColor  rounded bg-teal-400 px-4 py-2 font-bold text-white"
          >
            Delete
          </button>
        </Form>
      </motion.ul>
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
