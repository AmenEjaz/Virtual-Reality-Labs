import { Suspense } from "react";
import PhysicsLabs from "../../../../src/components/lab catalog/PhysicsLabs";

export default function PhysicsLabScreen() {
  return (
    <Suspense fallback={<div className="p-8">Loading physics labs...</div>}>
      <PhysicsLabs />
    </Suspense>
  );
}
