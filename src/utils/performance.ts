export function smoothScrollTo(id: string, reduceMotion = false): void {
  document.getElementById(id)?.scrollIntoView({
    behavior: reduceMotion ? 'instant' : 'smooth', block: 'start'
  });
}
