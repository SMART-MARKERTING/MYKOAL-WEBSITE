import { 
  contacts, 
  quickQuotes, 
  blogPosts, 
  testimonials,
  preQualifications,
  type Contact, 
  type InsertContact,
  type QuickQuote,
  type InsertQuickQuote,
  type PreQualification,
  type InsertPreQualification,
  type BlogPost,
  type Testimonial
} from "@shared/schema";

export interface IStorage {
  // Contact management
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Quick quotes
  createQuickQuote(quote: InsertQuickQuote): Promise<QuickQuote>;
  getQuickQuotes(): Promise<QuickQuote[]>;
  
  // Pre-qualifications
  createPreQualification(preQual: InsertPreQualification): Promise<PreQualification>;
  getPreQualifications(): Promise<PreQualification[]>;
  
  // Blog posts
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | undefined>;
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private quickQuotes: Map<number, QuickQuote>;
  private preQualifications: Map<number, PreQualification>;
  private blogPosts: Map<number, BlogPost>;
  private testimonials: Map<number, Testimonial>;
  private currentContactId: number;
  private currentQuoteId: number;
  private currentPreQualId: number;
  private currentBlogId: number;
  private currentTestimonialId: number;

  constructor() {
    this.contacts = new Map();
    this.quickQuotes = new Map();
    this.preQualifications = new Map();
    this.blogPosts = new Map();
    this.testimonials = new Map();
    this.currentContactId = 1;
    this.currentQuoteId = 1;
    this.currentPreQualId = 1;
    this.currentBlogId = 1;
    this.currentTestimonialId = 1;

    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample blog posts
    const sampleBlogPosts: BlogPost[] = [
      {
        id: this.currentBlogId++,
        title: "First-Time Homebuyer Guide: Everything You Need to Know",
        slug: "first-time-homebuyer-guide",
        category: "First-Time Buyers",
        excerpt: "Learn about down payment assistance programs, credit requirements, and the step-by-step process...",
        content: "Complete guide content here...",
        imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        publishedAt: new Date("2024-12-15"),
      },
      {
        id: this.currentBlogId++,
        title: "When Should You Refinance Your Mortgage?",
        slug: "when-to-refinance-mortgage",
        category: "Refinancing",
        excerpt: "Discover the key factors that determine if refinancing is right for you and how much you could save...",
        content: "Complete refinancing guide content here...",
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        publishedAt: new Date("2024-12-12"),
      },
      {
        id: this.currentBlogId++,
        title: "2024 Housing Market Forecast: What to Expect",
        slug: "2024-housing-market-forecast",
        category: "Market Update",
        excerpt: "Our expert analysis of current market trends, interest rate predictions, and timing strategies...",
        content: "Complete market forecast content here...",
        imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        publishedAt: new Date("2024-12-10"),
      },
    ];

    // Sample testimonials
    const sampleTestimonials: Testimonial[] = [
      {
        id: this.currentTestimonialId++,
        name: "Mike & Jessica Chen",
        role: "First-time Homebuyers",
        content: "Sarah made our first home purchase so easy! She explained everything clearly and got us the best rate possible. We closed in just 3 weeks!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        createdAt: new Date(),
      },
      {
        id: this.currentTestimonialId++,
        name: "Robert Martinez",
        role: "Refinance Client",
        content: "Refinancing saved us $400 per month! The process was smooth and Sarah kept us informed every step of the way. Highly recommend!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        createdAt: new Date(),
      },
      {
        id: this.currentTestimonialId++,
        name: "James Thompson",
        role: "VA Loan Client",
        content: "As a veteran, Sarah helped us navigate the VA loan process perfectly. Zero down payment and great service throughout!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        createdAt: new Date(),
      },
    ];

    sampleBlogPosts.forEach(post => this.blogPosts.set(post.id, post));
    sampleTestimonials.forEach(testimonial => this.testimonials.set(testimonial.id, testimonial));
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = {
      ...insertContact,
      message: insertContact.message || null,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createQuickQuote(insertQuote: InsertQuickQuote): Promise<QuickQuote> {
    const id = this.currentQuoteId++;
    const quote: QuickQuote = {
      ...insertQuote,
      id,
      createdAt: new Date(),
    };
    this.quickQuotes.set(id, quote);
    return quote;
  }

  async getQuickQuotes(): Promise<QuickQuote[]> {
    return Array.from(this.quickQuotes.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createPreQualification(insertPreQual: InsertPreQualification): Promise<PreQualification> {
    const id = this.currentPreQualId++;
    const preQual: PreQualification = {
      ...insertPreQual,
      dateOfBirth: insertPreQual.dateOfBirth || null,
      ssn: insertPreQual.ssn || null,
      employmentLength: insertPreQual.employmentLength || null,
      monthlyDebt: insertPreQual.monthlyDebt || null,
      assets: insertPreQual.assets || null,
      propertyValue: insertPreQual.propertyValue || null,
      propertyType: insertPreQual.propertyType || null,
      downPayment: insertPreQual.downPayment || null,
      bankruptcyHistory: insertPreQual.bankruptcyHistory || null,
      notes: insertPreQual.notes || null,
      estimatedRate: insertPreQual.estimatedRate || null,
      id,
      createdAt: new Date(),
    };
    this.preQualifications.set(id, preQual);
    return preQual;
  }

  async getPreQualifications(): Promise<PreQualification[]> {
    return Array.from(this.preQualifications.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
