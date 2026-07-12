export default function Table({ children, ...props }) {
  return (
    <table className="table" {...props}>
      {children}
    </table>
  );
}
