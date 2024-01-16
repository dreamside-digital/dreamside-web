'use client';

import { Parallax } from 'react-scroll-parallax';
import ValuesCircle from '@/data/values-circle.svg';
import InclusionIcon from '@/data/values-inclusion.svg';
import CollaborationIcon from '@/data/values-collaboration.svg';
import OpenIcon from '@/data/values-open.svg';
import Fade from 'react-reveal/Fade';

export default function Values() {
  return (
    <div className="grid md:grid-cols-2 gap-12">

      <div className="grid-item order-2 md:order-1">
        <Fade>
          <div className="my-12">
            <div className="text-primary-300 dark:text-secondary-300 w-24 h-24 mb-4">
              <InclusionIcon />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Inclusion</h3>
            <p className="text-xl">We create products for diverse audiences with a wide range of abilities. We go beyond checkboxes and compliance - accessibility and inclusion is foundational to our design process.</p>
          </div>
        </Fade>

        <Fade>
          <div className="my-12">
            <div className="text-primary-300 dark:text-secondary-300 w-24 h-24 mb-4">
              <CollaborationIcon />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Collaboration</h3>
            <p className="text-xl">We bring together your subject matter expertise, our technical knowledge, and the voices of your community to co-create a product that truly serves your needs. When a project calls for additional skills, we don't hesitate to tap into our network of amazing collaborators!</p>
          </div>
        </Fade>

        <Fade>
          <div className="my-12">
            <div className="text-primary-300 dark:text-secondary-300 w-24 h-24 mb-4">
              <OpenIcon />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Open</h3>
            <p className="text-xl">We believe in the power of open. We're a small operation but we are able to deliver outstanding results by leveraging robust open-source tools built by thousands of developers - and we actively contribute back to the open-source ecosystem.</p>
          </div>
        </Fade>
      </div>

      <div className="grid-item flex justify-center p-12 relative order-1 md:order-2">
        <div className="w-full">
          <Parallax translateY={['-30%', '70%']} rotate={[0,180]}>
            <ValuesCircle />
          </Parallax>
        </div>
      </div>

    </div>
  );
}