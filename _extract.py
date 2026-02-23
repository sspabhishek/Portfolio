import subprocess, sys
subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'PyPDF2', '-q'])
from PyPDF2 import PdfReader
r = PdfReader(r'c:\Users\abhis\OneDrive\Desktop\Next_Protfolio\public\resume.pdf')
for i, page in enumerate(r.pages):
    t = page.extract_text()
    if t:
        print(f"--- PAGE {i+1} ---")
        print(t)
