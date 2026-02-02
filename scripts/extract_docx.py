from docx import Document
from pathlib import Path
p = Path(r"c:\Users\jamroll\Documents\GitHub\ssg-website\updates\Shin Shin website corrections.docx")
if not p.exists():
    raise FileNotFoundError(f"{p} not found")

doc = Document(p)
text_parts = []
for para in doc.paragraphs:
    if para.text.strip():
        text_parts.append(para.text)

out = Path(r"c:\Users\jamroll\Documents\GitHub\ssg-website\updates\Shin Shin website corrections.txt")
out.write_text("\n\n".join(text_parts), encoding="utf-8")
print(f"Saved text to {out}")
