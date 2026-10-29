import { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Modal } from "./Modal";
import { iteratePages } from "../data/iterateData";

const PAGE_RATIO = 612 / 792; // PDF page width / height
const LAST = iteratePages.length - 1;

const Page = forwardRef(({ page, index }, ref) => (
  <div ref={ref} className="iterate-page">
    <img src={page.src} alt={page.alt} draggable={false} loading={index < 3 ? "eager" : "lazy"} />
  </div>
));
Page.displayName = "Page";

// Size one page so a two-page spread fits the viewport.
const pageSize = () => {
  const height = Math.min(window.innerHeight * 0.78, ((window.innerWidth - 96) / 2) / PAGE_RATIO);
  return { width: Math.round(height * PAGE_RATIO), height: Math.round(height) };
};

// The cover and back cover show alone; everything between is a spread of two pages.
const pageLabel = (index) => {
  if (index <= 0 || index >= LAST) return `${index + 1}`;
  const left = index % 2 === 1 ? index : index - 1;
  return `${left + 1}–${left + 2}`;
};

const IterateBook = ({ onClose }) => {
  const bookRef = useRef(null);
  const [page, setPage] = useState(0);
  const size = useMemo(pageSize, []);
  const reduceMotion = useMemo(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);

  // With a closed cover (or back cover) one half of the spread is empty; a click there closes the book.
  const pressedEmpty = useRef(null);
  const emptyHalf = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const left = event.clientX < rect.left + rect.width / 2;
    return (page === 0 && left) || (page === LAST && !left);
  };
  const onPointerDown = (event) => {
    pressedEmpty.current = emptyHalf(event);
  };
  const onClick = (event) => {
    if (pressedEmpty.current && emptyHalf(event)) onClose();
    pressedEmpty.current = null;
  };

  const flip = useCallback((direction) => {
    const book = bookRef.current?.pageFlip();
    if (!book) return;
    direction > 0 ? book.flipNext() : book.flipPrev();
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "ArrowRight") flip(1);
      if (event.key === "ArrowLeft") flip(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [flip]);

  return (
    <Modal onClose={onClose} label="Learning to Iterate" className="iterate-dialog">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        data-autofocus
        className="iterate-close"
      >
        ×
      </button>
      <div onPointerDown={onPointerDown} onClick={onClick}>
        <HTMLFlipBook
          ref={bookRef}
          width={size.width}
          height={size.height}
          size="fixed"
          showCover
          usePortrait={false}
          drawShadow
          maxShadowOpacity={0.4}
          flippingTime={reduceMotion ? 1 : 800}
          mobileScrollSupport={false}
          onFlip={(event) => setPage(event.data)}
          className="iterate-book"
        >
          {iteratePages.map((item, index) => (
            <Page key={item.src} page={item} index={index} />
          ))}
        </HTMLFlipBook>
      </div>
      <div className="iterate-controls">
        <button type="button" onClick={() => flip(-1)} disabled={page === 0} aria-label="Previous page">
          ‹
        </button>
        <span aria-live="polite">
          page {pageLabel(page)} of {iteratePages.length}
        </span>
        <button type="button" onClick={() => flip(1)} disabled={page >= LAST} aria-label="Next page">
          ›
        </button>
      </div>
    </Modal>
  );
};

export default IterateBook;
