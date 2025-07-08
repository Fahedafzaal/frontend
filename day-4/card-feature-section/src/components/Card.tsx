export default function Card({ title, description, icon, color }: { title: string, description: string, icon: string, color: string }) {
  return (
    <div className={`typography flex flex-col gap-2 border max-w-sm border-gray-200 border-t-4 border-t-${color} shadow-xl rounded-lg p-6`}>
      <h1>{title}</h1>
      <p className="font-normal">{description}</p>
      <img src={icon} alt={title} className="w-12 h-12 my-4 self-end" />
    </div>
  );
}