export type TechBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "code"; language: string; code: string; filename?: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; tone?: "info" | "warn"; text: string };

export type TechPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  stack: string[];
  content: TechBlock[];
};

export const techPosts: TechPost[] = [
  {
    slug: "react-usememo-vs-usecallback",
    title: "useMemo vs useCallback: When Memoization Actually Helps",
    excerpt:
      "A practical breakdown of the two most over-applied React hooks, with benchmarks and the rules I follow before reaching for them.",
    date: "2026-06-02",
    readingTime: "8 min read",
    tags: ["React", "Performance"],
    stack: ["React 19", "TypeScript"],
    content: [
      {
        type: "p",
        text: "Most React performance posts tell you to memoize everything. That is wrong. Memoization is a cache, and caches have a cost — both the memory and the dependency-array bookkeeping you have to keep correct forever.",
      },
      {
        type: "h2",
        text: "The rule I actually follow",
      },
      {
        type: "list",
        items: [
          "Reach for useMemo when the computation is genuinely expensive (sorting >1k items, parsing markdown, building a derived tree).",
          "Reach for useCallback only when the function is passed to a memoized child or used in another hook's dependency array.",
          "Otherwise, render it. React is fast.",
        ],
      },
      {
        type: "h2",
        text: "A real example",
      },
      {
        type: "p",
        text: "Here is a list that filters and sorts a few thousand rows on every keystroke. Without useMemo, each render re-sorts. With it, the work is cached on the search term.",
      },
      {
        type: "code",
        language: "tsx",
        filename: "UserTable.tsx",
        code: `import { useMemo, useState } from "react";

type User = { id: string; name: string; score: number };

export function UserTable({ users }: { users: User[] }) {
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.toLowerCase();
    return users
      .filter((u) => u.name.toLowerCase().includes(q))
      .sort((a, b) => b.score - a.score);
  }, [users, query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users"
      />
      <ul>
        {visible.map((u) => (
          <li key={u.id}>
            {u.name} — {u.score}
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      },
      {
        type: "callout",
        tone: "info",
        text: "Profile first. If the React DevTools profiler shows the component rendering in <1ms, memoization is noise.",
      },
      {
        type: "h2",
        text: "useCallback in practice",
      },
      {
        type: "p",
        text: "useCallback only matters when referential equality matters. The classic case is passing a handler into a React.memo child.",
      },
      {
        type: "code",
        language: "tsx",
        code: `const Row = memo(function Row({ onSelect, user }: Props) {
  return <button onClick={() => onSelect(user.id)}>{user.name}</button>;
});

function List({ users }: { users: User[] }) {
  const onSelect = useCallback((id: string) => {
    console.log("selected", id);
  }, []);

  return users.map((u) => <Row key={u.id} user={u} onSelect={onSelect} />);
}`,
      },
      {
        type: "p",
        text: "Drop the useCallback and Row re-renders for every parent render, even though nothing about the row changed.",
      },
    ],
  },
  {
    slug: "python-async-await-primer",
    title: "Async Python in 10 Minutes",
    excerpt:
      "asyncio is not threading and it is not magic. Here is the smallest mental model that makes async/await click.",
    date: "2026-05-20",
    readingTime: "6 min read",
    tags: ["Python", "Backend"],
    stack: ["Python 3.12", "asyncio", "httpx"],
    content: [
      {
        type: "p",
        text: "Async Python lets a single thread juggle many waiting tasks. The keyword to remember is waiting. If your work is CPU-bound, async will not help — you want multiprocessing for that. Async shines when most of the time is spent waiting on the network, disk, or a database.",
      },
      {
        type: "h2",
        text: "The minimal example",
      },
      {
        type: "code",
        language: "python",
        filename: "fetch_all.py",
        code: `import asyncio
import httpx

URLS = [
    "https://api.github.com",
    "https://httpbin.org/get",
    "https://example.com",
]

async def fetch(client: httpx.AsyncClient, url: str) -> int:
    r = await client.get(url, timeout=10)
    return r.status_code

async def main() -> None:
    async with httpx.AsyncClient() as client:
        results = await asyncio.gather(*(fetch(client, u) for u in URLS))
    for url, status in zip(URLS, results):
        print(f"{status}  {url}")

if __name__ == "__main__":
    asyncio.run(main())`,
      },
      {
        type: "p",
        text: "Three HTTP calls in roughly the time of the slowest one, on a single thread, with no callbacks.",
      },
      {
        type: "callout",
        tone: "warn",
        text: "Do not call time.sleep() inside an async function — it blocks the entire event loop. Use await asyncio.sleep() instead.",
      },
      {
        type: "h2",
        text: "Common mistakes",
      },
      {
        type: "list",
        items: [
          "Calling an async function without await — you get a coroutine object, not a result.",
          "Mixing requests with asyncio — requests is sync, it blocks the loop. Use httpx or aiohttp.",
          "Spawning hundreds of tasks without a semaphore — you will get rate-limited or run out of sockets.",
        ],
      },
    ],
  },
  {
    slug: "sql-window-functions",
    title: "SQL Window Functions for People Who Always Reach for GROUP BY",
    excerpt:
      "Running totals, ranks, and per-group top-N in one query — without subqueries or self-joins.",
    date: "2026-04-11",
    readingTime: "7 min read",
    tags: ["SQL", "Postgres"],
    stack: ["PostgreSQL 16"],
    content: [
      {
        type: "p",
        text: "GROUP BY collapses rows. Window functions keep every row and add a computed column based on a window — a slice of related rows defined by PARTITION BY and ORDER BY.",
      },
      {
        type: "h2",
        text: "Running total per user",
      },
      {
        type: "code",
        language: "sql",
        code: `SELECT
  user_id,
  created_at,
  amount,
  SUM(amount) OVER (
    PARTITION BY user_id
    ORDER BY created_at
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS running_total
FROM payments
ORDER BY user_id, created_at;`,
      },
      {
        type: "h2",
        text: "Top 3 most recent orders per customer",
      },
      {
        type: "code",
        language: "sql",
        code: `WITH ranked AS (
  SELECT
    o.*,
    ROW_NUMBER() OVER (
      PARTITION BY customer_id
      ORDER BY created_at DESC
    ) AS rn
  FROM orders o
)
SELECT customer_id, id, created_at, total
FROM ranked
WHERE rn <= 3;`,
      },
      {
        type: "callout",
        tone: "info",
        text: "ROW_NUMBER, RANK, and DENSE_RANK differ on ties. ROW_NUMBER never ties; RANK leaves gaps; DENSE_RANK does not.",
      },
    ],
  },
];

export function getTechPost(slug: string) {
  return techPosts.find((p) => p.slug === slug);
}
