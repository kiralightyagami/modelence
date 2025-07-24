import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-black text-neutral-600 dark:text-gray-300 py-16 px-6 rounded-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo and Copyright Section */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <Image
                src="/icons/modelence-logo.svg"
                alt="Modelence"
                width={24}
                height={24}
                className="text-black"
              />
            </div>
            <span className="text-neutral-900 dark:text-white text-xl font-semibold">
              Modelence
            </span>
          </div>
          <p className="text-neutral-500 dark:text-gray-400 text-sm">
            © copyright Modelence 2024. All rights reserved.
          </p>
        </div>

        {/* Pages Section */}
        <div>
          <h3 className="text-neutral-900 dark:text-white text-lg font-semibold mb-6">
            Resources
          </h3>
          <ul className="space-y-4">
            <li>
              <a
                href="https://modelence.com/contact"
                className="text-neutral-600 dark:text-gray-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="https://modelence.com/contact"
                className="text-neutral-600 dark:text-gray-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="https://docs.modelence.com/"
                className="text-neutral-600 dark:text-gray-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
              >
                Documentation
              </a>
            </li>
          </ul>
        </div>

        {/* Socials Section */}
        <div>
          <h3 className="text-neutral-900 dark:text-white text-lg font-semibold mb-6">
            Socials
          </h3>
          <ul className="space-y-4">
            <li>
              <a
                href="https://facebook.com/modelence"
                className="text-neutral-600 dark:text-gray-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://github.com/modelence/modelence"
                className="text-neutral-600 dark:text-gray-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/modelence"
                className="text-neutral-600 dark:text-gray-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Legal and Register Sections Combined */}
        <div>
          <h3 className="text-neutral-900 dark:text-white text-lg font-semibold mb-6">
            Legal
          </h3>
          <ul className="space-y-4 mb-8">
            <li>
              <a
                href="https://modelence.com/privacy"
                className="text-neutral-600 dark:text-gray-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://modelence.com/terms"
                className="text-neutral-600 dark:text-gray-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
            </li>
          </ul>

        </div>
      </div>
    </footer>
  );
}
