import React from "react";
import Card from "../components/Card";

const AssignmentPage = () => {
  return (
    <section>
      <Card>
        <div>
          <h3 class="font-medium">Grid Layouts Practice</h3>
          <p class="text-sm text-slate-600">Frontend Foundations</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="rounded-lg px-2 py-0.5 text-xs bg-orange-100 text-orange-700">
            Pending
          </span>
          <button class="rounded-xl px-3 py-1.5 border border-slate-200 hover:bg-slate-50 text-sm">
            Open
          </button>
        </div>
      </Card>
      <Card>
        <div>
          <h3 class="font-medium">Dart Streams Quiz</h3>
          <p class="text-sm text-slate-600">Dart & Flutter</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="rounded-lg px-2 py-0.5 text-xs bg-emerald-100 text-emerald-700">
            Completed
          </span>
          <button class="rounded-xl px-3 py-1.5 border border-slate-200 hover:bg-slate-50 text-sm">
            View
          </button>
        </div>
      </Card>
    </section>
  );
};

export default AssignmentPage;
