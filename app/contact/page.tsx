"use client"

import { useState } from "react";
import axios from 'axios';

export default function ContactPage() {
  const [userEmail, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSuccess('');
    if (!userEmail || !message) {
      setError('Both fields are required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(userEmail)) {
      setError('Email is invalid.');
      return;
    }

    try {
      setError('');
      setIsSending(true);
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
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="flex flex-col w-full md:w-[32rem] px-8 mt-8">
      <h1 className="text-4xl my-20 font-bold text-center">Contact Me</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2">Email:</label>
          <input
            className="p-2 border border-gray-300 rounded text-gray-700"
            id="email"
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2">Message:</label>
          <textarea
            className="p-2 border border-gray-300 rounded h-32 text-gray-700"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <button type="submit" className="w-full p-2 rounded bg-slate-900 hover:bg-slate-700 transition-colors duration-300">Send</button>
        {isSending && <p className="text-gray-500">Sending...</p>}
      </form>
    </main>
  );
}