import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Link, Outlet, createMemoryRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Star } from "lucide-react";
const AmazonLogo = ({ className, fill = "#221f1f" }) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: "0 0 603 182",
      preserveAspectRatio: "xMidYMid meet",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-label": "Amazon Logo",
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "m 374.00642,142.18404 c -34.99948,25.79739 -85.72909,39.56123 -129.40634,39.56123 -61.24255,0 -116.37656,-22.65135 -158.08757,-60.32496 -3.2771,-2.96252 -0.34083,-6.9999 3.59171,-4.69283 45.01431,26.19064 100.67269,41.94697 158.16623,41.94697 38.774689,0 81.4295,-8.02237 120.6499,-24.67006 5.92501,-2.51683 10.87999,3.88009 5.08607,8.17965",
            fill: "#ff6200"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "m 388.55678,125.53635 c -4.45688,-5.71527 -29.57261,-2.70033 -40.84585,-1.36327 -3.43442,0.41947 -3.95874,-2.56925 -0.86517,-4.71905 20.00346,-14.07844 52.82696,-10.01483 56.65462,-5.2958 3.82764,4.74526 -0.99624,37.64741 -19.79373,53.35128 -2.88385,2.41195 -5.63662,1.12734 -4.35198,-2.07113 4.2209,-10.53917 13.68519,-34.16054 9.20211,-39.90203",
            fill: "#ff6200"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M 348.49744,20.06598 V 6.38079 c 0,-2.07113 1.57301,-3.46062 3.46062,-3.46062 h 61.26875 c 1.96628,0 3.53929,1.41571 3.53929,3.46062 v 11.71893 c -0.0262,1.96626 -1.67788,4.53551 -4.61418,8.59912 l -31.74859,45.32893 c 11.79759,-0.28837 24.25059,1.46814 34.94706,7.49802 2.41195,1.36327 3.06737,3.35575 3.25089,5.32203 V 99.4506 c 0,1.99248 -2.20222,4.32576 -4.5093,3.1198 -18.84992,-9.88376 -43.887,-10.95865 -64.72939,0.10487 -2.12356,1.15354 -4.35199,-1.15354 -4.35199,-3.14602 V 85.66054 c 0,-2.22843 0.0262,-6.02989 2.25463,-9.41186 l 36.78224,-52.74829 h -32.01076 c -1.96626,0 -3.53927,-1.38948 -3.53927,-3.43441",
            fill
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "m 124.99883,105.45424 h -18.64017 c -1.78273,-0.13107 -3.19845,-1.46813 -3.32954,-3.17224 V 6.61676 c 0,-1.91383 1.59923,-3.43442 3.59171,-3.43442 h 17.38176 c 1.80898,0.0786 3.25089,1.46814 3.38199,3.19845 v 12.50545 h 0.34082 c 4.53551,-12.08598 13.05597,-17.7226 24.53896,-17.7226 11.66649,0 18.95477,5.63662 24.19814,17.7226 4.5093,-12.08598 14.76008,-17.7226 25.74495,-17.7226 7.81262,0 16.35931,3.22467 21.57646,10.46052 5.89879,8.04857 4.69281,19.74128 4.69281,29.99208 l -0.0262,60.37739 c 0,1.91383 -1.59923,3.46061 -3.59171,3.46061 h -18.61397 c -1.86138,-0.13107 -3.35574,-1.62543 -3.35574,-3.46061 V 51.29025 c 0,-4.03739 0.36702,-14.10466 -0.52434,-17.93233 -1.38949,-6.42311 -5.55797,-8.23209 -10.95865,-8.23209 -4.5093,0 -9.22833,3.01494 -11.14216,7.83885 -1.91383,4.8239 -1.73031,12.89867 -1.73031,18.32557 v 50.70338 c 0,1.91383 -1.59923,3.46061 -3.59171,3.46061 h -18.61395 c -1.88761,-0.13107 -3.35576,-1.62543 -3.35576,-3.46061 L 152.946,51.29025 c 0,-10.67025 1.75651,-26.37415 -11.48298,-26.37415 -13.39682,0 -12.87248,15.31063 -12.87248,26.37415 v 50.70338 c 0,1.91383 -1.59923,3.46061 -3.59171,3.46061",
            fill
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "m 469.51439,1.16364 c 27.65877,0 42.62858,23.75246 42.62858,53.95427 0,29.17934 -16.54284,52.32881 -42.62858,52.32881 -27.16066,0 -41.94697,-23.75246 -41.94697,-53.35127 0,-29.78234 14.96983,-52.93181 41.94697,-52.93181 m 0.15729,19.53156 c -13.73761,0 -14.60278,18.71881 -14.60278,30.38532 0,11.69271 -0.18352,36.65114 14.44549,36.65114 14.44548,0 15.12712,-20.13452 15.12712,-32.40403 0,-8.07477 -0.34082,-17.72257 -2.779,-25.3779 -2.09735,-6.65906 -6.26581,-9.25453 -12.19083,-9.25453",
            fill
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M 548.00762,105.45424 H 529.4461 c -1.86141,-0.13107 -3.35577,-1.62543 -3.35577,-3.46061 l -0.0262,-95.69149 c 0.1573,-1.75653 1.7041,-3.1198 3.59171,-3.1198 h 17.27691 c 1.62543,0.0786 2.96249,1.17976 3.32954,2.67412 v 14.62899 h 0.3408 c 5.21717,-13.0822 12.53165,-19.32181 25.40412,-19.32181 8.36317,0 16.51662,3.01494 21.75999,11.27324 4.87633,7.65532 4.87633,20.5278 4.87633,29.78233 v 60.22011 c -0.20973,1.67786 -1.75653,3.01492 -3.59169,3.01492 h -18.69262 c -1.70411,-0.13107 -3.11982,-1.38948 -3.30332,-3.01492 V 50.47753 c 0,-10.46052 1.20597,-25.77117 -11.66651,-25.77117 -4.5355,0 -8.70399,3.04117 -10.77512,7.65532 -2.62167,5.84637 -2.96249,11.66651 -2.96249,18.11585 v 51.5161 c -0.0262,1.91383 -1.65166,3.46061 -3.64414,3.46061",
            fill
          }
        ),
        /* @__PURE__ */ jsx("use", { xlinkHref: "#path30", transform: "translate(244.36719)" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            id: "path30",
            d: "M 55.288261,59.75829 V 55.7209 c -13.475471,0 -27.711211,2.88385 -27.711211,18.77125 0,8.04857 4.16847,13.50169 11.32567,13.50169 5.24337,0 9.93618,-3.22467 12.8987,-8.46805 3.670341,-6.44935 3.486841,-12.50544 3.486841,-19.7675 m 18.79747,45.43378 c -1.23219,1.10111 -3.01495,1.17976 -4.40444,0.4457 -6.18716,-5.1385 -7.28828,-7.52423 -10.69647,-12.42678 -10.224571,10.4343 -17.460401,13.55409 -30.726141,13.55409 -15.67768,0 -27.89471,-9.67401 -27.89471,-29.04824 0,-15.12713 8.20587,-25.43035 19.87236,-30.46398 10.1197,-4.45688 24.25058,-5.24337 35.051931,-6.47556 v -2.41195 c 0,-4.43066 0.34082,-9.67403 -2.25465,-13.50167 -2.280881,-3.43442 -6.632861,-4.85013 -10.460531,-4.85013 -7.10475,0 -13.44924,3.64414 -14.99603,11.19459 -0.31461,1.67789 -1.5468,3.32955 -3.22467,3.4082 L 6.26276,32.67628 C 4.74218,32.33548 3.0643,31.10327 3.48377,28.76999 7.65225,6.85271 27.44596,0.24605 45.16856,0.24605 c 9.071011,0 20.921021,2.41195 28.078221,9.28076 9.07104,8.46804 8.20587,19.7675 8.20587,32.06321 v 29.04826 c 0,8.73022 3.61794,12.55786 7.02613,17.27691 1.20597,1.67786 1.46814,3.69656 -0.05244,4.95497 -3.80144,3.17225 -10.56538,9.07104 -14.28819,12.37436 l -0.05242,-0.0525",
            fill
          }
        )
      ]
    }
  );
};
const LogoSVG = ({ className }) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 200",
      role: "img",
      "aria-label": "JL wavy logo",
      children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs("linearGradient", { id: "gRed", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#ff4d4d" }),
            /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#ff1a1a" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#cc0000" })
          ] }),
          /* @__PURE__ */ jsxs("filter", { id: "glow", x: "-50%", y: "-50%", width: "200%", height: "200%", children: [
            /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "4", result: "blur" }),
            /* @__PURE__ */ jsxs("feMerge", { children: [
              /* @__PURE__ */ jsx("feMergeNode", { in: "blur" }),
              /* @__PURE__ */ jsx("feMergeNode", { in: "SourceGraphic" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("filter", { id: "shadow", x: "-50%", y: "-50%", width: "200%", height: "200%", children: /* @__PURE__ */ jsx("feDropShadow", { dx: "0", dy: "3", stdDeviation: "3", floodColor: "#660000", floodOpacity: "0.5" }) })
        ] }),
        /* @__PURE__ */ jsx("g", { transform: "rotate(-20,100,100)", children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "\n            M 100,12\n            A 88,88 0 0 1 188,100\n            L 152,138\n            L 152,90\n            L 132,132\n            L 96,142\n            L 80,95\n            L 12,100\n            A 88,88 0 0 1 100,12\n          ",
            fill: "none",
            stroke: "url(#gRed)",
            strokeWidth: "10",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            filter: "url(#glow) url(#shadow)"
          }
        ) })
      ]
    }
  );
};
const CTAButton = ({ link, className, children }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      to: link,
      className: `
        px-3 py-2 bg-accent2 text-primary
         ${className}
      `,
      children
    }
  );
};
const Navbar = () => {
  return /* @__PURE__ */ jsxs("nav", { className: "w-full flex justify-between", children: [
    /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(LogoSVG, { className: "w-14 h-14 mt-2" }),
      /* @__PURE__ */ jsx("span", { className: "font-bold text-lg text-red-600", children: "Kalonix" })
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: "flex justify-center items-center gap-6", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/top-earbuds", className: "hover:text-blue-400 transition", children: "Top Earbuds" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/reviews", className: "hover:text-blue-400 transition", children: "Reviews" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/buying-guide", className: "hover:text-blue-400 transition", children: "Buying Guide" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/deals", className: "hover:text-blue-400 transition", children: "Deals" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: /* @__PURE__ */ jsx(Search, {}) }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx(CTAButton, { link: "/", className: "bg-blue-700", children: "Shop Now" }) }) })
    ] })
  ] });
};
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "bg-gray-900 text-white py-12 mt-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-8", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "As an Amazon Associate, we earn from qualifying purchases. This site contains affiliate links, which may earn us a commission at no extra cost to you." }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(LogoSVG, { className: "w-14 h-14 mt-2" }),
        /* @__PURE__ */ jsx("span", { className: "font-bold text-lg text-red-600", children: "Kalonix" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Explore" }),
        /* @__PURE__ */ jsxs("ul", { className: "grid grid-cols-2 gap-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/home", className: "hover:text-blue-400 transition", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/top-earbuds", className: "hover:text-blue-400 transition", children: "Top Earbuds" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/reviews", className: "hover:text-blue-400 transition", children: "Reviews" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/buying-guide", className: "hover:text-blue-400 transition", children: "Buying Guide" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/deals", className: "hover:text-blue-400 transition", children: "Deals" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-center mt-8 border-t border-gray-700 pt-4", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "© 2025 Your Earbuds Site. All rights reserved." }) })
  ] }) });
};
function App() {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "min-h-screen",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      children: [
        /* @__PURE__ */ jsx("div", { className: "h-[var(--navbar-height)] text-white p-4", children: /* @__PURE__ */ jsx("header", { className: "h-full container mx-auto flex justify-center", children: /* @__PURE__ */ jsx(Navbar, {}) }) }),
        /* @__PURE__ */ jsx("main", { className: "min-h-screen container mx-auto", children: /* @__PURE__ */ jsx(Outlet, {}) }),
        /* @__PURE__ */ jsx(Footer, {})
      ]
    }
  );
}
const SEOHead = ({ title, description, ogTitle, ogDescription, children }) => {
  const [Helmet, setHelmet] = React.useState(null);
  React.useEffect(() => {
    import("./assets/index.esm-KQfMvK0Q.js").then(({ Helmet: HelmetComponent }) => {
      setHelmet(() => HelmetComponent);
    });
  }, []);
  if (typeof window === "undefined") {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("script", { dangerouslySetInnerHTML: {
        __html: `
            document.title = '${title || "My SSR App"}';
            const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta');
            metaDesc.name = 'description';
            metaDesc.content = '${description || ""}';
            if (!document.querySelector('meta[name="description"]')) {
              document.head.appendChild(metaDesc);
            }
          `
      } }),
      children
    ] });
  }
  if (!Helmet) return children;
  return /* @__PURE__ */ jsxs(Helmet, { children: [
    /* @__PURE__ */ jsx("title", { children: title }),
    description && /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
    ogTitle && /* @__PURE__ */ jsx("meta", { property: "og:title", content: ogTitle }),
    ogDescription && /* @__PURE__ */ jsx("meta", { property: "og:description", content: ogDescription }),
    children
  ] });
};
const Banner = () => {
  return /* @__PURE__ */ jsxs("section", { className: "w-full h-[calc(100vh-var(--navbar-height))] flex justify-center items-center flex-col", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-6xl text-center font-bold", children: "Top Wireless Earbuds" }),
    /* @__PURE__ */ jsx("h2", { className: "text-5xl text-center font-semibold mb-4", children: "Under $50 in 2025" }),
    /* @__PURE__ */ jsx("p", { className: "mb-6 text-center", children: "Discover budget-friendly earbuds with great sound & features." }),
    /* @__PURE__ */ jsx(CTAButton, { link: "/", className: "bg-blue-700", children: "Shop Now" })
  ] });
};
const data = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "JBL Vibe Buds",
    price: "$40",
    extra: { label: "Battery Life: ", data: "8 hours" },
    description: "Balanced sound, EQ app",
    ratings: 4.5,
    ratedBy: 324
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Earfun Air Pro 4",
    price: "$45",
    extra: { label: "Battery Life: ", data: "7 hours" },
    description: "ANC, IPX5",
    ratings: 4.7,
    ratedBy: 1993
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Sony WF-C710N",
    price: "$48",
    extra: { label: "Battery Life: ", data: "6 hours" },
    description: "Noise cancellation, clear calls",
    ratings: 4.6,
    ratedBy: 4991
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Realme Buds Air 7",
    price: "$45",
    extra: { label: "Battery Life: ", data: "8 hours" },
    description: "ANC, IP55, multipoint",
    ratings: 4.6,
    ratedBy: 9823
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Sony WF-C510",
    price: "$45",
    extra: { label: "Battery Life: ", data: "11 hours" },
    description: "Multipoint, gaming mode, EQ",
    ratings: 4.5,
    ratedBy: 163
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Anker Soundcore P30i",
    price: "$40",
    extra: { label: "Battery Life: ", data: "7 hours" },
    description: "Strong bass, phone stand case",
    ratings: 4.4,
    ratedBy: 482
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "CMF Buds 2",
    price: "$40",
    extra: { label: "Battery Life: ", data: "6.5 hours" },
    description: "Bass boost, ANC, IP55",
    ratings: 4.5,
    ratedBy: 16473
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Baseus EP10 Pro",
    price: "$35",
    extra: { label: "Battery Life: ", data: "7.5 hours" },
    description: "Bassy sound, ANC",
    ratings: 4.3,
    ratedBy: 982
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "QCY MeloBuds Pro",
    price: "$40",
    extra: { label: "Battery Life: ", data: "7.5 hours" },
    description: "ANC, LDAC, multipoint",
    ratings: 4.6,
    ratedBy: 7611
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Tozo OpenEarRing",
    price: "$45",
    extra: { label: "Battery Life: ", data: "10 hours" },
    description: "Open-ear design, IPX5, app",
    ratings: 4.4,
    ratedBy: 1127
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Oppo Enco Buds3",
    price: "$30",
    extra: { label: "Battery Life: ", data: "9 hours" },
    description: "Half-in-ear, IP54, multipoint",
    ratings: 4.3,
    ratedBy: 4428
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "1More Q21",
    price: "$40",
    extra: { label: "Battery Life: ", data: "4 hours (ANC)" },
    description: "Strong ANC, gaming mode",
    ratings: 4.5,
    ratedBy: 8472
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "SoundPEATS Air5 Pro",
    price: "$50",
    extra: { label: "Battery Life: ", data: "7 hours" },
    description: "ANC, LDAC, comfortable fit",
    ratings: 4.6,
    ratedBy: 5903
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "JLab Go Air Pop",
    price: "$20",
    extra: { label: "Battery Life: ", data: "8 hours" },
    description: "Lightweight, IPX4",
    ratings: 4.2,
    ratedBy: 2172
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Skullcandy Dime 2",
    price: "$30",
    extra: { label: "Battery Life: ", data: "8 hours" },
    description: "Bass-heavy, IPX4",
    ratings: 4.3,
    ratedBy: 9281
  }
];
const GradientEdges1 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" })
  ] });
};
const CardProduct = ({ image, title, price, extra = {}, description, ratings = 0, ratedBy = 0, className }) => {
  return /* @__PURE__ */ jsxs("div", { className: `bg-secondary w-full min-w-[270px] h-full rounded-lg overflow-hidden flex flex-col ${className}`, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: image,
        alt: title,
        className: "w-full object-cover",
        draggable: false
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "p-3 pb-6 flex-1 flex flex-col", children: [
      /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-3xl font-extrabold", children: title }),
        /* @__PURE__ */ jsxs("p", { className: "text-2xl", children: [
          /* @__PURE__ */ jsx("span", { children: "Price: " }),
          /* @__PURE__ */ jsx("strong", { children: price })
        ] }),
        Object.keys(extra).length > 0 && /* @__PURE__ */ jsxs("p", { className: "my-1", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            extra.label,
            " "
          ] }),
          /* @__PURE__ */ jsx("strong", { children: extra.data })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm my-2", children: description }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1 mb-4", children: [
          /* @__PURE__ */ jsx("strong", { children: ratings }),
          /* @__PURE__ */ jsxs("span", { className: "ml-4", children: [
            ratedBy,
            " ratings"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://www.amazon.com",
          target: "_blank",
          className: "w-full inline-flex items-center px-4 py-2 bg-white text-black font-semibold rounded-md shadow hover:bg-yellow-500 transition duration-300 justify-center mt-auto",
          children: [
            /* @__PURE__ */ jsx(AmazonLogo, { className: "w-20 mr-3 mt-1.5" }),
            "Buy Now on Amazon"
          ]
        }
      )
    ] })
  ] });
};
const FeatureblockCarousel = () => {
  const [cardIndex, setCardIndex] = useState(Math.floor(data.length / 2));
  const [isDragging, setIsDragging] = useState(false);
  const nextCard = () => {
    if (cardIndex < data.length - 1) {
      setCardIndex(cardIndex + 1);
    }
  };
  const prevCard = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full h-screen bg-primary flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-md", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: prevCard,
          disabled: cardIndex === 0,
          className: "absolute left-4 md:-left-7 top-1/2 transform -translate-y-1/2 z-10 bg-primary rounded-full p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary",
          children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: nextCard,
          disabled: cardIndex === data.length - 1,
          className: "absolute right-4 md:-right-7 top-1/2 transform -translate-y-1/2 z-10 bg-primary rounded-full p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary",
          children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "flex transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing",
          style: {
            transform: `translateX(-${cardIndex * 100}%)`
          },
          children: data.map((product, index) => /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-full flex-shrink-0 px-4 transition-transform duration-300",
              style: {
                transform: `scale(${cardIndex === index ? 1 : 0.9})`
              },
              children: /* @__PURE__ */ jsx(
                CardProduct,
                {
                  image: product.image,
                  title: product.productName,
                  price: product.price,
                  extra: product.extra,
                  description: product.description,
                  ratings: product.ratings,
                  ratedBy: product.ratedBy
                }
              )
            },
            index
          ))
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-6 space-x-2", children: data.map((_, index) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setCardIndex(index),
          className: `w-3 h-3 rounded-full transition-colors ${index === cardIndex ? "bg-blue-500" : "bg-gray-300"}`
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsx(GradientEdges1, {})
  ] });
};
const BladeIntro = () => {
  return /* @__PURE__ */ jsx("section", { className: "min-h-screen flex justify-center items-center", children: /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-1 lg:grid-cols-2 gap-4 pb-10", children: [
    /* @__PURE__ */ jsxs("article", { className: "px-4 sm:p-0", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl pb-4", children: "Discover the Best Affordable Wireless Earbuds Under $50 in 2025" }),
      /* @__PURE__ */ jsx("p", { children: "Tired of premium prices for basic audio needs? Our curated list of 15 top wireless earbuds under $50 delivers great sound, long battery life, and features like ANC without breaking the bank. Whether for workouts, calls, or daily commutes, these budget picks from brands like JBL, Anker, and Sony offer value-packed performance. We prioritized models with 6+ hours of battery, IP ratings for sweat resistance, and app support for customization. All tested for 2025 compatibility with Android/iOS. Ready to upgrade? Browse our picks below and click to shop via affiliate links—prices fluctuate, so check deals now!" })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: "https://plus.unsplash.com/premium_photo-1736803526419-10b1775c2895?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Blade intro" }) })
  ] }) });
};
const TrustSignals = () => {
  return /* @__PURE__ */ jsxs("section", { className: "min-h-[50vh] flex justify-center items-center flex-col", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-4xl text-center font-bold mb-7", children: "Trusted by 1,000+ audio enthusiasts" }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-4", children: [
      /* @__PURE__ */ jsx(Star, { color: "yellow", size: 60, style: { fill: "yellow" } }),
      /* @__PURE__ */ jsx(Star, { color: "yellow", size: 60, style: { fill: "yellow" } }),
      /* @__PURE__ */ jsx(Star, { color: "yellow", size: 60, style: { fill: "yellow" } }),
      /* @__PURE__ */ jsx(Star, { color: "yellow", size: 60, style: { fill: "yellow" } }),
      /* @__PURE__ */ jsx(Star, { color: "yellow", size: 60, style: { fill: "yellow" } })
    ] })
  ] });
};
const Cta = () => {
  return /* @__PURE__ */ jsxs("section", { className: "min-h-[70vh] flex justify-center items-center flex-col", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-4xl text-center font-bold mb-4", children: "Shop the Best Budget Earbuds Under $50 Now!" }),
    /* @__PURE__ */ jsx("p", { className: "text-center mb-6", children: "Explore top-rated wireless earbuds under $50 with great sound and features!" }),
    /* @__PURE__ */ jsx(CTAButton, { link: "", children: "See Top 15 Picks" })
  ] });
};
const GridProducts = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.08
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "grid md:grid-cols-2 xl:grid-cols-4 gap-4",
      variants: containerVariants,
      initial: "hidden",
      animate: "visible",
      children: data.map((product, index) => {
        return /* @__PURE__ */ jsx(
          motion.div,
          {
            variants: itemVariants,
            whileHover: "hover",
            layout: true,
            children: /* @__PURE__ */ jsx(
              CardProduct,
              {
                image: product.image,
                title: product.productName,
                price: product.price,
                extra: product.extra,
                description: product.description,
                ratings: product.ratings,
                ratedBy: product.ratedBy
              }
            )
          },
          index
        );
      })
    }
  );
};
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "15 Top Affordable Wireless Earbuds Under $50 in 2025",
        description: "Find the best wireless earbuds under $50 with great sound, ANC, and long battery life. Shop our top 15 picks for 2025 and save today!",
        ogTitle: "15 Best Budget Wireless Earbuds Under $50 in 2025",
        ogDescription: "Discover top-rated wireless earbuds under $50 with features like noise cancellation and waterproofing. Check out our 2025 list and grab yours now!"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6 },
        className: "w-full h-full",
        children: [
          /* @__PURE__ */ jsx(Banner, {}),
          /* @__PURE__ */ jsx(FeatureblockCarousel, {}),
          /* @__PURE__ */ jsx(BladeIntro, {}),
          /* @__PURE__ */ jsx(TrustSignals, {}),
          /* @__PURE__ */ jsx(Cta, {}),
          /* @__PURE__ */ jsx(GridProducts, {})
        ]
      }
    )
  ] });
}
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "About - My SSR App",
        description: "Learn about our SSR React application",
        ogTitle: "About - My SSR App",
        ogDescription: "Learn about our SSR React application"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6 },
        className: "max-w-2xl",
        children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-800 mb-4", children: "About Us" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "This is a modern React application built with server-side rendering capabilities for better SEO and performance." }),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/",
              className: "bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors",
              children: "Go Home"
            }
          )
        ]
      }
    )
  ] });
}
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsx(App, {}),
    children: [
      {
        index: true,
        element: /* @__PURE__ */ jsx(Home, {})
      },
      {
        path: "about",
        element: /* @__PURE__ */ jsx(About, {})
      }
    ]
  }
];
const createRouter = (initialEntries) => {
  if (typeof window === "undefined") {
    return createMemoryRouter(routes, { initialEntries });
  }
  return createBrowserRouter(routes);
};
async function render(url) {
  const { HelmetProvider } = await import("./assets/index.esm-KQfMvK0Q.js");
  const router = createRouter([url]);
  const helmetContext = {};
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsx(RouterProvider, { router }) }) })
  );
  const { helmet } = helmetContext;
  return { html, helmet };
}
export {
  render
};
