'use client';

import { Parallax } from 'react-scroll-parallax';
import ValuesCircle from '@/data/values-circle.svg';
import InclusionIcon from '@/data/values-icons-01.svg';
import CollaborationIcon from '@/data/values-icons-02.svg';
import OpenIcon from '@/data/values-icons-03.svg';
import Fade from 'react-reveal/Fade';

export default function Values() {
  return (
    <div className="grid md:grid-cols-2 gap-12">

      <div className="grid-item">
        <Fade>
          <div className="my-12">
            <div className="text-primary-300 dark:text-secondary-300 w-24 h-24 mb-4">
              <InclusionIcon />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Inclusion</h3>
            <p className="text-xl">I strive to create products for diverse audiences with a wide range of abilities. That goes beyond checkboxes and compliance; accessibility and inclusion is foundational to my design process.</p>
          </div>
        </Fade>

        <Fade>
          <div className="my-12">
            <div className="text-primary-300 dark:text-secondary-300 w-24 h-24 mb-4">
              <CollaborationIcon />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Collaboration</h3>
            <p className="text-xl">We'll bring together your subject matter expertise, my technical knowledge, and the voices of your community to co-create a product that truly serves your needs. When a project calls for additional skills, I don't hesitate to tap into my network of amazing collaborators!</p>
          </div>
        </Fade>

        <Fade>
          <div className="my-12">
            <div className="text-primary-300 dark:text-secondary-300 w-24 h-24 mb-4">
              <OpenIcon />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Open-source</h3>
            <p className="text-xl">I'm able to deliver outstanding results by leveraging the power of open-source tools built by thousands of developers - and I actively contribute back to the open-source ecosystem.</p>
          </div>
        </Fade>
      </div>

      <div className="grid-item flex justify-center p-12 relative">
        <div className="w-full">
          <Parallax translateY={['-30%', '60%']} rotate={[0,180]}>
            <ValuesCircle />
          </Parallax>
        </div>
      </div>

    </div>
  );
}