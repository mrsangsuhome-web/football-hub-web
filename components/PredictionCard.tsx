type PredictionCardProps = {
  team: string;
  percentage: number;
};

export default function PredictionCard({
  team,
  percentage,
}: PredictionCardProps) {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">

      <div className="text-gray-500 text-sm">
        Prediction
      </div>

      <div className="mt-2 text-xl font-bold">
        {team}
      </div>

      <div className="mt-4 text-4xl font-bold text-green-600">
        {percentage}%
      </div>

      <div className="mt-2 text-sm text-gray-500">
        Win Probability
      </div>

    </div>
  );
}