export default function StarRating({ rating = 5, label }) {
  return (
    <div
      className="star-rating"
      role="img"
      aria-label={label ?? `Rated ${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden="true">
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}
