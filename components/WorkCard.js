const WorkCard = ({ work }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          src={work.image} 
          alt={work.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {work.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{work.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {work.category}
          </span>
          <span className="text-xs text-gray-400">{work.year}</span>
        </div>
      </div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default WorkCard;