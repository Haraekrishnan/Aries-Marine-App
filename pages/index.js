import { useState } from 'react';

export default function Home() {
  const [title, setTitle] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    const res = await fetch('/api/save-task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    const data = await res.json();
    setResponse(data);
  };

  return (
    <main style={{ padding: 30, fontFamily: 'sans-serif' }}>
      <h1>🔥 Aries Marine Project</h1>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Task title"
        style={{ padding: 8, marginRight: 10 }}
      />
      <button onClick={handleSubmit} style={{ padding: 8 }}>
        Save Task
      </button>
      {response && <p style={{ marginTop: 20 }}>✅ {JSON.stringify(response)}</p>}
    </main>
  );
}
