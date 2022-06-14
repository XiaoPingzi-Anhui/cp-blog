import { useScroll } from "ahooks";

export default function useDocumentScroll() {
  return useScroll(document);
}
