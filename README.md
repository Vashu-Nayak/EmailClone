# Gmail Clone

A feature-rich Gmail clone built using React, Redux, and Firebase.

## Features
- User authentication with Firebase
- Compose, send, and delete emails
- Real-time email updates
- Responsive UI similar to Gmail
- Dark mode support

## Tech Stack
- **Frontend:** React, Redux, React Router
- **Backend & Database:** Firebase Authentication, Firestore
- **Styling:** TailwindCss

## Installation

1. Clone the repository:
   ```sh
   https://github.com/Vashu-Nayak/EmailClone.git
   ```
2. Navigate to the project folder:
   ```sh
   cd EmailClone
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable **Authentication** (Google Sign-In)
   - Set up **Firestore Database**
   - Create a `.env` file and add your Firebase config:
     ```sh
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

5. Start the development server:
   ```sh
   npm start
   ```

## Usage
- Sign in using Google authentication
- Compose and send emails
- View inbox, sent emails, and deleted emails
- Real-time updates when new emails arrive

## Deployment
To deploy on **Firebase Hosting**:
1. Build the project:
   ```sh
   npm run build
   ```
2. Install Firebase CLI:
   ```sh
   npm install -g firebase-tools
   ```
3. Login to Firebase:
   ```sh
   firebase login
   ```
4. Initialize Firebase:
   ```sh
   firebase init
   ```
5. Deploy:
   ```sh
   firebase deploy
   ```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any inquiries, feel free to reach out:
- GitHub: [yourusername](https://github.com/Vashu-Nayak)
- Email: nvashu1@gmail.com

