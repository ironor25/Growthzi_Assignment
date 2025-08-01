import os
import google.generativeai as genai
from dotenv import load_dotenv
from output_cleanup import extract_json
load_dotenv()
# Set API Key (you can use os.environ or hardcode)
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Load Gemini Pro
model = genai.GenerativeModel("gemini-1.5-pro-latest")

def text_to_json(resume_text):
    # Prompt for Gemini
    prompt = f"""
    You are an intelligent resume parser.

    Given the following resume text, extract the structured JSON with the relevant  keys given :

    Return only valid JSON and no extra explanation.
    No extra word from your side .

    Resume:
    \"\"\"
    {resume_text}
    \"\"\"
    """


    
    response = model.generate_content(prompt)
    
    # print(response.text[7:len(response.text)-4])   #hardcoded method but faster
    return extract_json(response.text)
