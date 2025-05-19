'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: string;
}

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoibWFuYWdlckBleGFtcGxlLmNvbSIsInJvbGUiOiJNYW5hZ2VyIiwiaWF0IjoxNzQ3NjgzMjI2LCJleHAiOjE3NDc2ODUwMjZ9.2CUXn9EGgKAfJLb6Vsv0LmIgVfrfZeZrvKO4YOfUVw8";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get('http://localhost:3001/tasks/pending', {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          }
        });

        setTasks(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Pending Tasks</h1>
      {loading && <p>Loading tasks...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && tasks.length === 0 && <p>No pending tasks found.</p>}
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: '10px' }}>
            <strong>Title:</strong> {task.title} <br />
            <strong>Description:</strong> {task.description} <br />
            <strong>Status:</strong> {task.status} <br />
            <strong>Created At:</strong> {new Date(task.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
