
export default function WorldCupBanner() {

  return (

    <div
      className="
      rounded-2xl
      border
      p-8
      mb-8
      text-center
      bg-gradient-to-r
      from-gray-50
      to-white
    "
    >

      <h2 className="text-4xl font-bold">
        🏆 FIFA World Cup 2026
      </h2>

      <p className="mt-4 text-gray-500">
        48 Teams • 12 Groups • 104 Matches
      </p>

      <div className="mt-6 flex justify-center gap-3 flex-wrap">

        <a
          href="/world-cup-2026/schedule"
          className="
          border
          rounded-lg
          px-4
          py-2
        "
        >
          Schedule
        </a>

        <a
          href="/world-cup-2026/groups"
          className="
          border
          rounded-lg
          px-4
          py-2
        "
        >
          Groups
        </a>

        <a
          href="/world-cup-2026/bracket"
          className="
          border
          rounded-lg
          px-4
          py-2
        "
        >
          Bracket
        </a>

      </div>

    </div>

  );
}

