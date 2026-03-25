"use client";

import { GitHubRepository } from "@/types/githubRepository";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ExternalLink,  GitFork, Star,  User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function ProjectCard({repo}: {repo: GitHubRepository}) {
    const formatCount = (count: number) => {
      if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'k';
      }
      return count.toString();
    };
    return (
        <Card className="rounded-sm " style={{background: '#2F2E3A'}} >
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          {/* Avatar do Proprietário */}
          <Avatar className="h-10 w-10 border border-stone-700">
            <AvatarImage src={repo.owner.avatar_url} alt={repo.owner.login} />
            <AvatarFallback><User /></AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <CardTitle className="text-xl font-semibold tracking-tight text-gray-200">{repo.name}</CardTitle>
            <CardDescription className="text-sm text-stone-400">
              <a href={repo.owner.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {repo.owner.login}
              </a>
            </CardDescription>
          </div>
          
          {/* Ícone do GitHub no canto superior direito */}
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <User className="h-5 w-5 text-stone-500 hover:text-white transition-colors" />
          </a>
        </CardHeader>

        <CardContent className="pb-4">
          <p className="text-sm text-gray-400 leading-relaxed min-h-[40px]">
            {repo.description ?? "No description provided."}
          </p>
        </CardContent>

        <CardFooter className="flex items-center justify-between pt-2 border-t border-stone-800">
          <div className="flex items-center gap-6 text-sm text-stone-400">
            {/* Linguagem Principal (Círculo colorido) */}
            {repo.language && (
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-sky-500" /> {/* Cor genérica, pode ser melhorada com um mapeamento */}
                <span>{repo.language}</span>
              </div>
            )}
            
            {/* Contador de Estrelas */}
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-amber-400" />
              <span>{formatCount(repo.stargazers_count)}</span>
            </div>

            {/* Contador de Forks */}
            <div className="flex items-center gap-1.5">
              <GitFork className="h-4 w-4" />
              <span>{formatCount(repo.forks_count)}</span>
            </div>
          </div>

          {/* Botão de Ação */}
          <a href={repo.homepage ?? repo.html_url} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="bg-transparent border-stone-700 hover:bg-stone-800 text-gray-200 gap-2">
              View Project
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </CardFooter>
      </Card>
    )
}