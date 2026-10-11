import { useEffect, useState } from "react";
import { ImageIcon } from "lucide-react";

/**
 * <img> that never breaks the layout: lazy-loads, and if the file is missing
 * (or `src` is empty) it renders a tidy placeholder instead.
 * `label` (e.g. an organisation name) is shown as initials in the placeholder.
 */
export default function SafeImage({ src, alt = "", label = "", className = "", eager = false, style, ...rest }) {
  const [failed, setFailed] = useState(!src);
  useEffect(() => setFailed(!src), [src]);

  if (failed) {
    const initials = label
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join("");
    return (
      <div
        role="img"
        aria-label={alt || label || "Image placeholder"}
        className={`flex items-center justify-center bg-gradient-to-br from-ink-600 to-ink-800 text-accent/70 ${className}`}
        style={style}
      >
        {initials ? (
          <span className="font-display text-2xl">{initials}</span>
        ) : (
          <ImageIcon aria-hidden className="h-6 w-6 opacity-60" />
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
      style={style}
      {...rest}
    />
  );
}
