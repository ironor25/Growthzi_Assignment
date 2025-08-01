from flask import Flask,request,jsonify
from flask_cors import CORS
from deep_translator import GoogleTranslator
from currency_converter import CurrencyConverter
from text_parser import extract_from_docx ,extract_from_pdf
from llm_setup import text_to_json

app = Flask(__name__)
CORS(app)

converter = CurrencyConverter()




@app.route('/parse-resume', methods=['POST'])
def parse_resume():
    try:
        if 'file' not in request.files:
            return jsonify({'error': 'No file provided'}), 400

        file = request.files['file']
        filename = file.filename.lower()

        # Determine file type
   
        if filename.endswith('.pdf'):

            text = extract_from_pdf(file)
        elif filename.endswith('.docx'):

            text = extract_from_docx(file)
        else:
            return jsonify({'error': 'Unsupported file type'}), 400

        # Send to LLM for JSON extraction
        parsed_json = text_to_json(text)
        return jsonify(parsed_json)

    except Exception as e:
        return jsonify({'error': str(e)}), 500




@app.post('/convert-curr')
def convert_currency():
    try :
        data = request.get_json()
        curr_currency = data.get("from")
        local_currency = data.get("to")
        amount = data.get("amount")
        res = converter.convert(amount,curr_currency,local_currency)
        return jsonify ({
            "value": res
        })
    
    except Exception as e:
        return jsonify({"error":str(e)})
    



@app.post("/translate")
def convert_language():
    try:
        data = request.get_json()
        dest_lang = data.get("dest_lang")       
        content = data.get("content")         

        translated = GoogleTranslator(source='auto', target=dest_lang).translate(content)

        return jsonify({
            "translated_content": translated
        })

    except Exception as e:
        print("Translation error:", str(e))
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000) 
    

