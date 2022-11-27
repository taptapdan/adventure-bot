export function requireEnv(requiredEnv: string[] = []) {
  requiredEnv.forEach((env) => {
    if (!process.env.hasOwnProperty(env)) {
      throw new Error(`${env} must be set.`);
    }
  });
}
