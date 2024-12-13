import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read package.json
const packageJson = JSON.parse(
  readFileSync(resolve(__dirname, '../package.json'), 'utf8')
);

// Get the latest commit hash
const commitHash = execSync('git rev-parse --short HEAD').toString().trim();

// Generate release name
const releaseName = `${packageJson.name}@${packageJson.version}+${commitHash}`;

console.log(releaseName);
