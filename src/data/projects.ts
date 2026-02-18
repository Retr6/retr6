import { createElement } from "react";
import Semplo1 from "@/assets/thumbs/semplo1.mp4"
import Semplo2 from "@/assets/thumbs/semplo2.png"
import Semplo3 from "@/assets/semplo/one.mp4"
import Semplo4 from "@/assets/semplo2/one.png"
import Zehn from "@/assets/thumbs/zehn1.mp4"
import Zehn2 from "@/assets/zehn/one.png"
import Snappipay from "@/assets/thumbs/snappi1.mp4"
import Scorefam from "@/assets/thumbs/scorefam1.png"
import Scorefam2 from "@/assets/scorefam/one.png"
import Astrowurld from "@/assets/thumbs/astrowurld1.mp4"
import Astrowurld2 from "@/assets/astrowurld/one.png"

import SemploProduct from "@/pages/work/semploProduct/SemploProduct";
import ScorefamWork from "@/pages/work/scorefam/Scorefam";
import AstrowurldWork from "@/pages/work/astrowurld/Astrowurld";
import SemploBrandWork from "@/pages/work/semploBrand/SemploBrand";
import SnappipayWork from "@/pages/work/snappipay/Snappipay";
import ZehnWork from "@/pages/work/zehn/zehn";

export const projects = [
  {
    id: "semplo-brand",
    thumbnail: Semplo1,
    title: "Semplo — Brand identity for a product that simplifies project management",
    category: "brand",
    year: "2025",
    type: 'video',
    cover: {
      type: 'image',
      src: Semplo4,
    },
    company: "Semplo",
    industry: "Project Management",
    website: "https://semplo.app",
    content: createElement(SemploBrandWork),
    about: "Semplo is a design-led project management tool created to address a growing problem in modern team workflows: complexity. While many project management platforms offer powerful features, they often introduce friction through excessive clicks, dense interfaces, and steep learning curves."
  },
  {
    id: "snappipay",
    thumbnail: Snappipay,
    title: "Snappipay — Designing a Clear, Trust-first Brand for Seamless Crypto Payments",
    category: "brand",
    year: "2026",
    type: 'video',
    cover: {
      type: 'video',
      src: Snappipay,
    },
    company: "Snappipay",
    industry: "Crypto",
    website: "https://snappipay.xyz",
    content: createElement(SnappipayWork),
    about: "Snappipay is a crypto payment product that enables users to make payments directly from their crypto wallets while recipients receive funds in local currency. It bridges the gap between decentralized assets and real-world spending, removing the friction typically associated with cross-border payments, currency conversion, and crypto usability. The product is built for crypto users and people who move across borders and need a fast, dependable way to pay without relying on traditional banking infrastructure."
  },
  {
    id: "zehn",
    thumbnail: Zehn,
    title: "Zehn — Product that elevates archery from just a “thing” to a lifestyle",
    category: "brand",
    year: "2026",
    type: 'video',
    cover: {
      type: 'image',
      src: Zehn2,
    },
    company: "Zehn",
    industry: "Sports",
    website: "https://zehn.io",
    content: createElement(ZehnWork),
    about: "Zehn is a digital platform designed to support the growing archery community in Nigeria. The app enables athletes to record scores, compete with peers, and allows clubs to organize competitions and manage leaderboards. At its core, Zehn positions archery as a modern, competitive, and community-driven sport."
  },
  {
    id: "semplo-product",
    thumbnail: Semplo2,
    title: "Semplo — Designing a Clearer Way to Manage Projects and Workspaces",
    category: "product",
    year: "2025",
    type: 'image',
    cover: {
      type: 'video',
      src: Semplo3,
    },
    company: "Semplo",
    industry: "Project Management",
    website: "https://semplo.app",
    content: createElement(SemploProduct),
    about: "Semplo is a streamlined project management tool for teams to collaborate with focus and clarity. Project management tools are essential for teams to work and collaborate efficiently, but most of them are overwhelming, or difficult to onboard with to the average professional. Teams without a dedicated PM who specializes in these tools struggle to adopt and fully harness the usefulness of these tools."
  },
  {
    id: "scorefam",
    thumbnail: Scorefam,
    title: "Scorefam v2 — Prediction Markets for Sports and Real-life Events",
    category: "product",
    year: "2023",
    type: 'image',
    cover: {
      type: 'image',
      src: Scorefam2,
    },
    company: "Scorefam",
    industry: "Prediction Markets",
    website: "https://scorefam.io",
    content: createElement(ScorefamWork),
    about: "Scorefam is a crypto-based sports prediction platform. Users can bet on sports games and real-life events on the platform using crypto tokens. The Version 2 of Scorefam is an improved version of the Scorefam MVP, with more features and more thought-out decisions."
  },
  {
    id: "astrowurld",
    thumbnail: Astrowurld,
    title: "Astrowurld — Vibecoding my personal astronomy project",    
    category: "product",
    year: "2025",
    type: 'video',
    cover: {
      type: 'image',
      src: Astrowurld2,
    },
    company: "-",
    industry: "Astronomy",
    website: "https://astrowurld.space",
    content: createElement(AstrowurldWork),
    about: "In 2024 I had an idea to build a educative platform that teaches people about cosmic bodies across the universe, starting from the solar system. The goal of the project was to create an educative resource, and also have a product co-existing with my astronomy blog."
  },
];

