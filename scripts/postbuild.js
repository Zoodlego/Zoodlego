const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

function fixRscFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.isDirectory()) {
      const subDir = path.join(dir, item.name);
      fixRscFiles(subDir);
      // If folder is named __next.<something>, copy __PAGE__.txt up as __next.<something>.__PAGE__.txt
      if (item.name.startsWith('__next.')) {
        const pageTxt = path.join(subDir, '__PAGE__.txt');
        if (fs.existsSync(pageTxt)) {
          const targetFile = path.join(dir, `${item.name}.__PAGE__.txt`);
          fs.copyFileSync(pageTxt, targetFile);
        }
      }
    }
  }
}

fixRscFiles(outDir);
console.log('Postbuild static RSC file aliases verified.');
