"use client";

import { cn } from "@/helpers/cn";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ELLIPSIS_LEFT, ELLIPSIS_RIGHT, generatePages } from "./generatePages";


export const Pagination = ({ currentPage, totalPages }: { currentPage: number; totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pages = generatePages(currentPage, totalPages);


  return (
    <ul className="font-semibold text-white xl:text-base mb:text-xs inline-flex cursor-pointer border-blue-800 hover:border-blue-500">

      {pages.map((page) => {

        const isEllipsis = page === ELLIPSIS_LEFT || page === ELLIPSIS_RIGHT;

        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());
        const url = `${pathname}?${params.toString()}`;
        const isCurrentPage = page === currentPage;

        if (isEllipsis) {
          return (
            <li key={page} className="">
              <span className="xl:py-2 xl:px-6 mb:py-1 mb:px-1 mr-1 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800">
                ...
              </span>
            </li>
          )
        }

        return (
          <li key={page} >
            <Link className={cn("xl:py-2 xl:px-6 mb:py-1 mb:px-1 mr-1 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800", {
              "bg-blue-800": isCurrentPage
            })}
              href={url}
            >
              {page}
            </Link>
          </li>
        )
      })}

    </ul>
  );
};