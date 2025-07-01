import sass from 'sass';
import fs from 'fs';
import path, { resolve } from 'path';


const srcDir = path.resolve('./src');
const outDir = path.resolve('./lib');

sass.render({
  file: 'src/atoms/Button.scss',
  loadPaths: [resolve('src')], // allows @use 'foundation/all'
  // other options...
}, (err, result) => {
  if (err) throw err;
  // handle output
});

function compile(filePath) {
  const result = sass.renderSync({ file: filePath });
  const relativePath = path.relative(srcDir, filePath);
  const outFile = path.join(outDir, relativePath).replace(/\.scss$/, '.css');

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, result.css);
  console.log(`✅ Built: ${relativePath} → ${outFile}`);
}

function compileAllScss(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      compileAllScss(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.scss')) {
      compile(fullPath);
    }
  }
}

compileAllScss(srcDir);
