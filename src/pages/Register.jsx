import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4">Merchant Registration</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Business Name" className="w-full border px-3 py-2 rounded" required />
          <input type="email" placeholder="Email" className="w-full border px-3 py-2 rounded" required />
          <input type="text" placeholder="Phone Number" className="w-full border px-3 py-2 rounded" required />
          <input type="text" placeholder="Business ID" className="w-full border px-3 py-2 rounded" required />
          <input type="password" placeholder="Password" className="w-full border px-3 py-2 rounded" required />
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">
            Register
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already registered? <Link to="/" className="text-indigo-600">Login</Link>
        </p>
      </div>
    </div>
  );
}
