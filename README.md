# 🌤️ Dnyx WeatherApp

A modern, fast, and responsive **Weather Application** built using **React + Vite + Tailwind CSS**.  
It fetches real-time weather data for any city using the **OpenWeatherMap API**, and also shows a simple **5-day forecast**.

🔗 **Live Demo:**  
https://task-3-nlca54rec-dinesh-ss-projects-77d974fe.vercel.app/

---

## 🚀 Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **Axios** (for API calls)
- **OpenWeatherMap API**
- **Vercel** (deployment)
- **GitHub** (source control)

---

## ⭐ Features

- 🔍 **Search weather by city**  
- 🌡️ **Toggle between Celsius & Fahrenheit**  
- 📆 **5-day forecast (one entry per day)**  
- 🖼️ **Weather icons**  
- ⚡ **Fast Vite bundler**  
- 🎨 **Clean Tailwind UI**  
- 📱 **Fully responsive**

---

## 📸 Screenshots

> *(You can add your own screenshots here later)*


yaml
Copy code

---

## 🛠️ Installation & Setup (Local Development)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Dinz-S/Dnyx-WeatherApp.git
cd Dnyx-WeatherApp
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Create an .env.local file
Inside the project root:

ini
Copy code
VITE_OWM_KEY=your_openweathermap_api_key_here
4️⃣ Start the development server
bash
Copy code
npm run dev
Now open
👉 http://localhost:5173

🔑 Getting an OpenWeatherMap API Key
Go to https://openweathermap.org

Create an account

Go to API Keys

Generate a key and paste it into .env.local

🚀 Deployment on Vercel
This project is deployed on Vercel.

To deploy your own version:

Push the project to GitHub

Go to https://vercel.com

Import the repo

Add environment variable:

ini
Copy code
VITE_OWM_KEY=your_api_key_here
Deploy 🎉

📁 Folder Structure
arduino
Copy code
Dnyx-WeatherApp
│── index.html
│── package.json
│── vite.config.mjs
│── tailwind.config.cjs
│── postcss.config.cjs
│── .gitignore
│── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles/
│   │   └── index.css
│   ├── components/
│   │   └── WeatherCard.jsx
│── public/
👨‍💻 Author
Dinesh S (@Dinz-S)
Feel free to ⭐ star the repo if you like it!

📜 License
This project is open-source and available under the MIT License.
