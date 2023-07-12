/** @type {import('@remix-run/dev').AppConfig} */

const {
  createRoutesFromFolders,
} = require("@remix-run/v1-route-convention");

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  future: {
    
    v2_errorBoundary: true,
    v2_meta: false,
    v2_normalizeFormMethod: true,
    // makes the warning go away in v1.15+
    v2_routeConvention: true,
  },
  routes(defineRoutes) {
    // uses the v1 convention, works in v1.15+ and v2
    return createRoutesFromFolders(defineRoutes);
  },
  getLoadContext() {
    return {
      includePaths: [
        // Add the additional folders where your routes are located
        'forgot',
        
      ],
    };
  },
  ignoredRouteFiles: ["**/.*", "**/*.test.{js,jsx,ts,tsx}"],
  postcss: true,
  serverModuleFormat: "cjs",
  tailwind: true,
};
