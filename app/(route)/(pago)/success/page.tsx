"use client";

import { ConfettiDemo } from "@/app/Shared/ConfettiDemo";

export default function PageSuccess() {
  return (
    <div className="text-3xl font-bold text-center py-10 h-screen flex  items-center justify-center ">
      <div>
        <div className="flex flex-col items-center justify-center ">
          <span className="text-7xl flex items-center justify-center gap-4 mt-3 ">
            <ConfettiDemo />
            🎉
          </span>

          <button
            onClick={() => (window.location.href = "/")}
            className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group  duration-500 hover:bg-gray-100 hover:text-purple-700 flex items-center justify-center mb-2 -mt-8 "
            type="button"
          >
            <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="25px"
                width="25px"
              >
                <path
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                  fill="#000000"
                ></path>
                <path
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                  fill="#000000"
                ></path>
              </svg>
            </div>
            <p className="translate-x-2 text-blue-700 hover:text-purple-700">
              Go to home
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
