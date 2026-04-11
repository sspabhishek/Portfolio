const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, 'src', 'data');

for (let i = 1; i <= 7; i++) {
    const filepath = path.join(base, `dsa-sections-${i}.ts`);
    let content = fs.readFileSync(filepath, 'utf-8');

    // Remove codingNinjasLink: cn('...') entries with the preceding comma+space
    content = content.replace(/,\s*codingNinjasLink:\s*cn\('[^']*'\)/g, '');

    // Also remove the cn helper line in files 3-7 (we added it)
    if (i >= 3) {
        content = content.replace(/const cn = \(slug: string\) => `https:\/\/www\.naukri\.com\/code360\/problems\/\$\{slug\}`;\n/g, '');
    }

    fs.writeFileSync(filepath, content, 'utf-8');
    console.log(`Processed dsa-sections-${i}.ts`);
}

console.log('Done removing broken CN links!');
