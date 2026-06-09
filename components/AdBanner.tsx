
"use client";

type AdBannerProps = {
  slot?: string;
};

export default function AdBanner({
  slot,
}: AdBannerProps) {

  return (

    <div className="border rounded-xl p-6 text-center my-6 bg-gray-50">

      <div className="text-sm text-gray-500">
        Google AdSense
      </div>

      <div className="font-semibold">
        Ad Slot: {slot || "default"}
      </div>

    </div>

  );
}

