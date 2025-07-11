export default function Card({
  name,
  title,
  headline,
  quote,
  image,
  className = "",
  children
}: {
  name: string;
  title: string;
  headline: string;
  quote: string;
  image: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`card p-8 mb-8 lg:mb-0 rounded-lg shadow-xl/30 ${className}`.trim()}
    >
      <div className="flex items-center gap-4">
        <img src={image} alt={name} className="h-10 w-10 rounded-full" />
        <div>
          <h1>{name}</h1>
          <p>{title}</p>
        </div>
      </div>
      <div className="relative z-10">
        <h2 className="mt-4">{headline}</h2>
        <p className="mt-4">{quote}</p>
      </div>
      {children}
    </div>
  );
}
