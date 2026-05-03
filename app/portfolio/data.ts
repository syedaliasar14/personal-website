interface Project {
  name: string;
  desc: string;
  img: string;
  tech: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    name: "Moth Hue",
    desc: "Social Media platform for creatives",
    img: "/projects/mothhue.png",
    tech: "AWS, Next.js, MongoDB, Typescript",
    link: "https://www.mothhue.com/",
  },
  {
    name: "Acharii Market",
    desc: "E-commerce website for ordering homemade Pakistani delicacies",
    img: "/projects/acharii.png",
    tech: "Stripe, Next.js, MongoDB, AWS, Typescript",
    link: "https://www.achariimarket.com/",
    github: "https://github.com/syedaliasar14/acharii",
  },
  {
    name: "FinExPro",
    desc: "AI Fintech tool for bank examiners.",
    img: "/projects/finexpro.png",
    tech: "Next.js, OpenAI, UBPR Bank API",
    link: "https://finexpro.vercel.app/",
  },
  {
    name: "Kimberly Nguyen Photography LLC",
    desc: "Wedding Photography website",
    img: "/projects/kim-photo-site.png",
    tech: "Sanity CMS, Next.js, Resend",
    link: "https://kimberly-nguyen-photography.vercel.app/",
    github: "https://github.com/syedaliasar14/kimberly-nguyen-photography",
  },
  {
    name: "Nimbus",
    desc: "AI therapist for personalized advice, progress tracking, and journaling",
    img: "/projects/nimbus.png",
    tech: "Next.js, OpenAI, MongoDB, AWS, Typescript",
    link: "https://www.my-nimbus.com/",
  },
  {
    name: "Studio Art Portfolio Website",
    desc: "Architecture and studio art portfolio website",
    img: "/projects/sokainawebsite.png",
    tech: "Next.js, React, Typescript",
    link: "https://sokainaasar.com/",
    github: "https://github.com/syedaliasar14/sokaina-website",
  }
]