import Navbar from "../component/navbar";

export default function Assignment() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="mt-10 p-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          AI Assignment
        </h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              Machine Learning
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Machine Learning (ML) is a subset of artificial intelligence (AI)
              that empowers computers to learn and make decisions without being
              explicitly programmed. ML algorithms detect patterns in data and
              improve their performance over time through training data. Its
              applications span across predictive modeling, recommendation
              systems, and much more.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              Artificial Intelligence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Artificial Intelligence (AI) is the broader domain focused on
              creating systems capable of performing tasks that usually require
              human intelligence. These tasks include reasoning, problem
              solving, understanding language, and perceiving the world. AI is
              foundational to advancements like virtual assistants, autonomous
              vehicles, and smart systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              Supervised Learning
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Supervised learning is a type of ML where the algorithm is trained
              on labeled data, meaning each input has a corresponding known
              output. The goal is to learn a mapping function that predicts
              outputs for new, unseen data. Examples include regression (e.g.,
              predicting house prices) and classification (e.g., spam email
              detection).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              Unsupervised Learning
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Unsupervised learning involves working with data that has no
              labels. The algorithm uncovers hidden structures or patterns
              within the data. Key examples include clustering techniques like
              k-means for grouping similar data and dimensionality reduction
              methods like Principal Component Analysis (PCA) for simplifying
              data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              Deep Learning
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Deep Learning is a specialized branch of ML that leverages
              artificial neural networks with multiple layers, enabling
              high-level abstraction from raw data. It thrives in fields like
              image recognition, speech processing, and natural language
              understanding, powered by large datasets and computational
              advances.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
