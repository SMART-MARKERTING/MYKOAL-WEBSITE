import { db } from './db';
import { blogPosts, testimonials } from '@shared/schema';

async function initializeDatabase() {
  try {
    console.log('Initializing database with sample data...');

    // Insert sample testimonials
    const sampleTestimonials = [
      {
        name: "Raymond L",
        role: "Verified Customer",
        content: "Mykoal helped me secure a DSCR loan for my investment property. His expertise and guidance throughout the process was exceptional.",
        rating: 5,
        imageUrl: null,
        createdAt: new Date('2024-11-15'),
      },
      {
        name: "Tracy R M",
        role: "Roanoke Rapids, NC",
        content: "Constantly stayed in contact with me with any updates while refinancing our home.",
        rating: 5,
        imageUrl: null,
        createdAt: new Date('2022-05-24'),
      },
      {
        name: "Kevin J B",
        role: "Brockton, MA",
        content: "Mykoal put together a Loan that paid-off all of my credit card/personal loan debt! He was great to work with! I will definitely recommend AFN to anyone I know who is looking to refinance, in the future.",
        rating: 5,
        imageUrl: null,
        createdAt: new Date('2022-02-17'),
      },
      {
        name: "Lorette G",
        role: "San Francisco, CA",
        content: "Mykoal explained everything patiently & carefully, no condescension, no attitude.",
        rating: 5,
        imageUrl: null,
        createdAt: new Date('2022-01-20'),
      }
    ];

    await db.insert(testimonials).values(sampleTestimonials).onConflictDoNothing();

    // Insert sample blog posts
    const sampleBlogPosts = [
      {
        title: "Complete Guide to DSCR Loans for Real Estate Investors",
        slug: "dscr-loans-guide",
        category: "DSCR Loans",
        excerpt: "Learn how Debt Service Coverage Ratio loans can help you finance investment properties without traditional income verification.",
        content: "DSCR loans are a powerful tool for real estate investors...",
        imageUrl: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        publishedAt: new Date("2024-12-20"),
      },
      {
        title: "Investment Property Financing: Your Complete Guide",
        slug: "investment-property-financing",
        category: "Investment Properties",
        excerpt: "Discover the best financing options for investment properties, from conventional loans to portfolio lending solutions.",
        content: "Investment property financing requires understanding different loan programs...",
        imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        publishedAt: new Date("2024-12-15"),
      }
    ];

    await db.insert(blogPosts).values(sampleBlogPosts).onConflictDoNothing();

    console.log('Database initialized successfully!');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}

// Run initialization if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  initializeDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

export { initializeDatabase };