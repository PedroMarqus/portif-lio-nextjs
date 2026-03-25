import { GitHubRepository } from "@/types/githubRepository";
import Title1 from "./parts/title1";
import ProjectCard from "./parts/projectCard";

export default function Projects({repos}: {repos: GitHubRepository[] | null}) {
    return(
        <div className="mt-[100px]" id="projects">
            <Title1 title="Projects" />
            <div className="mt-4 gap-4 grid grid-cols-1 md:grid-cols-2 ">
                {
                    repos && repos.length > 0 ? (
                        repos.map((repo) => (
                            <ProjectCard key={repo.id} repo={repo} />
                        ))
                    ) : (
                        <p className="text-lg
                        text-gray-400">No repositories found.</p>
                    )
                }
            </div>
        </div>
    );
}