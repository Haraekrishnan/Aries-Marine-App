import admin from 'firebase-admin';

// 1. Check if the environment variable is even set.
if (!process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
  throw new Error('The GOOGLE_SERVICE_ACCOUNT_JSON environment variable is not set.');
}

// 2. Parse the JSON string from the environment variable.
const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);

// 3. **THIS IS THE FIX:** Replace the escaped newlines ('\\n') with actual newlines ('\n').
serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');

// 4. Initialize the Firebase Admin app if it hasn't been already.
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// 5. Export the initialized instance to be used elsewhere.
export default admin;