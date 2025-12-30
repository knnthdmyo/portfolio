declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module './globals.css';
declare module '@/globals.css';

