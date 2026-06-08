import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import CTA from '../components/CTA.jsx';
import { blogPosts } from '../data/blog.js';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="bg-white py-24 transition-colors duration-300 dark:bg-dark-surface">
        <div className="container-lux max-w-3xl text-charcoal dark:text-dark-text">
          <p className="section-kicker">Blog</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">Article not found</h1>
          <p className="mt-6 text-lg leading-8 text-charcoal/70 dark:text-dark-muted">
            The post you are looking for doesn’t exist or may have been moved. Please return to the blog page to explore other articles.
          </p>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-gold"
          >
            <FaArrowLeft /> Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-charcoal py-24 text-white transition-colors duration-300 dark:bg-dark-panel lg:py-32">
        <div className="container-lux max-w-4xl">
          <p className="section-kicker">Interior Design Blog</p>
          <div className="mt-4 flex flex-col gap-6">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.16em] text-gold">
              <span>{post.category}</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-5xl font-bold leading-tight sm:text-6xl">{post.title}</h1>
            <p className="max-w-3xl text-lg leading-8 text-white/75 dark:text-dark-muted">{post.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-dark-surface lg:py-28">
        <div className="container-lux max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-charcoal/10 bg-ivory shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-dark-card">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="h-[28rem] w-full object-cover"
            />
            <div className="p-8 sm:p-10">
              <div className="space-y-6 text-charcoal dark:text-dark-text">
                {post.content.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="leading-8"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gold"
                >
                  <FaArrowLeft /> Back to all blog posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
