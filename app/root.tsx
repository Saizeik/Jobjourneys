import { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData, } from "@remix-run/react";

import Layout from "./layout";
import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getUser } from "./session.server";
import { getEnv } from "./env.server";
import { useTransition, useEffect } from "react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Job Journey",
  viewport: "width=device-width,initial-scale=1",
});

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
  ENV: ReturnType<typeof getEnv>;
};

export const loader: LoaderFunction = async ({ request }) => {
  // Declare and assign the ENV variable before its usage
  const ENV = getEnv();
  console.log(ENV);
  const user = await getUser(request);

  return json<LoaderData>({
    user,
    ENV,
  });
};

export default function App() {
  // Fetch the loader data
  const data = useLoaderData<LoaderData>();
  const { user, ENV } = data;

  return (
    // Complete HTML structure with <html> tag
    <html lang="en" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
          crossOrigin=""
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <script
          src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
          integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
          crossOrigin=""
        ></script>

        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD-UIt1wYQzhcy_QUXVfWv0swsHXjNUGsw&libraries=places&callback=initMap"></script>
        <Meta />
        <Links />
      </head>

      <body className="h-full">
        <Layout>
          <Outlet />
        </Layout>

        <ScrollRestoration />
        <Scripts />

        <LiveReload />
      </body>
    </html>
  );
}