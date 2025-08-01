# Backend API Endpoints

This backend provides three main endpoints:

---

## 1. Parse Resume

**Endpoint:**  
`POST /parse-resume`

**Description:**  
Uploads a `.pdf` or `.docx` resume, extracts its text, and returns structured JSON using an LLM.

**Request:**

- Content-Type: `multipart/form-data`
- Form field: `file` (the resume file)

**Sample `curl` Request:**

```sh
 POST http://127.0.0.1:5000/parse-resume
```

**Sample Response:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "education": [...],
  "experience": [...],
  ...
}
```

---

## 2. Currency Conversion

**Endpoint:**  
`POST /convert-curr`

**Description:**  
Converts an amount from one currency to another.

**Request:**

- Content-Type: `application/json`
- Body:

```json
{
  "amount": 100,
  "from": "USD",
  "to": "INR"
}
```

**Sample `curl` Request:**

```sh
POST http://127.0.0.1:5000/convert-curr 
```

**Sample Response:**

```json
{
  "value": 8321.5
}
```

---

## 3. Content Translation

**Endpoint:**  
`POST /translate`

**Description:**  
Translates a given text to the specified language.

**Request:**

- Content-Type: `application/json`
- Body:

```json
{
  "content": "Hello, how are you?",
  "dest_lang": "hi"
}
```

**Sample `curl` Request:**

```sh
 POST http://127.0.0.1:5000/translate 
  
```

**Sample Response:**

```json
{
  "translated_content": "नमस्ते, आप कैसे हैं?"
}
```

---

**Note:**

- Only `.pdf` and `.docx` files are supported for `/parse-resume`.
- Use valid currency codes (e.g., USD, INR, EUR) for `/convert-curr`.
- Use supported language codes (e.g., hi for Hindi, es for Spanish)
