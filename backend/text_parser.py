from PyPDF2 import PdfReader
from docx import Document

def extract_from_docx(file_stream):
    
    doc = Document(file_stream)
    return "\n".join([para.text for para in doc.paragraphs])



def extract_from_pdf(file_stream):

    file_stream.seek(0) 
    reader = PdfReader(file_stream)
    text = ""
    for page in reader.pages:
        text += page.extract_text() or ""
    return text