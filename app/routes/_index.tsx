import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "ListenThaiWords" },
    { name: "description", content: "Listen Thai Words" },
  ];
};

const vocabulary = [
  {
    id: 1,
    thai: "สวัสดีค่ะ ครับ",
    english: "Hello",
    src: "/assets/audio/01_สวัสดีค่ะ ครับ (Hello).mp3",
  },
  {
    id: 2,
    thai: "คุณชื่ออะไรคะ ครับ",
    english: "What is your name",
    src: "/assets/audio/02_คุณชื่ออะไรคะ ครับ (What is your name).mp3",
  },
  {
    id: 3,
    thai: "ผมชื่อ ฉันชื่อ เราชื่อ",
    english: "My name is",
    src: "/assets/audio/03_ผมชื่อ ฉันชื่อ เราชื่อ My name is.mp3",
  },
  {
    id: 4,
    thai: "ยินดีที่ได้รู้จัก",
    english: "Nice to meet you",
    src: "/assets/audio/04_ยินดีที่ได้รู้จัก (Nice to meet you).mp3",
  },
  {
    id: 5,
    thai: "มาจากไหน มาจากประเทศอะไร",
    english: "Where are you from",
    src: "/assets/audio/05_มาจากไหน มาจากประเทศอะไร (Where are you from).mp3",
  },
  {
    id: 6,
    thai: "ขอบคุณค่ะ ครับ",
    english: "Thank you",
    src: "/assets/audio/06_ขอบคุณค่ะ ครับ (Thank you).mp3",
  },
  {
    id: 7,
    thai: "ขอบคุณมากๆ",
    english: "Thank you very much",
    src: "/assets/audio/07_ขอบคุณมากๆ (Thank you very much).mp3",
  },
  {
    id: 8,
    thai: "ขอโทษค่ะ ครับ",
    english: "Sorry",
    src: "/assets/audio/08_ขอโทษค่ะ ครับ (Sorry).mp3",
  },
  {
    id: 9,
    thai: "ขอทางหน่อยค่ะ",
    english: "Excuse me",
    src: "/assets/audio/09_ขอทางหน่อยค่ะ (Excuse me).mp3",
  },
  {
    id: 10,
    thai: "ยินดี ด้วยความยินดี",
    english: "with my pleasure",
    src: "/assets/audio/10_ยินดี ด้วยความยินดี (with my pleasure).mp3",
  },
  {
    id: 11,
    thai: "ไม่เป็นไร",
    english: "no worries",
    src: "/assets/audio/11_ไม่เป็นไร (no worries).mp3",
  },
  {
    id: 12,
    thai: "ไม่มีปัญหา",
    english: "no problem",
    src: "/assets/audio/12_ไม่มีปัญหา (no problem).mp3",
  },
  {
    id: 13,
    thai: "คุณพูดภาษาไทยได้มั้ย",
    english: "Can you speak Thai",
    src: "/assets/audio/13_คุณพูดภาษาไทยได้มั้ย (Can you speak Thai).mp3",
  },
  {
    id: 14,
    thai: "คุุณพูดภาษาอังกฤษได้มั้ย",
    english: "Can you speak English",
    src: "/assets/audio/14_คุุณพูดภาษาอังกฤษได้มั้ย (Can you speak English).mp3",
  },
  {
    id: 15,
    thai: "พูดได้นิดหน่อย",
    english: "I can speak a little",
    src: "/assets/audio/15_พูดได้นิดหน่อย (I can speak a little).mp3",
  },
  {
    id: 16,
    thai: "พูดไม่ได้",
    english: "I can't speak",
    src: "/assets/audio/16_พูดไม่ได้ (I can_t speak..).mp3",
  },
  {
    id: 17,
    thai: "ฉัน(ผม)เป็นคนอเมริกา",
    english: "I am American",
    src: "/assets/audio/17_ฉัน(ผม)เป็นคนอเมริกา (I am American).mp3",
  },
  {
    id: 18,
    thai: "คุณเป็นคนไทยใช่มั้ย",
    english: "Are you Thai",
    src: "/assets/audio/18_คุณเป็นคนไทยใช่มั้ย (Are you Thai).mp3",
  },
  {
    id: 19,
    thai: "สอนภาษาไทยให้ผมได้มั้ย",
    english: "Can you teach me Thai",
    src: "/assets/audio/19_สอนภาษาไทยให้ผมได้มั้ย (Can you teach me Thai).mp3",
  },
  {
    id: 20,
    thai: "ผมอยากเรียนภาษาไทย",
    english: "I want to learn Thai",
    src: "/assets/audio/20_ผมอยากเรียนภาษาไทย (I want to learn Thai).mp3",
  },
];

export default function Index() {
  const [searchResults, setSearchResults] = useState(vocabulary);
  const [searchTerm, setSearchTerm] = useState("");

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
    const results = vocabulary.filter((vocab) => {
      return vocab.english.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  };

  return (
    <div className="font-sans p-4 w-full max-w-[848px] m-auto">
      <h1 className="text-3xl mb-2 text-center">Listen Thai Words</h1>
      <h2 className="text-center">
        Voice by{" "}
        <a
          rel="noopener noreferrer"
          className="hover:text-indigo-600 hover:underline text-indigo-500 font-semibold "
          href="https://learnthaiwithair.com/"
          target="_blank"
        >
          Learn by with Air
        </a>
      </h2>

      <div className="py-2">
        <input
          onChange={onInputChange}
          value={searchTerm}
          type="search"
          name="search"
          id="search"
          className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search in thai or english"
        ></input>
      </div>

      <div className="w-full">
        <table className="divide-y divide-gray-300 m-auto">
          <thead>
            <tr>
              <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                English
              </th>
              {/* <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
              Transcript
            </th> */}
              <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                Thai
              </th>
              <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                Audio
              </th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((vocab) => (
              <tr key={vocab.id} className="even:bg-gray-50">
                <td className="whitespace-nowrap px-3 py-4 text-sm ">
                  {vocab.english}
                </td>
                {/* <td className="whitespace-nowrap px-3 py-4 text-sm ">
                {vocab.transcript}
              </td> */}
                <td className="whitespace-nowrap px-3 py-4 text-sm ">
                  {vocab.thai}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm ">
                  <audio controls>
                    <source src={vocab.src} />
                  </audio>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
