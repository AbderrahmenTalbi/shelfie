# 📚 Shelfie

Shelfie is a mobile app that helps users manage and keep track of their items across multiple shelves. Built with **React Native**, **Expo Router**, and powered by **Appwrite** for backend services, Shelfie allows users to authenticate, create shelves, add items, and get a visual overview of their storage.

---

## 🚀 Features

- 🔐 **Authentication** – Register and log in with secure email/password authentication (Appwrite)
- 📦 **Create & Manage Shelves** – Add shelves to categorize your inventory
- 🧺 **Item Management** – Add, remove, and view items within each shelf
- 🌐 **Persistent Data** – All data is stored and synced with Appwrite's cloud backend
- 💅 **Reusable UI Components** – Clean, component-based architecture with modern design
- ⚛️ **React Native + Expo** – Fast and smooth cross-platform mobile experience

---

## 🖼️ Screenshots

> *(Include here later: login screen, dashboard, shelf view, item details, etc.)*

---

## 🛠️ Tech Stack

| Layer        | Technology                |
|--------------|----------------------------|
| Frontend     | React Native (Expo Router) |
| State Mgmt   | Context API + Hooks        |
| Backend      | Appwrite                   |
| Auth         | Appwrite Auth              |
| Database     | Appwrite Database          |
| Styling      | React Native Stylesheets   |

---

## 📁 Project Structure

```
shelfie/
├── app/              # App routing and screens
├── assets/           # Static assets (e.g. images)
├── components/       # Reusable UI components
├── constants/        # Constant values
├── contexts/         # User context and auth logic
├── hooks/            # Custom React hooks
├── lib/              # Appwrite setup and utility
├── app.json          # Expo configuration
└── package.json      # Project dependencies
```

---

## ⚙️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/AbderrahmenTalbi/shelfie
   cd shelfie
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Appwrite**

   - Make sure you have an [Appwrite instance](https://appwrite.io/) set up.
   - In `lib/appwrite.js`, update your:
     - `projectId`
     - `endpoint`
     - any required collections or database IDs

4. **Run the App**
   ```bash
   npx expo start
   ```

---

## 🧠 Todo / Future Improvements

- 🔍 Search and filter items within shelves
- 🖼️ Add photo upload for each item
- 🛎️ Notifications for item expiration or low count
- 🔄 Offline support and data sync
- 🧪 Add tests for auth and item logic

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!  
Feel free to [open an issue](https://github.com/AbderrahmenTalbi/shelfie/issues) or submit a pull request.

---



---

## 🌟 Acknowledgements

- [Appwrite](https://appwrite.io/)
- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)

---

## 📬 Contact

For questions or feedback, reach out via [GitHub Issues](https://github.com/AbderrahmenTalbi/shelfie/issues).
