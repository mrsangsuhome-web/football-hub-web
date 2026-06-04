type MatchCardProps = {
  home: string;
  away: string;
  time: string;
};

export default function MatchCard({
  home,
  away,
  time,
}: MatchCardProps) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">

      <div className="text-sm text-gray-500">
        {time}
      </div>

      <div className="mt-2 font-semibold">
        {home}
      </div>

      <div className="text-gray-500">
        vs
      </div>

      <div className="font-semibold">
        {away}
      </div>

    </div>
  );
}