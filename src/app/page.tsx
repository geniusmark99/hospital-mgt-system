'use client';

import { useState } from "react";
import { motion } from "motion/react"
import { Logo } from "@/components/icons";
import { ChevronDown } from 'lucide-react';
import Link from "next/link";

export default function Home() {


  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };


  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
      <div>
        <Link href="/" className="flex items-center">
          <Logo />
          <span className="ml-1 text-2xl font-bold tracking-tight text-gray-800">
            Hospital Management System
          </span>
        </Link>
      </div>
      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md  sm:rounded-lg">
        {/* Session Status */}
        <form >
          <input
            type="hidden"
            name="_token"
            autoComplete="off"
          />
          {/* Email Address */}
          <div className=" space-y-2">
            <label
              className="block font-medium text-sm text-gray-700"
              htmlFor="email"
            >
              Username
            </label>
            <input
              className="border-gray-300 py-3 px-2 outline-2 outline-gray-300 focus:outline-blue-500 focus:border-blue-500 focus:ring-blue-500 rounded-md shadow-sm block mt-1 w-full"
              id="email"
              type="email"
              name="email"
              autoComplete="username"
            />
          </div>
          {/* Password */}
          <div className="mt-4 space-y-2">
            <label
              className="block font-medium text-sm text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border-gray-300 py-3 px-2 outline-2 outline-gray-300 focus:outline-blue-500 focus:border-blue-500 focus:ring-blue-500 rounded-md shadow-sm block mt-1 w-full"
              id="password"
              type="password"
              name="password"
              autoComplete="current-password"
            />
          </div>

          <div className="relative w-full mt-4 space-y-2">
            <label
              className="block font-medium text-sm text-gray-700"
              htmlFor="password"
            >
              Role
            </label>
            <button
              onClick={toggleDropdown}
              type="button"
              className="flex  border-gray-300 items-center justify-between w-full px-4 py-3 text-gray-500 outline-2 outline-gray-300 focus:outline-blue-500 focus:border-blue-500 focus:ring-blue-500 rounded-lg shadow-md"
            >
              <span>{selectedOption || 'Select an option'}</span>
              <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 w-full mt-2 bg-white border border-blue-500 overflow-hidden rounded-lg shadow-lg"
              >
                {['Doctor', 'Nurse', 'Warding'].map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-600 cursor-pointer"
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
          <div className="block mt-4">
            <label htmlFor="remember_me" className="inline-flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500"
                name="remember"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>
          <div className="flex items-center justify-end mt-4">
            <Link
              className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              href="#"
            >
              Forgot your password?
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-4 rounded-xl bg-blue-600 py-2 px-4 text-white transition hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-1 focus-visible:ring-offset-white ml-3"
            >
              Log in
            </Link>
          </div>
        </form>


      </div>
      <div className="mt-4">
        <p className="mx-auto text-center text-xs leading-normal px-12 md:px-0">
          ©SIT
        </p>
      </div>
    </div>
  );
}
