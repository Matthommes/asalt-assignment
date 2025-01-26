import Navbar from "../component/navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          Contact Me
        </h1>
        <div className="space-y-6">
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Phone</h2>
            <p className="text-lg text-gray-600">+234 902 183 1763</p>
          </section>
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Email</h2>
            <p className="text-lg text-gray-600">afolayansalim@gmail.com</p>
          </section>
          
        </div>
      </main>
    </div>
  );
}
