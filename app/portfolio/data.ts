interface Project {
  name: string;
  shortDesc: string;
  fullDesc: string;
  features?: string[];
  img: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    name: "Moth Hue",
    slug: "moth-hue",
    shortDesc: "Social Media platform for creatives",
    fullDesc: "Moth Hue is a social platform built for creatives who want a space to share visual work, shape a distinct personal presence, and build community around their process. The product focuses on polished media uploads, flexible profile customization, social discovery through follows and engagement, and real-time interactions that make the experience feel active instead of static, giving artists and designers a more intentional home for publishing and connecting with their audience.",
    features: ["Media upload", "User authentication", "Profile customization", "Follow system", "Like and comment functionality", "Real-time notifications"],
    img: "/projects/mothhue.png",
    link: "https://www.mothhue.com/",
  },
  {
    name: "Acharii Market",
    slug: "acharii",
    shortDesc: "E-commerce website for homemade Pakistani delicacies",
    fullDesc: "Acharii Market is an e-commerce experience designed around homemade Pakistani food, with an emphasis on making small-batch specialty products feel trustworthy, convenient, and easy to order online. The site combines clear product browsing, streamlined cart and checkout flows, practical order management, and payment integration so customers can move from discovery to purchase smoothly while the business has a clean storefront that supports both brand storytelling and day-to-day sales operations.",
    features: ["Product listing", "Shopping cart", "Order management", "Payment integration"],
    img: "/projects/acharii.png",
    link: "https://www.achariimarket.com/",
  },
  {
    name: "FinExPro",
    slug: "finexpro",
    shortDesc: "AI Fintech tool for bank examiners",
    fullDesc: "FinExPro is an AI-assisted fintech platform created to support bank examiners with faster analysis, clearer risk visibility, and more efficient compliance workflows. Rather than forcing users to sift through large volumes of financial information manually, the product is positioned to surface meaningful patterns, support structured risk assessment, and help reviewers evaluate regulatory concerns with greater speed and consistency in a tool that feels purpose-built for specialized financial oversight work.",
    features: ["AI-powered analysis", "Risk assessment", "Compliance monitoring"],
    img: "/projects/finexpro.png",
    link: "https://finexpro.vercel.app/",
  },
  {
    name: "Kimberly Nguyen Photography LLC",
    slug: "kimberly-nguyen-photography",
    shortDesc: "Wedding Photography website",
    fullDesc: "Kimberly Nguyen Photography LLC is a wedding photography website designed to present the brand with warmth, elegance, and enough visual restraint to let the photography lead. The experience centers on curated galleries, approachable contact pathways, supporting editorial content through a blog, and search-friendly structure so prospective clients can quickly understand the photographer's style, browse past work, and reach out with confidence from both mobile and desktop.",
    features: ["Photo gallery", "Contact form", "Blog", "SEO optimization"],
    img: "/projects/kim-photo-site.png",
    link: "https://kimberly-nguyen-photography.vercel.app/",
  },
  {
    name: "Nimbus",
    slug: "nimbus",
    shortDesc: "AI mental health tool",
    fullDesc: "Nimbus is an AI wellness product focused on giving users a more supportive and structured space for reflection, emotional check-ins, and personal progress tracking. The platform brings together conversational guidance, mood monitoring, journaling tools, and privacy-conscious data handling to create an experience that feels helpful between traditional support moments, with features designed to encourage consistency, self-awareness, and a stronger sense of momentum over time.",
    features: ["AI-powered chat", "Mood tracking", "Journaling", "Data storage and privacy"],
    img: "/projects/nimbus.png",
    link: "https://www.my-nimbus.com/",
  },
  {
    name: "Sokaina Asar Portfolio Website",
    slug: "sokaina-asar",
    shortDesc: "Architecture and studio art portfolio website",
    fullDesc: "This studio art and architecture portfolio website is built to showcase visual work in a way that feels clean, immersive, and portfolio-first without losing useful context around each project. It supports a professional presentation of creative practice through organized project pages, strong imagery, and direct contact information, making it easier for visitors to move from appreciating the work itself to understanding the artist's perspective and reaching out for opportunities or collaboration.",
    features: ["Portfolio showcase", "Project details", "Contact information"],
    img: "/projects/sokainawebsite.png",
    link: "https://sokainaasar.com/",
  }
]