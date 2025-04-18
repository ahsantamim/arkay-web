import React from 'react';

export function ProjectGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Our Project Gallery</h2>
      <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
        Explore our portfolio of innovative LED display installations that have transformed spaces across the globe
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        <ProjectGridItem
          image="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80"
          title="Digital Billboards"
          description="Next-gen advertising displays"
          aspect="aspect-[4/5]"
        />
        <ProjectGridItem
          image="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?auto=format&fit=crop&q=80"
          title="Urban Screens"
          description="City-wide information systems"
          aspect="aspect-[3/4]"
        />
        <ProjectGridItem
          image="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&q=80"
          title="Architectural Lighting"
          description="Building façade displays"
          aspect="aspect-square"
        />
        <ProjectGridItem
          image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80"
          title="Smart Displays"
          description="Interactive technology"
          aspect="aspect-[4/3]"
        />
        <ProjectGridItem
          image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          title="Digital Art"
          description="Creative installations"
          aspect="aspect-[3/4]"
        />
        <ProjectGridItem
          image="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80"
          title="Event Displays"
          description="Dynamic presentations"
          aspect="aspect-square"
        />
      </div>
    </section>
  );
}

interface ProjectGridItemProps {
  image: string;
  title: string;
  description: string;
  aspect: string;
}

function ProjectGridItem({ image, title, description, aspect }: ProjectGridItemProps) {
  return (
    <div className={`relative ${aspect} group overflow-hidden rounded-xl shadow-2xl`}>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-xl font-semibold">{title}</h3>
          <p className="text-white/80">{description}</p>
        </div>
      </div>
    </div>
  );
}