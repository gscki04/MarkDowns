// cS.js = codeSummary.js
const fs = require('fs');
const path = require('path');

// List of file types to process and their corresponding language (e.g., extensions)
const supportedExtensions = {
  '.js': 'js',
  '.html': 'html',
  '.ts': 'typescript',
  '.java': 'java',
  '.py': 'python',
  '.go': 'go',
  '.rb': 'ruby',
  '.cpp': 'cpp',
  '.c': 'c',
  '.php': 'php',
  '.sh': 'bash',
  '.cs': 'csharp'
  // '.css': 'css',
  // '.scss': 'scss',
  // Add more languages as needed
};

// List of files and folders to be ignored
const ignoredFiles = [
  '.angular', '.vscode', 'node_modules', '.editorconfig', '.gitignore', 'Migrations', 'Debug',
  'angular.json', 'package-lock.json', 'package.json', 'README.md', 'Dependencies', 'Connected Services',
  'tsconfig.app.json', 'tsconfig.json', 'tsconfig.spec.json', 'cS.js', 'zzz.md'
];

let processedFiles = 0;  // Counter to track processed files
let totalFiles = 0;  // Counter to track total files to process
let lastDir = '';  // To keep track of the last directory we were in
let currentDir = ''; // To store the current directory we are processing

// Function to recursively walk through directories
function walkDir(dir, callback) {
  console.log(`Scanning directory: ${dir}`);
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // Recursively process subdirectories
      walkDir(filePath, callback);
    } else {
      callback(filePath);
    }
  });
}

// Function to generate the summary of the code files
function generateSummary(root) {
  let summary = "";
  processedFiles = 0; // Reset processedFiles count before each run
  totalFiles = 0; // Reset totalFiles count

  console.log(`Starting file scan from root directory: ${root}`);

  // First pass: Count the total number of files to process
  walkDir(root, (filePath) => {
    const ext = path.extname(filePath);
    const lang = supportedExtensions[ext];

    // Skip unsupported files or files in ignored list
    if (!lang || ignoredFiles.some((ignored) => filePath.includes(ignored))) {
      return;
    }

    totalFiles++;
  });

  console.log(`Total files to process: ${totalFiles}`);

  // Second pass: Process each file
  walkDir(root, (filePath) => {
    const ext = path.extname(filePath);
    const lang = supportedExtensions[ext];

    // Skip unsupported files or files in ignored list
    if (!lang || ignoredFiles.some((ignored) => filePath.includes(ignored))) {
      return;
    }

    const relativePath = path.relative(root, filePath);
    const content = fs.readFileSync(filePath, 'utf-8');
    currentDir = path.dirname(relativePath).split(path.sep)[0];  // Get the first-level folder name

    // If the directory has changed, add a separator (---) and finish the last directory's summary
    if (currentDir !== lastDir) {
      if (lastDir) {
        summary += `\n---\n\n`;  // Add separator after processing the previous folder
        summary += `After finishing all code summary of ${lastDir}\n\n`;  // Add summary for the last folder
      }
      lastDir = currentDir;  // Update lastDir
    }

    // Log file processing
    console.log(`Processing file: ${relativePath}`);
    console.log(`Content (first 100 characters): ${content.slice(0, 100)}...`);

    // Add file content to summary
    summary += `${relativePath}:\n\`\`\`${lang}\n${content}\n\`\`\`\n\n`;

    // Progress indicator in terminal
    processedFiles++;
    const progress = Math.round((processedFiles / totalFiles) * 100);
    process.stdout.write(`\rProcessing... ${progress}%`);

    // Once all files are processed, write the summary
    if (processedFiles === totalFiles) {
      console.log("\nWriting the summary to the output file...");
      fs.writeFileSync(path.join(root, 'zzz.md'), summary);
      console.log(`✅ Summary written to zzz.md`);
    }
  });
}

// Starting point: Run the function from the root directory
const rootDir = process.cwd();  // Using the current working directory
generateSummary(rootDir);