"use client";

import { useEffect, useState } from "react";
import { Calendar, MapPin, Clock, Users, Tag } from "lucide-react";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();
        setEvents(data.events || []);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto text-black">
      <h1 className="text-3xl font-bold mb-6">Browse Events</h1>

      {events.length === 0 ? (
        <p className="text-gray-600">No events found.</p>
      ) : (
        <ul className="space-y-6">
          {events.map((event) => (
            <li
              key={event._id}
              className="p-6 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-md shadow-md"
            >
              <h2 className="text-2xl font-semibold mb-1 text-black">
                {event.title}
              </h2>
              <p className="text-gray-700 mb-4">{event.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800">
                {event.organizer && (
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-600" />
                    <span>Organizer: {event.organizer.name}</span>
                  </div>
                )}

                {event.category && (
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-yellow-600" />
                    <span>Category: {event.category.name}</span>
                  </div>
                )}

                {event.startDate && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>
                      Start: {new Date(event.startDate).toLocaleDateString()}
                    </span>
                  </div>
                )}

                {event.endDate && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-red-600" />
                    <span>
                      End: {new Date(event.endDate).toLocaleDateString()}
                    </span>
                  </div>
                )}

                {event.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span>Location: {event.location}</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>
                    Created: {new Date(event.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      event.isPublished
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {event.isPublished ? "Published" : "Draft"}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
