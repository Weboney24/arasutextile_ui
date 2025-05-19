import React from "react";

const DefaultHeader = ({ title, content, position = "center" }) => {
  const alignment = position === "start" ? "items-start text-left !-ml-[50px]" : "items-center text-center";
  return (
    <div className="mt-10 w-[80%] mx-auto font-primary">
      <div className={`flex flex-col ${alignment} justify-center space-y-1`}>
        <div className="relative w-fit pb-2">
          <p className="text-xl font-bold text-primary relative z-10">{title}</p>

          {/* Bottom border */}
          <div className="absolute left-0 right-0 bottom-0 top-8 h-[4px] rounded-r-lg rounded-l-lg bg-gray-300"></div>

          {/* Moving dot */}
          <div className="absolute bottom-0 top-7 left-0 w-full h-3 pointer-events-none">
            <div className="w-3 h-3 bg-primary rounded-full absolute animate-floating-dot"></div>
          </div>
        </div>

        <p className="text-2xl mb-10">{content}</p>
      </div>

      {/* Custom animation style */}
      <style>{`
        @keyframes floating-dot {
          0% {
            left: 0%;
          }
          100% {
            left: 100%;
          }
        }

        .animate-floating-dot {
          animation: floating-dot 3s linear infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default DefaultHeader;
