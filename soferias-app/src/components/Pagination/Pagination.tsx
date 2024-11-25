"use client";
import Link from "next/link";

export const Pagination = () => {
  return (
    <ul className="font-semibold text-white xl:text-base mb:text-xs inline-flex h-10 overflow-hidden text-base rounded-lg cursor-pointer border-blue-800 hover:border-blue-500">
      <li className="xl:pt-1 xl:px-6 mb:py-1 mb:px-1 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800">
        <Link href="#1" className="flex h-10 items-center justify-center">1</Link>
      </li>
      <li className="xl:pt-1 xl:px-6 mb:py-1 mb:px-1 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800">
        <Link href="#2" className="flex h-10 items-center justify-center">2</Link>
      </li>
      <li className="xl:pt-1 xl:px-6 mb:py-1 mb:px-1 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800">
        <Link href="#3" className="flex h-10 items-center justify-center">3</Link>
      </li>
      <li className="xl:pt-1 xl:px-6 mb:py-1 mb:px-1 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800">
        <Link href="#4" className="flex h-10 items-center justify-center">4</Link>
      </li>
    </ul>
  )
}