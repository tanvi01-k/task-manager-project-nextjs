import ActionSection from '@/components/homepage/ActionSection';
import ContactForm from '@/components/homepage/ContactForm';
import Features from '@/components/homepage/FeatureSection';
import BannerSection from '@/components/homepage/HomeBanner';
import TestimonialCarousel from '@/components/homepage/TestimonialCarousel';
import Image from 'next/image'

export const metadata={
  title: "Home : Work Manager",
}

export default function Home() {
  
  return (
   <div>
    {/* banner section */}
    <BannerSection />
    <Features />
   <ActionSection />
   <TestimonialCarousel />
   <ContactForm />
   </div>
  );
}
