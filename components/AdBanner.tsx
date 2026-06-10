
"use client";

type Props = {
  slot?: string;
};

export default function AdBanner({
  slot = "default",
}: Props) {

  return (

    <div className="my-6">

      <div
        className="
        border
        rounded-xl
        p-6
        text-center
        bg-gray-50
      "
      >

        <div className="text-xs text-gray-500">
          Advertisement
        </div>

        <div className="font-semibold">
          Google AdSense
        </div>

        <div className="text-sm text-gray-500">
          Slot: {slot}
        </div>

      </div>

    </div>

  );
}

