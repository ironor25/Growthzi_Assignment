import re
import json

def extract_json(response_text: str):

    try:
        # Removing the backticks and "json" tag.
        cleaned = re.sub(r"```(?:json)?", "", response_text).strip("` \n")

        # Extract JSON block using regex (matches outermost {})
        match = re.search(r"\{.*\}", cleaned, re.DOTALL)
        if not match:
            print("No JSON object found.")
            return None

        json_str = match.group()
        

        # Convert single quotes to double quotes if needed (only if not valid JSON)
        try:
            data = json.loads(json_str)
        except json.JSONDecodeError:
            json_str = json_str.replace("'", '"')
            data = json.loads(json_str)
    
        

        formatted = json.dumps(data, indent=2)  #formatting json string
        formatted_json = json.loads(formatted)  #type conversion of json string to json or python dict
    
        return formatted_json

    except Exception as e:
        print(f"[ERROR extracting JSON]: {e}")
        return None
