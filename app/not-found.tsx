import { HomeRedirect } from "./home-redirect";

/** Column edges in % of the grid width. Every numeral is a real glyph pinned
 *  to the left edge of the column that clips it, so the stem hides behind the
 *  rule and only the diagonal survives. The three trailing columns are equal
 *  width and share one offset, which keeps those slivers identical. */
const TRAIL = 3.7333;

const RULES = [
  { left: 8.9 },
  { left: 17.2 },
  { left: 25.5 },
  { left: 50, belowBar: true },
  { left: 74.3 },
  { left: 88.8, trailing: true },
  { left: 88.8 + TRAIL, trailing: true },
  { left: 88.8 + TRAIL * 2, trailing: true },
];

const BAR_CELLS = [
  { width: 8.9, label: "404" },
  { width: 8.3, label: "NOT FOUND", hideOnNarrow: true },
  { width: 8.3, label: "ETA — NEVER", hideOnNarrow: true },
  { width: 48.8, label: "404s and heartbreaks™", brand: true },
  { width: 14.5, label: "TEMPORAL DETOUR", hideOnNarrow: true },
  { width: TRAIL, label: "EN", hideOnNarrow: true },
  { width: TRAIL, label: "" },
  { width: TRAIL, label: "" },
];

const NUMBERS = [
  { left: 0, width: 8.9, char: "4" },
  { left: 8.9, width: 8.3, char: "4" },
  { left: 17.2, width: 8.3, char: "4" },
  { left: 25.5, width: 48.8, char: "00", center: true },
  { left: 74.3, width: 14.5, char: "4", widenOnNarrow: true },
  { left: 88.8, width: TRAIL, char: "4", trailing: true },
  { left: 88.8 + TRAIL, width: TRAIL, char: "4", trailing: true },
  { left: 88.8 + TRAIL * 2, width: TRAIL, char: "4", trailing: true },
];

const cx = (...parts: (string | false | undefined)[]) =>
  parts.filter(Boolean).join(" ");

export default function NotFound() {
  return (
    <main
      className={cx(
        "relative flex h-dvh flex-col overflow-hidden bg-[#00ad6f] font-sans text-black",
        "[--frame:clamp(8px,0.7vw,10px)] [--bar:clamp(42px,6.8vh,58px)]",
        "[--num:min(23.3vw,42vh)] max-[780px]:[--num:min(26vw,42vh)] [--inset:0.06em]",
        "[--gutter:calc(2.2vw+var(--frame))]"
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[var(--frame)] z-30 border border-black"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[var(--frame)] z-0"
      >
        {RULES.map((rule) => (
          <span
            key={rule.left}
            className={cx(
              "absolute bottom-0 w-px bg-black/60",
              rule.belowBar ? "top-[var(--bar)]" : "top-0",
              rule.trailing && "max-[780px]:hidden"
            )}
            style={{ left: `${rule.left}%` }}
          />
        ))}
      </div>

      <div
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute inset-x-[var(--frame)] top-[54%] z-10 -translate-y-1/2",
          "h-[calc(var(--num)*1.5)] font-display text-[length:var(--num)] leading-none tracking-[-0.03em]",
          "max-[780px]:top-1/2"
        )}
      >
        {NUMBERS.map((num) => (
          <div
            key={num.left}
            className={cx(
              "absolute top-0 h-full w-[var(--w)] overflow-hidden",
              num.widenOnNarrow && "max-[780px]:w-[25.7%]",
              num.trailing && "max-[780px]:hidden"
            )}
            style={
              {
                left: `${num.left}%`,
                "--w": `${num.width}%`,
              } as React.CSSProperties
            }
          >
            <span
              className={cx(
                "absolute top-1/2 block -translate-y-1/2 whitespace-nowrap",
                num.center
                  ? "left-1/2 -translate-x-1/2"
                  : "left-[var(--inset)]"
              )}
            >
              {num.char}
            </span>
          </div>
        ))}
      </div>

      <header className="relative z-20 mx-[var(--frame)] mt-[var(--frame)] flex h-[var(--bar)] shrink-0 border-b border-black/60 font-mono text-[length:clamp(0.5rem,0.68vw,0.7rem)] uppercase tracking-[0.16em]">
        {BAR_CELLS.map((cell, i) => (
          <div
            key={i}
            className={cx(
              "flex items-center justify-center overflow-hidden whitespace-nowrap px-2",
              cell.brand
                ? "font-sans text-[length:clamp(0.8rem,1.05vw,1.05rem)] font-semibold normal-case tracking-[-0.015em]"
                : "opacity-70",
              cell.hideOnNarrow && "max-[780px]:text-[0px]"
            )}
            style={{ width: `${cell.width}%` }}
          >
            {cell.label}
          </div>
        ))}
      </header>

      <div className="relative z-20 min-h-0 flex-1 px-[var(--gutter)] pt-[clamp(0.5rem,1.2vh,1.2rem)]">
        <h1 className="font-display text-[length:clamp(2.2rem,5.4vw,5.8rem)] uppercase leading-[0.86] tracking-[-0.045em]">
          This page
          <br />
          doesn&rsquo;t exist
          <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "clamp(1.5px, 0.17vw, 3.5px) #000" }}
          >
            &ldquo;yet&rdquo;
          </span>
        </h1>
      </div>

      <footer
        className={cx(
          "relative z-20 flex shrink-0 items-end justify-between gap-[2.2vw]",
          "px-[var(--gutter)] pb-[calc(clamp(1.25rem,4vh,2.5rem)+var(--frame))]",
          "max-[780px]:flex-col max-[780px]:items-start max-[780px]:gap-[clamp(1rem,3vh,1.75rem)]"
        )}
      >
        <div>
          <p className="mb-2 font-mono text-[length:clamp(0.55rem,0.7vw,0.72rem)] uppercase tracking-[0.16em] opacity-70">
            Pro tip
          </p>
          <p className="max-w-[34ch] text-[length:clamp(0.8rem,1.02vw,1rem)] font-medium leading-snug">
            You aren&rsquo;t supposed to be here. You might as well give Hawking
            a visit.
          </p>
        </div>

        <HomeRedirect />
      </footer>
    </main>
  );
}
