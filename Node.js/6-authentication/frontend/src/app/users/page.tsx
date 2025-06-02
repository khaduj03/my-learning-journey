"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";

interface User {
  _id: string;
  first_name: string;
  email: string;
}

interface FormData {
  first_name: string;
  email: string;
  password: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState<FormData>({
    first_name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = await fetch("http://localhost:3002/users");
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data.users);
    } catch (err: any) {
      setErrors([err.message || "Error fetching users"]);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setErrors([]);

    try {
      let res;

      if (selectedUserId) {
        res = await fetch(`http://localhost:3002/users/${selectedUserId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        res = await fetch("http://localhost:3002/users/add-user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }

      if (res.ok) {
        setMessage(
          selectedUserId
            ? "✅ User updated successfully"
            : "✅ User added successfully"
        );
        setForm({ first_name: "", email: "", password: "" });
        setSelectedUserId(null);
        fetchUsers();
      } else {
        const errorData = await res.json();
        if (errorData.errors) {
          setErrors(errorData.errors.map((e: any) => e.msg));
        } else {
          setErrors([errorData.message || "Error occurred"]);
        }
      }
    } catch {
      setErrors(["Network error"]);
    }
  };

  const handleEdit = (user: User) => {
    setSelectedUserId(user._id);
    setForm({ first_name: user.first_name, email: user.email, password: "" });
    setMessage("");
    setErrors([]);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    setMessage("");
    setErrors([]);

    try {
      const res = await fetch(`http://localhost:3002/users/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setMessage("✅ User deleted successfully");
        if (selectedUserId === id) {
          setSelectedUserId(null);
          setForm({ first_name: "", email: "", password: "" });
        }
        fetchUsers();
      } else {
        const errorData = await res.json();
        setErrors([errorData.message || "Failed to delete user"]);
      }
    } catch {
      setErrors(["Network error"]);
    }
  };

  const handleCancelEdit = () => {
    setSelectedUserId(null);
    setForm({ first_name: "", email: "", password: "" });
    setMessage("");
    setErrors([]);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-3xl mb-6">👥 User List</h1>

      {message && (
        <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
          {message}
        </div>
      )}

      {errors.length > 0 &&
        errors.map((err, i) => (
          <div key={i} className="bg-red-100 text-red-700 p-3 rounded mb-2">
            {err}
          </div>
        ))}

      <table className="w-full border border-gray-300 mb-8">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">First Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2">{user._id}</td>
                <td className="border border-gray-300 p-2">
                  {user.first_name}
                </td>
                <td className="border border-gray-300 p-2">{user.email}</td>
                <td className="border border-gray-300 p-2 space-x-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center p-4">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <h2 className="text-2xl mb-4">
        {selectedUserId ? "✏️ Edit User" : "➕ Add New User"}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          name="first_name"
          placeholder="First Name"
          value={form.first_name}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="password"
          type="password"
          placeholder={
            selectedUserId
              ? "(Leave blank to keep current password)"
              : "Password"
          }
          value={form.password}
          onChange={handleChange}
          required={!selectedUserId}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            {selectedUserId ? "Update User" : "Add User"}
          </button>
          {selectedUserId && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
