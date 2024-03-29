'use client'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'
import { CATEGORIES } from 'utils/constants'

export default function Navbar() {
  const [toggleOpened, setToggleOpened] = useState(false)

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            News App
          </span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => setToggleOpened((e) => !e)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="w-6 h-6" />
        </button>
        <div
          className={`${
            toggleOpened ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {CATEGORIES.map((e, index) => (
              <li key={index}>
                <Link
                  href={`/${e}`}
                  onClick={() => setToggleOpened(false)}
                  className="block capitalize py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {e}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
