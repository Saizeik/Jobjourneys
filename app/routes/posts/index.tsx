import { Form, Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getPostListings } from "~/models/post.server";
import { useOptionalAdminUser, useOptionalUser } from "~/utils";
import { requireUserId } from "~/session.server";
import {useState} from "react";
import { useUser } from "~/utils";
import { motion } from "framer-motion";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPostListings>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const posts = await getPostListings({ userId: userId });
  return json<LoaderData>({ posts });
};

const variants = {
  open: { opacity: 1, y: "30%"},
  closed: { opacity: 1, x: "0%"},
}

export default function PostsRoute() {
  const { posts } = useLoaderData() as LoaderData;
  const adminUser = useOptionalAdminUser();
  const user = useOptionalUser();
  const username = useUser();
  const [isOpen, setIsOpen] = useState(false)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  return (
    <main>
      <div className="flex h-full min-h-screen flex-col">
        <header className="flex flex-col md:flex-row items-center justify-between bg-teal-400 p-4 text-white">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">
            <Link to=".">Posts</Link>
          </h1>
          <button>
            {" "}
            {user ? (
              <Link
                to="/notes"
                className="flex items-center justify-center rounded-md border border-transparent mb-4 md:mb-0 bg-white  px-4 py-3 text-base font-medium text-black shadow-sm hover:bg-black hover:text-white sm:px-8"
              >
                View Notes
              </Link>
            ) : null}
          </button>
          <button>
            {" "}
            {user ? (
              <Link
                to="/jobappnotes"
                className="flex items-center justify-center rounded-md border border-transparent mb-4 md:mb-0 bg-white  px-4 py-3 text-base font-medium text-black shadow-sm hover:bg-black hover:text-white sm:px-8"
              >
                Job App Notes
              </Link>
            ) : null}
          </button>
          <Form action="/logout" method="post">
            <button
              type="submit"
              className="m-2 rounded bg-white py-2 px-4 text-black hover:bg-black active:bg-black hover:text-white font-medium"
            >
              Logout
            </button>
          </Form>
          <p className=" hidden md:block ml-4 text-white font-medium">{username.email}</p>
        </header>

        <div className="flex flex-col items-center rounded w-full max-w-screen-3xl bg-gradient-to-r from-indigo-900 to-white  
        px-4 py-6 my-14">
        <motion.ul
    variants={container}
    initial="hidden"
    animate="show"
  ><motion.li variants={item} >
          {adminUser ? (
            <div className="flex-col-2 flex items-center mt-4 flex space-y-1 text-center max-w-3xl w-full px-4 py-6 bg-white rounded-lg shadow-lg">
              <a className="flex items-center rounded-md hover:opacity-50  bg-gray-700 px-2 py-2 text-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <Link to="admin" className="m-2 text-sm font-medium ">
                  {" "}
                  Admin{" "}
                </Link>
              </a>
            </div>
          ) : null}
          </motion.li>
          <motion.li variants={item} >
          <div className="flex-col-2 flex items-center mt-4 flex space-y-1 max-w-3xl w-full px-4 py-6 bg-white rounded-lg shadow-lg">
            <a className="flex items-center rounded-md hover:opacity-50 max-w-3xl w-full bg-gray-700 px-2 py-2 text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              {user ? (
                <Link to="user" className="m-2 text-sm  text-center font-medium ">
                  {" "}
                  {`${user?.email} Dashboard `}{" "}
                </Link>
              ) : null}
            </a>
          </div>
          </motion.li>
          <motion.li>   <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    ><div className="flex-col-2 flex items-center mt-4 flex space-y-1 text-center max-w-3xl w-full px-4 py-6 bg-white rounded-lg shadow-lg" onClick={() => setIsOpen(isOpen => !isOpen)}>
     <div className="flex-col-2 hover:cursor-pointer  mt-4 flex space-y-1" >
  
            <details className="group" >
 
              <summary className="flex items-center rounded-md  bg-gray-700 px-2 py-2 text-white"  >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                <span className="ml-3 text-sm font-medium">Posts</span>
       
                <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ol className="m-2 list-decimal">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <div className="flex items-center">
                    <Link
                      to={post.slug}
                      prefetch="intent"
                      className="text-black-600 font-bold underline"
                    >
                      {post.title} 
                    </Link>
                    
                    : <em className="bg-gray-100 font-bold text-center rounded-sm ml-1 p-1 "
  style={{
    color:
      post.appStatus === "Applied"
        ? "blue"
        : post.appStatus === "Interviewing"
        ? "orange"
        : post.appStatus === "Hired"
        ? "green"
        : post.appStatus === "Not-selected"
        ? "red"
        : "",
  }}>{post.appStatus}</em></div>
                  </li>
                ))}
              </ol>
              
            </details>
            
          </div>
          
          </div>
          </motion.nav>
          </motion.li>
          <motion.li>
          <div className="flex-col-2 flex items-center mt-4 flex space-y-1 max-w-3xl w-full px-4 py-6 bg-white rounded-lg shadow-lg">
          <details className="map">
              <summary className="flex items-center rounded-md hover:opacity-50  bg-gray-700 px-2 py-2 text-center text-white">


          <svg height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 293.334 293.334" >
<g>
	<g>
		<path d="M146.667,0C94.903,0,52.946,41.957,52.946,93.721c0,22.322,7.849,42.789,20.891,58.878
			c4.204,5.178,11.237,13.331,14.903,18.906c21.109,32.069,48.19,78.643,56.082,116.864c1.354,6.527,2.986,6.641,4.743,0.212
			c5.629-20.609,20.228-65.639,50.377-112.757c3.595-5.619,10.884-13.483,15.409-18.379c6.554-7.098,12.009-15.224,16.154-24.084
			c5.651-12.086,8.882-25.466,8.882-39.629C240.387,41.962,198.43,0,146.667,0z M146.667,144.358
			c-28.892,0-52.313-23.421-52.313-52.313c0-28.887,23.421-52.307,52.313-52.307s52.313,23.421,52.313,52.307
			C198.98,120.938,175.559,144.358,146.667,144.358z"/>
		<circle cx="146.667" cy="90.196" r="21.756"/>
	</g>
</g>
</svg>
            
                <Link to="/map" className="ml-2 text-center text-sm font-medium ">
                  MapJourney
                </Link>
              </summary>
            </details>
          
          </div>
          </motion.li>
          </motion.ul>
        </div>
      </div>
    </main>
  );
}
