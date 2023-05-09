const fs = require('fs');
const path = require('path');

const stylesPath = path.join(__dirname, '..', '/05-merge-styles/styles');
const bundlePath = path.join(__dirname, '..', '/05-merge-styles/project-dist', 'bundle.css');

const cssFiles = fs.readdirSync(stylesPath).filter(file => path.extname(file) === '.css');

let bundleCss = '';

cssFiles.forEach(file => {
    const filePath = path.join(stylesPath, file);
    const css = fs.readFileSync(filePath, 'utf8');
    bundleCss += css;
});

fs.writeFileSync(bundlePath, bundleCss);