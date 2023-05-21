import { Form, Link, Outlet, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { adminGetPostListings } from "~/models/post.server";
import { requireAdminUser } from "~/session.server";
import { useUser } from "~/utils";

type LoaderData = {
  posts: Awaited<ReturnType<typeof adminGetPostListings>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  await requireAdminUser(request);
  return json<LoaderData>({ posts: await adminGetPostListings() });
};

export default function AdminRoute() {
  const username = useUser();
  const { posts } = useLoaderData() as LoaderData;
  
  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex flex-col md:flex-row items-center justify-between bg-teal-400 p-4 text-white">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">
          <Link to=".">Admin</Link>
        </h1>
        <button
          type="submit"
          className="flex items-center justify-center rounded-md border border-transparent mb-4 md:mb-0 bg-white  px-4 py-3 text-base font-medium text-black shadow-sm hover:bg-black hover:text-white sm:px-8"
        >
          <Link to="/posts">
            Blog Posts
          </Link>
        </button>
        <Form action="/logout" method="post">
          <button
            type="submit"
            className="m-2 rounded bg-white py-2 px-4 text-black hover:bg-black active:bg-black hover:text-white font-medium"
          >
            Logout
          </button>
        </Form>
        <p className="font-medium">{username.email}</p>
      </header>

      <div className=" my-10 mx-auto max-w-4xl">
        <div className="flex max-w-lg flex-col space-y-6 font-bold overflow-hidden rounded-lg bg-custom-newColor p-6 text-white shadow-md">
          <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
            User Posts
          </h1>
          <div className="grid grid-cols-3 gap-6">
        
              <div className="text-white font-medium hover:text-blue-100">
                User Posts
                <div className="flex items-start">
                  <ol>
                    {posts.map((post) => (
                      
                      <li key={post.slug}>
                        <div className="py-4 text-white">
                          <Link
                            to={post.slug}
                            className="text-white underline hover:text-custom"
                          >
                            {post.title}
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className=" ml-12 text-white font-medium hover:text-blue-100">
                User Id
                <div className="flex items-center">
                  {" "}
                  <ol>
                    {posts.map((post) => (
                      <li key={post.slug}>
                        <div className="py-4 text-blue-300">
                          <Link
                            to={post.slug}
                            className="text-white font-medium underline hover:text-custom"
                          >
                            {post.userId}
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
               
              </div>
              <main className="col-span-4 md:col-span-3">
              <Outlet />
            </main>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="text-red-500">
      Oh no, something went wrong!
      <pre>{error.message}</pre>
    </div>
  );
}
