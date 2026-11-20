export function Quote({ text, className = '' }: { text: string; className?: string }) {
  return <blockquote className={`editorial-quote ${className}`} lang="en" dir="ltr">“{text}”</blockquote>;
}
