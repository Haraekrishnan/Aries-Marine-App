import admin from '../../lib/firebase-admin'; // Adjust the path if needed

export default async function handler(req, res) {
  // Your API logic here...
  // You can now use `admin.firestore()`, etc.

  try {
    const db = admin.firestore();
    console.log("Firestore initialized successfully");

    // Example: add a document
    await db.collection('tasks').add({
      name: req.body.taskName || 'Untitled Task',
      createdAt: new Date().toISOString(),
    });

    res.status(200).json({ success: true, message: "Task saved!" });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
}