'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

export default function TermsAndConditionsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className='text-4xl font-bold text-secondary text-center mb-4'>Terms and Conditions</h1>
        <p className='text-lg text-secondary/80 text-center mb-12'>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <div className='flex flex-col gap-8 text-secondary/90'>
          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-4'>1. Acceptance of Terms</h2>
            <p className='mb-4'>
              By accessing and using the Manohar Bakery Fleetwood website ("Website") and our services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-4'>2. About Us</h2>
            <p className='mb-4'>
              Manohar Bakery Fleetwood is a vegetarian bakery located at Fruiticana & BMO plaza, 15905 Fraser Hwy Unit 101, Surrey, BC V4N 0Y3. We specialize in fresh, eggless baked goods including custom cakes, breads, cookies, and pastries.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-4'>3. Products and Services</h2>
            <div className='flex flex-col gap-3'>
              <p className='mb-2'>
                We offer a variety of baked goods and custom cake services. All products are:
              </p>
              <ul className='list-disc list-inside ml-4 space-y-1'>
                <li>vegetarian and eggless</li>
                <li>Made fresh daily with quality ingredients</li>
                <li>Subject to availability</li>
                <li>Priced as displayed or as quoted for custom orders</li>
              </ul>
              <p className='mt-4'>
                Product images and descriptions are for illustrative purposes only. Actual products may vary slightly in appearance.
              </p>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-4'>4. Orders and Payment</h2>
            <div className='flex flex-col gap-3'>
              <div>
                <h3 className='text-xl font-semibold text-secondary mb-2'>4.1 Order Placement</h3>
                <ul className='list-disc list-inside ml-4 space-y-1'>
                  <li>Orders can be placed through our website, by phone, or in-store</li>
                  <li>All orders are subject to acceptance and availability</li>
                  <li>We reserve the right to refuse or cancel any order at our discretion</li>
                  <li>Custom orders may require advance notice and confirmation</li>
                </ul>
              </div>
              <div>
                <h3 className='text-xl font-semibold text-secondary mb-2'>4.2 Pricing</h3>
                <ul className='list-disc list-inside ml-4 space-y-1'>
                  <li>All prices are in Canadian Dollars (CAD) unless otherwise stated</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Custom orders will be quoted separately</li>
                  <li>Taxes will be added as applicable</li>
                </ul>
              </div>
              <div>
                <h3 className='text-xl font-semibold text-secondary mb-2'>4.3 Payment</h3>
                <ul className='list-disc list-inside ml-4 space-y-1'>
                  <li>Payment is required at the time of order placement or upon pickup/delivery</li>
                  <li>We accept cash, credit cards, and debit cards</li>
                  <li>Online payments are processed through secure third-party payment processors</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-4'>5. Delivery and Pickup</h2>
            <div className='flex flex-col gap-3'>
              <ul className='list-disc list-inside ml-4 space-y-1'>
                <li>Orders can be picked up at our store location during business hours</li>
                <li>Delivery options and fees (if available) will be discussed at the time of order</li>
                <li>You are responsible for providing accurate delivery information</li>
                <li>We are not liable for delays caused by factors beyond our control</li>
                <li>Products must be picked up within the agreed timeframe or may be subject to additional storage fees</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-4'>6. Cancellations and Refunds</h2>
            <div className='flex flex-col gap-3'>
              <div>
                <h3 className='text-xl font-semibold text-secondary mb-2'>6.1 Cancellations</h3>
                <ul className='list-disc list-inside ml-4 space-y-1'>
                  <li> Paid Orders Will not be cancelled.</li>
                </ul>
              </div>
              <div>
                <h3 className='text-xl font-semibold text-secondary mb-2'>6.2 Refunds</h3>
                <ul className='list-disc list-inside ml-4 space-y-1'>
                  <li>Refunds will be considered on a case-by-case basis</li>
                  <li>Refunds for custom orders may not be available once production has begun</li>
                  <li>Refunds will be processed using the original payment method when possible</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-4'>7. Allergen Information</h2>
            <p className='mb-4'>
              While we take care to prepare eggless and vegetarian products, our bakery may process ingredients that contain allergens (such as nuts, dairy, gluten, etc.). Please inform us of any allergies or dietary restrictions when placing your order. We cannot guarantee that our products are free from cross-contamination with allergens.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-4'>8. Intellectual Property</h2>
            <p className='mb-4'>
              All content on this website, including text, graphics, logos, images, and software, is the property of Manohar Bakery Fleetwood or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use any content without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-4'>9. Limitation of Liability</h2>
            <p className='mb-4'>
              To the fullest extent permitted by law, Manohar Bakery Fleetwood shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services or products.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-4'>10. Indemnification</h2>
            <p className='mb-4'>
              You agree to indemnify and hold harmless Manohar Bakery Fleetwood, its employees, and affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or relating to your use of our services, violation of these Terms, or infringement of any rights of another.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-4'>11. Changes to Terms</h2>
            <p className='mb-4'>
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Your continued use of our services after changes are posted constitutes acceptance of the modified terms. We encourage you to review these Terms periodically.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-4'>12. Governing Law</h2>
            <p className='mb-4'>
              These Terms and Conditions are governed by and construed in accordance with the laws of British Columbia, Canada. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of British Columbia.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-4'>13. Severability</h2>
            <p className='mb-4'>
              If any provision of these Terms and Conditions is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-secondary mb-4'>14. Contact Information</h2>
            <p className='mb-2'>
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className='ml-4 space-y-1'>
              <p><strong>Manohar Bakery Fleetwood</strong></p>
              <p>Fruiticana & BMO plaza, 15905 Fraser Hwy Unit 101</p>
              <p>Surrey, BC V4N 0Y3</p>
              <p>You can also reach us through our <a href='/contact' className='underline hover:text-secondary'>Contact Us</a> page.</p>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

