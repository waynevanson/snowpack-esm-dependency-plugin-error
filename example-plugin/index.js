import { execaCommand } from "execa";

// plugin displays `Hello, Earth` for every file read via a process
export default function helloEarthPlugin() {
  return {
    resolve: {
      input: [".js"],
      output: [".js"],
    },
    async load() {
      await execaCommand("echo Hello, Earth");
    },
  };
}
