export function pathToGetBranches(url: string | undefined) {
  if (!url) {
    return;
  }

  if (url.endsWith("/")) {
    url = url.substr(0, url.length - 1);
  }

  const parts = url.split("/");

  const owner = parts[3];
  const repo = parts[4];

  return `https://api.github.com/repos/${owner}/${repo}/branches`;
}