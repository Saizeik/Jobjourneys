import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { getJobAppNoteListItems } from "~/models/jobapp.server";

type LoaderData = {
  jobAppNoteListItems: Awaited<ReturnType<typeof getJobAppNoteListItems>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const jobAppNoteListItems = await getJobAppNoteListItems({ userId });
  return json<LoaderData>({ jobAppNoteListItems });
};

export default function NotesPage() {
  const data = useLoaderData() as LoaderData;
  const user = useUser();

  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex flex-col items-center justify-between bg-teal-400  p-4 text-white md:flex-row">
        <h1 className="mb-2 text-3xl font-bold">
          <Link to=".">Job Application Notes</Link>
        </h1>
        <p className="ml-4 hidden md:block">{user.email}</p>
        <div className="flex flex-col md:flex-row">
          <button
            type="submit"
            className="hover:bg-custom-newColor active:bg-custom-newColor m-2 rounded bg-slate-600 px-4 py-2 text-white sm:hidden md:mt-2"
          >
            <Link
              to="/posts/user"
              className="text-md text-white-600 font-medium"
            >
              Dashboard
            </Link>
          </button>
          <button
            type="submit"
            className="hover:bg-custom-newColor active:bg-custom-newColor m-2 rounded bg-slate-600 px-4 py-2 text-white sm:hidden"
          >
            <Link to="/notes" className="text-md text-white-600 font-medium ">
              Notes
            </Link>
          </button>

          <button
            type="submit"
            className="hover:bg-custom-newColor active:bg-custom-newColor m-2 rounded bg-slate-600 px-4 py-2 text-white sm:hidden md:mt-2"
          >
            <Link to="/posts" className="text-md text-white-600 font-medium">
              Job Posts
            </Link>
          </button>
          <Form action="/logout" method="post">
            <button
              type="submit"
              className="hover:bg-custom-newColor active:bg-custom-newColor m-2 rounded bg-slate-600 px-4 py-2 font-medium text-white"
            >
              Logout
            </button>
          </Form>
        </div>
      </header>

      <main className="flex h-full bg-white">
        <div className="h-full w-80 border-r bg-gray-50">
          <Link
            to="new"
            className="text-custom-newColor block p-4 text-xl font-bold"
          >
            + New Job Note
          </Link>

          <hr />

          {data.jobAppNoteListItems.length === 0 ? (
            <p className="p-4">No notes yet</p>
          ) : (
            <ol>
              {data.jobAppNoteListItems.map((note) => (
                <li key={note.id}>
                  <NavLink
                    className={({ isActive }) =>
                      `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`
                    }
                    to={note.id}
                  >
                    📝 {note.title}
                  </NavLink>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
