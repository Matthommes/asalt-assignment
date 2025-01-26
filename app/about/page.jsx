import Navbar from "../component/navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          About Me
        </h1>
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/asalt.jpg"
            alt="Profile Picture"
            className="w-40 h-40 rounded-full object-cover shadow-md border-4 border-blue-700"
          />
          <h2 className="text-2xl font-semibold text-gray-800">
            Afolayan Salim
          </h2>
          <p className="text-lg text-gray-600">
            Matric Number: <span className="font-medium">F/HD/23/3210137</span>
          </p>
          <p className="text-gray-600 leading-relaxed text-center">
            Passionate about technology and constantly learning to make the
            world better. I enjoy building projects that help solve real-life
            problems.
          </p>
        </div>
      </main>
    </div>
  );
}
