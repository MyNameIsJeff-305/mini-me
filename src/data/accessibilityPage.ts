import {
  Eye,
  Keyboard,
  MonitorSmartphone,
  MousePointerClick
} from "@lucide/astro";

export const accessibilityCommitments = [
  {
    icon: Eye,
    title: "Readable Content",
    content:
      "We aim to present website content in a clear, readable way with thoughtful spacing, strong contrast, and organized page structure.",
  },
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    content:
      "We work to support website navigation for visitors who use a keyboard or assistive technology to move through pages, links, buttons, and forms.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Experience",
    content:
      "Our website is designed to work across common screen sizes, including desktop, tablet, and mobile devices.",
  },
  {
    icon: MousePointerClick,
    title: "Clear Actions",
    content:
      "We try to make buttons, links, forms, and calls-to-action easy to understand so visitors can contact us, apply, or start an enrollment inquiry.",
  },
];

export const ongoingEfforts = [
  "Reviewing website content for clear headings, labels, and page structure.",
  "Improving color contrast and readability across light and dark visual sections.",
  "Using descriptive text for links, buttons, and form fields whenever possible.",
  "Building forms with labels so visitors can understand what information is requested.",
  "Testing pages across different screen sizes to support mobile, tablet, and desktop users.",
  "Making updates as we identify opportunities to improve accessibility.",
];

export const helpfulDetails = [
  "The page or website address where you experienced the issue.",
  "A short description of the accessibility problem.",
  "The device, browser, or assistive technology you were using, if you are comfortable sharing it.",
  "Your preferred contact method so our team can follow up if needed.",
];
