export default function Button({ children, textOnly, className, ...props }) {
  const cssClasses = textOnly
    ? `${className} text-button`
    : `${className} button`;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
