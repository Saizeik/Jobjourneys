var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});

// app/db.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), prisma = global.__db__, prisma.$connect();

// app/entry.server.tsx
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");

// app/env.server.ts
var import_tiny_invariant = __toESM(require("tiny-invariant"));
function getEnv() {
  return (0, import_tiny_invariant.default)(process.env.ADMIN_EMAIL, "ADMIN_EMAIL should be defined"), {
    ADMIN_EMAIL: process.env.ADMIN_EMAIL
  };
}

// app/entry.server.tsx
var import_node = require("@remix-run/node"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
global.ENV = getEnv();
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 23,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new import_node.Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/footer.tsx
var import_react2 = require("react"), import_react3 = require("@remix-run/react");

// home.svg
var home_default = "/build/_assets/home-52PQEH4J.svg";

// jobPosts.svg
var jobPosts_default = "/build/_assets/jobPosts-GPQRVWE4.svg";

// map.svg
var map_default = "/build/_assets/map-UVILLTQO.svg";

// notes.svg
var notes_default = "/build/_assets/notes-XZP2576Q.svg";

// jobNotes.svg
var jobNotes_default = "/build/_assets/jobNotes-N4RM7D4W.svg";

// app/footer.tsx
var import_react_router_dom = require("react-router-dom"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), AppFooter = () => {
  let footerStyles = {
    color: "#fff",
    height: "4rem",
    // Adjust this value based on the desired footer height
    position: "sticky",
    bottom: 0
  }, [isHovered, setIsHovered] = (0, import_react2.useState)(!1), [dashboardIsHovered, setDashboardIsHovered] = (0, import_react2.useState)(!1), [jobPostsIsHovered, setJobPostsIsHovered] = (0, import_react2.useState)(!1), [mapIsHovered, setMapIsHovered] = (0, import_react2.useState)(!1), [notesIsHovered, setNotesIsHovered] = (0, import_react2.useState)(!1), [jobNotesIsHovered, setJobNotesIsHovered] = (0, import_react2.useState)(!1), handleDashboardIconHover = (hover) => {
    setDashboardIsHovered(hover);
  }, handlejobPostsIconHover = (hover) => {
    setJobPostsIsHovered(hover);
  }, handleMapIconHover = (hover) => {
    setMapIsHovered(hover);
  }, handleNotesIconHover = (hover) => {
    setNotesIsHovered(hover);
  }, handlejobNotesIconHover = (hover) => {
    setJobNotesIsHovered(hover);
  }, location = (0, import_react_router_dom.useLocation)(), currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return location.pathname === "/login" || location.pathname === "/join" || location.pathname === "/login/new" || location.pathname === "/" ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "footer",
    {
      style: footerStyles,
      className: "bg-teal-400 py-4 text-white",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "mx-auto flex max-w-4xl justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.Link,
            {
              to: "/posts/user",
              className: "relative flex  w-12 flex-col items-center px-4 text-gray-300 hover:text-white ",
              onMouseEnter: () => handleDashboardIconHover(!0),
              onMouseLeave: () => handleDashboardIconHover(!1),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "img",
                  {
                    src: home_default,
                    alt: "home icon",
                    className: `mb-1 h-4 w-4 ${isHovered ? "-translate-y-2 transform" : " "}`,
                    style: { transition: "transform 0.4s ease-in-out" }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/footer.tsx",
                    lineNumber: 68,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "span",
                  {
                    className: `text-xs ${dashboardIsHovered ? "block" : "hidden"} `,
                    children: "Dashboard"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/footer.tsx",
                    lineNumber: 76,
                    columnNumber: 13
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/footer.tsx",
              lineNumber: 62,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.Link,
            {
              to: "/posts",
              className: "relative flex  w-12 flex-col items-center px-4 text-gray-300 hover:text-white",
              onMouseEnter: () => handlejobPostsIconHover(!0),
              onMouseLeave: () => handlejobPostsIconHover(!1),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "img",
                  {
                    src: jobPosts_default,
                    alt: "job posts icon",
                    className: `mb-1 h-4 w-4 ${isHovered ? "-translate-y-2 transform" : " "}`,
                    style: { transition: "transform 0.4s ease-in-out" }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/footer.tsx",
                    lineNumber: 88,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "span",
                  {
                    className: `text-xs ${jobPostsIsHovered ? "block " : "hidden"} `,
                    children: "Job Posts"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/footer.tsx",
                    lineNumber: 96,
                    columnNumber: 13
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/footer.tsx",
              lineNumber: 82,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.Link,
            {
              to: "/map",
              className: "relative flex   w-12 flex-col items-center px-4 text-gray-300 hover:text-white",
              onMouseEnter: () => handleMapIconHover(!0),
              onMouseLeave: () => handleMapIconHover(!1),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "img",
                  {
                    src: map_default,
                    alt: "map icon",
                    className: `mb-1 h-4 w-4 ${isHovered ? "-translate-y-2 transform" : " "}`,
                    style: { transition: "transform 0.4s ease-in-out" }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/footer.tsx",
                    lineNumber: 108,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: `text-xs ${mapIsHovered ? "block " : "hidden"} `, children: [
                  " ",
                  "Map Journey"
                ] }, void 0, !0, {
                  fileName: "app/footer.tsx",
                  lineNumber: 116,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/footer.tsx",
              lineNumber: 102,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.Link,
            {
              to: "/notes",
              className: " relative flex  w-12 flex-col items-center px-4 text-gray-300 hover:text-white",
              onMouseEnter: () => handleNotesIconHover(!0),
              onMouseLeave: () => handleNotesIconHover(!1),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "img",
                  {
                    src: notes_default,
                    alt: "notes icon",
                    className: `mb-1 h-4 w-4 ${isHovered ? "-translate-y-2 transform" : " "}`
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/footer.tsx",
                    lineNumber: 127,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: `text-xs ${notesIsHovered ? "block" : "hidden"} `, children: "Notes" }, void 0, !1, {
                  fileName: "app/footer.tsx",
                  lineNumber: 134,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/footer.tsx",
              lineNumber: 121,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.Link,
            {
              to: "/jobappnotes",
              className: "relative flex  w-12 flex-col items-center px-4 text-gray-300 hover:text-white",
              onMouseEnter: () => handlejobNotesIconHover(!0),
              onMouseLeave: () => handlejobNotesIconHover(!1),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "img",
                  {
                    src: jobNotes_default,
                    alt: " job notes icon",
                    className: `mb-1 h-4 w-4 ${isHovered ? "-translate-y-2 transform" : " "}`,
                    style: { transition: "transform 0.4s ease-in-out" }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/footer.tsx",
                    lineNumber: 144,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "span",
                  {
                    className: `text-xs ${jobNotesIsHovered ? "block " : "hidden"} `,
                    children: "Job Notes"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/footer.tsx",
                    lineNumber: 152,
                    columnNumber: 13
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/footer.tsx",
              lineNumber: 138,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/footer.tsx",
          lineNumber: 61,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-teal-400 py-4 text-white mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: " relative flex  w-12 flex-col items-center px-4 text-gray-300 hover:text-white", children: [
            "\xA9 ",
            currentYear,
            " Nathan Walker Productions"
          ] }, void 0, !0, {
            fileName: "app/footer.tsx",
            lineNumber: 160,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "relative flex  w-12 flex-col items-center px-4 text-gray-300 hover:text-white", children: "All rights reserved." }, void 0, !1, {
            fileName: "app/footer.tsx",
            lineNumber: 163,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/footer.tsx",
          lineNumber: 159,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/footer.tsx",
      lineNumber: 57,
      columnNumber: 7
    },
    this
  );
}, footer_default = AppFooter;

// app/layout.tsx
var import_react_router_dom2 = require("react-router-dom"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Layout = ({ children }) => {
  let location = (0, import_react_router_dom2.useLocation)();
  return location.pathname === "/login" || location.pathname === "/join" || location.pathname === "/forgot" || location.pathname === "/" ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(footer_default, {}, void 0, !1, {
      fileName: "app/layout.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layout.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-grow", children }, void 0, !1, {
      fileName: "app/layout.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(footer_default, {}, void 0, !1, {
      fileName: "app/layout.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layout.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}, layout_default = Layout;

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-H3YFBZJP.css";

// app/session.server.ts
var import_node2 = require("@remix-run/node"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs")), import_uuid = require("uuid"), import_nodemailer = __toESM(require("nodemailer"));
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(email, password) {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}
async function createPasswordResetToken(userId) {
  let token = (0, import_uuid.v4)(), EXPIRATION_TIME = 36e5;
  return prisma.passwordReset.create({
    data: {
      token,
      userId,
      expiresAt: new Date(Date.now() + EXPIRATION_TIME)
    }
  });
}
async function updatePassword(email, password) {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10);
  return prisma.user.update({
    where: { email },
    data: {
      password: {
        update: {
          hash: hashedPassword
        }
      }
    }
  });
}
var sendResetPasswordEmail = async (user, token) => {
  try {
    let transporter = import_nodemailer.default.createTransport({
      // Set up your email transport configuration
      // Example: using SMTP transport with Gmail
      service: "Gmail",
      auth: {
        user: "nswalker44@gmail.com",
        pass: "tpjqkqdlgkgxupeb"
      }
    }), mailOptions = {
      from: "Admin@Jobjourneys.com",
      to: user.email || "",
      subject: "Password Reset",
      html: `
        <p>Hi ${user.email || ""},</p>
        <p>You have requested to reset your password for your Job Journey Account. Please click the link below to reset:</p>
        <a href="https://jobjourneys.vercel.app/password-reset?token=${encodeURIComponent(
        token.token
      )}">Reset Password</a>
        <p>If you didn't request this, you can safely ignore this email.</p>
      `
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw console.error("Error sending reset password email:", error), new Error("Failed to send reset password email");
  }
};
async function verifyLogin(email, password) {
  let userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: !0
    }
  });
  if (!userWithPassword || !userWithPassword.password || !await import_bcryptjs.default.compare(
    password,
    userWithPassword.password.hash
  ))
    return null;
  let { password: _password, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
}

// app/session.server.ts
(0, import_tiny_invariant2.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var MINUTE = 60 * 1e3, TENMINUTES = MINUTE * 10, DAY = 24 * 60 * MINUTE, sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  let session = await getSession(request), userId = session.get(USER_SESSION_KEY), expirationTimestamp = session.get("expirationTimestamp");
  return !expirationTimestamp || Date.now() < expirationTimestamp ? userId : void 0;
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId) {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function requireUser(request) {
  let userId = await requireUserId(request), user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireAdminUser(request) {
  let user = await requireUser(request);
  if (user.email !== ENV.ADMIN_EMAIL)
    throw await logout(request);
  return user;
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  session.set(USER_SESSION_KEY, userId);
  let expirationTime = remember ? 2 * DAY : TENMINUTES, expirationTimestamp = Date.now() + expirationTime;
  return session.flash("expirationTimestamp", expirationTimestamp), setTimeout(async () => {
    await logout(request);
  }, expirationTime), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 2 * DAY / 1e3 : void 0
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/root.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }], meta = () => ({
  charset: "utf-8",
  title: "Job Journey",
  viewport: "width=device-width,initial-scale=1"
}), loader = async ({ request }) => {
  let ENV2 = getEnv();
  console.log(ENV2);
  let user = await getUser(request);
  return (0, import_node3.json)({
    user,
    ENV: ENV2
  });
};
function App() {
  let data = (0, import_react4.useLoaderData)(), { user, ENV: ENV2 } = data;
  return (
    // Complete HTML structure with <html> tag
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "link",
          {
            rel: "stylesheet",
            href: "https://unpkg.com/leaflet@1.9.3/dist/leaflet.css",
            integrity: "sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=",
            crossOrigin: ""
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 47,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "link",
          {
            href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
            rel: "stylesheet"
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 54,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "script",
          {
            src: "https://unpkg.com/leaflet@1.9.3/dist/leaflet.js",
            integrity: "sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=",
            crossOrigin: ""
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 59,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("script", { src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD-UIt1wYQzhcy_QUXVfWv0swsHXjNUGsw&libraries=places&callback=initMap" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 65,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 66,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Links, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 67,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { className: "h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(layout_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 71,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 75,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 76,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 78,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 45,
      columnNumber: 5
    }, this)
  );
}

// app/routes/PasswordResetSuccess/index.tsx
var PasswordResetSuccess_exports = {};
__export(PasswordResetSuccess_exports, {
  action: () => action,
  default: () => PasswordResetSuccessPage,
  loader: () => loader2
});
var import_react_hot_toast = require("react-hot-toast"), import_react5 = require("@remix-run/react"), import_node4 = require("@remix-run/node");

// jobSearch.jpg
var jobSearch_default = "/build/_assets/jobSearch-EXLKC3ND.jpg";

// login1.jpg
var login1_default = "/build/_assets/login1-LMXMZ463.jpg";

// login2.jpg
var login2_default = "/build/_assets/login2-WVNRBX7G.jpg";

// login3.jpg
var login3_default = "/build/_assets/login3-VNCPUAYD.jpg";

// login4.jpg
var login4_default = "/build/_assets/login4-GVJD3RXF.jpg";

// login5.jpg
var login5_default = "/build/_assets/login5-AAS26LA7.jpg";

// login6.jpg
var login6_default = "/build/_assets/login6-4VK7IKTQ.jpg";

// login7.jpg
var login7_default = "/build/_assets/login7-WNZF2GHO.jpg";

// login8.jpg
var login8_default = "/build/_assets/login8-NLIIQILV.jpg";

// login9.jpg
var login9_default = "/build/_assets/login9-OCYWDFKW.jpg";

// login10.jpg
var login10_default = "/build/_assets/login10-2F6QELBF.jpg";

// login11.jpg
var login11_default = "/build/_assets/login11-MO4SEM7E.jpg";

// login12.jpg
var login12_default = "/build/_assets/login12-PYOVJ7CH.jpg";

// login13.jpg
var login13_default = "/build/_assets/login13-LUKZ2A6O.jpg";

// login14.jpg
var login14_default = "/build/_assets/login14-6MF7QX3W.jpg";

// login15.jpg
var login15_default = "/build/_assets/login15-E2S6PXBR.jpg";

// login16.jpg
var login16_default = "/build/_assets/login16-QG2AKDMY.jpg";

// login17.jpg
var login17_default = "/build/_assets/login17-KGMBXJGU.jpg";

// login18.jpg
var login18_default = "/build/_assets/login18-BATQGLQH.jpg";

// login19.jpg
var login19_default = "/build/_assets/login19-P6Z243RT.jpg";

// login20.jpg
var login20_default = "/build/_assets/login20-ZMCNH6NK.jpg";

// login21.jpg
var login21_default = "/build/_assets/login21-F7DQ6LO2.jpg";

// app/loginImages.ts
var loginImages = [
  { src: jobSearch_default, alt: "jobSearch" },
  { src: login1_default, alt: "login 1" },
  { src: login2_default, alt: "login 2" },
  { src: login3_default, alt: "login 3" },
  { src: login4_default, alt: "login 4" },
  { src: login5_default, alt: "login 5" },
  { src: login6_default, alt: "login 6" },
  { src: login7_default, alt: "login 7" },
  { src: login8_default, alt: "login 8" },
  { src: login9_default, alt: "login 9" },
  { src: login10_default, alt: "login 10" },
  { src: login11_default, alt: "login 11" },
  { src: login12_default, alt: "login 12" },
  { src: login13_default, alt: "login 13" },
  { src: login14_default, alt: "login 14" },
  { src: login15_default, alt: "login 15" },
  { src: login16_default, alt: "login 16" },
  { src: login17_default, alt: "login 17" },
  { src: login18_default, alt: "login 18" },
  { src: login19_default, alt: "login 19" },
  { src: login20_default, alt: "login 20" },
  { src: login21_default, alt: "login 21" }
];

// app/routes/PasswordResetSuccess/index.tsx
var import_react6 = require("react"), import_framer_motion = require("framer-motion");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => (0, import_node4.json)({}), action = async ({ request }) => {
  let email = (await request.formData()).get("email");
  await (async (email2) => {
  })((email == null ? void 0 : email.toString()) || "");
};
function getRandomImage() {
  let randomIndex = Math.floor(Math.random() * loginImages.length);
  return loginImages[randomIndex];
}
function PasswordResetSuccessPage() {
  let [searchParams] = (0, import_react5.useSearchParams)(), [imageLoading, setImageLoading] = (0, import_react6.useState)(!0), imageLoaded = () => {
    setImageLoading(!1);
  }, [randomImage, setRandomImage] = (0, import_react6.useState)();
  (0, import_react6.useEffect)(() => {
    let image = getRandomImage();
    setRandomImage(image);
  }, []);
  let notify = () => (0, import_react_hot_toast.toast)(
    "If you have an account, a password reset has been sent to your email address."
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center" }, void 0, !1, {
      fileName: "app/routes/PasswordResetSuccess/index.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { className: "relative flex min-h-screen items-center justify-center overflow-y-auto bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative sm:pb-16 sm:pt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative shadow-xl sm:overflow-hidden sm:rounded-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute inset-0", children: [
        randomImage && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_framer_motion.motion.img,
          {
            initial: { opacity: 0 },
            animate: {
              opacity: imageLoading ? 0 : 1
            },
            transition: { delay: 0, duration: 1 },
            onLoad: imageLoaded,
            src: randomImage.src,
            alt: randomImage.alt,
            className: "h-full w-full object-cover"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/PasswordResetSuccess/index.tsx",
            lineNumber: 75,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute inset-0 bg-teal-400 mix-blend-multiply" }, void 0, !1, {
          fileName: "app/routes/PasswordResetSuccess/index.tsx",
          lineNumber: 87,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/PasswordResetSuccess/index.tsx",
        lineNumber: 73,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "lg:pb-18 relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pt-32", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "mb-4 block uppercase text-white drop-shadow-md", children: "Job Journey" }, void 0, !1, {
          fileName: "app/routes/PasswordResetSuccess/index.tsx",
          lineNumber: 91,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/PasswordResetSuccess/index.tsx",
          lineNumber: 90,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_framer_motion.motion.div,
          {
            initial: { opacity: 0, y: "-2vh" },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 2 },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl my-4", children: "If an account is associated with this email, an email containing instructions to reset the password has been sent. Please check your inbox for further instructions. If you do not receive an email, it's possible that no account is currently associated with this email address." }, void 0, !1, {
              fileName: "app/routes/PasswordResetSuccess/index.tsx",
              lineNumber: 102,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/PasswordResetSuccess/index.tsx",
            lineNumber: 95,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "div",
          {
            className: "flex min-h-full flex-col justify-center",
            children: [
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_hot_toast.Toaster, {}, void 0, !1, {
                fileName: "app/routes/PasswordResetSuccess/index.tsx",
                lineNumber: 115,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                "button",
                {
                  type: "submit",
                  className: "bg-custom-newColor hover:bg-custom-spaceBlack focus:bg-custom-newColor  hover: w-full rounded px-4 py-2 font-medium text-white text-white",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                    import_react5.Link,
                    {
                      className: "text-lg font-bold text-white",
                      to: {
                        pathname: "/login",
                        search: searchParams.toString()
                      },
                      children: "Return to Login Page"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/PasswordResetSuccess/index.tsx",
                      lineNumber: 121,
                      columnNumber: 23
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/PasswordResetSuccess/index.tsx",
                  lineNumber: 117,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/PasswordResetSuccess/index.tsx",
                lineNumber: 116,
                columnNumber: 19
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/PasswordResetSuccess/index.tsx",
            lineNumber: 110,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/PasswordResetSuccess/index.tsx",
        lineNumber: 89,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/PasswordResetSuccess/index.tsx",
      lineNumber: 72,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/PasswordResetSuccess/index.tsx",
      lineNumber: 71,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/PasswordResetSuccess/index.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/PasswordResetSuccess/index.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/PasswordResetSuccess/index.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

// app/routes/password-reset/index.tsx
var password_reset_exports = {};
__export(password_reset_exports, {
  action: () => action2,
  default: () => ResetPasswordForm,
  loader: () => loader3
});
var import_node6 = require("@remix-run/node"), import_react9 = require("@remix-run/react"), React2 = __toESM(require("react")), import_react10 = require("react"), import_framer_motion2 = require("framer-motion");

// app/utils.ts
var import_react7 = require("@remix-run/react"), import_react8 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : ["/forgot", "/another-safe-route"].includes(to) || to.startsWith("/") ? to : defaultRedirect;
}
function useMatchesData(id) {
  let matchingRoutes = (0, import_react7.useMatches)(), route = (0, import_react8.useMemo)(
    () => matchingRoutes.find((route2) => route2.id === id),
    [matchingRoutes, id]
  );
  return route == null ? void 0 : route.data;
}
function isUser(user) {
  return user && typeof user == "object" && typeof user.email == "string";
}
function useOptionalUser() {
  let data = useMatchesData("root");
  if (!(!data || !isUser(data.user)))
    return data.user;
}
function useUser() {
  let maybeUser = useOptionalUser();
  if (!maybeUser)
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  return maybeUser;
}
function useOptionalAdminUser() {
  let user = useOptionalUser();
  return !user || user.email !== ENV.ADMIN_EMAIL ? null : user;
}
function validateEmail(email) {
  return typeof email == "string" && email.length > 3 && email.includes("@");
}

// app/routes/password-reset/index.tsx
var import_react_hot_toast2 = require("react-hot-toast");

// app/sessions.ts
var import_node5 = require("@remix-run/node"), { getSession: getSession2, commitSession } = (0, import_node5.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    maxAge: 60,
    path: "/",
    sameSite: "lax",
    secrets: ["secrets"],
    secure: !0
  }
});

// app/routes/password-reset/index.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => await getUserId(request) ? (0, import_node6.redirect)("/") : (0, import_node6.json)({});
function getRandomImage2() {
  let randomIndex = Math.floor(Math.random() * loginImages.length);
  return loginImages[randomIndex];
}
var action2 = async ({ request }) => {
  var _a;
  let session = await getSession2(request.headers.get("Cookie"));
  session.flash("message", "Password Reset Successfully!");
  let formData = await request.formData(), email = formData.get("email") || "";
  if (typeof email != "string")
    return (0, import_node6.json)(
      { errors: { email: "Email is required" } },
      { status: 400 }
    );
  let password = formData.get("password");
  if (typeof password != "string" || password.length === 0)
    return (0, import_node6.json)(
      { errors: { password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node6.json)(
      { errors: { password: "Password is too short" } },
      { status: 400 }
    );
  let confirmPassword = ((_a = formData.get("confirmPassword")) == null ? void 0 : _a.toString()) || "";
  if (password !== confirmPassword)
    return (0, import_node6.json)(
      { errors: { confirmPassword: "Passwords do not match" } },
      { status: 400 }
    );
  let user = await getUserByEmail(email);
  if (!user)
    return (0, import_node6.json)(
      { errors: { email: "User with this email does not exist" } },
      { status: 400 }
    );
  let passwordReset = await prisma.passwordReset.findFirst({
    where: {
      userId: user.id,
      expiresAt: {
        gte: /* @__PURE__ */ new Date()
      }
    }
  });
  if (!passwordReset)
    return (0, import_node6.json)(
      { errors: { token: "Invalid or expired token" } },
      { status: 400 }
    );
  await updatePassword(email, password), await prisma.passwordReset.delete({
    where: { id: passwordReset.id }
  });
  let redirectTo = `${safeRedirect(
    formData.get("redirectTo"),
    "/login"
  )}?success=true`;
  return (0, import_node6.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};
function ResetPasswordForm() {
  var _a, _b, _c, _d, _e, _f;
  let emailRef = React2.useRef(null), [searchParams] = (0, import_react9.useSearchParams)(), successParam = searchParams.get("success"), actionData = (0, import_react9.useActionData)(), [imageLoading, setImageLoading] = (0, import_react10.useState)(!0), passwordRef = React2.useRef(null), confirmPasswordRef = React2.useRef(null), redirectTo = searchParams.get("redirectTo") ?? void 0, [showSuccessMessage, setShowSuccessMessage] = (0, import_react10.useState)(
    successParam === "true"
  ), imageLoaded = () => {
    setImageLoading(!1);
  }, [randomImage, setRandomImage] = (0, import_react10.useState)();
  return (0, import_react10.useEffect)(() => {
    let image = getRandomImage2();
    setRandomImage(image), successParam === "true" && (setShowSuccessMessage(!0), import_react_hot_toast2.toast.success("Password reset successful!"));
  }, [successParam]), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { className: "relative flex min-h-screen items-center justify-center overflow-y-auto bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative sm:pb-16 sm:pt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative shadow-xl sm:overflow-hidden sm:rounded-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: " absolute inset-0", children: [
      randomImage && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        import_framer_motion2.motion.img,
        {
          initial: { opacity: 0 },
          animate: {
            opacity: imageLoading ? 0 : 1
          },
          transition: { delay: 0, duration: 2 },
          onLoad: imageLoaded,
          src: randomImage.src,
          alt: randomImage.alt,
          className: "h-full w-full object-cover"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/password-reset/index.tsx",
          lineNumber: 167,
          columnNumber: 19
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "absolute inset-0 bg-teal-400 mix-blend-multiply" }, void 0, !1, {
        fileName: "app/routes/password-reset/index.tsx",
        lineNumber: 179,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/password-reset/index.tsx",
      lineNumber: 165,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: " lg:pb-18 relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pt-32", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "mb-4 block uppercase text-white drop-shadow-md", children: "Job Journey" }, void 0, !1, {
        fileName: "app/routes/password-reset/index.tsx",
        lineNumber: 183,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/password-reset/index.tsx",
        lineNumber: 182,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react9.Form, { method: "post", className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "label",
              {
                htmlFor: "email",
                className: "block text-sm font-bold text-white",
                children: "Email Address"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/password-reset/index.tsx",
                lineNumber: 192,
                columnNumber: 27
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "my-2 mt-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "input",
                {
                  id: "email",
                  name: "email",
                  type: "email",
                  ref: emailRef,
                  autoComplete: "email",
                  "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
                  "aria-describedby": "email-error",
                  className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/password-reset/index.tsx",
                  lineNumber: 199,
                  columnNumber: 29
                },
                this
              ),
              ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "div",
                {
                  className: "pt-1 text-red-700",
                  id: "email-error",
                  children: actionData.errors.email
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/password-reset/index.tsx",
                  lineNumber: 212,
                  columnNumber: 31
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/password-reset/index.tsx",
              lineNumber: 198,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/password-reset/index.tsx",
            lineNumber: 191,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "label",
            {
              htmlFor: "password",
              className: "block text-sm font-bold text-white",
              children: "Password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/password-reset/index.tsx",
              lineNumber: 222,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "input",
              {
                type: "hidden",
                name: "token",
                value: actionData == null ? void 0 : actionData.token
              },
              void 0,
              !1,
              {
                fileName: "app/routes/password-reset/index.tsx",
                lineNumber: 229,
                columnNumber: 27
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "input",
              {
                id: "password",
                ref: passwordRef,
                name: "password",
                type: "password",
                autoComplete: "current-password",
                "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
                "aria-describedby": "password-error",
                className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/password-reset/index.tsx",
                lineNumber: 234,
                columnNumber: 27
              },
              this
            ),
            ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "div",
              {
                className: "pt-1 text-red-700",
                id: "password-error",
                children: actionData.errors.password
              },
              void 0,
              !1,
              {
                fileName: "app/routes/password-reset/index.tsx",
                lineNumber: 247,
                columnNumber: 29
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/password-reset/index.tsx",
            lineNumber: 228,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/password-reset/index.tsx",
          lineNumber: 190,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "label",
            {
              htmlFor: "confirmPassword",
              className: "block text-sm font-bold text-white",
              children: "Confirm Password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/password-reset/index.tsx",
              lineNumber: 258,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "input",
              {
                id: "confirmPassword",
                ref: confirmPasswordRef,
                name: "confirmPassword",
                type: "password",
                autoComplete: "current-password",
                "aria-invalid": (_e = actionData == null ? void 0 : actionData.errors) != null && _e.confirmPassword ? !0 : void 0,
                "aria-describedby": "confirmPassword-error",
                className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/password-reset/index.tsx",
                lineNumber: 265,
                columnNumber: 27
              },
              this
            ),
            ((_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.confirmPassword) && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "div",
              {
                className: "pt-1 text-red-700",
                id: "confirmPassword-error",
                children: actionData.errors.confirmPassword
              },
              void 0,
              !1,
              {
                fileName: "app/routes/password-reset/index.tsx",
                lineNumber: 280,
                columnNumber: 29
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/password-reset/index.tsx",
            lineNumber: 264,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/password-reset/index.tsx",
          lineNumber: 257,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "input",
          {
            type: "hidden",
            name: "redirectTo",
            value: redirectTo
          },
          void 0,
          !1,
          {
            fileName: "app/routes/password-reset/index.tsx",
            lineNumber: 290,
            columnNumber: 23
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "bg-custom-newColor hover:bg-custom-spaceBlack focus:bg-custom-spaceBlack   hover: w-full rounded px-4 py-2 font-medium text-white text-white",
            children: "Reset Password"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/password-reset/index.tsx",
            lineNumber: 295,
            columnNumber: 23
          },
          this
        ),
        showSuccessMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_framer_motion2.motion.div,
          {
            initial: { opacity: 0, y: "-2vh" },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "bg-green-200 p-2 text-center text-green-800",
            children: "Password reset successful!"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/password-reset/index.tsx",
            lineNumber: 302,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_hot_toast2.Toaster, { position: "top-center" }, void 0, !1, {
          fileName: "app/routes/password-reset/index.tsx",
          lineNumber: 311,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-center text-sm font-bold text-white", children: [
          "Remember your password?",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            import_react9.Link,
            {
              className: "text-lg font-bold text-white underline",
              to: "/login",
              children: "Log in"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/password-reset/index.tsx",
              lineNumber: 316,
              columnNumber: 27
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/password-reset/index.tsx",
          lineNumber: 314,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/password-reset/index.tsx",
          lineNumber: 313,
          columnNumber: 23
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/password-reset/index.tsx",
        lineNumber: 189,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/password-reset/index.tsx",
        lineNumber: 188,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/password-reset/index.tsx",
        lineNumber: 187,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/password-reset/index.tsx",
      lineNumber: 181,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/password-reset/index.tsx",
    lineNumber: 164,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/password-reset/index.tsx",
    lineNumber: 163,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/password-reset/index.tsx",
    lineNumber: 162,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/password-reset/index.tsx",
    lineNumber: 161,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/password-reset/index.tsx",
    lineNumber: 160,
    columnNumber: 5
  }, this);
}

// app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader4
});
var loader4 = async ({ request }) => {
  let host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    let url = new URL("/", `http://${host}`);
    return await Promise.all([
      prisma.user.count(),
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]), new Response("OK");
  } catch (error) {
    return console.log("healthcheck \u274C", { error }), new Response("ERROR", { status: 500 });
  }
};

// app/routes/jobappnotes.tsx
var jobappnotes_exports = {};
__export(jobappnotes_exports, {
  default: () => NotesPage,
  loader: () => loader5
});
var import_node7 = require("@remix-run/node"), import_react11 = require("@remix-run/react");

// app/models/jobapp.server.ts
function getJobAppNote({
  id,
  userId
}) {
  return prisma.jobAppNote.findFirst({
    where: { id, userId },
    include: {
      previousPositions: !0
    }
  });
}
function getJobAppNoteListItems({ userId }) {
  return prisma.jobAppNote.findMany({
    where: { userId },
    select: { id: !0, title: !0 },
    orderBy: { updatedAt: "desc" }
  });
}
async function createJobAppNote({
  title,
  body,
  yourName,
  phoneNumber,
  DesiredSalary,
  referenceOne,
  referenceTwo,
  referenceThree,
  previousPositions,
  userId
}) {
  return await prisma.jobAppNote.create({
    data: {
      title,
      body,
      yourName,
      phoneNumber,
      DesiredSalary,
      referenceOne,
      referenceTwo,
      referenceThree,
      previousPositions: {
        create: previousPositions
      },
      user: {
        connect: {
          id: userId
        }
      }
    }
  });
}
async function deleteNote({
  id
}) {
  return prisma.$transaction(async (prisma2) => {
    let jobAppNote = await prisma2.jobAppNote.findUnique({
      where: { id },
      include: { previousPositions: !0 }
    });
    if (!jobAppNote)
      throw new Error("Job application note not found");
    let deletePreviousPositions = prisma2.previousPosition.deleteMany({
      where: { id: { in: jobAppNote.previousPositions.map((position) => position.id) } }
    }), deleteJobAppNote = prisma2.jobAppNote.delete({
      where: { id }
    });
    return await Promise.all([deletePreviousPositions, deleteJobAppNote]), { count: 1 };
  });
}

// app/routes/jobappnotes.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => {
  let userId = await requireUserId(request), jobAppNoteListItems = await getJobAppNoteListItems({ userId });
  return (0, import_node7.json)({ jobAppNoteListItems });
};
function NotesPage() {
  let data = (0, import_react11.useLoaderData)(), user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("header", { className: "flex flex-col items-center justify-between bg-teal-400  p-4 text-white md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "mb-2 text-3xl font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react11.Link, { to: ".", children: "Job Application Notes" }, void 0, !1, {
        fileName: "app/routes/jobappnotes.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/jobappnotes.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "ml-4 hidden md:block", children: user.email }, void 0, !1, {
        fileName: "app/routes/jobappnotes.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "hover:bg-custom-newColor active:bg-custom-newColor m-2 rounded bg-custom-spaceBlack px-4 py-2 text-white sm:hidden md:mt-2",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_react11.Link,
              {
                to: "/posts/user",
                className: "text-md text-white-600 font-medium",
                children: "Dashboard"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/jobappnotes.tsx",
                lineNumber: 35,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/jobappnotes.tsx",
            lineNumber: 31,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "hover:bg-custom-newColor active:bg-custom-newColor m-2 rounded bg-custom-spaceBlack px-4 py-2 text-white sm:hidden md:mt-2",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_react11.Link,
              {
                to: "/map",
                className: "text-md text-white-600 font-medium",
                children: "MapJourney"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/jobappnotes.tsx",
                lineNumber: 46,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/jobappnotes.tsx",
            lineNumber: 42,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "hover:bg-custom-newColor active:bg-custom-newColor m-2 rounded bg-custom-spaceBlack px-4 py-2 text-white sm:hidden",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react11.Link, { to: "/notes", className: "text-md text-white-600 font-medium ", children: "Notes" }, void 0, !1, {
              fileName: "app/routes/jobappnotes.tsx",
              lineNumber: 57,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/jobappnotes.tsx",
            lineNumber: 53,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "hover:bg-custom-newColor active:bg-custom-newColor m-2 rounded bg-custom-spaceBlack px-4 py-2 text-white sm:hidden md:mt-2",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react11.Link, { to: "/posts", className: "text-md text-white-600 font-medium", children: "Job Posts" }, void 0, !1, {
              fileName: "app/routes/jobappnotes.tsx",
              lineNumber: 66,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/jobappnotes.tsx",
            lineNumber: 62,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react11.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "hover:bg-custom-newColor active:bg-custom-newColor m-2 rounded bg-custom-spaceBlack px-4 py-2 font-medium text-white",
            children: "Logout"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/jobappnotes.tsx",
            lineNumber: 71,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/jobappnotes.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jobappnotes.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jobappnotes.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "flex h-full bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "h-full w-80 border-r bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_react11.Link,
          {
            to: "new",
            className: "text-custom-newColor block p-4 text-xl font-bold",
            children: "+ New Job Note"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/jobappnotes.tsx",
            lineNumber: 83,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("hr", {}, void 0, !1, {
          fileName: "app/routes/jobappnotes.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        data.jobAppNoteListItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "p-4", children: "No notes yet" }, void 0, !1, {
          fileName: "app/routes/jobappnotes.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ol", { children: data.jobAppNoteListItems.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_react11.NavLink,
          {
            className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`,
            to: note.id,
            children: [
              "\u{1F4DD} ",
              note.title
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/jobappnotes.tsx",
            lineNumber: 98,
            columnNumber: 19
          },
          this
        ) }, note.id, !1, {
          fileName: "app/routes/jobappnotes.tsx",
          lineNumber: 97,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/jobappnotes.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jobappnotes.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex-1 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react11.Outlet, {}, void 0, !1, {
        fileName: "app/routes/jobappnotes.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/jobappnotes.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jobappnotes.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jobappnotes.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/cookie.ts
var cookie_exports = {};
__export(cookie_exports, {
  action: () => action3,
  actions: () => actions,
  signOut: () => signOut
});
var import_node8 = require("@remix-run/node");
function action3() {
  let cookieOptions = {
    path: "/",
    expires: new Date(Date.now() + 6e4),
    // 15 minutes expiration
    httpOnly: !0,
    secure: !0
    // Set to true if using HTTPS
  }, cookieHeaderValue = `session=value; Path=${cookieOptions.path}; Expires=${cookieOptions.expires.toUTCString()}; HttpOnly=${cookieOptions.httpOnly}; Secure=${cookieOptions.secure}`;
  return (0, import_node8.redirect)("/", {
    headers: {
      "Set-Cookie": cookieHeaderValue
    }
  });
}
function signOut() {
  let cookieOptions = {
    path: "/",
    expires: /* @__PURE__ */ new Date(0),
    // Expire immediately
    httpOnly: !0,
    secure: !0
    // Set to true if using HTTPS
  }, cookieHeaderValue = `session=; Path=${cookieOptions.path}; Expires=${cookieOptions.expires.toUTCString()}; HttpOnly=${cookieOptions.httpOnly}; Secure=${cookieOptions.secure}`;
  return (0, import_node8.redirect)("/", {
    headers: {
      "Set-Cookie": cookieHeaderValue
    }
  });
}
var actions = {
  action: action3,
  signOut
};

// app/routes/forgot.tsx
var forgot_exports = {};
__export(forgot_exports, {
  action: () => action4,
  default: () => ResetPassword
});
var import_node9 = require("@remix-run/node"), import_react12 = require("@remix-run/react"), import_react13 = __toESM(require("react"));
var import_react14 = require("react"), import_framer_motion3 = require("framer-motion"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function getRandomImage3() {
  let randomIndex = Math.floor(Math.random() * loginImages.length);
  return loginImages[randomIndex];
}
var action4 = async ({ request }) => {
  let email = (await request.formData()).get("email");
  try {
    if (!validateEmail(email))
      return (0, import_node9.json)(
        { errors: { email: "Email is invalid" } },
        { status: 400 }
      );
    let user = await getUserByEmail(email);
    if (!user)
      return (0, import_node9.json)(
        { errors: { email: "No user found with this email" } },
        { status: 400 }
      );
    let token = await createPasswordResetToken(user.id);
    return token ? (await sendResetPasswordEmail(user, token), (0, import_node9.redirect)("/PasswordResetSuccess")) : (0, import_node9.json)(
      { errors: { token: "Failed to create password reset token" } },
      { status: 500 }
    );
  } catch (error) {
    return console.error("Error sending reset password email:", error), (0, import_node9.json)(
      { errors: { email: "Failed to send reset password email" } },
      { status: 500 }
    );
  }
};
function ResetPassword() {
  var _a, _b;
  let actionData = (0, import_react12.useActionData)(), emailRef = import_react13.default.useRef(null), [imageLoading, setImageLoading] = (0, import_react14.useState)(!0), imageLoaded = () => {
    setImageLoading(!1);
  };
  (0, import_react14.useEffect)(() => {
    var _a2, _b2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email && ((_b2 = emailRef.current) == null || _b2.focus());
  }, [actionData]);
  let [randomImage, setRandomImage] = (0, import_react14.useState)();
  return (0, import_react14.useEffect)(() => {
    let image = getRandomImage3();
    setRandomImage(image);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { className: "relative flex min-h-screen items-center justify-center overflow-y-auto bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative sm:pb-16 sm:pt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative shadow-xl sm:overflow-hidden sm:rounded-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "absolute inset-0", children: [
      randomImage && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_framer_motion3.motion.img,
        {
          initial: { opacity: 0 },
          animate: {
            opacity: imageLoading ? 0 : 1
          },
          transition: { delay: 0, duration: 1 },
          onLoad: imageLoaded,
          src: randomImage.src,
          alt: randomImage.alt,
          className: "h-full w-full object-cover"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/forgot.tsx",
          lineNumber: 115,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "absolute inset-0 bg-teal-400 mix-blend-multiply" }, void 0, !1, {
        fileName: "app/routes/forgot.tsx",
        lineNumber: 127,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/forgot.tsx",
      lineNumber: 113,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "lg:pb-18 relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pt-32", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "mb-4 block uppercase text-white drop-shadow-md", children: "Job Journey" }, void 0, !1, {
        fileName: "app/routes/forgot.tsx",
        lineNumber: 131,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/forgot.tsx",
        lineNumber: 130,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react12.Form, { method: "post", className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "label",
            {
              htmlFor: "email",
              className: "block text-sm font-bold text-white",
              children: "Email Address"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/forgot.tsx",
              lineNumber: 139,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              "input",
              {
                ref: emailRef,
                id: "email",
                required: !0,
                autoFocus: !0,
                name: "email",
                type: "email",
                autoComplete: "email",
                "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
                "aria-describedby": "email-error",
                className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/forgot.tsx",
                lineNumber: 146,
                columnNumber: 25
              },
              this
            ),
            ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
              fileName: "app/routes/forgot.tsx",
              lineNumber: 161,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/forgot.tsx",
            lineNumber: 145,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/forgot.tsx",
          lineNumber: 138,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "bg-custom-newColor hover:bg-custom-spaceBlack focus:bg-custom-newColor  hover: w-full rounded px-4 py-2 font-medium text-white text-white",
            children: "Reset Password"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/forgot.tsx",
            lineNumber: 168,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-center text-sm font-bold text-white", children: [
          "Remember your password?",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            import_react12.Link,
            {
              className: "text-lg font-bold text-white underline",
              to: "/login",
              children: "Log in"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/forgot.tsx",
              lineNumber: 178,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/forgot.tsx",
          lineNumber: 176,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/forgot.tsx",
          lineNumber: 175,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/forgot.tsx",
        lineNumber: 137,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/forgot.tsx",
        lineNumber: 136,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/forgot.tsx",
        lineNumber: 135,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/forgot.tsx",
      lineNumber: 129,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/forgot.tsx",
    lineNumber: 112,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/forgot.tsx",
    lineNumber: 111,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/forgot.tsx",
    lineNumber: 110,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/forgot.tsx",
    lineNumber: 109,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action5,
  loader: () => loader6
});
var import_node10 = require("@remix-run/node");
var action5 = async ({ request }) => logout(request), loader6 = async () => (0, import_node10.redirect)("/");

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader7
});
var import_react15 = require("@remix-run/react"), import_framer_motion4 = require("framer-motion"), import_node11 = require("@remix-run/node");
var import_react16 = require("react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader7 = async ({ request }) => await getUserId(request) ? (0, import_node11.redirect)("/") : (0, import_node11.json)({});
function getRandomImage4() {
  let randomIndex = Math.floor(Math.random() * loginImages.length);
  return loginImages[randomIndex];
}
function Index() {
  let [imageLoading, setImageLoading] = (0, import_react16.useState)(!0), imageLoaded = () => {
    setImageLoading(!1);
  }, [randomImage, setRandomImage] = (0, import_react16.useState)();
  (0, import_react16.useEffect)(() => {
    let image = getRandomImage4();
    setRandomImage(image);
  }, []);
  let user = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("main", { className: "relative flex min-h-screen items-center justify-center overflow-y-auto bg-white sm:flex sm:items-center sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "relative sm:pb-16 sm:pt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "relative shadow-xl sm:overflow-hidden sm:rounded-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: " absolute inset-0", children: [
      randomImage && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        import_framer_motion4.motion.img,
        {
          initial: { opacity: 0 },
          animate: {
            opacity: imageLoading ? 0 : 1
          },
          transition: { delay: 0, duration: 2 },
          onLoad: imageLoaded,
          src: randomImage.src,
          alt: randomImage.alt,
          className: "h-full w-full object-cover"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 57,
          columnNumber: 19
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "absolute inset-0 bg-teal-400 mix-blend-multiply" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 55,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: " lg:pb-18 relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pt-32", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "block uppercase text-white drop-shadow-md", children: "Job Journey" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 75,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl", children: "Document your journey to finding that new job you have been dreaming of, chasing and seeking after. Build a road map and see how far you have come!" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "z-10 mx-auto mt-10  max-w-sm sm:flex sm:max-w-none sm:justify-center", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        import_react15.Link,
        {
          to: "/posts/user",
          className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-black hover:text-white sm:px-8",
          children: [
            "View Dashboard for ",
            user.email
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 86,
          columnNumber: 21
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "sm:mx- space-y-4 sm:flex sm:grid-cols-2 sm:gap-5 sm:space-y-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          import_react15.Link,
          {
            to: "/join",
            className: "hover:bg-custom-spaceBlack mb-4 mr-4 flex  items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-teal-400 shadow-sm hover:text-white sm:mb-0 sm:flex-shrink-0 sm:px-8 sm:py-0",
            children: "Sign up"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 94,
            columnNumber: 23
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          import_react15.Link,
          {
            to: "/login",
            className: " bg-custom hover:bg-custom-spaceBlack mb-4 mr-4  flex items-center justify-center rounded-md px-4 py-3 font-medium text-white sm:mb-0 sm:flex-shrink-0 sm:py-0",
            children: "Log In"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 100,
            columnNumber: 23
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 93,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 84,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 73,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 54,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 53,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 52,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action6,
  default: () => LoginPage,
  loader: () => loader8,
  meta: () => meta2
});
var import_node12 = require("@remix-run/node"), import_react17 = require("@remix-run/react"), import_react18 = __toESM(require("react"));
var import_react19 = require("react"), import_framer_motion5 = require("framer-motion");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader8 = async ({ request }) => {
  if (await getUserId(request))
    return (0, import_node12.redirect)("/");
  let session = await getSession2(request.headers.get("Cookie")), message = session.get("message") || "Welcome!";
  return (0, import_node12.json)(
    { message },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
};
function getRandomImage5() {
  let randomIndex = Math.floor(Math.random() * loginImages.length);
  return loginImages[randomIndex];
}
var action6 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/posts/user"), remember = formData.get("remember");
  if (!validateEmail(email))
    return (0, import_node12.json)(
      { errors: { email: "Email is invalid" } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node12.json)(
      { errors: { password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node12.json)(
      { errors: { password: "Password is too short" } },
      { status: 400 }
    );
  let user = await verifyLogin(email, password);
  return user ? createUserSession({
    request,
    userId: user.id,
    remember: remember === "on",
    redirectTo
  }) : (0, import_node12.json)(
    { errors: { email: "Invalid email or password" } },
    { status: 400 }
  );
}, meta2 = () => ({
  title: "Login"
});
function LoginPage() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react17.useSearchParams)(), redirectTo = searchParams.get("redirectTo") || "/posts/user", actionData = (0, import_react17.useActionData)(), emailRef = import_react18.default.useRef(null), passwordRef = import_react18.default.useRef(null), [imageLoading, setImageLoading] = (0, import_react19.useState)(!0), { message } = (0, import_react17.useLoaderData)(), navigate = (0, import_react17.useNavigate)(), imageLoaded = () => {
    setImageLoading(!1);
  };
  import_react18.default.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]);
  let [randomImage, setRandomImage] = (0, import_react19.useState)();
  return (0, import_react19.useEffect)(() => {
    let image = getRandomImage5();
    setRandomImage(image);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("main", { className: "relative flex min-h-screen items-center justify-center overflow-y-auto bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative sm:pb-16 sm:pt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative shadow-xl sm:overflow-hidden sm:rounded-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: " absolute inset-0", children: [
      randomImage && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_framer_motion5.motion.img,
        {
          initial: { opacity: 0 },
          animate: {
            opacity: imageLoading ? 0 : 1
          },
          transition: { delay: 0, duration: 2 },
          onLoad: imageLoaded,
          src: randomImage.src,
          alt: randomImage.alt,
          className: "h-full w-full object-cover"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 150,
          columnNumber: 19
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "absolute inset-0 bg-teal-400 mix-blend-multiply" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 162,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 148,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: " lg:pb-18 relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pt-32", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_framer_motion5.motion.div,
        {
          className: "flex min-h-full flex-col justify-center mb-2",
          initial: { opacity: 0, x: 0 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 2 },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-center text-xl font-bold text-white", children: message }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 172,
            columnNumber: 19
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 166,
          columnNumber: 18
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "mb-4 block uppercase text-white drop-shadow-md", children: "Job Journey" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 177,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 176,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react17.Form, { method: "post", className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "label",
            {
              htmlFor: "email",
              className: "block text-sm font-bold  text-white",
              children: "Email address"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 187,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              "input",
              {
                ref: emailRef,
                id: "email",
                required: !0,
                autoFocus: !0,
                name: "email",
                type: "email",
                autoComplete: "email",
                "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
                "aria-describedby": "email-error",
                className: "w-full rounded border border-gray-500  px-2 py-1 text-lg"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 194,
                columnNumber: 27
              },
              this
            ),
            ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 209,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 193,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 186,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "label",
            {
              htmlFor: "password",
              className: "block text-sm font-bold text-white",
              children: "Password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 217,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              "input",
              {
                id: "password",
                ref: passwordRef,
                name: "password",
                type: "password",
                autoComplete: "current-password",
                "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
                "aria-describedby": "password-error",
                className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 224,
                columnNumber: 27
              },
              this
            ),
            ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              "div",
              {
                className: "pt-1 text-red-700",
                id: "password-error",
                children: actionData.errors.password
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 237,
                columnNumber: 29
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 223,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 216,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "input",
          {
            type: "hidden",
            name: "redirectTo",
            value: redirectTo
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 247,
            columnNumber: 23
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "bg-custom-newColor hover:bg-custom-spaceBlack focus:bg-custom-spaceBlack   hover: w-full rounded px-4 py-2 font-medium text-white text-white",
            children: "Log in"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 252,
            columnNumber: 23
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "sm: flex items-center justify-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              "input",
              {
                id: "remember",
                name: "remember",
                type: "checkbox",
                className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 260,
                columnNumber: 27
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              "label",
              {
                htmlFor: "remember",
                className: "mx-4  border-blue-400 text-sm font-bold text-white",
                children: "Remember me"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 266,
                columnNumber: 27
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 259,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text-center text-md font-bold text-white", children: [
            "Don't have an account?",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_react17.Link,
              {
                className: "text-lg font-bold text-white underline",
                to: {
                  pathname: "/join",
                  search: searchParams.toString()
                },
                children: "Sign up"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 276,
                columnNumber: 27
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 275,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 273,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            import_react17.Link,
            {
              className: "inline text-lg font-bold text-white underline mx-4",
              to: "/forgot",
              children: "Reset Password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 288,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 258,
          columnNumber: 23
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 185,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 184,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 183,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 165,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 147,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 146,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 145,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 144,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 143,
    columnNumber: 5
  }, this);
}

// app/routes/notes.tsx
var notes_exports = {};
__export(notes_exports, {
  default: () => NotesPage2,
  loader: () => loader9
});
var import_node13 = require("@remix-run/node"), import_react20 = require("@remix-run/react");

// app/models/note.server.ts
function getNote({
  id,
  userId
}) {
  return prisma.note.findFirst({
    where: { id, userId }
  });
}
function getNoteListItems({ userId }) {
  return prisma.note.findMany({
    where: { userId },
    select: { id: !0, title: !0 },
    orderBy: { updatedAt: "desc" }
  });
}
function createNote({
  body,
  title,
  userId
}) {
  return prisma.note.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: userId
        }
      }
    }
  });
}
function deleteNote2({
  id,
  userId
}) {
  return prisma.note.deleteMany({
    where: { id, userId }
  });
}

// app/routes/notes.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), loader9 = async ({ request }) => {
  let userId = await requireUserId(request), noteListItems = await getNoteListItems({ userId });
  return (0, import_node13.json)({ noteListItems });
};
function NotesPage2() {
  let data = (0, import_react20.useLoaderData)(), user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("header", { className: "flex flex-col items-center justify-between bg-teal-400 p-4 font-bold text-white md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "mb-2 text-3xl font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.Link, { to: ".", children: "Notes" }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "ml-4 hidden md:block", children: user.email }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "bg-custom-newColor m-2 rounded px-4 py-2 font-medium text-white hover:bg-black active:bg-black sm:hidden",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              import_react20.Link,
              {
                to: "/posts/user",
                className: "text-md text-whit-600 mb-4 md:mb-0",
                children: "Dashboard"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/notes.tsx",
                lineNumber: 38,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/notes.tsx",
            lineNumber: 34,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "bg-custom-newColor m-2 rounded px-4 py-2 font-medium text-white hover:bg-black active:bg-black sm:hidden",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              import_react20.Link,
              {
                to: "/map",
                className: "text-md text-whit-600 mb-4 md:mb-0",
                children: "MapJourney"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/notes.tsx",
                lineNumber: 49,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/notes.tsx",
            lineNumber: 45,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "bg-custom-newColor m-2 rounded px-4 py-2 font-medium text-white hover:bg-black active:bg-black sm:hidden",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              import_react20.Link,
              {
                to: "/jobappnotes",
                className: "text-md text-whit-600 mb-4 md:mb-0",
                children: "Job App Notes"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/notes.tsx",
                lineNumber: 60,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/notes.tsx",
            lineNumber: 56,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "bg-custom-newColor m-2 rounded px-4 py-2 font-medium text-white hover:bg-black active:bg-black sm:hidden",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.Link, { to: "/posts", className: "text-md text-whit-600 mb-4 md:mb-0", children: "Job Posts" }, void 0, !1, {
              fileName: "app/routes/notes.tsx",
              lineNumber: 72,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/notes.tsx",
            lineNumber: 68,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "bg-custom-newColor hover:bg-custom-newColor active:bg-custom-newColor m-2 rounded px-4 py-2 font-medium text-white",
            children: "Logout"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/notes.tsx",
            lineNumber: 78,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { className: "flex h-full bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "h-full w-80 border-r bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          import_react20.Link,
          {
            to: "new",
            className: "text-custom-newColor block p-4 text-xl font-medium",
            children: "+ New Note"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/notes.tsx",
            lineNumber: 90,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("hr", {}, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        data.noteListItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "p-4", children: "No notes yet" }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ol", { children: data.noteListItems.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          import_react20.NavLink,
          {
            className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`,
            to: note.id,
            children: [
              "\u{1F4DD} ",
              note.title
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/notes.tsx",
            lineNumber: 105,
            columnNumber: 19
          },
          this
        ) }, note.id, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 104,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex-1 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react20.Outlet, {}, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/posts.tsx
var posts_exports = {};
__export(posts_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => PostsRoute
});
var import_react21 = require("@remix-run/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function PostsRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react21.Outlet, {}, void 0, !1, {
    fileName: "app/routes/posts.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "text-red-500", children: [
    "Oh no, something went wrong!",
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("pre", { children: error.message }, void 0, !1, {
      fileName: "app/routes/posts.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/join.tsx
var join_exports = {};
__export(join_exports, {
  action: () => action7,
  default: () => Join,
  loader: () => loader10,
  meta: () => meta3
});
var import_node14 = require("@remix-run/node"), import_react22 = require("@remix-run/react"), React5 = __toESM(require("react"));
var import_react23 = require("react"), import_framer_motion6 = require("framer-motion"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), loader10 = async ({ request }) => await getUserId(request) ? (0, import_node14.redirect)("/") : (0, import_node14.json)({});
function getRandomImage6() {
  let randomIndex = Math.floor(Math.random() * loginImages.length);
  return loginImages[randomIndex];
}
var action7 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/posts/user");
  if (!validateEmail(email))
    return (0, import_node14.json)(
      { errors: { email: "Email is invalid" } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node14.json)(
      { errors: { password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node14.json)(
      { errors: { password: "Password is too short" } },
      { status: 400 }
    );
  if (await getUserByEmail(email))
    return (0, import_node14.json)(
      { errors: { email: "A user already exists with this email" } },
      { status: 400 }
    );
  let user = await createUser(email, password);
  return createUserSession({
    request,
    userId: user.id,
    remember: !1,
    redirectTo
  });
}, meta3 = () => ({
  title: "Sign Up"
});
function Join() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react22.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? void 0, actionData = (0, import_react22.useActionData)(), emailRef = React5.useRef(null), passwordRef = React5.useRef(null), [imageLoading, setImageLoading] = (0, import_react23.useState)(!0), imageLoaded = () => {
    setImageLoading(!1);
  };
  React5.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]);
  let [randomImage, setRandomImage] = (0, import_react23.useState)();
  return (0, import_react23.useEffect)(() => {
    let image = getRandomImage6();
    setRandomImage(image);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("main", { className: "relative flex min-h-screen items-center justify-center bg-white overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "relative sm:pb-16 sm:pt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "relative shadow-xl sm:overflow-hidden sm:rounded-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: " absolute inset-0", children: [
      randomImage && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        import_framer_motion6.motion.img,
        {
          initial: { opacity: 0 },
          animate: {
            opacity: imageLoading ? 0 : 1
          },
          transition: { delay: 0, duration: 1 },
          onLoad: imageLoaded,
          src: randomImage.src,
          alt: randomImage.alt,
          className: "h-full w-full object-cover"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 124,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "absolute inset-0 bg-teal-400 mix-blend-multiply" }, void 0, !1, {
        fileName: "app/routes/join.tsx",
        lineNumber: 136,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 122,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: " lg:pb-18 relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pt-32", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { className: "text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "mb-4 block uppercase text-white drop-shadow-md", children: "Job Journey" }, void 0, !1, {
        fileName: "app/routes/join.tsx",
        lineNumber: 140,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/join.tsx",
        lineNumber: 139,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react22.Form, { method: "post", className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "label",
            {
              htmlFor: "email",
              className: "block text-sm font-bold text-white",
              children: "Email address"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/join.tsx",
              lineNumber: 148,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "input",
              {
                ref: emailRef,
                id: "email",
                required: !0,
                autoFocus: !0,
                name: "email",
                type: "email",
                autoComplete: "email",
                "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
                "aria-describedby": "email-error",
                className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/join.tsx",
                lineNumber: 155,
                columnNumber: 25
              },
              this
            ),
            ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
              fileName: "app/routes/join.tsx",
              lineNumber: 170,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/join.tsx",
            lineNumber: 154,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/join.tsx",
          lineNumber: 147,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "label",
            {
              htmlFor: "password",
              className: "block text-sm font-bold text-white",
              children: "Password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/join.tsx",
              lineNumber: 178,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "input",
              {
                id: "password",
                ref: passwordRef,
                name: "password",
                type: "password",
                autoComplete: "new-password",
                "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
                "aria-describedby": "password-error",
                className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/join.tsx",
                lineNumber: 185,
                columnNumber: 25
              },
              this
            ),
            ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "div",
              {
                className: "pt-1 text-red-700",
                id: "password-error",
                children: actionData.errors.password
              },
              void 0,
              !1,
              {
                fileName: "app/routes/join.tsx",
                lineNumber: 198,
                columnNumber: 27
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/join.tsx",
            lineNumber: 184,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/join.tsx",
          lineNumber: 177,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 208,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "bg-custom-newColor hover:bg-custom-spaceBlack focus:bg-custom-newColor  hover: w-full rounded px-4 py-2 font-medium text-white text-white",
            children: "Create Account"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join.tsx",
            lineNumber: 209,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "text-center text-sm font-bold text-white", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            import_react22.Link,
            {
              className: "text-lg font-bold text-white underline",
              to: {
                pathname: "/login",
                search: searchParams.toString()
              },
              children: "Log in"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/join.tsx",
              lineNumber: 219,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/join.tsx",
          lineNumber: 217,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 216,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/join.tsx",
        lineNumber: 146,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/join.tsx",
        lineNumber: 145,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/join.tsx",
        lineNumber: 144,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 138,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/join.tsx",
    lineNumber: 121,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 120,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 119,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 118,
    columnNumber: 5
  }, this);
}

// app/routes/map/index.tsx
var map_exports = {};
__export(map_exports, {
  default: () => MapJourney,
  loader: () => loader11
});
var import_react24 = require("react"), import_react25 = require("@remix-run/react"), import_pigeon_maps = require("pigeon-maps"), import_providers = require("pigeon-maps/providers"), import_react26 = require("@remix-run/react"), import_node15 = require("@remix-run/node");

// app/models/post.server.ts
async function getPostListings({ userId }) {
  return prisma.post.findMany({
    where: { userId },
    select: {
      slug: !0,
      title: !0,
      address: !0,
      date: !0,
      userId: !0,
      jobAppLink: !0,
      appStatus: !0,
      coordinateLat: !0,
      coordinateLong: !0
    },
    orderBy: { updatedAt: "asc" }
  });
}
async function adminGetPostListings() {
  return prisma.post.findMany({
    select: {
      slug: !0,
      title: !0,
      address: !0,
      jobAppLink: !0,
      appStatus: !0,
      date: !0,
      userId: !0,
      User: !0
    }
  });
}
async function getPost(slug) {
  return prisma.post.findUnique({ where: { slug } });
}
async function createPost(post) {
  return prisma.post.create({ data: post });
}
async function updatePost(slug, post) {
  return prisma.post.update({ data: post, where: { slug } });
}
async function deletePost(slug) {
  return prisma.post.delete({ where: { slug } });
}

// app/routes/map/index.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), loader11 = async ({ request }) => {
  let userId = await requireUserId(request), posts = await getPostListings({ userId });
  return (0, import_node15.json)({ posts });
};
function MapJourney() {
  let user = useOptionalUser(), username = useUser(), maptilerProvider = (0, import_providers.maptiler)("5ggIxxFRzBPeRaG8yvf5", "streets"), { posts } = (0, import_react26.useLoaderData)();
  console.log("posts", posts);
  let postsWithNumbers = posts.map(
    ({
      coordinateLat: lat,
      coordinateLong: long,
      appStatus,
      ...rest
    }) => {
      let parsedLat = parseFloat(lat), parsedLong = parseFloat(long);
      return {
        color: appStatus === "Applied" ? "blue" : appStatus === "Interviewing" ? "orange" : appStatus === "Hired" ? "green" : appStatus === "Not-selected" ? "red" : "",
        coordinateLat: parsedLat,
        coordinateLong: parsedLong,
        appStatus,
        ...rest
      };
    }
  ), [displayTitle, setDisplayTitle] = (0, import_react24.useState)(""), handleClick = (title) => {
    setDisplayTitle(title);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("header", { className: "flex flex-col items-center justify-between bg-teal-400 p-4 text-white md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "mb-4 text-3xl font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react25.Link, { to: ".", children: "Map Journey" }, void 0, !1, {
        fileName: "app/routes/map/index.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/map/index.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { className: "sm:hidden", children: [
          " ",
          user ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            import_react25.Link,
            {
              to: "/notes",
              className: "mb-4 mr-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4  py-2 text-base font-medium text-teal-400 shadow-sm hover:bg-black hover:text-white md:mb-0 md:hidden",
              children: "Notes"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/map/index.tsx",
              lineNumber: 88,
              columnNumber: 15
            },
            this
          ) : null
        ] }, void 0, !0, {
          fileName: "app/routes/map/index.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { className: "sm:hidden", children: [
          " ",
          user ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            import_react25.Link,
            {
              to: "/jobappnotes",
              className: "mb-4 mr-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4  py-2 text-base font-medium text-teal-400 shadow-sm hover:bg-black hover:text-white md:mb-0 md:hidden",
              children: "Job App Notes"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/map/index.tsx",
              lineNumber: 99,
              columnNumber: 15
            },
            this
          ) : null
        ] }, void 0, !0, {
          fileName: "app/routes/map/index.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { className: "sm:hidden", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          import_react25.Link,
          {
            to: "/posts",
            className: "mb-4 mr-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-teal-400 shadow-sm hover:bg-black hover:text-white sm:hidden md:mb-0",
            children: "Job Posts"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/map/index.tsx",
            lineNumber: 109,
            columnNumber: 15
          },
          this
        ) : null }, void 0, !1, {
          fileName: "app/routes/map/index.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react25.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "mb-2 mr-2 rounded bg-white px-4 py-2 font-medium text-teal-400 hover:bg-black hover:text-white active:bg-black md:mb-0",
            children: "Logout"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/map/index.tsx",
            lineNumber: 118,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/map/index.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "hidden md:hidden ", children: username.email }, void 0, !1, {
          fileName: "app/routes/map/index.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/map/index.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/map/index.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "map-key bg-black", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "map-key-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "map-key-labe 600 ml-2 font-bold text-white", children: "Applied = \u{1F535}" }, void 0, !1, {
          fileName: "app/routes/map/index.tsx",
          lineNumber: 132,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/map/index.tsx",
          lineNumber: 131,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "map-key-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "map-key-label 600 ml-2 font-bold text-white", children: "Interviewing = \u{1F7E1}" }, void 0, !1, {
          fileName: "app/routes/map/index.tsx",
          lineNumber: 137,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/map/index.tsx",
          lineNumber: 136,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "map-key-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "map-key-label 600 ml-2 font-bold text-white", children: "Hired = \u{1F7E2}" }, void 0, !1, {
          fileName: "app/routes/map/index.tsx",
          lineNumber: 142,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/map/index.tsx",
          lineNumber: 141,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "map-key-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "map-key-label 600 ml-2 font-bold text-white", children: "Not-selected = \u{1F534}" }, void 0, !1, {
          fileName: "app/routes/map/index.tsx",
          lineNumber: 147,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/map/index.tsx",
          lineNumber: 146,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/map/index.tsx",
        lineNumber: 130,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ol", { className: "text-black-600 m-2 list-decimal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        import_pigeon_maps.Map,
        {
          provider: maptilerProvider,
          height: 1e3,
          defaultCenter: [47.116386, -101.299591],
          defaultZoom: 4.5,
          mouseEvents: !0,
          children: [
            postsWithNumbers.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              import_pigeon_maps.Marker,
              {
                width: 50,
                color: post.color,
                anchor: [post.coordinateLat, post.coordinateLong],
                onClick: () => handleClick(post.title)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/map/index.tsx",
                lineNumber: 161,
                columnNumber: 19
              },
              this
            )),
            postsWithNumbers.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              import_pigeon_maps.Overlay,
              {
                anchor: [post.coordinateLat, post.coordinateLong],
                offset: [5, 5],
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: displayTitle && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-blue-600 ", children: post.title }, void 0, !1, {
                  fileName: "app/routes/map/index.tsx",
                  lineNumber: 177,
                  columnNumber: 27
                }, this) }, void 0, !1, {
                  fileName: "app/routes/map/index.tsx",
                  lineNumber: 176,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/routes/map/index.tsx",
                  lineNumber: 174,
                  columnNumber: 21
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/map/index.tsx",
                lineNumber: 170,
                columnNumber: 19
              },
              this
            ))
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/map/index.tsx",
          lineNumber: 153,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/map/index.tsx",
        lineNumber: 152,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/map/index.tsx",
      lineNumber: 129,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/map/index.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/map/index.tsx",
    lineNumber: 79,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/map/index.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}

// app/routes/jobappnotes/$jobappnoteId.tsx
var jobappnoteId_exports = {};
__export(jobappnoteId_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action8,
  default: () => NoteDetailsPage,
  loader: () => loader12
});
var import_node16 = require("@remix-run/node"), import_react27 = require("@remix-run/react"), import_tiny_invariant3 = __toESM(require("tiny-invariant")), import_framer_motion7 = require("framer-motion");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), loader12 = async ({ request, params }) => {
  let userId = await requireUserId(request);
  (0, import_tiny_invariant3.default)(params.jobappnoteId, "noteId not found");
  let jobappnote = await getJobAppNote({
    userId,
    previousPositions: [],
    id: params.jobappnoteId
  });
  if (!jobappnote)
    throw new Response("Not Found", { status: 404 });
  let previousPositions = jobappnote.previousPositions;
  return (0, import_node16.json)({ jobappnote, previousPositions });
}, action8 = async ({ request, params }) => {
  let userId = await requireUserId(request);
  return (0, import_tiny_invariant3.default)(params.jobappnoteId, "jobappnoteId not found"), await deleteNote({ userId, id: params.jobappnoteId }), (0, import_node16.redirect)("/jobappnotes");
};
function NoteDetailsPage() {
  let data = (0, import_react27.useLoaderData)(), container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }, item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      import_framer_motion7.motion.ul,
      {
        variants: container,
        initial: "hidden",
        animate: "show",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "w-full max-w-sm bg-gradient-to-br from-teal-400 to black shadow-lg border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-4 py-2 mx-0 mt-2 mb-4 hover:shadow-xl transition duration-300 ease-in-out hover:translate-x-1 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_framer_motion7.motion.li, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h3", { className: "block text-gray-700 font-bold mb-2 text-2xl font-bold", children: data.jobappnote.title }, void 0, !1, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 84,
            columnNumber: 6
          }, this) }, void 0, !1, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 83,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_framer_motion7.motion.li, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: " block text-gray-700 font-bold mb-2 py-6 text-lg", children: [
            "Name: ",
            " ",
            " ",
            data.jobappnote.yourName
          ] }, void 0, !0, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 85,
            columnNumber: 35
          }, this) }, void 0, !1, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 85,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_framer_motion7.motion.li, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "block text-gray-700 font-bold mb-2 py-6 text-lg", children: [
            "Mobile Number: ",
            " ",
            " ",
            data.jobappnote.phoneNumber
          ] }, void 0, !0, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 86,
            columnNumber: 35
          }, this) }, void 0, !1, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 86,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_framer_motion7.motion.li, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "block text-gray-700 font-bold mb-2 py-6 text-lg", children: [
            "Desired Salary: ",
            " ",
            " ",
            data.jobappnote.DesiredSalary
          ] }, void 0, !0, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 87,
            columnNumber: 35
          }, this) }, void 0, !1, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 87,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_framer_motion7.motion.li, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "block text-gray-700 font-bold mb-2 py-6 text-lg", children: [
            "Reference 1: ",
            " ",
            data.jobappnote.referenceOne
          ] }, void 0, !0, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 88,
            columnNumber: 35
          }, this) }, void 0, !1, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 88,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_framer_motion7.motion.li, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "block text-gray-700 font-bold mb-2 py-6 text-lg", children: [
            "Reference 2: ",
            " ",
            data.jobappnote.referenceTwo
          ] }, void 0, !0, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 89,
            columnNumber: 35
          }, this) }, void 0, !1, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 89,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_framer_motion7.motion.li, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "block text-gray-700 font-bold mb-2 py-6 text-lg", children: [
            "Reference 3: ",
            " ",
            " ",
            data.jobappnote.referenceThree
          ] }, void 0, !0, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 90,
            columnNumber: 35
          }, this) }, void 0, !1, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 90,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
          lineNumber: 82,
          columnNumber: 4
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
        lineNumber: 78,
        columnNumber: 8
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "space-y-4", children: data.previousPositions.map((position, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      import_framer_motion7.motion.ul,
      {
        variants: container,
        initial: "hidden",
        animate: "show",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "w-full max-w-sm bg-custom-newColor  shadow-lg  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-4 py-2 mx-0 my-4 hover:shadow-xl transition duration-300 ease-in-out hover:translate-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_framer_motion7.motion.li, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h4", { className: "block font-bold text-white text-xl  mb-2 py-6  ", children: position.positionTitle }, void 0, !1, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 106,
            columnNumber: 31
          }, this) }, void 0, !1, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 106,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_framer_motion7.motion.li, { variants: item, children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "block font-bold text-white  text-lg mb-2 py-6", children: [
              "Duties: ",
              " ",
              " ",
              position.duties
            ] }, void 0, !0, {
              fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
              lineNumber: 107,
              columnNumber: 32
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 107,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_framer_motion7.motion.li, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "block font-bold text-white text-lg  mb-2 py-6", children: [
            "Employer Name: ",
            " ",
            " ",
            position.employerName
          ] }, void 0, !0, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 108,
            columnNumber: 31
          }, this) }, void 0, !1, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 108,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_framer_motion7.motion.li, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "block font-bold text-white text-lg mb-2 py-6", children: [
            "Employer Address: ",
            " ",
            " ",
            position.address
          ] }, void 0, !0, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 109,
            columnNumber: 31
          }, this) }, void 0, !1, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 109,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_framer_motion7.motion.li, { variants: item, children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "block font-bold text-white  text-lg  mb-2 py-6", children: [
              "Start Date: ",
              " ",
              " ",
              position.employmentStartDate
            ] }, void 0, !0, {
              fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
              lineNumber: 110,
              columnNumber: 32
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 110,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_framer_motion7.motion.li, { variants: item, children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "block font-bold text-white  text-lg mb-2 py-6", children: [
              "End Date: ",
              " ",
              " ",
              position.employmentEndDate
            ] }, void 0, !0, {
              fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
              lineNumber: 111,
              columnNumber: 32
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
            lineNumber: 111,
            columnNumber: 3
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
          lineNumber: 105,
          columnNumber: 3
        }, this) }, void 0, !1, {
          fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
          lineNumber: 104,
          columnNumber: 1
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
        lineNumber: 99,
        columnNumber: 3
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "w-full max-w-sm bg-gradient-to-br from-teal-400 to black shadow-lg rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-4 py-2 mx-0 my-4 hover:shadow-xl transition duration-300 ease-in-out  hover:translate-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: " block text-gray-700 font-bold text-lg mb-2 py-6", children: [
      "Additional Notes: ",
      data.jobappnote.body
    ] }, void 0, !0, {
      fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
      lineNumber: 118,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("hr", { className: "my-4" }, void 0, !1, {
      fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
      lineNumber: 121,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react27.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "rounded bg-custom-newColor  py-2 px-4 text-white font-bold hover:bg-custom-spaceBlack focus:bg-custom-spaceBlack",
        children: "Delete"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
        lineNumber: 123,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
function ErrorBoundary2({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.message
  ] }, void 0, !0, {
    fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
    lineNumber: 137,
    columnNumber: 10
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react27.useCatch)();
  if (caught.status === 404)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: "Note not found" }, void 0, !1, {
      fileName: "app/routes/jobappnotes/$jobappnoteId.tsx",
      lineNumber: 144,
      columnNumber: 12
    }, this);
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

// app/routes/jobappnotes/index.tsx
var jobappnotes_exports2 = {};
__export(jobappnotes_exports2, {
  default: () => jobNoteIndexPage
});
var import_react28 = require("@remix-run/react"), import_framer_motion8 = require("framer-motion"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function jobNoteIndexPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
    import_framer_motion8.motion.div,
    {
      initial: { opacity: 0, x: "-2vh" },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "text-xl", children: [
        "No note selected. Select a note on the left, or",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react28.Link, { to: "new", className: "text-custom-newColor font-medium underline", children: "create a new job application note." }, void 0, !1, {
          fileName: "app/routes/jobappnotes/index.tsx",
          lineNumber: 14,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jobappnotes/index.tsx",
        lineNumber: 12,
        columnNumber: 5
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/jobappnotes/index.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}

// app/routes/jobappnotes/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action9,
  default: () => NewJobAppPage
});
var import_node17 = require("@remix-run/node"), import_react29 = require("@remix-run/react"), import_react30 = __toESM(require("react"));
var import_uuid2 = require("uuid"), import_framer_motion9 = require("framer-motion"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), action9 = async ({ request }) => {
  var _a, _b, _c, _d, _e, _f;
  let userId = await requireUserId(request), formData = await request.formData(), title = formData.get("title"), yourName = formData.get("yourName"), phoneNumber = formData.get("phoneNumber"), DesiredSalary = formData.get("DesiredSalary"), referenceOne = formData.get("referenceOne"), referenceTwo = formData.get("referenceTwo"), referenceThree = formData.get("referenceThree"), body = formData.get("body"), previousPositions = [];
  for (let i = 0; formData.get(`positionTitle_${i}`); i++) {
    let positionTitle = (_a = formData.get(`positionTitle_${i}`)) == null ? void 0 : _a.toString().trim(), duties = (_b = formData.get(`duties_${i}`)) == null ? void 0 : _b.toString().trim(), employerName = (_c = formData.get(`employerName_${i}`)) == null ? void 0 : _c.toString().trim(), address = (_d = formData.get(`address_${i}`)) == null ? void 0 : _d.toString().trim(), employmentStartDate = (_e = formData.get(`employmentStartDate_${i}`)) == null ? void 0 : _e.toString().trim(), employmentEndDate = (_f = formData.get(`employmentEndDate_${i}`)) == null ? void 0 : _f.toString().trim();
    if (typeof positionTitle != "string" || positionTitle.trim().length === 0)
      return (0, import_node17.json)(
        { errors: { [`positionTitle_${i}`]: "Position Title is required" } },
        { status: 400 }
      );
    if (typeof duties != "string" || duties.trim().length === 0)
      return (0, import_node17.json)(
        { errors: { [`duties_${i}`]: "Duties is required" } },
        { status: 400 }
      );
    if (typeof employerName != "string" || employerName.trim().length === 0)
      return (0, import_node17.json)(
        { errors: { [`employerName_${i}`]: "Employer Name is required" } },
        { status: 400 }
      );
    if (typeof address != "string" || address.trim().length === 0)
      return (0, import_node17.json)(
        { errors: { [`address_${i}`]: "Address is required" } },
        { status: 400 }
      );
    if (typeof employmentStartDate != "string" || employmentStartDate.trim().length === 0)
      return (0, import_node17.json)(
        { errors: { [`employmentStartDate_${i}`]: "Employment Start Date is required" } },
        { status: 400 }
      );
    if (typeof employmentEndDate != "string" || employmentEndDate.trim().length === 0)
      return (0, import_node17.json)(
        { errors: { [`employmentEndDate_${i}`]: "Employment End Date is required" } },
        { status: 400 }
      );
    previousPositions.push({
      id: (0, import_uuid2.v4)(),
      positionTitle,
      duties,
      employerName,
      address,
      employmentStartDate,
      employmentEndDate
    });
  }
  if (typeof title != "string" || title.length === 0)
    return (0, import_node17.json)(
      { errors: { title: "Title is required" } },
      { status: 400 }
    );
  if (typeof body != "string" || body.length === 0)
    return (0, import_node17.json)(
      { errors: { body: "Body is required" } },
      { status: 400 }
    );
  if (typeof title != "string" || title.length === 0)
    return (0, import_node17.json)(
      { errors: { title: "Title is required" } },
      { status: 400 }
    );
  if (typeof yourName != "string" || yourName.length === 0)
    return (0, import_node17.json)(
      { errors: { yourName: "your Name is required" } },
      { status: 400 }
    );
  if (typeof phoneNumber != "string" || phoneNumber.length === 0)
    return (0, import_node17.json)(
      { errors: { phoneNumber: "Phone Number is required" } },
      { status: 400 }
    );
  if (typeof DesiredSalary != "string" || DesiredSalary.length === 0)
    return (0, import_node17.json)(
      { errors: { DesiredSalary: "Body is required" } },
      { status: 400 }
    );
  if (typeof referenceOne != "string" || referenceOne.length === 0)
    return (0, import_node17.json)(
      { errors: { referenceOne: "reference 1  is required" } },
      { status: 400 }
    );
  if (typeof referenceTwo != "string" || referenceTwo.length === 0)
    return (0, import_node17.json)(
      { errors: { referenceTwo: "reference 2  is required" } },
      { status: 400 }
    );
  if (typeof referenceThree != "string" || referenceThree.length === 0)
    return (0, import_node17.json)(
      { errors: { referenceThree: "reference  is required" } },
      { status: 400 }
    );
  let jobnote = await createJobAppNote({
    title,
    yourName,
    phoneNumber,
    DesiredSalary,
    referenceOne,
    referenceTwo,
    referenceThree,
    body,
    userId,
    previousPositions
  });
  return (0, import_node17.redirect)(`/jobappnotes/${jobnote.id}`);
};
function NewJobAppPage() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
  let actionData = (0, import_react29.useActionData)(), titleRef = import_react30.default.useRef(null), yourNameRef = import_react30.default.useRef(null), phoneRef = import_react30.default.useRef(null), desiredSalaryRef = import_react30.default.useRef(null), referenceOneRef = import_react30.default.useRef(null), referenceTwoRef = import_react30.default.useRef(null), referenceThreeRef = import_react30.default.useRef(null), bodyRef = import_react30.default.useRef(null), positionTitleRef = import_react30.default.useRef(null), dutiesRef = import_react30.default.useRef(null), employerNameRef = import_react30.default.useRef(null), addressRef = import_react30.default.useRef(null), employmentStartDateRef = import_react30.default.useRef(null), employmentEndDateRef = import_react30.default.useRef(null);
  import_react30.default.useEffect(() => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2, _s2, _t2, _u2, _v2, _w2, _x2, _y, _z, _A, _B;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.title ? (_b2 = titleRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.body ? (_d2 = bodyRef.current) == null || _d2.focus() : (_e2 = actionData == null ? void 0 : actionData.errors) != null && _e2.yourName ? (_f2 = yourNameRef.current) == null || _f2.focus() : (_g2 = actionData == null ? void 0 : actionData.errors) != null && _g2.phoneNumber ? (_h2 = phoneRef.current) == null || _h2.focus() : (_i2 = actionData == null ? void 0 : actionData.errors) != null && _i2.DesiredSalary ? (_j2 = desiredSalaryRef.current) == null || _j2.focus() : (_k2 = actionData == null ? void 0 : actionData.errors) != null && _k2.referenceOne ? (_l2 = referenceOneRef.current) == null || _l2.focus() : (_m2 = actionData == null ? void 0 : actionData.errors) != null && _m2.referenceTwo ? (_n2 = referenceTwoRef.current) == null || _n2.focus() : (_o2 = actionData == null ? void 0 : actionData.errors) != null && _o2.referenceThree ? (_p2 = referenceThreeRef.current) == null || _p2.focus() : (_q2 = actionData == null ? void 0 : actionData.errors) != null && _q2.positionTitle ? (_r2 = positionTitleRef.current) == null || _r2.focus() : (_s2 = actionData == null ? void 0 : actionData.errors) != null && _s2.duties ? (_t2 = dutiesRef.current) == null || _t2.focus() : (_u2 = actionData == null ? void 0 : actionData.errors) != null && _u2.employerName ? (_v2 = employerNameRef.current) == null || _v2.focus() : (_w2 = actionData == null ? void 0 : actionData.errors) != null && _w2.address ? (_x2 = addressRef.current) == null || _x2.focus() : (_y = actionData == null ? void 0 : actionData.errors) != null && _y.employmentStartDate ? (_z = employmentStartDateRef.current) == null || _z.focus() : (_A = actionData == null ? void 0 : actionData.errors) != null && _A.employmentEndDate && ((_B = employmentEndDateRef.current) == null || _B.focus());
  }, [actionData]);
  let [previousPositions, setPreviousPositions] = (0, import_react30.useState)([
    {
      id: (0, import_uuid2.v4)(),
      positionTitle: "",
      duties: "",
      employerName: "",
      address: "",
      employmentStartDate: "",
      employmentEndDate: ""
    }
  ]), handleAddPreviousPosition = () => {
    let newPreviousPosition = {
      id: (0, import_uuid2.v4)(),
      positionTitle: "",
      duties: "",
      employerName: "",
      address: "",
      employmentStartDate: "",
      employmentEndDate: ""
    };
    previousPositions.length === 1 && !previousPositions[0].id ? setPreviousPositions([newPreviousPosition]) : setPreviousPositions([...previousPositions, newPreviousPosition]);
  }, handleRemovePreviousPosition = (index) => {
    setPreviousPositions(previousPositions.filter((_, i) => i !== index));
  };
  function handleChangePreviousPosition(event, index, field) {
    let newValue = event.target.value;
    setPreviousPositions((prevPositions) => {
      let newPositions = [...prevPositions];
      return newPositions[index] = {
        ...newPositions[index],
        [field]: newValue
      }, newPositions;
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    import_framer_motion9.motion.div,
    {
      initial: { opacity: 0, x: "-2vh" },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        import_react29.Form,
        {
          method: "post",
          style: {
            display: "flex",
            flexDirection: "column",
            gap: 8,
            width: "100%"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "mb-2", children: "Job Application Loadout Title: " }, void 0, !1, {
                  fileName: "app/routes/jobappnotes/new.tsx",
                  lineNumber: 312,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "input",
                  {
                    ref: titleRef,
                    name: "title",
                    className: "flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.title ? !0 : void 0,
                    "aria-errormessage": (_b = actionData == null ? void 0 : actionData.errors) != null && _b.title ? "title-error" : void 0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/jobappnotes/new.tsx",
                    lineNumber: 313,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/jobappnotes/new.tsx",
                lineNumber: 311,
                columnNumber: 9
              }, this),
              ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.title }, void 0, !1, {
                fileName: "app/routes/jobappnotes/new.tsx",
                lineNumber: 324,
                columnNumber: 11
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/jobappnotes/new.tsx",
              lineNumber: 310,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "mb-2", children: "Name: " }, void 0, !1, {
                  fileName: "app/routes/jobappnotes/new.tsx",
                  lineNumber: 332,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "input",
                  {
                    ref: yourNameRef,
                    name: "yourName",
                    className: "flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    "aria-invalid": (_d = actionData == null ? void 0 : actionData.errors) != null && _d.yourName ? !0 : void 0,
                    "aria-errormessage": (_e = actionData == null ? void 0 : actionData.errors) != null && _e.yourName ? "title-error" : void 0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/jobappnotes/new.tsx",
                    lineNumber: 333,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/jobappnotes/new.tsx",
                lineNumber: 331,
                columnNumber: 9
              }, this),
              ((_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.yourName) && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.yourName }, void 0, !1, {
                fileName: "app/routes/jobappnotes/new.tsx",
                lineNumber: 344,
                columnNumber: 11
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/jobappnotes/new.tsx",
              lineNumber: 330,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "mb-2", children: "Cell Phone Number: " }, void 0, !1, {
                  fileName: "app/routes/jobappnotes/new.tsx",
                  lineNumber: 352,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "input",
                  {
                    ref: phoneRef,
                    name: "phoneNumber",
                    className: "flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    "aria-invalid": (_g = actionData == null ? void 0 : actionData.errors) != null && _g.phoneNumber ? !0 : void 0,
                    "aria-errormessage": (_h = actionData == null ? void 0 : actionData.errors) != null && _h.phoneNumber ? "title-error" : void 0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/jobappnotes/new.tsx",
                    lineNumber: 353,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/jobappnotes/new.tsx",
                lineNumber: 351,
                columnNumber: 9
              }, this),
              ((_i = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _i.phoneNumber) && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.phoneNumber }, void 0, !1, {
                fileName: "app/routes/jobappnotes/new.tsx",
                lineNumber: 364,
                columnNumber: 11
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/jobappnotes/new.tsx",
              lineNumber: 350,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "mb-2", children: "Desired Salary: " }, void 0, !1, {
                  fileName: "app/routes/jobappnotes/new.tsx",
                  lineNumber: 372,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "input",
                  {
                    ref: desiredSalaryRef,
                    name: "DesiredSalary",
                    className: "flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    "aria-invalid": (_j = actionData == null ? void 0 : actionData.errors) != null && _j.DesiredSalary ? !0 : void 0,
                    "aria-errormessage": (_k = actionData == null ? void 0 : actionData.errors) != null && _k.DesiredSalary ? "title-error" : void 0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/jobappnotes/new.tsx",
                    lineNumber: 373,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/jobappnotes/new.tsx",
                lineNumber: 371,
                columnNumber: 9
              }, this),
              ((_l = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _l.DesiredSalary) && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.DesiredSalary }, void 0, !1, {
                fileName: "app/routes/jobappnotes/new.tsx",
                lineNumber: 384,
                columnNumber: 11
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/jobappnotes/new.tsx",
              lineNumber: 370,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "mb-2", children: "Reference 1: " }, void 0, !1, {
                  fileName: "app/routes/jobappnotes/new.tsx",
                  lineNumber: 392,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "input",
                  {
                    ref: referenceOneRef,
                    name: "referenceOne",
                    className: "flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    "aria-invalid": (_m = actionData == null ? void 0 : actionData.errors) != null && _m.referenceOne ? !0 : void 0,
                    "aria-errormessage": (_n = actionData == null ? void 0 : actionData.errors) != null && _n.referenceOne ? "title-error" : void 0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/jobappnotes/new.tsx",
                    lineNumber: 393,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/jobappnotes/new.tsx",
                lineNumber: 391,
                columnNumber: 9
              }, this),
              ((_o = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _o.referenceOne) && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.referenceOne }, void 0, !1, {
                fileName: "app/routes/jobappnotes/new.tsx",
                lineNumber: 404,
                columnNumber: 11
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/jobappnotes/new.tsx",
              lineNumber: 390,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "mb-2", children: "Reference 2: " }, void 0, !1, {
                  fileName: "app/routes/jobappnotes/new.tsx",
                  lineNumber: 412,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "input",
                  {
                    ref: referenceTwoRef,
                    name: "referenceTwo",
                    className: "flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    "aria-invalid": (_p = actionData == null ? void 0 : actionData.errors) != null && _p.referenceTwo ? !0 : void 0,
                    "aria-errormessage": (_q = actionData == null ? void 0 : actionData.errors) != null && _q.referenceTwo ? "title-error" : void 0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/jobappnotes/new.tsx",
                    lineNumber: 413,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/jobappnotes/new.tsx",
                lineNumber: 411,
                columnNumber: 9
              }, this),
              ((_r = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _r.referenceTwo) && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.referenceTwo }, void 0, !1, {
                fileName: "app/routes/jobappnotes/new.tsx",
                lineNumber: 424,
                columnNumber: 11
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/jobappnotes/new.tsx",
              lineNumber: 410,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "mb-2", children: "Reference 3: " }, void 0, !1, {
                  fileName: "app/routes/jobappnotes/new.tsx",
                  lineNumber: 432,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "input",
                  {
                    ref: referenceThreeRef,
                    name: "referenceThree",
                    className: "flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    "aria-invalid": (_s = actionData == null ? void 0 : actionData.errors) != null && _s.referenceThree ? !0 : void 0,
                    "aria-errormessage": (_t = actionData == null ? void 0 : actionData.errors) != null && _t.referenceThree ? "title-error" : void 0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/jobappnotes/new.tsx",
                    lineNumber: 433,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/jobappnotes/new.tsx",
                lineNumber: 431,
                columnNumber: 9
              }, this),
              ((_u = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _u.referenceThree) && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.referenceThree }, void 0, !1, {
                fileName: "app/routes/jobappnotes/new.tsx",
                lineNumber: 444,
                columnNumber: 11
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/jobappnotes/new.tsx",
              lineNumber: 430,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "space-y-4", children: [
              previousPositions.map((position, index) => {
                var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                    "label",
                    {
                      className: "flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2",
                      htmlFor: `positionTitle_${index}`,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "mb-2", children: " Position Title" }, void 0, !1, {
                          fileName: "app/routes/jobappnotes/new.tsx",
                          lineNumber: 456,
                          columnNumber: 14
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                          "input",
                          {
                            className: "flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                            type: "text",
                            name: `positionTitle_${index}`,
                            id: `positionTitle_${index}`,
                            value: position.positionTitle,
                            onChange: (event) => handleChangePreviousPosition(event, index, "positionTitle"),
                            "aria-invalid": (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.positionTitle ? !0 : void 0,
                            "aria-errormessage": (_b2 = actionData == null ? void 0 : actionData.errors) != null && _b2.positionTitle ? "title-error" : void 0
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/jobappnotes/new.tsx",
                            lineNumber: 457,
                            columnNumber: 15
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/routes/jobappnotes/new.tsx",
                      lineNumber: 452,
                      columnNumber: 13
                    },
                    this
                  ),
                  ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.positionTitle) && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.positionTitle }, void 0, !1, {
                    fileName: "app/routes/jobappnotes/new.tsx",
                    lineNumber: 475,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "my-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                      "label",
                      {
                        className: "flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2",
                        htmlFor: `duties_${index}`,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "mb-2", children: "Duties" }, void 0, !1, {
                            fileName: "app/routes/jobappnotes/new.tsx",
                            lineNumber: 483,
                            columnNumber: 16
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                            "textarea",
                            {
                              className: "flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                              name: `duties_${index}`,
                              id: `duties_${index}`,
                              value: position.duties,
                              placeholder: "Enter your job duties here...",
                              onChange: (event) => handleChangePreviousPosition(event, index, "duties"),
                              "aria-invalid": (_d2 = actionData == null ? void 0 : actionData.errors) != null && _d2.duties ? !0 : void 0,
                              "aria-errormessage": (_e2 = actionData == null ? void 0 : actionData.errors) != null && _e2.duties ? "title-error" : void 0
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/jobappnotes/new.tsx",
                              lineNumber: 485,
                              columnNumber: 17
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/jobappnotes/new.tsx",
                        lineNumber: 480,
                        columnNumber: 15
                      },
                      this
                    ),
                    ((_f2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f2.duties) && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.duties }, void 0, !1, {
                      fileName: "app/routes/jobappnotes/new.tsx",
                      lineNumber: 501,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/jobappnotes/new.tsx",
                    lineNumber: 479,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "my-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                      "label",
                      {
                        className: "flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2",
                        htmlFor: `employerName_${index}`,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "mb-2", children: "Employer Name " }, void 0, !1, {
                            fileName: "app/routes/jobappnotes/new.tsx",
                            lineNumber: 510,
                            columnNumber: 16
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                            "input",
                            {
                              className: "flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                              type: "text",
                              name: `employerName_${index}`,
                              id: `employerName_${index}`,
                              value: position.employerName,
                              onChange: (event) => handleChangePreviousPosition(event, index, "employerName"),
                              "aria-invalid": (_g2 = actionData == null ? void 0 : actionData.errors) != null && _g2.employerName ? !0 : void 0,
                              "aria-errormessage": (_h2 = actionData == null ? void 0 : actionData.errors) != null && _h2.employerName ? "title-error" : void 0
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/jobappnotes/new.tsx",
                              lineNumber: 512,
                              columnNumber: 17
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/jobappnotes/new.tsx",
                        lineNumber: 507,
                        columnNumber: 15
                      },
                      this
                    ),
                    ((_i2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _i2.employerName) && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.employerName }, void 0, !1, {
                      fileName: "app/routes/jobappnotes/new.tsx",
                      lineNumber: 530,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/jobappnotes/new.tsx",
                    lineNumber: 506,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "my-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                      "label",
                      {
                        className: "flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2",
                        htmlFor: `address_${index}`,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "mb-2", children: "Employer Address " }, void 0, !1, {
                            fileName: "app/routes/jobappnotes/new.tsx",
                            lineNumber: 539,
                            columnNumber: 16
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                            "input",
                            {
                              className: " flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                              type: "text",
                              name: `address_${index}`,
                              id: `address_${index}`,
                              value: position.address,
                              onChange: (event) => handleChangePreviousPosition(event, index, "address"),
                              "aria-invalid": (_j2 = actionData == null ? void 0 : actionData.errors) != null && _j2.address ? !0 : void 0,
                              "aria-errormessage": (_k2 = actionData == null ? void 0 : actionData.errors) != null && _k2.address ? "title-error" : void 0
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/jobappnotes/new.tsx",
                              lineNumber: 541,
                              columnNumber: 17
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/jobappnotes/new.tsx",
                        lineNumber: 536,
                        columnNumber: 15
                      },
                      this
                    ),
                    ((_l2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _l2.address) && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.address }, void 0, !1, {
                      fileName: "app/routes/jobappnotes/new.tsx",
                      lineNumber: 557,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/jobappnotes/new.tsx",
                    lineNumber: 535,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "my-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                      "label",
                      {
                        className: "flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2",
                        htmlFor: `employmentStartDate_${index}`,
                        children: [
                          " ",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "mb-2", children: "Employment Start Date" }, void 0, !1, {
                            fileName: "app/routes/jobappnotes/new.tsx",
                            lineNumber: 566,
                            columnNumber: 17
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                            "input",
                            {
                              className: "flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                              type: "Date",
                              name: `employmentStartDate_${index}`,
                              id: `employmentStartDate_${index}`,
                              value: position.employmentStartDate,
                              onChange: (event) => handleChangePreviousPosition(
                                event,
                                index,
                                "employmentStartDate"
                              ),
                              "aria-invalid": (_m2 = actionData == null ? void 0 : actionData.errors) != null && _m2.employmentStartDate ? !0 : void 0,
                              "aria-errormessage": (_n2 = actionData == null ? void 0 : actionData.errors) != null && _n2.employmentStartDate ? "title-error" : void 0
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/jobappnotes/new.tsx",
                              lineNumber: 568,
                              columnNumber: 17
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/jobappnotes/new.tsx",
                        lineNumber: 563,
                        columnNumber: 15
                      },
                      this
                    ),
                    ((_o2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _o2.employmentStartDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.employmentStartDate }, void 0, !1, {
                      fileName: "app/routes/jobappnotes/new.tsx",
                      lineNumber: 592,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/jobappnotes/new.tsx",
                    lineNumber: 562,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "my-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                      "label",
                      {
                        className: "flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2",
                        htmlFor: `employmentEndDate_${index}`,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "mb-2", children: "Employment End Date" }, void 0, !1, {
                            fileName: "app/routes/jobappnotes/new.tsx",
                            lineNumber: 601,
                            columnNumber: 16
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                            "input",
                            {
                              className: "flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                              type: "Date",
                              name: `employmentEndDate_${index}`,
                              id: `employmentEndDate_${index}`,
                              value: position.employmentEndDate,
                              onChange: (event) => handleChangePreviousPosition(
                                event,
                                index,
                                "employmentEndDate"
                              ),
                              "aria-invalid": (_p2 = actionData == null ? void 0 : actionData.errors) != null && _p2.employmentEndDate ? !0 : void 0,
                              "aria-errormessage": (_q2 = actionData == null ? void 0 : actionData.errors) != null && _q2.employmentEndDate ? "title-error" : void 0
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/jobappnotes/new.tsx",
                              lineNumber: 603,
                              columnNumber: 17
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/jobappnotes/new.tsx",
                        lineNumber: 598,
                        columnNumber: 15
                      },
                      this
                    ),
                    ((_r2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _r2.employmentEndDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.employmentEndDate }, void 0, !1, {
                      fileName: "app/routes/jobappnotes/new.tsx",
                      lineNumber: 627,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/jobappnotes/new.tsx",
                    lineNumber: 597,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                    "button",
                    {
                      className: "rounded bg-teal-400 py-2 font-bold px-4 my-4 text-white hover:bg-custom-newColor focus:bg-blue-400",
                      type: "button",
                      onClick: () => handleRemovePreviousPosition(index),
                      children: "Remove"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/jobappnotes/new.tsx",
                      lineNumber: 632,
                      columnNumber: 13
                    },
                    this
                  )
                ] }, position.id, !0, {
                  fileName: "app/routes/jobappnotes/new.tsx",
                  lineNumber: 451,
                  columnNumber: 11
                }, this);
              }),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                "button",
                {
                  className: `rounded bg-teal-400  font-bold py-2 px-4 my-4 text-white hover:bg-custom-newColor \r
          focus:bg-blue-400`,
                  type: "button",
                  onClick: handleAddPreviousPosition,
                  children: "Add Position"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/jobappnotes/new.tsx",
                  lineNumber: 641,
                  columnNumber: 9
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/jobappnotes/new.tsx",
              lineNumber: 449,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { className: "flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { children: "Additional Notes: " }, void 0, !1, {
                  fileName: "app/routes/jobappnotes/new.tsx",
                  lineNumber: 653,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "textarea",
                  {
                    ref: bodyRef,
                    name: "body",
                    rows: 8,
                    className: "w-full flex-1 rounded-md border-2 border-custom-newColor py-2 px-3 text-lg leading-6",
                    placeholder: "Enter any additional notes you may have here...",
                    "aria-invalid": (_v = actionData == null ? void 0 : actionData.errors) != null && _v.body ? !0 : void 0,
                    "aria-errormessage": (_w = actionData == null ? void 0 : actionData.errors) != null && _w.body ? "body-error" : void 0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/jobappnotes/new.tsx",
                    lineNumber: 654,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/jobappnotes/new.tsx",
                lineNumber: 652,
                columnNumber: 9
              }, this),
              ((_x = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _x.body) && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "pt-1 text-red-700", id: "body-error", children: actionData.errors.body }, void 0, !1, {
                fileName: "app/routes/jobappnotes/new.tsx",
                lineNumber: 667,
                columnNumber: 11
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/jobappnotes/new.tsx",
              lineNumber: 651,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "text-right my-14", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              "button",
              {
                type: "submit",
                className: "rounded bg-teal-400 font-bold py-2 px-4 text-white hover:bg-custom-newColor focus:bg-custom-newColor",
                children: "Save"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/jobappnotes/new.tsx",
                lineNumber: 673,
                columnNumber: 9
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/jobappnotes/new.tsx",
              lineNumber: 672,
              columnNumber: 7
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/jobappnotes/new.tsx",
          lineNumber: 301,
          columnNumber: 5
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/routes/jobappnotes/new.tsx",
      lineNumber: 296,
      columnNumber: 5
    },
    this
  );
}

// app/routes/notes/$noteId.tsx
var noteId_exports = {};
__export(noteId_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary3,
  action: () => action10,
  default: () => NoteDetailsPage2,
  loader: () => loader13
});
var import_node18 = require("@remix-run/node"), import_react31 = require("@remix-run/react"), import_tiny_invariant4 = __toESM(require("tiny-invariant")), import_framer_motion10 = require("framer-motion");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), loader13 = async ({ request, params }) => {
  let userId = await requireUserId(request);
  (0, import_tiny_invariant4.default)(params.noteId, "noteId not found");
  let note = await getNote({ userId, id: params.noteId });
  if (!note)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node18.json)({ note });
}, action10 = async ({ request, params }) => {
  let userId = await requireUserId(request);
  return (0, import_tiny_invariant4.default)(params.noteId, "noteId not found"), await deleteNote2({ userId, id: params.noteId }), (0, import_node18.redirect)("/notes");
};
function NoteDetailsPage2() {
  let data = (0, import_react31.useLoaderData)(), container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }, item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_framer_motion10.motion.ul, { variants: container, initial: "hidden", animate: "show", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "bg-custom-newColor mx-0 my-4  w-full  max-w-sm rounded-lg border border-gray-200 px-4 py-2 shadow shadow-lg transition duration-300 ease-in-out hover:translate-x-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_framer_motion10.motion.li, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h2", { className: "mb-2 block py-6 text-xl  font-bold text-white  ", children: data.note.title }, void 0, !1, {
        fileName: "app/routes/notes/$noteId.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/notes/$noteId.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_framer_motion10.motion.li, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "mb-2 block py-6  text-lg font-bold text-white", children: data.note.body }, void 0, !1, {
        fileName: "app/routes/notes/$noteId.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/notes/$noteId.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/notes/$noteId.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("hr", { className: "my-4" }, void 0, !1, {
      fileName: "app/routes/notes/$noteId.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react31.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "hover:bg-custom-newColor focus:bg-custom-newColor  rounded bg-teal-400 px-4 py-2 font-bold text-white",
        children: "Delete"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/notes/$noteId.tsx",
        lineNumber: 70,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/notes/$noteId.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes/$noteId.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/notes/$noteId.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
function ErrorBoundary3({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.message
  ] }, void 0, !0, {
    fileName: "app/routes/notes/$noteId.tsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
}
function CatchBoundary2() {
  let caught = (0, import_react31.useCatch)();
  if (caught.status === 404)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: "Note not found" }, void 0, !1, {
      fileName: "app/routes/notes/$noteId.tsx",
      lineNumber: 92,
      columnNumber: 12
    }, this);
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

// app/routes/notes/index.tsx
var notes_exports2 = {};
__export(notes_exports2, {
  default: () => NoteIndexPage
});
var import_react32 = require("@remix-run/react"), import_framer_motion11 = require("framer-motion"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function NoteIndexPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    import_framer_motion11.motion.div,
    {
      initial: { opacity: 0, x: "-2vh" },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-xl", children: [
          "No note selected. Select a note on the left, or",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react32.Link, { to: "new", className: "text-custom-newColor font-bold underline", children: "create a new note." }, void 0, !1, {
            fileName: "app/routes/notes/index.tsx",
            lineNumber: 14,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/notes/index.tsx",
          lineNumber: 12,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", {}, void 0, !1, {
          fileName: "app/routes/notes/index.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/notes/index.tsx",
      lineNumber: 7,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/notes/index.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/notes/new.tsx
var new_exports2 = {};
__export(new_exports2, {
  action: () => action11,
  default: () => NewNotePage
});
var import_node19 = require("@remix-run/node"), import_react33 = require("@remix-run/react"), React8 = __toESM(require("react"));
var import_framer_motion12 = require("framer-motion"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), action11 = async ({ request }) => {
  let userId = await requireUserId(request), formData = await request.formData(), title = formData.get("title"), body = formData.get("body");
  if (typeof title != "string" || title.length === 0)
    return (0, import_node19.json)(
      { errors: { title: "Title is required" } },
      { status: 400 }
    );
  if (typeof body != "string" || body.length === 0)
    return (0, import_node19.json)(
      { errors: { body: "Body is required" } },
      { status: 400 }
    );
  let note = await createNote({ title, body, userId });
  return (0, import_node19.redirect)(`/notes/${note.id}`);
};
function NewNotePage() {
  var _a, _b, _c, _d, _e, _f;
  let actionData = (0, import_react33.useActionData)(), titleRef = React8.useRef(null), bodyRef = React8.useRef(null);
  return React8.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.title ? (_b2 = titleRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.body && ((_d2 = bodyRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    import_framer_motion12.motion.div,
    {
      initial: { opacity: 0, x: "-2vh" },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_react33.Form,
        {
          method: "post",
          style: {
            display: "flex",
            flexDirection: "column",
            gap: 8,
            width: "100%"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { className: "mb-2 block flex w-full flex-col gap-1 font-bold text-gray-700", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: "Title: " }, void 0, !1, {
                  fileName: "app/routes/notes/new.tsx",
                  lineNumber: 73,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                  "input",
                  {
                    ref: titleRef,
                    name: "title",
                    className: "border-custom-newColor focus:shadow-outline w-full flex-1 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none",
                    "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.title ? !0 : void 0,
                    "aria-errormessage": (_b = actionData == null ? void 0 : actionData.errors) != null && _b.title ? "title-error" : void 0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/notes/new.tsx",
                    lineNumber: 74,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/notes/new.tsx",
                lineNumber: 72,
                columnNumber: 11
              }, this),
              ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.title }, void 0, !1, {
                fileName: "app/routes/notes/new.tsx",
                lineNumber: 85,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/notes/new.tsx",
              lineNumber: 71,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { className: "mb-2 block flex w-full flex-col gap-1 font-bold text-gray-700", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: "Body: " }, void 0, !1, {
                  fileName: "app/routes/notes/new.tsx",
                  lineNumber: 93,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                  "textarea",
                  {
                    ref: bodyRef,
                    name: "body",
                    rows: 8,
                    className: "border-custom-newColor focus:shadow-outline w-full flex-1 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none",
                    "aria-invalid": (_d = actionData == null ? void 0 : actionData.errors) != null && _d.body ? !0 : void 0,
                    "aria-errormessage": (_e = actionData == null ? void 0 : actionData.errors) != null && _e.body ? "body-error" : void 0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/notes/new.tsx",
                    lineNumber: 94,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/notes/new.tsx",
                lineNumber: 92,
                columnNumber: 11
              }, this),
              ((_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.body) && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "pt-1 text-red-700", id: "body-error", children: actionData.errors.body }, void 0, !1, {
                fileName: "app/routes/notes/new.tsx",
                lineNumber: 106,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/notes/new.tsx",
              lineNumber: 91,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              "button",
              {
                type: "submit",
                className: "bg-custom-newColor focus:bg--teal-400 rounded px-4 py-2 font-bold text-white hover:bg-teal-400",
                children: "Save"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/notes/new.tsx",
                lineNumber: 113,
                columnNumber: 11
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/notes/new.tsx",
              lineNumber: 112,
              columnNumber: 9
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/notes/new.tsx",
          lineNumber: 62,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/routes/notes/new.tsx",
      lineNumber: 57,
      columnNumber: 5
    },
    this
  );
}

// app/routes/posts/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostsRoute2,
  loader: () => loader14
});
var import_marked = require("marked"), import_react34 = require("@remix-run/react");
var import_react35 = require("@remix-run/react");
var import_node20 = require("@remix-run/node");
var import_tiny_invariant5 = __toESM(require("tiny-invariant")), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), loader14 = async ({ params }) => {
  let { slug } = params;
  (0, import_tiny_invariant5.default)(slug, "slug is required");
  let post = await getPost(slug);
  (0, import_tiny_invariant5.default)(post, `post not found: ${slug}`);
  let html = (0, import_marked.marked)(post.markdown), formattedDate = post.date.split("-"), newDate = formattedDate[1] + "-" + formattedDate[2] + "-" + formattedDate[0];
  return (0, import_node20.json)({
    title: post.title,
    slug: post.slug,
    newDate,
    address: post.address,
    html,
    jobAppLink: post.jobAppLink,
    appStatus: post.appStatus
  });
};
function PostsRoute2() {
  let user = useOptionalUser(), username = useUser(), { title, slug, newDate, address, html, jobAppLink, appStatus } = (0, import_react35.useLoaderData)(), jobTitle = slug.split("-")[0];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("main", { className: " flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("header", { className: "flex flex-col items-center justify-between bg-teal-400 p-4 text-white md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "mb-4 text-3xl font-bold md:mb-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react34.Link, { to: ".", children: "Post" }, void 0, !1, {
          fileName: "app/routes/posts/$slug.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        " ",
        title
      ] }, void 0, !0, {
        fileName: "app/routes/posts/$slug.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("button", { className: "sm:hidden", children: [
        " ",
        user ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          import_react34.Link,
          {
            to: "/notes",
            className: "mb-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4  py-3 text-base font-medium text-black shadow-sm hover:bg-black hover:text-white sm:px-8 md:mb-0",
            children: "View Notes"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/posts/$slug.tsx",
            lineNumber: 59,
            columnNumber: 13
          },
          this
        ) : null
      ] }, void 0, !0, {
        fileName: "app/routes/posts/$slug.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("button", { className: "sm:hidden", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        import_react34.Link,
        {
          to: "/posts",
          className: "mb-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4  py-3 text-base font-medium text-black shadow-sm hover:bg-black hover:text-white sm:px-8 md:mb-0",
          children: "View Posts"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/posts/$slug.tsx",
          lineNumber: 69,
          columnNumber: 13
        },
        this
      ) : null }, void 0, !1, {
        fileName: "app/routes/posts/$slug.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react34.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "m-2 rounded bg-white px-4 py-2 font-medium text-black hover:bg-black hover:text-white active:bg-black",
          children: "Logout"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/posts/$slug.tsx",
          lineNumber: 78,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/posts/$slug.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: username.email }, void 0, !1, {
        fileName: "app/routes/posts/$slug.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts/$slug.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "bg-custom-newColor dark mx-auto  max-w-2xl rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: " p-6 text-center font-bold text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("article", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "my-6 border-b-2 text-center text-3xl font-bold", children: title }, void 0, !1, {
        fileName: "app/routes/posts/$slug.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "my-6  text-center text-2xl font-bold text-blue-400", children: [
        "Job Title: ",
        " ",
        jobTitle
      ] }, void 0, !0, {
        fileName: "app/routes/posts/$slug.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "my-6  text-center text-2xl font-bold text-blue-400", children: [
        "Date Applied: ",
        " ",
        `${newDate}`
      ] }, void 0, !0, {
        fileName: "app/routes/posts/$slug.tsx",
        lineNumber: 97,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-lg my-6 text-center font-bold text-blue-300", children: [
        "Status: ",
        " ",
        `${appStatus}`
      ] }, void 0, !0, {
        fileName: "app/routes/posts/$slug.tsx",
        lineNumber: 101,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "my-6 text-center text-xl font-bold text-blue-200", children: [
        "Address: ",
        " ",
        `${address}`
      ] }, void 0, !0, {
        fileName: "app/routes/posts/$slug.tsx",
        lineNumber: 105,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "a",
        {
          href: `${jobAppLink}`,
          className: "my-6 text-center text-lg font-bold  text-white",
          target: "_blank",
          children: [
            "Go to Application Website ",
            " "
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/posts/$slug.tsx",
          lineNumber: 110,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "mt-4 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "div",
        {
          className: "prose lg:prose-xl text-blue-300",
          dangerouslySetInnerHTML: { __html: html }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/posts/$slug.tsx",
          lineNumber: 118,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/posts/$slug.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts/$slug.tsx",
      lineNumber: 89,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/posts/$slug.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/posts/$slug.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts/$slug.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

// app/routes/posts/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  default: () => AdminRoute,
  loader: () => loader15
});
var import_react36 = require("@remix-run/react"), import_node21 = require("@remix-run/node");
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), loader15 = async ({ request }) => (await requireAdminUser(request), (0, import_node21.json)({ posts: await adminGetPostListings() }));
function AdminRoute() {
  let username = useUser(), { posts } = (0, import_react36.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("header", { className: "flex flex-col md:flex-row items-center justify-between bg-teal-400 p-4 text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { className: "text-3xl font-bold mb-4 md:mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Link, { to: ".", children: "Admin" }, void 0, !1, {
        fileName: "app/routes/posts/admin.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/posts/admin.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "flex items-center justify-center rounded-md border border-transparent mb-4 md:mb-0 bg-white  px-4 py-3 text-base font-medium text-black shadow-sm hover:bg-black hover:text-white sm:px-8",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Link, { to: "/posts", children: "Blog Posts" }, void 0, !1, {
            fileName: "app/routes/posts/admin.tsx",
            lineNumber: 32,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/posts/admin.tsx",
          lineNumber: 28,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "m-2 rounded bg-white py-2 px-4 text-black hover:bg-black active:bg-black hover:text-white font-medium",
          children: "Logout"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/posts/admin.tsx",
          lineNumber: 37,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/posts/admin.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "font-medium", children: username.email }, void 0, !1, {
        fileName: "app/routes/posts/admin.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts/admin.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: " my-10 mx-auto max-w-4xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex max-w-lg flex-col space-y-6 font-bold overflow-hidden rounded-lg bg-custom-newColor p-6 text-white shadow-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { className: "my-6 mb-2 border-b-2 text-center text-3xl", children: "User Posts" }, void 0, !1, {
        fileName: "app/routes/posts/admin.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid grid-cols-3 gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "text-white font-medium hover:text-blue-100", children: [
          "User Posts",
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex items-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("ol", { children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "py-4 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            import_react36.Link,
            {
              to: post.slug,
              className: "text-white underline hover:text-custom",
              children: post.title
            },
            void 0,
            !1,
            {
              fileName: "app/routes/posts/admin.tsx",
              lineNumber: 62,
              columnNumber: 27
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/posts/admin.tsx",
            lineNumber: 61,
            columnNumber: 25
          }, this) }, post.slug, !1, {
            fileName: "app/routes/posts/admin.tsx",
            lineNumber: 60,
            columnNumber: 23
          }, this)) }, void 0, !1, {
            fileName: "app/routes/posts/admin.tsx",
            lineNumber: 57,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/posts/admin.tsx",
            lineNumber: 56,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/posts/admin.tsx",
          lineNumber: 54,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: " ml-12 text-white font-medium hover:text-blue-100", children: [
          "User Id",
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex items-center", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("ol", { children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "py-4 text-blue-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
              import_react36.Link,
              {
                to: post.slug,
                className: "text-white font-medium underline hover:text-custom",
                children: post.userId
              },
              void 0,
              !1,
              {
                fileName: "app/routes/posts/admin.tsx",
                lineNumber: 82,
                columnNumber: 27
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/posts/admin.tsx",
              lineNumber: 81,
              columnNumber: 25
            }, this) }, post.slug, !1, {
              fileName: "app/routes/posts/admin.tsx",
              lineNumber: 80,
              columnNumber: 23
            }, this)) }, void 0, !1, {
              fileName: "app/routes/posts/admin.tsx",
              lineNumber: 78,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/posts/admin.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/posts/admin.tsx",
          lineNumber: 74,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("main", { className: "col-span-4 md:col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Outlet, {}, void 0, !1, {
          fileName: "app/routes/posts/admin.tsx",
          lineNumber: 96,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/posts/admin.tsx",
          lineNumber: 95,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/posts/admin.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts/admin.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/posts/admin.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts/admin.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function ErrorBoundary4({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "text-red-500", children: [
    "Oh no, something went wrong!",
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("pre", { children: error.message }, void 0, !1, {
      fileName: "app/routes/posts/admin.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts/admin.tsx",
    lineNumber: 109,
    columnNumber: 5
  }, this);
}

// app/routes/posts/admin/$slug.tsx
var slug_exports2 = {};
__export(slug_exports2, {
  CatchBoundary: () => CatchBoundary3,
  ErrorBoundary: () => ErrorBoundary5,
  action: () => action12,
  default: () => NewPostRoute,
  loader: () => loader16
});
var import_react37 = require("react"), import_react38 = require("@remix-run/react"), import_node22 = require("@remix-run/node");
var import_tiny_invariant6 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), loader16 = async ({ request, params }) => {
  if (await requireAdminUser(request), (0, import_tiny_invariant6.default)(params.slug, "slug is required"), params.slug === "new")
    return (0, import_node22.json)({});
  let post = await getPost(params.slug);
  if (!post)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node22.json)({ post });
}, action12 = async ({ request, params }) => {
  await requireAdminUser(request), (0, import_tiny_invariant6.default)(params.slug, "slug is required");
  let formData = await request.formData(), intent = formData.get("intent"), userId = await requireUserId(request);
  if (intent === "delete")
    return await deletePost(params.slug), (0, import_node22.redirect)("/posts/admin");
  let title = formData.get("title"), slug = `${formData.get("slug")}-${title}`, date = formData.get("date"), address = formData.get("address"), coordinateLat = formData.get("latitude"), coordinateLong = formData.get("longitude"), markdown = formData.get("markdown"), jobAppLink = formData.get("jobAppLink"), appStatus = formData.get("appStatus"), errors = {
    title: title ? null : "Company Name  is required",
    slug: slug ? null : "Job Title is required",
    address: address ? null : "Company Address is required",
    date: date ? null : "date is required",
    jobAppLink: jobAppLink ? null : "Job Application website link is required",
    appStatus: appStatus ? null : "Application status is required",
    coordinateLat: coordinateLat ? null : "Coordinate latitude is required",
    coordinateLong: coordinateLong ? null : "Coordinate longitude is required",
    markdown: markdown ? null : "Markdown is required"
  };
  return (typeof slug != "string" || /[\{\}\[\]\(\)\#\@\!\$\%\^\&\*\+\=\<\>\?\,\'\"\;\:\\\/]/g.test(slug)) && (errors.slug = "Please use alphanumeric characters only"), Object.values(errors).some((errorMessage) => errorMessage) ? (0, import_node22.json)(errors) : ((0, import_tiny_invariant6.default)(typeof title == "string", "title must be a string"), (0, import_tiny_invariant6.default)(typeof slug == "string", "slug must be a string"), (0, import_tiny_invariant6.default)(typeof address == "string", "address must be a string"), (0, import_tiny_invariant6.default)(typeof date == "string", "date must be a date"), (0, import_tiny_invariant6.default)(typeof jobAppLink == "string", "website address must be a string"), (0, import_tiny_invariant6.default)(
    typeof appStatus == "string",
    "Application status must be a string"
  ), (0, import_tiny_invariant6.default)(
    typeof coordinateLat == "string",
    "coordinate latitude must be a number"
  ), (0, import_tiny_invariant6.default)(
    typeof coordinateLong == "string",
    "coordinates longitude must be a number"
  ), (0, import_tiny_invariant6.default)(typeof markdown == "string", "markdown must be a string"), (0, import_tiny_invariant6.default)(typeof userId == "string", "userId must be a string"), params.slug === "new" ? await createPost({
    title,
    slug,
    address,
    date,
    jobAppLink,
    appStatus,
    coordinateLat,
    coordinateLong,
    markdown,
    userId
  }) : await updatePost(params.slug, {
    title,
    slug,
    address,
    date,
    jobAppLink,
    appStatus,
    coordinateLat,
    coordinateLong,
    markdown,
    userId
  }), (0, import_node22.redirect)("/posts/admin"));
}, inputClassName = "w-full rounded border border-gray-500 px-2 py-1 text-lg text-blue-500";
function NewPostRoute() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
  let data = (0, import_react38.useLoaderData)(), errors = (0, import_react38.useActionData)(), transition = (0, import_react38.useTransition)(), isCreating = ((_a = transition.submission) == null ? void 0 : _a.formData.get("intent")) === "create", isUpdating = ((_b = transition.submission) == null ? void 0 : _b.formData.get("intent")) === "update", isDeleting = ((_c = transition.submission) == null ? void 0 : _c.formData.get("intent")) === "delete", isNewPost = !data.post, [address, setAddress] = (0, import_react37.useState)(((_d = data.post) == null ? void 0 : _d.address) || ""), [latitude, setLatitude] = (0, import_react37.useState)(((_e = data.post) == null ? void 0 : _e.coordinateLat) || ""), [longitude, setLongitude] = (0, import_react37.useState)(((_f = data.post) == null ? void 0 : _f.coordinateLong) || ""), [statusError, setStatusError] = (0, import_react37.useState)("");
  function handleAddressChange(event) {
    let address2 = event.target.value;
    setAddress(address2);
  }
  function handleLatitudeChange(event) {
    let value = event.target.value;
    setLatitude(value);
  }
  function handleLongitudeChange(event) {
    let value = event.target.value;
    setLongitude(value);
  }
  let container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }, item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mt-4 rounded-xl bg-custom-newColor p-6 text-lg font-bold text-white shadow-lg md:mt-0 md:flex md:w-full md:max-w-none md:flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react38.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { children: [
      "Company Name:",
      " ",
      errors != null && errors.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("em", { className: "text-red-600", children: errors.title }, void 0, !1, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 211,
        columnNumber: 21
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "input",
        {
          type: "text",
          name: "title",
          id: "title",
          className: inputClassName,
          defaultValue: (_h = data.post) == null ? void 0 : _h.title
        },
        void 0,
        !1,
        {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 213,
          columnNumber: 19
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 208,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 207,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { children: [
      "Job Title:",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "input",
        {
          type: "text",
          name: "slug",
          id: "slug",
          className: inputClassName,
          defaultValue: (_i = data.post) == null ? void 0 : _i.slug.split("-")[0]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 225,
          columnNumber: 19
        },
        this
      ),
      errors != null && errors.slug ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("em", { className: "text-red-600", children: errors.slug }, void 0, !1, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 233,
        columnNumber: 21
      }, this) : null
    ] }, void 0, !0, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 223,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 222,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { children: [
      "Date Applied:",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "input",
        {
          type: "date",
          name: "date",
          id: "date",
          className: inputClassName,
          defaultValue: (_j = data.post) == null ? void 0 : _j.date,
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 241,
          columnNumber: 19
        },
        this
      ),
      errors != null && errors.date ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("em", { className: "text-red-600", children: errors.date }, void 0, !1, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 250,
        columnNumber: 21
      }, this) : null
    ] }, void 0, !0, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 239,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 238,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { children: [
      "Job Application Website Link:",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "input",
        {
          type: "text",
          name: "jobAppLink",
          id: "jobAppLink",
          className: inputClassName,
          defaultValue: (_k = data.post) == null ? void 0 : _k.jobAppLink
        },
        void 0,
        !1,
        {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 257,
          columnNumber: 19
        },
        this
      ),
      errors != null && errors.jobAppLink ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("em", { className: "text-red-600", children: errors.jobAppLink }, void 0, !1, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 265,
        columnNumber: 21
      }, this) : null
    ] }, void 0, !0, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 255,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 254,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { children: [
      "Company Address:",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "input",
        {
          type: "text",
          name: "address",
          id: "address",
          value: address ?? "",
          onChange: handleAddressChange,
          className: inputClassName,
          defaultValue: (_l = data.post) == null ? void 0 : _l.address
        },
        void 0,
        !1,
        {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 272,
          columnNumber: 19
        },
        this
      ),
      errors != null && errors.address ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("em", { className: "text-red-600", children: errors.address }, void 0, !1, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 282,
        columnNumber: 21
      }, this) : null
    ] }, void 0, !0, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 270,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 269,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { htmlFor: "coordinateLat", children: [
        "Job Coordinate Latitude:",
        " ",
        errors != null && errors.coordinateLat ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("em", { className: "text-red-600", children: errors.coordinateLat }, void 0, !1, {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 290,
          columnNumber: 21
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 287,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "input",
        {
          type: "number",
          name: "latitude",
          id: "latitude",
          value: latitude ?? "",
          onChange: handleLatitudeChange,
          className: `${inputClassName} font-mono`,
          defaultValue: (_m = data.post) == null ? void 0 : _m.coordinateLat
        },
        void 0,
        !1,
        {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 293,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 286,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { htmlFor: "coordinateLong", children: [
        "Job Coordinate Longitude:",
        " ",
        errors != null && errors.coordinateLong ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("em", { className: "text-red-600", children: errors.coordinateLong }, void 0, !1, {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 308,
          columnNumber: 21
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 305,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "input",
        {
          type: "number",
          name: "longitude",
          id: "longitude",
          value: longitude ?? "",
          onChange: handleLongitudeChange,
          className: `${inputClassName} font-mono`,
          defaultValue: (_n = data.post) == null ? void 0 : _n.coordinateLong
        },
        void 0,
        !1,
        {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 311,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 304,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
      "Job Application Status",
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { children: [
        "Applied",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "input",
          {
            type: "radio",
            name: "appStatus",
            id: "applied",
            value: "Applied",
            defaultChecked: ((_o = data.post) == null ? void 0 : _o.appStatus) === "Applied"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/posts/admin/$slug.tsx",
            lineNumber: 326,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 324,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 323,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { children: [
        "Interviewing",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "input",
          {
            type: "radio",
            name: "appStatus",
            id: "interviewing",
            value: "Interviewing",
            defaultChecked: ((_p = data.post) == null ? void 0 : _p.appStatus) === "Interviewing"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/posts/admin/$slug.tsx",
            lineNumber: 338,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 336,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 335,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { children: [
        "Hired",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "input",
          {
            type: "radio",
            name: "appStatus",
            id: "hired",
            value: "Hired",
            defaultChecked: ((_q = data.post) == null ? void 0 : _q.appStatus) === "Hired"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/posts/admin/$slug.tsx",
            lineNumber: 350,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 348,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 347,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { children: [
        "Not Selected",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "input",
          {
            type: "radio",
            name: "appStatus",
            id: "not-selected",
            value: "Not-selected",
            defaultChecked: ((_r = data.post) == null ? void 0 : _r.appStatus) === "Not-selected"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/posts/admin/$slug.tsx",
            lineNumber: 362,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 360,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 359,
        columnNumber: 17
      }, this),
      (errors == null ? void 0 : errors.appStatus) && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-red-500", children: errors.appStatus }, void 0, !1, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 372,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 321,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { htmlFor: "markdown", children: [
        "Details and Notes:",
        " ",
        errors != null && errors.markdown ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("em", { className: "text-red-600", children: errors.markdown }, void 0, !1, {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 380,
          columnNumber: 21
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 377,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "textarea",
        {
          id: "markdown",
          rows: 20,
          name: "markdown",
          className: `${inputClassName} font-mono`,
          defaultValue: (_s = data.post) == null ? void 0 : _s.markdown
        },
        void 0,
        !1,
        {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 383,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 376,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex justify-end gap-4", children: [
      isNewPost ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "button",
        {
          type: "submit",
          name: "intent",
          value: "delete",
          className: "rounded bg-red-500 py-2 px-4 text-white hover:bg-red-600 focus:bg-red-400 disabled:bg-red-300",
          disabled: isDeleting,
          children: isDeleting ? "Deleting..." : "Delete"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 393,
          columnNumber: 19
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "button",
        {
          type: "submit",
          name: "intent",
          value: isNewPost ? "create" : "update",
          className: "rounded bg-teal-400 py-2 px-4 text-white hover:bg-custom focus:bg-indigo-900 disabled:bg-gray-300",
          disabled: isCreating || isUpdating,
          children: [
            isNewPost ? isCreating ? "Creating..." : "Create Post" : null,
            isNewPost ? null : isUpdating ? "Updating..." : "Update"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 403,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 391,
      columnNumber: 15
    }, this)
  ] }, ((_g = data.post) == null ? void 0 : _g.slug) ?? "new", !0, {
    fileName: "app/routes/posts/admin/$slug.tsx",
    lineNumber: 206,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/posts/admin/$slug.tsx",
    lineNumber: 205,
    columnNumber: 11
  }, this);
}
function CatchBoundary3() {
  let caught = (0, import_react38.useCatch)(), params = (0, import_react38.useParams)();
  if (caught.status === 404)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "text-red-500", children: [
      'Uh oh! The post with the slug "',
      params.slug,
      '" does not exist!'
    ] }, void 0, !0, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 429,
      columnNumber: 7
    }, this);
  throw new Error(`Unsupported thrown response status code: ${caught.status}`);
}
function ErrorBoundary5({ error }) {
  return error instanceof Error ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "text-red-500", children: [
    "Oh no, something went wrong!",
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("pre", { children: error.message }, void 0, !1, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 442,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts/admin/$slug.tsx",
    lineNumber: 440,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "text-red-500", children: "Oh no, something went wrong!" }, void 0, !1, {
    fileName: "app/routes/posts/admin/$slug.tsx",
    lineNumber: 446,
    columnNumber: 10
  }, this);
}

// app/routes/posts/admin/index.tsx
var admin_exports2 = {};
__export(admin_exports2, {
  default: () => AdminIndexRoute
});
var import_react39 = require("@remix-run/react"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function AdminIndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react39.Link, { to: "new", className: "text-white font-medium underline hover:text-custom-spaceBlack font-bold", children: "Create a New Post" }, void 0, !1, {
    fileName: "app/routes/posts/admin/index.tsx",
    lineNumber: 11,
    columnNumber: 10
  }, this) }, void 0, !1, {
    fileName: "app/routes/posts/admin/index.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/posts/admin/index.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this);
}

// app/routes/posts/index.tsx
var posts_exports2 = {};
__export(posts_exports2, {
  default: () => PostsRoute3,
  loader: () => loader17
});
var import_react40 = require("@remix-run/react"), import_node23 = require("@remix-run/node");
var import_react41 = require("react");
var import_framer_motion13 = require("framer-motion"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), loader17 = async ({ request }) => {
  let userId = await requireUserId(request), posts = await getPostListings({ userId });
  return (0, import_node23.json)({ posts });
}, variants = {
  open: { opacity: 1, y: "30%" },
  closed: { opacity: 1, x: "0%" }
};
function PostsRoute3() {
  let { posts } = (0, import_react40.useLoaderData)(), adminUser = useOptionalAdminUser(), user = useOptionalUser(), username = useUser(), [isOpen, setIsOpen] = (0, import_react41.useState)(!1), container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2
      }
    }
  }, item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("header", { className: "flex flex-col items-center justify-between bg-teal-400 p-4 text-white md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { className: "mb-4 text-3xl font-bold md:mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react40.Link, { to: ".", children: "Job Posts" }, void 0, !1, {
        fileName: "app/routes/posts/index.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/posts/index.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("button", { className: "sm:hidden", children: [
          " ",
          user ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            import_react40.Link,
            {
              to: "/posts/user",
              className: "mb-4 mr-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4  py-2 text-base font-medium text-black shadow-sm hover:bg-black hover:text-white sm:px-8 md:mb-0",
              children: "Dashboard"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/posts/index.tsx",
              lineNumber: 57,
              columnNumber: 15
            },
            this
          ) : null
        ] }, void 0, !0, {
          fileName: "app/routes/posts/index.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("button", { className: "sm:hidden", children: [
          " ",
          user ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            import_react40.Link,
            {
              to: "/map",
              className: "mb-4  mr-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4  py-2 text-base font-medium text-black shadow-sm hover:bg-black hover:text-white sm:px-8 md:mb-0",
              children: "Map Journey"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/posts/index.tsx",
              lineNumber: 68,
              columnNumber: 15
            },
            this
          ) : null
        ] }, void 0, !0, {
          fileName: "app/routes/posts/index.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("button", { className: "sm:hidden", children: [
          " ",
          user ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            import_react40.Link,
            {
              to: "/notes",
              className: "mb-4 mr-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4  py-2 text-base font-medium text-black shadow-sm hover:bg-black hover:text-white sm:px-8 md:mb-0",
              children: "Notes"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/posts/index.tsx",
              lineNumber: 79,
              columnNumber: 15
            },
            this
          ) : null
        ] }, void 0, !0, {
          fileName: "app/routes/posts/index.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("button", { className: "sm:hidden", children: [
          " ",
          user ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            import_react40.Link,
            {
              to: "/jobappnotes",
              className: "mb-4 mr-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4  py-2 text-base font-medium text-black shadow-sm hover:bg-black hover:text-white sm:px-8 md:mb-0",
              children: "Job App Notes"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/posts/index.tsx",
              lineNumber: 90,
              columnNumber: 15
            },
            this
          ) : null
        ] }, void 0, !0, {
          fileName: "app/routes/posts/index.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react40.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "m-2  mr-4 rounded bg-white px-4 py-2 font-medium text-black hover:bg-black hover:text-white active:bg-black",
            children: "Logout"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/posts/index.tsx",
            lineNumber: 99,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/posts/index.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: " ml-4 hidden font-medium text-white md:hidden", children: username.email }, void 0, !1, {
          fileName: "app/routes/posts/index.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/posts/index.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts/index.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      "div",
      {
        className: `max-w-screen-3xl my-14 flex w-full flex-col items-center rounded bg-gradient-to-r from-indigo-900  
        to-white px-4 py-6`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_framer_motion13.motion.ul, { variants: container, initial: "hidden", animate: "show", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_framer_motion13.motion.li, { variants: item, children: adminUser ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex-col-2 mt-4 flex flex w-full max-w-3xl items-center space-y-1 rounded-lg bg-white px-4 py-6 text-center shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("a", { className: "flex items-center rounded-md bg-gray-700  px-2 py-2 text-center text-white hover:opacity-50", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-5 w-5 opacity-75",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "stroke-width": "2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                    "path",
                    {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/posts/index.tsx",
                      lineNumber: 129,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                    "path",
                    {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/posts/index.tsx",
                      lineNumber: 134,
                      columnNumber: 23
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/posts/index.tsx",
                lineNumber: 121,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react40.Link, { to: "admin", className: "m-2 text-sm font-medium ", children: [
              " ",
              "Admin",
              " "
            ] }, void 0, !0, {
              fileName: "app/routes/posts/index.tsx",
              lineNumber: 141,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/posts/index.tsx",
            lineNumber: 120,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/posts/index.tsx",
            lineNumber: 119,
            columnNumber: 17
          }, this) : null }, void 0, !1, {
            fileName: "app/routes/posts/index.tsx",
            lineNumber: 117,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_framer_motion13.motion.li, { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              import_framer_motion13.motion.nav,
              {
                animate: isOpen ? "open" : "closed",
                variants,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                  "div",
                  {
                    className: "flex-col-2 mt-4 flex flex w-full max-w-3xl items-center space-y-1 rounded-lg bg-white px-4 py-6 text-center shadow-lg",
                    onClick: () => setIsOpen((isOpen2) => !isOpen2),
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex-col-2 mt-4  flex space-y-1 hover:cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("details", { className: "group", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("summary", { className: "flex items-center rounded-md  bg-gray-700 px-2 py-2 text-white", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5 opacity-75",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                              "path",
                              {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                              },
                              void 0,
                              !1,
                              {
                                fileName: "app/routes/posts/index.tsx",
                                lineNumber: 171,
                                columnNumber: 27
                              },
                              this
                            )
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/posts/index.tsx",
                            lineNumber: 163,
                            columnNumber: 25
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "ml-3 text-sm font-medium", children: "Job Posts" }, void 0, !1, {
                          fileName: "app/routes/posts/index.tsx",
                          lineNumber: 178,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "ml-auto shrink-0 transition duration-300 group-open:-rotate-90", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                              "path",
                              {
                                "fill-rule": "evenodd",
                                d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                "clip-rule": "evenodd"
                              },
                              void 0,
                              !1,
                              {
                                fileName: "app/routes/posts/index.tsx",
                                lineNumber: 189,
                                columnNumber: 29
                              },
                              this
                            )
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/posts/index.tsx",
                            lineNumber: 183,
                            columnNumber: 27
                          },
                          this
                        ) }, void 0, !1, {
                          fileName: "app/routes/posts/index.tsx",
                          lineNumber: 182,
                          columnNumber: 25
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "app/routes/posts/index.tsx",
                        lineNumber: 162,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("ol", { className: "m-2 list-decimal", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex items-center", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                          import_react40.Link,
                          {
                            to: post.slug,
                            prefetch: "intent",
                            className: "text-black-600 font-bold underline",
                            children: post.title
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/posts/index.tsx",
                            lineNumber: 202,
                            columnNumber: 31
                          },
                          this
                        ),
                        ":",
                        " ",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                          "em",
                          {
                            className: "ml-1 rounded-sm bg-gray-100 p-1 text-center font-bold ",
                            style: {
                              color: post.appStatus === "Applied" ? "blue" : post.appStatus === "Interviewing" ? "orange" : post.appStatus === "Hired" ? "green" : post.appStatus === "Not-selected" ? "red" : ""
                            },
                            children: post.appStatus
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/posts/index.tsx",
                            lineNumber: 210,
                            columnNumber: 31
                          },
                          this
                        )
                      ] }, void 0, !0, {
                        fileName: "app/routes/posts/index.tsx",
                        lineNumber: 201,
                        columnNumber: 29
                      }, this) }, post.slug, !1, {
                        fileName: "app/routes/posts/index.tsx",
                        lineNumber: 200,
                        columnNumber: 27
                      }, this)) }, void 0, !1, {
                        fileName: "app/routes/posts/index.tsx",
                        lineNumber: 198,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/posts/index.tsx",
                      lineNumber: 161,
                      columnNumber: 21
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/posts/index.tsx",
                      lineNumber: 160,
                      columnNumber: 19
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/posts/index.tsx",
                    lineNumber: 156,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/posts/index.tsx",
                lineNumber: 152,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/posts/index.tsx",
            lineNumber: 150,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/posts/index.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/posts/index.tsx",
        lineNumber: 112,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/posts/index.tsx",
    lineNumber: 48,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/posts/index.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

// app/routes/posts/user.tsx
var user_exports = {};
__export(user_exports, {
  ErrorBoundary: () => ErrorBoundary6,
  default: () => UserRoute,
  loader: () => loader18
});
var import_react42 = require("@remix-run/react"), import_react_router_dom3 = require("react-router-dom"), import_react43 = require("react");
var import_node24 = require("@remix-run/node");
var import_framer_motion14 = require("framer-motion");

// dashboard.jpg
var dashboard_default = "/build/_assets/dashboard-XSPIPY2X.jpg";

// dashboard3.jpg
var dashboard3_default = "/build/_assets/dashboard3-FJS2G5BY.jpg";

// dashboard4.jpg
var dashboard4_default = "/build/_assets/dashboard4-PIYVRIAE.jpg";

// dashboard5.jpg
var dashboard5_default = "/build/_assets/dashboard5-4PB3YGY6.jpg";

// dashboard6.jpg
var dashboard6_default = "/build/_assets/dashboard6-BUGRA6RR.jpg";

// dashboard7.jpg
var dashboard7_default = "/build/_assets/dashboard7-AD4F7NHN.jpg";

// dashboard8.jpg
var dashboard8_default = "/build/_assets/dashboard8-62FSRG4D.jpg";

// dashboard9.jpg
var dashboard9_default = "/build/_assets/dashboard9-5EFJA4NM.jpg";

// dashboard10.jpg
var dashboard10_default = "/build/_assets/dashboard10-V43HCP2E.jpg";

// dashboard11.jpg
var dashboard11_default = "/build/_assets/dashboard11-QJXNHDCB.jpg";

// dashboard12.jpg
var dashboard12_default = "/build/_assets/dashboard12-SF2VZ35Y.jpg";

// dashboard13.jpg
var dashboard13_default = "/build/_assets/dashboard13-PXWF3VTL.jpg";

// dashboard14.jpg
var dashboard14_default = "/build/_assets/dashboard14-Q665OVUG.jpg";

// dashboard15.jpg
var dashboard15_default = "/build/_assets/dashboard15-U5EMQABU.jpg";

// dashboard16.jpg
var dashboard16_default = "/build/_assets/dashboard16-J32OVW6L.jpg";

// dashboard17.jpg
var dashboard17_default = "/build/_assets/dashboard17-NIC64KJ6.jpg";

// dashboard18.jpg
var dashboard18_default = "/build/_assets/dashboard18-ZU6SCCMD.jpg";

// dashboard19.jpg
var dashboard19_default = "/build/_assets/dashboard19-U4WQEFFC.jpg";

// dashboard20.jpg
var dashboard20_default = "/build/_assets/dashboard20-WU43YJH6.jpg";

// dashboard21.jpg
var dashboard21_default = "/build/_assets/dashboard21-UJ7VPPM5.jpg";

// dashboard22.jpg
var dashboard22_default = "/build/_assets/dashboard22-STTHWNPX.jpg";

// dashboard23.jpg
var dashboard23_default = "/build/_assets/dashboard23-Y4TSQ7PK.jpg";

// dashboard24.jpg
var dashboard24_default = "/build/_assets/dashboard24-EBBDCST5.jpg";

// dashboard25.jpg
var dashboard25_default = "/build/_assets/dashboard25-4MLAATFK.jpg";

// dashboard26.jpg
var dashboard26_default = "/build/_assets/dashboard26-S5HM4F47.jpg";

// dashboard27.jpg
var dashboard27_default = "/build/_assets/dashboard27-G2PHSCOQ.jpg";

// app/images.ts
var images = [
  { src: dashboard_default, alt: "image 1" },
  { src: dashboard_default, alt: "image 2" },
  { src: dashboard3_default, alt: "image 3" },
  { src: dashboard4_default, alt: "image 4" },
  { src: dashboard5_default, alt: "image 5" },
  { src: dashboard6_default, alt: "image 6" },
  { src: dashboard7_default, alt: "image 7" },
  { src: dashboard8_default, alt: "image 8" },
  { src: dashboard9_default, alt: "image 9" },
  { src: dashboard10_default, alt: "image 10" },
  { src: dashboard11_default, alt: "image 11" },
  { src: dashboard12_default, alt: "image 12" },
  { src: dashboard13_default, alt: "image 13" },
  { src: dashboard14_default, alt: "image 14" },
  { src: dashboard15_default, alt: "image 15" },
  { src: dashboard16_default, alt: "image 16" },
  { src: dashboard17_default, alt: "image 17" },
  { src: dashboard18_default, alt: "image 18" },
  { src: dashboard19_default, alt: "image 19" },
  { src: dashboard20_default, alt: "image 20" },
  { src: dashboard21_default, alt: "image 21" },
  { src: dashboard22_default, alt: "image 22" },
  { src: dashboard23_default, alt: "image 23" },
  { src: dashboard24_default, alt: "image 24" },
  { src: dashboard25_default, alt: "image 25" },
  { src: dashboard26_default, alt: "image 26" },
  { src: dashboard27_default, alt: "image 27" }
];

// app/routes/posts/user.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), loader18 = async ({ request }) => {
  await requireUser(request);
  let userId = await requireUserId(request);
  return (0, import_node24.json)({ posts: await getPostListings({ userId }) });
};
function getRandomImage7() {
  let randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}
function UserRoute() {
  let user = useOptionalUser(), { posts } = (0, import_react42.useLoaderData)(), username = useUser(), container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }, item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }, [randomImage, setRandomImage] = (0, import_react43.useState)(), [imageLoading, setImageLoading] = (0, import_react43.useState)(!0), imageLoaded = () => {
    setImageLoading(!1);
  };
  (0, import_react43.useEffect)(() => {
    let image = getRandomImage7();
    setRandomImage(image);
  }, []);
  function WindowFocusRevalidator() {
    let revalidator = (0, import_react_router_dom3.useRevalidator)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { hidden: revalidator.state === "idle" }, void 0, !1, {
      fileName: "app/routes/posts/user.tsx",
      lineNumber: 74,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex-col sm:overflow-x-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("header", { className: "flex flex-col items-center justify-between bg-teal-400 p-4 text-white sm:hidden md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h1", { className: "mb-4 text-3xl font-bold md:mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react42.Link, { to: ".", children: "Dashboard" }, void 0, !1, {
        fileName: "app/routes/posts/user.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/posts/user.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex flex-col  md:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "hover: mb-4 mr-4 mt-2 rounded bg-indigo-900 px-4 py-2 font-bold text-white text-white hover:bg-black active:bg-black sm:hidden md:mb-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react42.Link, { to: "/map", className: "text-md text-white-600", children: "Map Journey" }, void 0, !1, {
              fileName: "app/routes/posts/user.tsx",
              lineNumber: 88,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/posts/user.tsx",
            lineNumber: 84,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "hover: mb-4 mr-4 mt-2 rounded bg-indigo-900 px-4 py-2 font-bold text-white text-white hover:bg-black active:bg-black sm:hidden md:mb-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react42.Link, { to: "/forgot", className: "text-md text-white-600", children: "Reset Password" }, void 0, !1, {
              fileName: "app/routes/posts/user.tsx",
              lineNumber: 96,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/posts/user.tsx",
            lineNumber: 92,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "mb-4 mr-4 mt-2  rounded bg-indigo-900  px-4 py-2 font-bold text-white hover:bg-black hover:text-white active:bg-black sm:hidden md:mb-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react42.Link, { to: "/notes", className: "text-md text-white-600", children: "Notes" }, void 0, !1, {
              fileName: "app/routes/posts/user.tsx",
              lineNumber: 104,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/posts/user.tsx",
            lineNumber: 100,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "hover: mb-4 mr-4 mt-2  rounded bg-indigo-900 px-4  py-2 font-bold text-white  hover:bg-black active:bg-black sm:hidden md:mb-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react42.Link, { to: "/jobappnotes", className: "text-md text-white-600", children: "Job App Notes" }, void 0, !1, {
              fileName: "app/routes/posts/user.tsx",
              lineNumber: 112,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/posts/user.tsx",
            lineNumber: 108,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "mb-4 mr-4 mt-2 rounded bg-indigo-900 px-4 py-2 font-bold text-white hover:bg-black hover:text-white active:bg-black sm:hidden md:mb-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react42.Link, { to: "/posts", className: "text-md text-white-600", children: "Job Posts" }, void 0, !1, {
              fileName: "app/routes/posts/user.tsx",
              lineNumber: 121,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/posts/user.tsx",
            lineNumber: 117,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react42.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "button",
          {
            type: "submit",
            className: " m-2 rounded bg-indigo-900 px-4 py-2 font-bold text-white hover:bg-black hover:text-white active:bg-black md:mb-0",
            children: "Logout"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/posts/user.tsx",
            lineNumber: 126,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/posts/user.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { className: "hidden font-medium md:hidden", children: username.email }, void 0, !1, {
          fileName: "app/routes/posts/user.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/posts/user.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts/user.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("section", { className: "mx-auto mb-6 mt-4 rounded bg-[#F3F4F6] pb-0 pt-0 lg:pb-0 lg:pt-[0px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "container mx-auto max-w-4xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "-mx-4 flex flex-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "w-full px-4 md:w-full xl:w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "overflow-hidden rounded-lg bg-white", children: [
      randomImage && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        import_framer_motion14.motion.img,
        {
          initial: { opacity: 0 },
          animate: {
            opacity: imageLoading ? 0 : 1
          },
          onLoad: imageLoaded,
          transition: { delay: 0, duration: 1 },
          src: randomImage.src,
          alt: randomImage.alt,
          className: "h-full w-full"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/posts/user.tsx",
          lineNumber: 142,
          columnNumber: 19
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "-lg bg-opacity-78  mx-auto mb-10  max-w-screen-xl flex-col space-y-6 overflow-hidden rounded-b-xl bg-gradient-to-r from-teal-400 to-white p-6 font-bold text-black shadow-md", children: [
        user ? /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          import_framer_motion14.motion.ul,
          {
            variants: container,
            initial: "hidden",
            animate: "show",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_framer_motion14.motion.li, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h1", { className: "font-primary my-6 mb-2 border-b-2 text-center text-3xl", children: [
              " ",
              `${user == null ? void 0 : user.email} Job Posts`
            ] }, void 0, !0, {
              fileName: "app/routes/posts/user.tsx",
              lineNumber: 162,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/posts/user.tsx",
              lineNumber: 161,
              columnNumber: 23
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/posts/user.tsx",
            lineNumber: 156,
            columnNumber: 21
          },
          this
        ) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "grid grid-cols-4 gap-6 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("nav", { className: "from indigo-700 to purple-600 col-span-4 mb-auto flex w-full  rounded rounded bg-gray-900 bg-gradient-to-br px-5 shadow-lg md:col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("ol", { className: "mx-4 mr-4 list-decimal text-lg font-bold text-white ", children: [
            user ? posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "curser-pointer hover:scale-102  bg-custom-spaceBlack my-4 rounded text-center transition duration-300 ease-in-out  hover:transform", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("li", { className: "my-2 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
              import_react42.Link,
              {
                to: post.slug,
                className: "px-2 text-xl  font-bold  text-white ",
                onClick: WindowFocusRevalidator,
                children: post.title
              },
              void 0,
              !1,
              {
                fileName: "app/routes/posts/user.tsx",
                lineNumber: 176,
                columnNumber: 35
              },
              this
            ) }, post.slug, !1, {
              fileName: "app/routes/posts/user.tsx",
              lineNumber: 175,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/posts/user.tsx",
              lineNumber: 174,
              columnNumber: 31
            }, this)) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "my-2 mb-4 " }, void 0, !1, {
              fileName: "app/routes/posts/user.tsx",
              lineNumber: 187,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/posts/user.tsx",
            lineNumber: 171,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/posts/user.tsx",
            lineNumber: 170,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("main", { className: "col-span-4 md:col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react42.Outlet, {}, void 0, !1, {
            fileName: "app/routes/posts/user.tsx",
            lineNumber: 192,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/posts/user.tsx",
            lineNumber: 191,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/posts/user.tsx",
          lineNumber: 169,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/posts/user.tsx",
        lineNumber: 154,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts/user.tsx",
      lineNumber: 140,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/posts/user.tsx",
      lineNumber: 139,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/posts/user.tsx",
      lineNumber: 138,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/posts/user.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/posts/user.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts/user.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
function ErrorBoundary6({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "text-red-500", children: [
    "Oh no, something went wrong!",
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("pre", { children: error.message }, void 0, !1, {
      fileName: "app/routes/posts/user.tsx",
      lineNumber: 209,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts/user.tsx",
    lineNumber: 207,
    columnNumber: 5
  }, this);
}

// app/routes/posts/user/$slug.tsx
var slug_exports3 = {};
__export(slug_exports3, {
  CatchBoundary: () => CatchBoundary4,
  ErrorBoundary: () => ErrorBoundary7,
  action: () => action13,
  default: () => NewPostRoute2,
  getCoords: () => getCoords,
  loader: () => loader19
});
var import_react44 = require("react"), import_react45 = require("@remix-run/react"), import_node25 = require("@remix-run/node");
var import_tiny_invariant7 = __toESM(require("tiny-invariant"));
var import_axios = __toESM(require("axios")), import_framer_motion15 = require("framer-motion"), import_api = require("@react-google-maps/api"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), loader19 = async ({ request, params }) => {
  if (await requireUser(request), (0, import_tiny_invariant7.default)(params.slug, "slug is required"), params.slug === "new")
    return (0, import_node25.json)({});
  let post = await getPost(params.slug);
  if (!post)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node25.json)({ post });
}, action13 = async ({ request, params }) => {
  await requireUser(request), (0, import_tiny_invariant7.default)(params.slug, "slug is required");
  let formData = await request.formData(), intent = formData.get("intent"), userId = await requireUserId(request);
  if (intent === "delete")
    return await deletePost(params.slug), (0, import_node25.redirect)("/posts/user");
  let title = formData.get("title"), slug = `${formData.get("slug")}-${title}`, date = formData.get("date"), address = formData.get("address"), coordinateLat = formData.get("latitude"), coordinateLong = formData.get("longitude"), markdown = formData.get("markdown"), jobAppLink = formData.get("jobAppLink"), appStatus = formData.get("appStatus"), errors = {
    title: title ? null : "Company Name  is required",
    slug: slug ? null : "Job Title is required",
    address: address ? null : "Company Address is required",
    date: date ? null : "date is required",
    jobAppLink: jobAppLink ? null : "Job Application website link is required",
    appStatus: appStatus ? null : "Application status is required",
    coordinateLat: coordinateLat ? null : "Coordinate latitude is required",
    coordinateLong: coordinateLong ? null : "Coordinate longitude is required",
    markdown: markdown ? null : "Markdown is required"
  };
  return typeof jobAppLink == "string" && !/^https:\/\//.test(jobAppLink) && (errors.jobAppLink = "Website address must start with 'https://'"), (typeof slug != "string" || /[\{\}\[\]\(\)\#\@\!\$\%\^\&\*\+\=\<\>\?\,\'\"\;\:\\\/]/g.test(slug)) && (errors.slug = "Please use alphanumeric characters only"), Object.values(errors).some((errorMessage) => errorMessage) ? (0, import_node25.json)(errors) : ((0, import_tiny_invariant7.default)(typeof title == "string", "title must be a string"), (0, import_tiny_invariant7.default)(typeof slug == "string", "slug must be a string"), (0, import_tiny_invariant7.default)(typeof address == "string", "address must be a string"), (0, import_tiny_invariant7.default)(typeof date == "string", "date must be a date"), (0, import_tiny_invariant7.default)(typeof jobAppLink == "string", "website address must be a string"), (0, import_tiny_invariant7.default)(
    typeof appStatus == "string",
    "Application status must be a string"
  ), (0, import_tiny_invariant7.default)(
    typeof coordinateLat == "string",
    "coordinate latitude must be a number"
  ), (0, import_tiny_invariant7.default)(
    typeof coordinateLong == "string",
    "coordinates longitude must be a number"
  ), (0, import_tiny_invariant7.default)(typeof markdown == "string", "markdown must be a string"), (0, import_tiny_invariant7.default)(typeof userId == "string", "userId must be a string"), params.slug === "new" ? await createPost({
    title,
    slug,
    address,
    date,
    jobAppLink,
    appStatus,
    coordinateLat,
    coordinateLong,
    markdown,
    userId
  }) : await updatePost(params.slug, {
    title,
    slug,
    address,
    date,
    jobAppLink,
    appStatus,
    coordinateLat,
    coordinateLong,
    markdown,
    userId
  }), (0, import_node25.redirect)("/posts/user"));
}, inputClassName2 = "w-full rounded border border-gray-500 px-2 py-1 text-lg text-blue-500";
function getCoords({
  latitude,
  longitude,
  onCoordinatesChange
}) {
  let [address, setAddress] = (0, import_react44.useState)(""), [latLng, setLatLng] = (0, import_react44.useState)(null), handleAddressChange = (e) => {
    setAddress(e.target.value);
  }, container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }, item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }, [autocomplete, setAutocomplete] = (0, import_react44.useState)(null), onLoad = (autocomplete2) => {
    setAutocomplete(autocomplete2);
  }, onPlaceChanged = () => {
    if (autocomplete !== null) {
      let place = autocomplete.getPlace();
      console.log(place.formatted_address);
      let address2 = place == null ? void 0 : place.formatted_address;
      address2 && setAddress(address2);
    } else
      console.log("Autocomplete is not loaded yet!");
  }, handleFindClick = async () => {
    try {
      let result = (await import_axios.default.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=AIzaSyCe6hjfULFtLoM6SvCB5Epr43HTegwTx1o`
      )).data.results[0], { lat, lng } = result.geometry.location;
      setLatLng({ lat, lng }), onCoordinatesChange(address, lat, lng);
    } catch (error) {
      console.error(error), setLatLng(null);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_framer_motion15.motion.ul, { variants: container, initial: "hidden", animate: "show", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_framer_motion15.motion.li, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "lg bg-custom flex flex-col items-center rounded p-6 text-center text-blue-50 shadow-lg md:flex-row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react45.Form, { className: "md: mx-auto w-2/3 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h6", { className: "mb-4  w-full p-2  text-center text-xl font-bold text-white", children: "Enter Company Address for Coordinates" }, void 0, !1, {
      fileName: "app/routes/posts/user/$slug.tsx",
      lineNumber: 250,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { className: " text-md mb-8 text-center font-bold text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "mb-4 text-lg", children: "Address: " }, void 0, !1, {
        fileName: "app/routes/posts/user/$slug.tsx",
        lineNumber: 255,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_api.Autocomplete, { onLoad, onPlaceChanged, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "input",
        {
          type: "text",
          id: "autocomplete",
          className: "w-full p-2 text-center  text-blue-500 md:w-44",
          value: address,
          onChange: handleAddressChange
        },
        void 0,
        !1,
        {
          fileName: "app/routes/posts/user/$slug.tsx",
          lineNumber: 258,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/posts/user/$slug.tsx",
        lineNumber: 257,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts/user/$slug.tsx",
      lineNumber: 254,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
      "button",
      {
        className: "m-4 rounded bg-indigo-900 px-4 py-2 font-bold text-white hover:bg-teal-400",
        onClick: handleFindClick,
        children: "Find"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/posts/user/$slug.tsx",
        lineNumber: 268,
        columnNumber: 13
      },
      this
    ),
    latLng && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "lg text-center text-blue-50", children: [
      "Latitude: ",
      latLng.lat,
      ", Longitude: ",
      latLng.lng
    ] }, void 0, !0, {
      fileName: "app/routes/posts/user/$slug.tsx",
      lineNumber: 275,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts/user/$slug.tsx",
    lineNumber: 249,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/posts/user/$slug.tsx",
    lineNumber: 248,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/posts/user/$slug.tsx",
    lineNumber: 247,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/posts/user/$slug.tsx",
    lineNumber: 246,
    columnNumber: 5
  }, this);
}
function NewPostRoute2() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
  let data = (0, import_react45.useLoaderData)(), errors = (0, import_react45.useActionData)(), transition = (0, import_react45.useTransition)(), isCreating = ((_a = transition.submission) == null ? void 0 : _a.formData.get("intent")) === "create", isUpdating = ((_b = transition.submission) == null ? void 0 : _b.formData.get("intent")) === "update", isDeleting = ((_c = transition.submission) == null ? void 0 : _c.formData.get("intent")) === "delete", isNewPost = !data.post, [address, setAddress] = (0, import_react44.useState)(((_d = data.post) == null ? void 0 : _d.address) || ""), [latitude, setLatitude] = (0, import_react44.useState)(((_e = data.post) == null ? void 0 : _e.coordinateLat) || ""), [longitude, setLongitude] = (0, import_react44.useState)(((_f = data.post) == null ? void 0 : _f.coordinateLong) || ""), postRef = (0, import_react44.useRef)(null), outletRef = (0, import_react44.useRef)(null);
  function handleAddressChange(event) {
    let address2 = event.target.value;
    setAddress(address2);
  }
  function handleLatitudeChange(event) {
    let value = event.target.value;
    setLatitude(value);
  }
  function handleLongitudeChange(event) {
    let value = event.target.value;
    setLongitude(value);
  }
  let container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }, item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };
  return (0, import_react44.useEffect)(() => {
    postRef.current && postRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [postRef.current]), /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
    import_framer_motion15.motion.ul,
    {
      variants: container,
      ref: postRef,
      initial: "hidden",
      animate: "show",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_framer_motion15.motion.li, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex max-w-screen-lg flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "p-2", children: getCoords({
          address,
          latitude,
          longitude,
          onCoordinatesChange: (address2, lat, lng) => {
            setAddress(address2), setLatitude(lat), setLongitude(lng);
          }
        }) }, void 0, !1, {
          fileName: "app/routes/posts/user/$slug.tsx",
          lineNumber: 347,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
          "div",
          {
            className: "bg-custom-newColor mt-4 rounded-xl p-6 text-lg font-bold text-white shadow-lg md:mt-0 md:flex md:w-full md:max-w-none md:flex-col",
            ref: outletRef,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react45.Form, { method: "post", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { children: [
                "Company Name:",
                " ",
                errors != null && errors.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("em", { className: "text-red-600", children: errors.title }, void 0, !1, {
                  fileName: "app/routes/posts/user/$slug.tsx",
                  lineNumber: 369,
                  columnNumber: 21
                }, this) : null,
                /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "title",
                    id: "title",
                    className: inputClassName2,
                    defaultValue: (_h = data.post) == null ? void 0 : _h.title
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/posts/user/$slug.tsx",
                    lineNumber: 371,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/posts/user/$slug.tsx",
                lineNumber: 366,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/routes/posts/user/$slug.tsx",
                lineNumber: 365,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { children: [
                "Job Title:",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "slug",
                    id: "slug",
                    className: inputClassName2,
                    defaultValue: (_i = data.post) == null ? void 0 : _i.slug.split("-")[0]
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/posts/user/$slug.tsx",
                    lineNumber: 383,
                    columnNumber: 19
                  },
                  this
                ),
                errors != null && errors.slug ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("em", { className: "text-red-600", children: errors.slug }, void 0, !1, {
                  fileName: "app/routes/posts/user/$slug.tsx",
                  lineNumber: 391,
                  columnNumber: 21
                }, this) : null
              ] }, void 0, !0, {
                fileName: "app/routes/posts/user/$slug.tsx",
                lineNumber: 381,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/routes/posts/user/$slug.tsx",
                lineNumber: 380,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { children: [
                "Date Applied:",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                  "input",
                  {
                    type: "date",
                    name: "date",
                    id: "date",
                    className: inputClassName2,
                    defaultValue: (_j = data.post) == null ? void 0 : _j.date,
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/posts/user/$slug.tsx",
                    lineNumber: 399,
                    columnNumber: 19
                  },
                  this
                ),
                errors != null && errors.date ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("em", { className: "text-red-600", children: errors.date }, void 0, !1, {
                  fileName: "app/routes/posts/user/$slug.tsx",
                  lineNumber: 408,
                  columnNumber: 21
                }, this) : null
              ] }, void 0, !0, {
                fileName: "app/routes/posts/user/$slug.tsx",
                lineNumber: 397,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/routes/posts/user/$slug.tsx",
                lineNumber: 396,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { children: [
                "Job Application Website Link:",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "jobAppLink",
                    id: "jobAppLink",
                    className: inputClassName2,
                    defaultValue: (_k = data.post) == null ? void 0 : _k.jobAppLink
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/posts/user/$slug.tsx",
                    lineNumber: 415,
                    columnNumber: 19
                  },
                  this
                ),
                errors != null && errors.jobAppLink ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("em", { className: "text-red-600", children: errors.jobAppLink }, void 0, !1, {
                  fileName: "app/routes/posts/user/$slug.tsx",
                  lineNumber: 423,
                  columnNumber: 21
                }, this) : null
              ] }, void 0, !0, {
                fileName: "app/routes/posts/user/$slug.tsx",
                lineNumber: 413,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/routes/posts/user/$slug.tsx",
                lineNumber: 412,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { children: [
                "Company Address:",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "address",
                    id: "address",
                    value: address ?? "",
                    onChange: handleAddressChange,
                    className: inputClassName2,
                    defaultValue: (_l = data.post) == null ? void 0 : _l.address,
                    readOnly: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/posts/user/$slug.tsx",
                    lineNumber: 430,
                    columnNumber: 19
                  },
                  this
                ),
                errors != null && errors.address ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("em", { className: "text-red-600", children: errors.address }, void 0, !1, {
                  fileName: "app/routes/posts/user/$slug.tsx",
                  lineNumber: 441,
                  columnNumber: 21
                }, this) : null
              ] }, void 0, !0, {
                fileName: "app/routes/posts/user/$slug.tsx",
                lineNumber: 428,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/routes/posts/user/$slug.tsx",
                lineNumber: 427,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { htmlFor: "coordinateLat", children: [
                  "Job Coordinate Latitude:",
                  " ",
                  errors != null && errors.coordinateLat ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("em", { className: "text-red-600", children: errors.coordinateLat }, void 0, !1, {
                    fileName: "app/routes/posts/user/$slug.tsx",
                    lineNumber: 449,
                    columnNumber: 21
                  }, this) : null
                ] }, void 0, !0, {
                  fileName: "app/routes/posts/user/$slug.tsx",
                  lineNumber: 446,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                  "input",
                  {
                    type: "number",
                    name: "latitude",
                    id: "latitude",
                    value: latitude ?? "",
                    onChange: handleLatitudeChange,
                    className: `${inputClassName2} font-mono`,
                    defaultValue: (_m = data.post) == null ? void 0 : _m.coordinateLat,
                    readOnly: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/posts/user/$slug.tsx",
                    lineNumber: 452,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/posts/user/$slug.tsx",
                lineNumber: 445,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { htmlFor: "coordinateLong", children: [
                  "Job Coordinate Longitude:",
                  " ",
                  errors != null && errors.coordinateLong ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("em", { className: "text-red-600", children: errors.coordinateLong }, void 0, !1, {
                    fileName: "app/routes/posts/user/$slug.tsx",
                    lineNumber: 469,
                    columnNumber: 21
                  }, this) : null
                ] }, void 0, !0, {
                  fileName: "app/routes/posts/user/$slug.tsx",
                  lineNumber: 466,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                  "input",
                  {
                    type: "number",
                    name: "longitude",
                    id: "longitude",
                    value: longitude ?? "",
                    onChange: handleLongitudeChange,
                    className: `${inputClassName2} font-mono`,
                    defaultValue: (_n = data.post) == null ? void 0 : _n.coordinateLong,
                    readOnly: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/posts/user/$slug.tsx",
                    lineNumber: 472,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/posts/user/$slug.tsx",
                lineNumber: 465,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
                "Job Application Status",
                /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { children: [
                  "Applied",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                    "input",
                    {
                      type: "radio",
                      name: "appStatus",
                      id: "applied",
                      value: "Applied",
                      defaultChecked: ((_o = data.post) == null ? void 0 : _o.appStatus) === "Applied"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/posts/user/$slug.tsx",
                      lineNumber: 488,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/posts/user/$slug.tsx",
                  lineNumber: 486,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "app/routes/posts/user/$slug.tsx",
                  lineNumber: 485,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { children: [
                  "Interviewing",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                    "input",
                    {
                      type: "radio",
                      name: "appStatus",
                      id: "interviewing",
                      value: "Interviewing",
                      defaultChecked: ((_p = data.post) == null ? void 0 : _p.appStatus) === "Interviewing"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/posts/user/$slug.tsx",
                      lineNumber: 500,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/posts/user/$slug.tsx",
                  lineNumber: 498,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "app/routes/posts/user/$slug.tsx",
                  lineNumber: 497,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { children: [
                  "Hired",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                    "input",
                    {
                      type: "radio",
                      name: "appStatus",
                      id: "hired",
                      value: "Hired",
                      defaultChecked: ((_q = data.post) == null ? void 0 : _q.appStatus) === "Hired"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/posts/user/$slug.tsx",
                      lineNumber: 512,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/posts/user/$slug.tsx",
                  lineNumber: 510,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "app/routes/posts/user/$slug.tsx",
                  lineNumber: 509,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { children: [
                  "Not Selected",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                    "input",
                    {
                      type: "radio",
                      name: "appStatus",
                      id: "not-selected",
                      value: "Not-selected",
                      defaultChecked: ((_r = data.post) == null ? void 0 : _r.appStatus) === "Not-selected"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/posts/user/$slug.tsx",
                      lineNumber: 524,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/posts/user/$slug.tsx",
                  lineNumber: 522,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "app/routes/posts/user/$slug.tsx",
                  lineNumber: 521,
                  columnNumber: 17
                }, this),
                (errors == null ? void 0 : errors.appStatus) && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "text-red-500", children: errors.appStatus }, void 0, !1, {
                  fileName: "app/routes/posts/user/$slug.tsx",
                  lineNumber: 534,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/posts/user/$slug.tsx",
                lineNumber: 483,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { htmlFor: "markdown", children: [
                  "Details and Notes:",
                  " ",
                  errors != null && errors.markdown ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("em", { className: "text-red-600", children: errors.markdown }, void 0, !1, {
                    fileName: "app/routes/posts/user/$slug.tsx",
                    lineNumber: 542,
                    columnNumber: 21
                  }, this) : null
                ] }, void 0, !0, {
                  fileName: "app/routes/posts/user/$slug.tsx",
                  lineNumber: 539,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                  "textarea",
                  {
                    id: "markdown",
                    rows: 20,
                    name: "markdown",
                    className: `${inputClassName2} font-mono`,
                    defaultValue: (_s = data.post) == null ? void 0 : _s.markdown
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/posts/user/$slug.tsx",
                    lineNumber: 545,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/posts/user/$slug.tsx",
                lineNumber: 538,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex justify-end gap-4", children: [
                isNewPost ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                  "button",
                  {
                    type: "submit",
                    name: "intent",
                    value: "delete",
                    className: "rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:bg-red-400 disabled:bg-red-300",
                    disabled: isDeleting,
                    children: isDeleting ? "Deleting..." : "Delete"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/posts/user/$slug.tsx",
                    lineNumber: 555,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                  "button",
                  {
                    type: "submit",
                    name: "intent",
                    value: isNewPost ? "create" : "update",
                    className: "hover:bg-custom rounded bg-teal-400 px-4 py-2 text-white focus:bg-indigo-900 disabled:bg-gray-300",
                    disabled: isCreating || isUpdating,
                    children: [
                      isNewPost ? isCreating ? "Creating..." : "Create Post" : null,
                      isNewPost ? null : isUpdating ? "Updating..." : "Update"
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/posts/user/$slug.tsx",
                    lineNumber: 565,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/posts/user/$slug.tsx",
                lineNumber: 553,
                columnNumber: 15
              }, this)
            ] }, ((_g = data.post) == null ? void 0 : _g.slug) ?? "new", !0, {
              fileName: "app/routes/posts/user/$slug.tsx",
              lineNumber: 364,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/posts/user/$slug.tsx",
            lineNumber: 360,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/posts/user/$slug.tsx",
        lineNumber: 346,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/posts/user/$slug.tsx",
        lineNumber: 345,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/posts/user/$slug.tsx",
      lineNumber: 339,
      columnNumber: 5
    },
    this
  );
}
function CatchBoundary4() {
  let caught = (0, import_react45.useCatch)(), params = (0, import_react45.useParams)();
  if (caught.status === 404)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "text-red-500", children: [
      'Uh oh! The post with the slug "',
      params.slug,
      '" does not exist!'
    ] }, void 0, !0, {
      fileName: "app/routes/posts/user/$slug.tsx",
      lineNumber: 592,
      columnNumber: 7
    }, this);
  throw new Error(`Unsupported thrown response status code: ${caught.status}`);
}
function ErrorBoundary7({ error }) {
  return error instanceof Error ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "text-red-500", children: [
    "Oh no, something went wrong!",
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("pre", { children: error.message }, void 0, !1, {
      fileName: "app/routes/posts/user/$slug.tsx",
      lineNumber: 605,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts/user/$slug.tsx",
    lineNumber: 603,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "text-red-500", children: "Oh no, something went wrong!" }, void 0, !1, {
    fileName: "app/routes/posts/user/$slug.tsx",
    lineNumber: 609,
    columnNumber: 10
  }, this);
}

// app/routes/posts/user/index.tsx
var user_exports2 = {};
__export(user_exports2, {
  default: () => UserIndexRoute
});
var import_react46 = require("@remix-run/react"), import_framer_motion16 = require("framer-motion"), import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function UserIndexRoute() {
  let container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }, item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_framer_motion16.motion.ul, { variants: container, initial: "hidden", animate: "show", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_framer_motion16.motion.li, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react46.Link, { to: "new", className: "text-xl text-white hover:text-custom-newColor", children: "Create a New Post" }, void 0, !1, {
    fileName: "app/routes/posts/user/index.tsx",
    lineNumber: 23,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/posts/user/index.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/posts/user/index.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/posts/user/index.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-T7EDZA2Q.js", imports: ["/build/_shared/chunk-YEID6IW6.js", "/build/_shared/chunk-YYBX7GHC.js", "/build/_shared/chunk-RODUX5XG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-PR6NWS6J.js", imports: ["/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/PasswordResetSuccess": { id: "routes/PasswordResetSuccess", parentId: "root", path: "PasswordResetSuccess", index: void 0, caseSensitive: void 0, module: "/build/routes/PasswordResetSuccess-OGAOABLW.js", imports: ["/build/_shared/chunk-ODH2NS7P.js", "/build/_shared/chunk-AUJITS7P.js", "/build/_shared/chunk-K6WIK5TA.js", "/build/_shared/chunk-CDIATO7R.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/PasswordResetSuccess/index": { id: "routes/PasswordResetSuccess/index", parentId: "root", path: "PasswordResetSuccess", index: !0, caseSensitive: void 0, module: "/build/routes/PasswordResetSuccess/index-2L55USOH.js", imports: ["/build/_shared/chunk-ODH2NS7P.js", "/build/_shared/chunk-AUJITS7P.js", "/build/_shared/chunk-K6WIK5TA.js", "/build/_shared/chunk-CDIATO7R.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cookie": { id: "routes/cookie", parentId: "root", path: "cookie", index: void 0, caseSensitive: void 0, module: "/build/routes/cookie-3N6546L4.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/forgot": { id: "routes/forgot", parentId: "root", path: "forgot", index: void 0, caseSensitive: void 0, module: "/build/routes/forgot-R6NHTTZV.js", imports: ["/build/_shared/chunk-UHX2GAPF.js", "/build/_shared/chunk-K6WIK5TA.js", "/build/_shared/chunk-CDIATO7R.js", "/build/_shared/chunk-4KL7V6EI.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-JPGQFBOZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-WRO3XCF6.js", imports: ["/build/_shared/chunk-YD2CFXBM.js", "/build/_shared/chunk-K6WIK5TA.js", "/build/_shared/chunk-CDIATO7R.js", "/build/_shared/chunk-4KL7V6EI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jobappnotes": { id: "routes/jobappnotes", parentId: "root", path: "jobappnotes", index: void 0, caseSensitive: void 0, module: "/build/routes/jobappnotes-2GVPU6GY.js", imports: ["/build/_shared/chunk-RRUPSDWX.js", "/build/_shared/chunk-YD2CFXBM.js", "/build/_shared/chunk-4KL7V6EI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jobappnotes/$jobappnoteId": { id: "routes/jobappnotes/$jobappnoteId", parentId: "routes/jobappnotes", path: ":jobappnoteId", index: void 0, caseSensitive: void 0, module: "/build/routes/jobappnotes/$jobappnoteId-755H4MJZ.js", imports: ["/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-CDIATO7R.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/jobappnotes/index": { id: "routes/jobappnotes/index", parentId: "routes/jobappnotes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/jobappnotes/index-PCXOTOQG.js", imports: ["/build/_shared/chunk-CDIATO7R.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jobappnotes/new": { id: "routes/jobappnotes/new", parentId: "routes/jobappnotes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/jobappnotes/new-YOARHRBJ.js", imports: ["/build/_shared/chunk-CDIATO7R.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/join": { id: "routes/join", parentId: "root", path: "join", index: void 0, caseSensitive: void 0, module: "/build/routes/join-D75TCSTY.js", imports: ["/build/_shared/chunk-YD2CFXBM.js", "/build/_shared/chunk-UHX2GAPF.js", "/build/_shared/chunk-K6WIK5TA.js", "/build/_shared/chunk-CDIATO7R.js", "/build/_shared/chunk-4KL7V6EI.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-IISKTPJF.js", imports: ["/build/_shared/chunk-YD2CFXBM.js", "/build/_shared/chunk-UHX2GAPF.js", "/build/_shared/chunk-K6WIK5TA.js", "/build/_shared/chunk-CDIATO7R.js", "/build/_shared/chunk-4KL7V6EI.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-3CW5ZZI5.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/map": { id: "routes/map", parentId: "root", path: "map", index: void 0, caseSensitive: void 0, module: "/build/routes/map-WFUD66NT.js", imports: ["/build/_shared/chunk-QLSZR4EG.js", "/build/_shared/chunk-KOFPMDLO.js", "/build/_shared/chunk-YD2CFXBM.js", "/build/_shared/chunk-4KL7V6EI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/map/index": { id: "routes/map/index", parentId: "root", path: "map", index: !0, caseSensitive: void 0, module: "/build/routes/map/index-B7HQER3J.js", imports: ["/build/_shared/chunk-QLSZR4EG.js", "/build/_shared/chunk-KOFPMDLO.js", "/build/_shared/chunk-YD2CFXBM.js", "/build/_shared/chunk-4KL7V6EI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-RIER7IKB.js", imports: ["/build/_shared/chunk-EI3GZ464.js", "/build/_shared/chunk-YD2CFXBM.js", "/build/_shared/chunk-4KL7V6EI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes/$noteId": { id: "routes/notes/$noteId", parentId: "routes/notes", path: ":noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes/$noteId-TEYCY3OL.js", imports: ["/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-CDIATO7R.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/notes/index": { id: "routes/notes/index", parentId: "routes/notes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/notes/index-C7RQB7RX.js", imports: ["/build/_shared/chunk-CDIATO7R.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes/new": { id: "routes/notes/new", parentId: "routes/notes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/notes/new-B75KTYEF.js", imports: ["/build/_shared/chunk-CDIATO7R.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/password-reset": { id: "routes/password-reset", parentId: "root", path: "password-reset", index: void 0, caseSensitive: void 0, module: "/build/routes/password-reset-WBLZ3QTN.js", imports: ["/build/_shared/chunk-E6MMPLEU.js", "/build/_shared/chunk-AUJITS7P.js", "/build/_shared/chunk-YD2CFXBM.js", "/build/_shared/chunk-UHX2GAPF.js", "/build/_shared/chunk-K6WIK5TA.js", "/build/_shared/chunk-CDIATO7R.js", "/build/_shared/chunk-4KL7V6EI.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/password-reset/index": { id: "routes/password-reset/index", parentId: "root", path: "password-reset", index: !0, caseSensitive: void 0, module: "/build/routes/password-reset/index-I4YEW4YC.js", imports: ["/build/_shared/chunk-E6MMPLEU.js", "/build/_shared/chunk-AUJITS7P.js", "/build/_shared/chunk-YD2CFXBM.js", "/build/_shared/chunk-UHX2GAPF.js", "/build/_shared/chunk-K6WIK5TA.js", "/build/_shared/chunk-CDIATO7R.js", "/build/_shared/chunk-4KL7V6EI.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts": { id: "routes/posts", parentId: "root", path: "posts", index: void 0, caseSensitive: void 0, module: "/build/routes/posts-REXIH7Q2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/posts/$slug": { id: "routes/posts/$slug", parentId: "routes/posts", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/$slug-YHF52VLI.js", imports: ["/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-KOFPMDLO.js", "/build/_shared/chunk-4KL7V6EI.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/admin": { id: "routes/posts/admin", parentId: "routes/posts", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/admin-JVSTIGVI.js", imports: ["/build/_shared/chunk-KOFPMDLO.js", "/build/_shared/chunk-YD2CFXBM.js", "/build/_shared/chunk-4KL7V6EI.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/posts/admin/$slug": { id: "routes/posts/admin/$slug", parentId: "routes/posts/admin", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/admin/$slug-XY3MZQI6.js", imports: ["/build/_shared/chunk-AUYLHJJM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/posts/admin/index": { id: "routes/posts/admin/index", parentId: "routes/posts/admin", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/posts/admin/index-6XSZIM3O.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/index": { id: "routes/posts/index", parentId: "routes/posts", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/posts/index-PBFDQMEI.js", imports: ["/build/_shared/chunk-KOFPMDLO.js", "/build/_shared/chunk-YD2CFXBM.js", "/build/_shared/chunk-CDIATO7R.js", "/build/_shared/chunk-4KL7V6EI.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/user": { id: "routes/posts/user", parentId: "routes/posts", path: "user", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/user-AV6PD35K.js", imports: ["/build/_shared/chunk-KOFPMDLO.js", "/build/_shared/chunk-YD2CFXBM.js", "/build/_shared/chunk-CDIATO7R.js", "/build/_shared/chunk-4KL7V6EI.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/posts/user/$slug": { id: "routes/posts/user/$slug", parentId: "routes/posts/user", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/user/$slug-TPEZJSPJ.js", imports: ["/build/_shared/chunk-AUYLHJJM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/posts/user/index": { id: "routes/posts/user/index", parentId: "routes/posts/user", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/posts/user/index-UN62NK2N.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "1d54faee", hmr: void 0, url: "/build/manifest-1D54FAEE.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "./public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/PasswordResetSuccess": {
    id: "routes/PasswordResetSuccess",
    parentId: "root",
    path: "PasswordResetSuccess",
    index: void 0,
    caseSensitive: void 0,
    module: PasswordResetSuccess_exports
  },
  "routes/password-reset": {
    id: "routes/password-reset",
    parentId: "root",
    path: "password-reset",
    index: void 0,
    caseSensitive: void 0,
    module: password_reset_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/jobappnotes": {
    id: "routes/jobappnotes",
    parentId: "root",
    path: "jobappnotes",
    index: void 0,
    caseSensitive: void 0,
    module: jobappnotes_exports
  },
  "routes/cookie": {
    id: "routes/cookie",
    parentId: "root",
    path: "cookie",
    index: void 0,
    caseSensitive: void 0,
    module: cookie_exports
  },
  "routes/forgot": {
    id: "routes/forgot",
    parentId: "root",
    path: "forgot",
    index: void 0,
    caseSensitive: void 0,
    module: forgot_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/join": {
    id: "routes/join",
    parentId: "root",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
  },
  "routes/map": {
    id: "routes/map",
    parentId: "root",
    path: "map",
    index: void 0,
    caseSensitive: void 0,
    module: map_exports
  },
  "routes/PasswordResetSuccess/index": {
    id: "routes/PasswordResetSuccess/index",
    parentId: "root",
    path: "PasswordResetSuccess",
    index: !0,
    caseSensitive: void 0,
    module: PasswordResetSuccess_exports
  },
  "routes/password-reset/index": {
    id: "routes/password-reset/index",
    parentId: "root",
    path: "password-reset",
    index: !0,
    caseSensitive: void 0,
    module: password_reset_exports
  },
  "routes/jobappnotes/$jobappnoteId": {
    id: "routes/jobappnotes/$jobappnoteId",
    parentId: "routes/jobappnotes",
    path: ":jobappnoteId",
    index: void 0,
    caseSensitive: void 0,
    module: jobappnoteId_exports
  },
  "routes/jobappnotes/index": {
    id: "routes/jobappnotes/index",
    parentId: "routes/jobappnotes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: jobappnotes_exports2
  },
  "routes/jobappnotes/new": {
    id: "routes/jobappnotes/new",
    parentId: "routes/jobappnotes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/map/index": {
    id: "routes/map/index",
    parentId: "root",
    path: "map",
    index: !0,
    caseSensitive: void 0,
    module: map_exports
  },
  "routes/notes/$noteId": {
    id: "routes/notes/$noteId",
    parentId: "routes/notes",
    path: ":noteId",
    index: void 0,
    caseSensitive: void 0,
    module: noteId_exports
  },
  "routes/notes/index": {
    id: "routes/notes/index",
    parentId: "routes/notes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: notes_exports2
  },
  "routes/notes/new": {
    id: "routes/notes/new",
    parentId: "routes/notes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports2
  },
  "routes/posts/$slug": {
    id: "routes/posts/$slug",
    parentId: "routes/posts",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/posts/admin": {
    id: "routes/posts/admin",
    parentId: "routes/posts",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/posts/admin/$slug": {
    id: "routes/posts/admin/$slug",
    parentId: "routes/posts/admin",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports2
  },
  "routes/posts/admin/index": {
    id: "routes/posts/admin/index",
    parentId: "routes/posts/admin",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: admin_exports2
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "routes/posts",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: posts_exports2
  },
  "routes/posts/user": {
    id: "routes/posts/user",
    parentId: "routes/posts",
    path: "user",
    index: void 0,
    caseSensitive: void 0,
    module: user_exports
  },
  "routes/posts/user/$slug": {
    id: "routes/posts/user/$slug",
    parentId: "routes/posts/user",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports3
  },
  "routes/posts/user/index": {
    id: "routes/posts/user/index",
    parentId: "routes/posts/user",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
