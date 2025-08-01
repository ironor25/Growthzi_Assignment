# Project Setup Guide

## Backend Setup

1. **Clone the repository** and navigate to the `backend` directory:

   ```sh
   cd backend
   ```

2. **Create a virtual environment** (optional but recommended):

   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:

   ```sh
   pip install -r requirements.txt
   ```

4. **Set up environment variables**:

   - Create a `.env` file in the `backend` directory.
   - Add your Gemini API key:
     ```
     GOOGLE_API_KEY=your-gemini-api-key-here
     ```
   - Replace `your-gemini-api-key-here` with your actual Gemini API key.
   - For Testing you can use this key `AIzaSyBJupw-mnhokj7iFR52Vgy0hUuuIrnAqOM`.
   

5. **Run the backend server**:
   ```sh
   python main.py
   ```
   The backend will start on `http://127.0.0.1:5000`.

---

## Frontend Setup

1. **Navigate to the `frontend` directory**:

   ```sh
   cd frontend
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Start the development server**:
   ```sh
   npm run dev
   ```
   The frontend will start on `http://localhost:5173` (or another port if 5173 is in use).

---

4. **Create a frontend environment file**:

    - In the `frontend` directory, create a `.env` file.
    - Add the following line to specify your backend URL:
      ```
      VITE_BACKEND_URL=http://127.0.0.1:5000
      ```
    - Replace the URL if your backend runs on a different address or port.
## File Structure Overview

```
project-root/
│
├── backend/
│   ├── .env
│   ├── llm_setup.py
│   ├── main.py
│   ├── output_cleanup.py
│   ├── requirements.txt
│   ├── text_parser.py
│   └── __pycache__/
│
└── frontend/
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── README.md
    ├── vite.config.js
    ├── public/
    └── src/
        ├── App.css
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── assets/
        └── components/
```

- The backend provides APIs for resume parsing, currency conversion, and content translation.
- The frontend is a React app that interacts with the backend APIs.

---

**Note:**

- Ensure the backend is running before using the frontend features.
- The Gemini API key is required for resume parsing
