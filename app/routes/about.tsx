import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About ListenThaiWords" },
    { name: "description", content: "A project to help you listen thai words" },
  ];
};

export default function About() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">About page</h1>

      <div className="py-2">
        <p>
          This is a project to help you listen thai words. You can add words and
          listen to them.
        </p>
      </div>
    </div>
  );
}
