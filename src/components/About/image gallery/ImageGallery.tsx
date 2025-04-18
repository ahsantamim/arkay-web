import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Grid, Rows } from "lucide-react";

// Sample image data - in a real app this would come from an API
const imageData = [
  {
    id: 1,
    title: "Mountain Landscape",
    category: "Nature",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800",
  },
  {
    id: 2,
    title: "Modern Architecture",
    category: "Architecture",
    url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=800",
  },
  {
    id: 3,
    title: "City Streets",
    category: "Urban",
    url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800",
  },
  {
    id: 4,
    title: "Desert Sunset",
    category: "Nature",
    url: "https://images.unsplash.com/photo-1682686580024-580519d4b2d2?auto=format&fit=crop&w=800",
  },
  {
    id: 5,
    title: "Modern Interior",
    category: "Architecture",
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800",
  },
  {
    id: 1,
    title: "Mountain Landscape",
    category: "Nature",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800",
  },
];

const categories = ["All", ...new Set(imageData.map((img) => img.category))];

function ImageGallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"title" | "category">("title");
  const [isGridView, setIsGridView] = useState(true);

  const filteredAndSortedImages = useMemo(() => {
    return imageData
      .filter(
        (img) =>
          (selectedCategory === "All" || img.category === selectedCategory) &&
          img.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen mt-12">
      {/* Header */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Controls Bar */}
        <div className="  mb-12 relative">
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

          <div className=" space-y-6">
            {/* Search and Controls Row */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="text-gray-400" size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Search images..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 transition-all duration-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Controls Group */}
              <div className="flex items-center gap-4">
                {/* Sort */}
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2">
                  <SlidersHorizontal size={18} className="text-gray-500" />
                  <select
                    className="bg-transparent border-0 text-gray-700 focus:ring-0 cursor-pointer"
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(e.target.value as "title" | "category")
                    }
                  >
                    <option value="title">Sort by Title</option>
                    <option value="category">Sort by Category</option>
                  </select>
                </div>

                {/* View Toggle */}
                <div className="flex bg-gray-50 p-1">
                  <button
                    className={`p-2 transition-all duration-200 ${
                      isGridView
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                    onClick={() => setIsGridView(true)}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    className={`p-2 transition-all duration-200 ${
                      !isGridView
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                    onClick={() => setIsGridView(false)}
                  >
                    <Rows size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 -mb-6 px-1">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 transition-all duration-200 relative
                    ${
                      selectedCategory === category
                        ? "text-blue-600 font-medium"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                  {selectedCategory === category && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div
          className={`grid gap-8 ${
            isGridView
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          }`}
        >
          {filteredAndSortedImages.map((image) => (
            <div
              key={image.id}
              className="group bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`relative ${
                  isGridView ? "aspect-square" : "aspect-video"
                } overflow-hidden`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {image.title}
                    </h3>
                    <p className="text-blue-200">{image.category}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-500">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAndSortedImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No images found matching your criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageGallery;
