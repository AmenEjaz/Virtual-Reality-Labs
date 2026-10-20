import { Suspense } from "react";
import Chapter from "../../../../src/components/lab catalog/Chapter";

export default function ChaptersPage() {
  return (
    <Suspense fallback={<div className="p-8">Loading chapters...</div>}>
      <Chapter />
    </Suspense>
  );
}
