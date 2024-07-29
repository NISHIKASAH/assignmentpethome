import React from "react";

const footerLinks = [
  {
    name: "Privacy Policy",
    href: "#",
  },
  {
    name: "Terms of Service",
    href: "#",
  },
  {
    name: "Contact Us",
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 fixed bottom-0 left-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-xl font-bold">PETHOME</h1>
            <p className="text-sm">Your trusted partner in pet care.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            {footerLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} PETHOME. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
