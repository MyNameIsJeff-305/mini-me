import {
  Baby,
  BriefcaseBusiness,
  Cookie,
  FileText,
  LockKeyhole,
  Mail
} from "@lucide/astro";

export const policySections = [
  {
    icon: FileText,
    title: "Information We Collect",
    content:
      "When you use our website, we may collect information you voluntarily provide through contact forms, enrollment inquiry forms, career application forms, or other website submissions. This may include your name, phone number, email address, preferred location, child enrollment details, career application information, resume files, and any message you choose to send.",
  },
  {
    icon: Baby,
    title: "Enrollment Inquiry Information",
    content:
      "If you submit an enrollment inquiry, we may collect basic information about your child and family so our team can contact you about availability, next steps, tours, and required enrollment documents. Submitting an inquiry through the website does not complete official enrollment.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Application Information",
    content:
      "If you apply for a position through our website, we may collect your contact information, preferred location, position of interest, childcare experience, credentials, availability, resume, and related application details. This information is used only to review your application and contact you about possible career opportunities.",
  },
  {
    icon: Mail,
    title: "How We Use Information",
    content:
      "We use the information submitted through our website to respond to inquiries, provide requested information, follow up with families, review employment applications, improve our website, and communicate with users who contact us.",
  },
  {
    icon: LockKeyhole,
    title: "How We Protect Information",
    content:
      "We take reasonable steps to protect the information submitted through our website. However, no method of online transmission or electronic storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    icon: Cookie,
    title: "Cookies and Website Analytics",
    content:
      "Our website may use cookies, analytics tools, or similar technologies to understand website traffic, improve user experience, monitor performance, and support basic website functionality.",
  },
];

export const rights = [
  "Request information about the personal details you submitted through the website.",
  "Ask us to correct inaccurate information.",
  "Request that we delete information you previously submitted, when appropriate.",
  "Choose not to submit optional information through our forms.",
  "Contact us with questions about how your information is used.",
];
