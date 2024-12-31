'use client'
import { Mail, Phone, Clock, MapPin } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <>
      <style jsx global>{`
        @keyframes rotate360 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .rotate-animation {
          animation: rotate360 10s linear infinite;
        }
      `}</style>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-8 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6">
                <img 
                  src="https://lh3.googleusercontent.com/-e20-NCq5B7A/AAAAAAAAAAI/AAAAAAAAAAA/D1ny7hqULG0/s60-c-k-mo/photo.jpg" 
                  alt="Vyas eprint logo" 
                  className="w-full h-full object-contain rotate-animation"
                  aria-label="Rotating Vyas eprint logo"
                />
              </div>
              <h1 className="text-3xl text-blue-600 sm:text-4xl font-bold mb-2 sm:mb-4">Vyas eprint</h1>
              <p className="text-gray-600 max-w-xl text-sm sm:text-base">Your one-stop solution for B/W and color printout ,  photocopy and digital services in Jodhpur</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className=" bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-4 sm:p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-lg   sm:text-xl font-semibold mb-2 sm:mb-4">Printout Services</h3>
                <p className="text-gray-600 text-sm sm:text-base">High-quality printout in size of A4,A5 and A3 for all your needs</p>
              </div>
              <div className="p-4 sm:p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Digital E-Services</h3>
                <p className="text-gray-600 text-sm sm:text-base">Modern digital e-services for visiting card(pdf, jpg/png) , Pamphlet, Resume/CV, Catalogue, Brochure and Social-Media posture</p>
              </div>
              
              <div className="p-4 sm:p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">E-Astro Services</h3>
                <p className="text-gray-600 text-sm sm:text-base">Digital E-horoscope and E-varshfal 2025</p>
              </div>
            </div>
          </div>
        </section>
         {/* FAQ Section */}
         <section className="py-8 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl   sm:text-3xl font-bold text-center mb-8 sm:mb-12">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 text-sm sm:text-base">Does Vyas eprint provide printout services?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 text-sm sm:text-base">
                    Yes, we provide comprehensive printing services. Contact us for more details about specific printout requirements.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 text-sm sm:text-base">What are your operational hours?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 text-sm sm:text-base">
                    We are open all days of the week from 8:00 AM to 7:30 PM.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 text-sm sm:text-base">Can I digitally transfer files for printout?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 text-sm sm:text-base">
                    Yes, you can easily transfer your files through email for printout.
                  </AccordionContent>
                </AccordionItem>
               
                <AccordionItem value="item-4" className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 text-sm sm:text-base">Do you accept bulk orders for printout?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 text-sm sm:text-base">
                    Yes, we handle bulk printing orders. Please contact us directly for more details about bulk printout services.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-8 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl text-blue-400 sm:text-3xl font-bold text-center mb-8 sm:mb-12">Contact Us</h2>
            <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-sm sm:text-base">21E/348, Chopasni Housing Board, Pal Road, Jodhpur - 342008 (Near Udhyan Apartment)</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                <p className="text-gray-600 text-sm sm:text-base">7976711615</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                <p className="text-gray-600 text-sm sm:text-base">vyaseprints@gmail.com</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                <p className="text-gray-600 text-sm sm:text-base">8:00 AM - 8:00 PM (All days)</p>
              </div>
            </div>
          </div>
        </section>

       
      </main>
    </>
  )
}

