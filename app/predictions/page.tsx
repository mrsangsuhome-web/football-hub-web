import { predictions } from "@/lib/predictions";

export default function PredictionsPage() {
  return (
    <main className="max-w-7xl mx-auto p-6">

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Football Predictions
        </h1>

        <p className="mt-2 text-gray-500">
          Top match predictions and win probabilities
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-4">

        {predictions.map((prediction) => (
          <div
            key={prediction.team}
            className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >

            <div className="text-sm text-gray-500">
              Prediction
            </div>

            <h2 className="text-2xl font-bold mt-2">
              {prediction.team}
            </h2>

            <div className="mt-4 text-5xl font-bold text-green-600">
              {prediction.percentage}%
            </div>

            <div className="mt-2 text-gray-500">
              Win Probability
            </div>

          </div>
        ))}

      </div>

      <section className="mt-10 bg-white border rounded-xl p-6">

        <h2 className="text-2xl font-bold">
          Prediction Analysis
        </h2>

        <p className="mt-4 leading-8 text-gray-700">
          Football Hub predictions are generated from
          recent team form, historical performance,
          tournament statistics and match trends.
          These percentages are provided for information
          and entertainment purposes only.
        </p>

      </section>

    </main>
  );
}