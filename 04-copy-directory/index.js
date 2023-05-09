const fs = require('fs').promises;
const path = require('path');

async function copyDir() {
    const sourceDir = path.join(__dirname, '..', '/04-copy-directory/files');
    const destinationDir = path.join(__dirname, '..', '/04-copy-directory/files-copy');

    try {
        await fs.access(destinationDir);
    } catch (error) {
        await fs.mkdir(destinationDir, { recursive: true });
    }

    const files = await fs.readdir(sourceDir);
    for (const file of files) {
        const sourcePath = path.join(sourceDir, file);
        const destinationPath = path.join(destinationDir, file);
        const stats = await fs.stat(sourcePath);
        if (stats.isFile()) {
            await fs.copyFile(sourcePath, destinationPath);
        } else if (stats.isDirectory()) {
            await copyDirRecursive(sourcePath, destinationPath);
        }
    }
}

async function copyDirRecursive(sourceDir, destinationDir) {
    try {
        await fs.access(destinationDir);
    } catch (error) {
        await fs.mkdir(destinationDir, { recursive: true });
    }

    const files = await fs.readdir(sourceDir);
    for (const file of files) {
        const sourcePath = path.join(sourceDir, file);
        const destinationPath = path.join(destinationDir, file);
        const stats = await fs.stat(sourcePath);
        if (stats.isFile()) {
            await fs.copyFile(sourcePath, destinationPath);
        } else if (stats.isDirectory()) {
            await copyDirRecursive(sourcePath, destinationPath);
        }
    }
}

copyDir();
