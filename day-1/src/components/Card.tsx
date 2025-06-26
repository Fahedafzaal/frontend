function CardComponent({image, title, year, description, category}: {image: string, title: string, year: string, description: string, category: string}) {
    return (
    <div className="flex items-center border-b border-(--border-color) gap-4 py-12">
        <img 
            src={image} 
            alt={title} 
            className="w-[246px] h-[180px]"
        />
        <div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <div className="flex items-center space-x-8 py-4">
                <p className="px-3 py-0.5 rounded-full bg-(--bg-color) text-white text-lg font-black">{year}</p>
                <p className="text-xl font-normal text-tertiary">{category}</p>
            </div>
            <p className="text-base font-normal line-clamp-3">{description}</p>
        </div>
    </div>
    )
}

export default CardComponent;