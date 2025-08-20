"use client";
import { useRef } from "react";

export default function Testimonials({ data }: { data: any }) {
  const scroller = useRef<HTMLDivElement>(null);
  return (
    <div>
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">{data?.heading}</h2>
          <p className="mt-2 text-slate-600">{data?.subhead}</p>
          <div className="mt-6 flex items-center gap-6">
            {data?.ratings?.map((r: any) => (
              <a key={r.source} href={r.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm">
                <img src={r.logo} alt={r.source} className="h-5" />
                <span className="font-medium">{r.source} {r.score}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <div ref={scroller} className="scroll-smooth snap-x snap-mandatory overflow-x-auto">
            <div className="flex gap-4">
              {data?.carousel?.map((t: any, idx: number) => (
                <article key={idx} className="snap-center shrink-0 basis-[88%] sm:basis-[70%] md:basis-[60%] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-slate-700">{t.quote}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <img src={t.author.avatar} alt={t.author.name} className="h-8 w-8 rounded-full" />
                    <div>
                      <div className="text-sm font-medium">{t.author.name}</div>
                      <div className="text-xs text-slate-500">{t.author.role}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}