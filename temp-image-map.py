import os, re, json
cwd = os.getcwd()
root = os.path.join(cwd, 'src', 'img', 'products')
files = []
for dirpath, dirnames, filenames in os.walk(root):
    for fname in filenames:
        if fname.lower().endswith(('.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg')):
            files.append(os.path.relpath(os.path.join(dirpath, fname), cwd).replace('\\', '/'))

pdata = open('src/js/products-data.js', 'r', encoding='utf-8').read()
codes = [m.group(1) for m in re.finditer(r"\{\s*code:\s*'([^']+)'", pdata)]

code_clean = lambda c: re.sub(r'[^A-Za-z0-9]+', '', c).upper()
file_map = {}
for f in files:
    base = os.path.splitext(os.path.basename(f))[0]
    base_norm = re.sub(r'\s*\(\d+\)$', '', base, flags=re.IGNORECASE)
    base_norm = re.sub(r'[^A-Za-z0-9]+', '', base_norm).upper()
    file_map.setdefault(base_norm, []).append(f)

matches = {}
unmatched = []
for c in codes:
    cc = code_clean(c)
    if cc in file_map:
        matches[c] = file_map[cc][0]
    else:
        found = None
        for key, paths in file_map.items():
            if cc in key or key in cc:
                found = paths[0]
                break
        if found:
            matches[c] = found
        else:
            unmatched.append(c)

with open('image-map-output.json', 'w', encoding='utf-8') as out:
    json.dump({
        'product_count': len(codes),
        'image_file_count': len(files),
        'matched_count': len(matches),
        'unmatched_count': len(unmatched),
        'matches': matches,
        'unmatched': unmatched
    }, out, indent=2, ensure_ascii=False)
