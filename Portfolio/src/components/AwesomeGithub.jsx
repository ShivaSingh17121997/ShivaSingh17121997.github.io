import React from "react";
import { MyGithub } from "./MyGithub";

const GithubStatsCard = ({ id, src }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
    <div className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] bg-white shadow-lg rounded-md overflow-hidden ">
      <img id={id} className="w-full h-auto" src={src} alt="GitHub Stats" />
    </div>
  </div>
);

const AwesomeGitHubCards = () => {
  return (
    <div className="flex flex-wrap justify-center items-between gap-8  md:gap-12 lg:gap-16 mt-8">
      <div>
        <GithubStatsCard
          id="github-stats-card"
          src="https://github-readme-stats.vercel.app/api?username=sagartiwary&theme=dark&hide_border=false&include_all_commits=true&count_private=false"
        />
      </div>

      <div className="mt-[-60px] sm:mt-[5px] md:mt-[-80px]">
        <GithubStatsCard
          id="github-streak-stats"
          src="https://github-readme-streak-stats.herokuapp.com/?user=sagartiwary&theme=dark&hide_border=false"
        />
      </div>

      <div className="mt-[-60px] sm:mt-[5px] md:mt-[-80px] ">
        <GithubStatsCard
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=sagartiwary&theme=dark&hide_border=false&include_all_commits=true&count_private=false&layout=compact"
        />
      </div>
    </div>
  );
};

export default AwesomeGitHubCards;
