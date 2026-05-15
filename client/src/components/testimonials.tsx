import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  { id: 1, name: "Victor R", role: "Helendale, CA", content: "Mykoal was always available and answered all of my questions completely. Will definitely recommend him to my friends!", rating: 5 },
  { id: 2, name: "Judith A", role: "Buckeye, AZ", content: "Mykoal went the extra mile to meet my expectation and worked above and beyond than most professionals who ever helped me before. He was true to his words and worked on a timely manner. Excellent job :-)", rating: 5 },
  { id: 3, name: "Raymond L", role: "Verified Client", content: "Mykoal did a great job working with us. He's good at follow up, and keeping you updated. He also has all the patience in the world. Nice professional young man. Would definitely recommend him to do your loan.", rating: 5 },
  { id: 4, name: "Tracy R M", role: "Roanoke Rapids, NC", content: "Constantly stayed in contact with me with any updates while refinancing our home.", rating: 5 },
  { id: 5, name: "Cecilia F T", role: "Killeen, TX", content: "Mykoal was very thorough and explain everything to ensure our concerns and questions were answered. Awesome professional.", rating: 5 },
  { id: 6, name: "Kevin J B", role: "Brockton, MA", content: "Mykoal put together a Loan that paid-off all of my credit card/personal loan debt! He was great to work with! I will definitely recommend AFN to anyone I know who is looking to refinance.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Recent Client Reviews</h2>
          <p className="text-lg text-gray-600">Real results from satisfied clients who experienced professional lending service</p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <span className="text-xl font-bold text-gray-900">4.91</span>
            <span className="text-gray-600">(54 reviews)</span>
            <a
              href="https://www.experience.com/reviews/mykoal-deshazo"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-blue-600 hover:text-blue-800 text-sm font-medium underline"
            >
              View all reviews
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.id} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{t.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div><div className="text-4xl font-bold text-blue-600">54</div><div className="text-gray-600">Verified Reviews</div></div>
            <div><div className="text-4xl font-bold text-blue-600">4.91/5</div><div className="text-gray-600">Experience.com Rating</div></div>
            <div><div className="text-4xl font-bold text-blue-600">5+ Years</div><div className="text-gray-600">Industry Experience</div></div>
            <div><div className="text-4xl font-bold text-blue-600">NMLS</div><div className="text-gray-600">#1912347</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
