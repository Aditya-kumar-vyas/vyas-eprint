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
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-6">
                <img 
                  src="https://lh3.googleusercontent.com/-e20-NCq5B7A/AAAAAAAAAAI/AAAAAAAAAAA/D1ny7hqULG0/s60-c-k-mo/photo.jpg" 
                  alt="Vyas eprint logo" 
                  className="w-full h-full object-contain rotate-animation"
                  aria-label="Rotating Vyas eprint logo"
                />
              </div>
              <h1 className="text-4xl font-bold mb-4">Vyas eprint</h1>
              <p className="text-gray-600 max-w-2xl">Your one-stop solution for printing and digital services in Jodhpur</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Printing Services</h3>
                <p className="text-gray-600">High-quality printing solutions for all your needs</p>
              </div>
              <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Digital Services</h3>
                <p className="text-gray-600">Modern digital solutions and file transfers</p>
              </div>
              <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Stationery</h3>
                <p className="text-gray-600">Wide range of stationery items available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-600">21E/348, Chopasni Housing Board, Pal Road, Chopasni Housing Board, Jodhpur - 342008 (Near Udhyan Apartment)</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <p className="text-gray-600">7976711615</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <p className="text-gray-600">vyaseprints@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <p className="text-gray-600">8:00 AM - 8:00 PM (All days)</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Does Vyas eprint provide printing services?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we provide comprehensive printing services. Contact us for more details about specific printing requirements.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What are your operational hours?</AccordionTrigger>
                  <AccordionContent>
                    We are open all days of the week from 8:00 AM to 8:00 PM.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I digitally transfer files for printing?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can easily transfer your files through email for printing.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you sell stationery items?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer a wide range of stationery items including pens, pencils, erasers, whiteners, files, notebooks, and more.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Do you accept bulk orders for printing?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we handle bulk printing orders. Please contact us directly for more details about bulk printing services.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

