"use client"

import { useState } from "react";
import axios from 'axios';

export default function ContactPage() {
  const [userEmail, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!userEmail || !message) {
      setError('Both fields are required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(userEmail)) {
      setError('Email is invalid.');
      return;
    }

    setError('');
    try {
      const response = await axios.post('api/contact', 
        { userEmail, message }, 
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (response.status === 200) {
        setSuccess('Your message has been sent!');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      setError('Failed to send message.');
      setSuccess('');
    }
  };

  return (
    <main className="flex flex-col sm:w-[500px] mx-auto mt-8">
      <h1 className="text-2xl mb-6 uppercase tracking-widest text-center">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 uppercase">Email:</label>
          <input
            className="p-2 border border-gray-300 rounded text-gray-700"
            id="email"
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 uppercase">Message:</label>
          <textarea
            className="p-2 border border-gray-300 rounded h-32 text-gray-700"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <button type="submit" className="w-full p-2 rounded bg-slate-900 uppercase">Send</button>
      </form>
    </main>
  );
}