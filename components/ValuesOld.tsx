'use client';

import { Parallax } from 'react-scroll-parallax';
import services from '@/data/services'

export default function Values() {
  return (
    <div>
      <div className="flex justify-start">
        <Parallax speed={4} className="w-3/4 md:w-1/3 mt-12">
          <h3 className="text-2xl font-semibold mb-4">Inclusive design</h3>
          <p className="text-xl">We use human-centred design practices to create products for diverse audiences with a wide range of abilities. We know our way around the Web Content Accessibility Guidelines (WCAG) but we go beyond compliance - accessibility is a foundational part of the design process and not a checklist.</p>
        </Parallax>
      </div>

      <div className="flex justify-center">
        <Parallax speed={8} className="w-3/4 md:w-1/3 mt-12">
          <h3 className="text-2xl font-semibold mb-4">Collaborative process</h3>
          <p className="text-xl">Collaborative design is a team effort that combines your subject matter expertise, our design and technical know-how, and the lived experiences of the communities you serve. We work with you to understand your organization's objectives and strategize towards products that can help you achieve greater social impact.</p>
        </Parallax>
      </div>

      <div className="flex justify-end">
        <Parallax speed={12} className="w-3/4 md:w-1/3 mt-12">
          <h3 className="text-2xl font-semibold mb-4">Ethical tech</h3>
          <p className="text-xl">We believe in the power of open and actively contribute to the open-source community. We'll discuss with you to decide how your project can take part in the open-source ecosystem.</p>
        </Parallax>
      </div>
    </div>
  );
}