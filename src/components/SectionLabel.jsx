export default function SectionLabel({ children }) {
  return (
    <div className="label-row">
      <span className="label">{children}</span>
      <span className="label-line" />
    </div>
  );
}
