def prompt_template(text):
    prompt = f"""
You are a resume-to-portfolio converter AI.

Given a resume in raw text or PDF, extract only the relevant information and return a clean JSON with the following structure. Only include sections if they exist in the resume.

Return only valid JSON. Do not include any extra text.

The format should look like this:

{{
  "hero": "One-line professional headline write like this  HI  i'm  'resume person name' ",
  "about": "analyse whole resume fill it by yourself Short paragraph describing the person’s background, experience, and goals.",
  "skills": ["Skill1", "Skill2", "Skill3"],
  "experience": [
    {{
      "company": "Company Name",
      "role": "Job Title",
      "duration": "Start – End or Present",
      "description": "Short description of responsibilities and achievements"
    }}
  ],
  "projects": [
    {{
      "title": "Project Name",
      "description": "Short summary of the project",
      "tech_stack": ["Tech1", "Tech2"],
      "link": "https://project-link.com"
    }}
  ],
  "education": [
    {{
      "institution": "University/College Name",
      "degree": "Degree & Major",
      "duration": "Start – End",
      "description": "Optional: key coursework or achievements"
    }}
  ],
  "achievements": ["Award 1", "Award 2"],
  "certifications": ["Cert 1", "Cert 2"],
  "contact": {{
    "email": "example@email.com",
    "phone": "Optional",
    "linkedin": "linkedin.com/in/username",
    "github": "github.com/username",
    "portfolio": "optional-personal-site.com"
  }},
  "others": {{
    "if you find any other info insert here in key value only if it has some relevance": ""
  }}
}}

Now extract from the following resume:


\"\"\"
{text}
\"\"\"
"""
    return prompt
