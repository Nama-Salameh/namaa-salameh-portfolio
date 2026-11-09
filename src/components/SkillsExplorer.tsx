"use client";

import { SKILL_GROUPS } from "@/data/config";

export default function SkillsExplorer() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {SKILL_GROUPS.map((group) => (
        <div key={group.heading}>
          <h2 className="font-semibold text-lg mb-3">{group.heading}</h2>
          <div className="flex flex-wrap gap-2">
            {group.tags.map((skill) => (
              <span
                key={skill}
                className="text-sm bg-white border border-neutral-200 rounded-full px-3 py-1 transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-900 active:scale-95 motion-reduce:transform-none motion-reduce:transition-none"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}