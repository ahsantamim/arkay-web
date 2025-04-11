import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from next/link

function BlogCardGrid() {
  const blogPosts = [
    {
      id: 1,
      title: "How to write content about your photographs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis auctor odio arcu et dolor.",
      category: "LED Billboard",
      readTime: "7 Mins Read",
      imageUrl: "/Image/Home/Hero/image-4.jpg",
    },
    {
      id: 2,
      title: "How to write content about your photographs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis auctor odio arcu et dolor.",
      category: "LED Billboard",
      readTime: "7 Mins Read",
      imageUrl: "/Image/Home/Hero/image-5.jpg",
    },
    {
      id: 3,
      title: "How to write content about your photographs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis auctor odio arcu et dolor.",
      category: "Beautification",
      readTime: "7 Mins Read",
      imageUrl: "/Image/Home/Hero/image-6.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Latest News</h2>

        <div className="flex items-center justify-center mb-12">
          <div className="flex-grow h-px bg-gray-300 max-w-xs"></div>
          {/* Link with Underline Effect */}
          <span className="px-4 text-sm text-gray-500 uppercase tracking-widest">
            Check the latest news
          </span>
          <div className="flex-grow h-px bg-gray-300 max-w-xs"></div>
        </div>
      </div>

      {/* Blog Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-12">
        <Link
          href="/blog" // Navigate to the blog page
          passHref
        >
          <motion.button
            whileHover={{ backgroundColor: "#000000", color: "#ffffff" }}
            className="px-6 py-2 border-2 border-black text-black font-normal bg-white rounded-full transition-all duration-100 cursor-pointer"
          >
            Show More
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  imageUrl: string;
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div>
      <div className="group bg-white cursor-pointer overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="transition-transform duration-500 ease-in-out group-hover:scale-105 origin-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 ">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4">{post.description}</p>
          </div>

          {/* Horizontal line separator */}
          <div className="w-full h-px bg-gray-200 my-4"></div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-gray-800 font-medium">{post.category}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{post.readTime}</span>
            </div>
            <ArrowUpRight className="text-gray-400 h-5 w-5 hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCardGrid;
