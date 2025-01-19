
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";
import CommentSection from "@/components/CommentSection";

export default async function Home() {
  const res = await fetch('https://notion-api.splitbee.io/v1/page/180aa21a2f79807b8f08cbcb8370c282', { cache: "no-store" });
  const data = await res.json();

  return <>
    <NotionRenderer blockMap={data} fullPage />
    <CommentSection />
  </>;
};