import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import SafeImage from "./SafeImage.jsx";

/**
 * Full-screen viewer. `items` = [{ src, caption, event }]. Pass `index = null` to close.
 * Keys: ← → to navigate, Esc to close. Click the image (or the zoom button) to zoom.
 */
export default function Lightbox({ items, index, onIndexChange, onClose }) {
  const open = index !== null && index !== undefined && items?.length > 0;
  const [zoom, setZoom] = useState(false);
  const closeRef = useRef(null);
  const total = items?.length || 0;

  const go = useCallback(
    (dir) => { setZoom(false); onIndexChange((index + dir + total) % total); },
    [index, total, onIndexChange]
  );

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      prev?.focus?.();
    };
  }, [open, go, onClose]);

  useEffect(() => setZoom(false), [index]);

  const item = open ? items[index] : null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog" aria-modal="true" aria-label="Image viewer"
          className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between p-4 text-white" onClick={(e) => e.stopPropagation()}>
            <span className="text-sm text-zinc-400">{index + 1} / {total}</span>
            <div className="flex gap-2">
              <button className="rounded-full p-2 hover:bg-white/10" onClick={() => setZoom((z) => !z)} aria-label={zoom ? "Zoom out" : "Zoom in"}>
                {zoom ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
              </button>
              <button ref={closeRef} className="rounded-full p-2 hover:bg-white/10" onClick={onClose} aria-label="Close viewer">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16">
            {total > 1 && (
              <button
                className="absolute left-2 z-10 rounded-full bg-black/50 p-3 text-white hover:bg-white/15 sm:left-5"
                onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Previous image"
              ><ChevronLeft className="h-6 w-6" /></button>
            )}
            <div className={`max-h-full max-w-full ${zoom ? "overflow-auto" : "overflow-hidden"}`} onClick={(e) => e.stopPropagation()}>
              <SafeImage
                key={item.src}
                src={item.src}
                alt={item.caption || item.event || "Gallery image"}
                eager
                onClick={() => setZoom((z) => !z)}
                className={`select-none rounded-lg transition-transform duration-300 ${zoom ? "max-h-none max-w-none w-[160%] cursor-zoom-out sm:w-[130%]" : "max-h-[74vh] w-auto max-w-full cursor-zoom-in object-contain"}`}
              />
            </div>
            {total > 1 && (
              <button
                className="absolute right-2 z-10 rounded-full bg-black/50 p-3 text-white hover:bg-white/15 sm:right-5"
                onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Next image"
              ><ChevronRight className="h-6 w-6" /></button>
            )}
          </div>

          <div className="p-5 text-center" onClick={(e) => e.stopPropagation()}>
            {item.event && <p className="text-sm font-semibold text-accent">{item.event}</p>}
            {item.caption && <p className="mt-1 text-sm text-zinc-300">{item.caption}</p>}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
