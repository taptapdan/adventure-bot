export function imagePath(imgName: string) {
  const imagesPath = `${process.env.REPO_URL}/raw/master/public/game`;
  return `${imagesPath}/${imgName}`;
}
