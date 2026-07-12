export default function Badge({ children, ...props }) {
  return (
    <span className="badge" {...props}>
      {children}
    </span>
  );
}
