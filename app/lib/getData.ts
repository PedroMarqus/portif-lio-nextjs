export default async function getRepos( username: string = process.env.GITNAME || "defaultUser") {
    const data = await gitHub(username);
    return {data: data};
}

async function gitHub(username: string){
    const GITHUB_API_URL = "https://api.github.com";
    try {
        const response = await fetch(`${GITHUB_API_URL}/users/${username}`,{
            method: "GET",
        });
        const data = await response.json();
        if(Number(response.status) === 404){
            return {
            found: false,
            login: null,
            name: null,
            avatar: null,
            repos: null,
            status: 601
            };
        }

        const repos = await fetch(`${GITHUB_API_URL}/users/${username}/repos`,{
            method: "GET",
        });
        const reposData = await repos.json();
        console.log("GitHub Repositories:", reposData);

        return {
        found: true,
        login: data.login,
        name: data.name,
        avatar: data.avatar_url,
        repos: repos,
        status:200
        };
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
        return {
        found: false,
        login: null,
        name: null,
        avatar: null,
        repos: null,
        status: 600
        };
    }
}
