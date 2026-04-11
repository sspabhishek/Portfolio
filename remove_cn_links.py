import re
import os

base = r'c:\Users\abhis\OneDrive\Desktop\Next_Protfolio\src\data'

for i in range(1, 8):
    filepath = os.path.join(base, f'dsa-sections-{i}.ts')
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove codingNinjasLink: cn('...') entries with the preceding comma+space
    content = re.sub(r",\s*codingNinjasLink:\s*cn\('[^']*'\)", '', content)
    
    # Also remove the cn helper line if it exists in files 3-7 (we added it)
    if i >= 3:
        content = re.sub(r"const cn = \(slug: string\) => `https://www\.naukri\.com/code360/problems/\$\{slug\}`;\n", '', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'Processed dsa-sections-{i}.ts')

print('Done removing broken CN links!')
