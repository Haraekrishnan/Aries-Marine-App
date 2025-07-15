// pages/index.js
import { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

export default function Home() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = async () => {
    if (!title.trim()) return;
    await addDoc(collection(db, "tasks"), {
      title,
      createdAt: serverTimestamp(),
    });
    setTitle("");
  };

  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTasks(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <main style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>📋 Aries Marine – Live Tasks</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        style={{ padding: 8, marginRight: 10 }}
      />
      <button onClick={handleAdd} style={{ padding: 8 }}>
        Add Task
      </button>

      <ul style={{ marginTop: 20 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ margin: "5px 0" }}>
            ✅ {task.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
