import React from 'react'
import GitHubCalendar from "react-github-calendar";
export const MyGithub = () => {
   return (
     <div className="text-center relative">
       <div className="flex justify-center">
         <h1 className="text-blue-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative">
           GITHUB CALENDER
         </h1>
       </div>
       <div className="mt-4 sm:mt-6 md:mt-10 lg:mt-16 text-white">
         <GitHubCalendar
           username=""
           hideTotalCount={false}
           color={"blue"}
         />
       </div>
     </div>
   );
}
