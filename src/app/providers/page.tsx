"use client";

import Image from "next/image";
import Link from "next/link";

const items = [
  { img: '/img/icons/Diarrhoea 1.webp', alt: 'Diarrhea', title: 'Diarrhea', link: 'diarrhea' },
  { img: '/img/icons/Gastritis 1.webp', alt: 'Gastritis', title: 'Gastritis', link: 'gastritis-treatment-In-bangalore' },
  { img: '/img/icons/Bariatric Surgery 1.webp', alt: 'Bariatric Surgery', title: 'Bariatric Surgery', link: 'bariatric-surgery-specialist-bangalore' },
  { img: '/img/icons/Obesity 1.webp', alt: 'Obesity', title: 'Obesity', link: 'weight-loss-surgeon-bangalore' },
  { img: '/img/icons/laser surgery 1.webp', alt: 'Laser surgery', title: 'Laser surgery', link: 'laser-surgery-doctors-in-bangalore' },
  { img: '/img/icons/Gastric Balloons 1.webp', alt: 'Gastritis Balloon', title: 'Gastritis Balloon', link: 'swallowable-balloon' },
  { img: '/img/icons/Rectal Bleeding 1.webp', alt: 'Rectal Bleeding', title: 'Rectal Bleeding', link: 'rectal-bleeding-treatment' },
  { img: '/img/icons/Endoscopic 1.webp', alt: 'Endoscopic Surgery', title: 'Endoscopic Surgery', link: 'best-doctors-for-endoscopy-in-bangalore' },
  { img: '/img/icons/Incisional hernia 1.webp', alt: 'Incisional hernia', title: 'Incisional hernia', link: 'incisional-hernia' },
  { img: '/img/icons/Inguinal hernia 1.webp', alt: 'Inguinal hernia', title: 'Inguinal hernia', link: 'inguinal-hernia' },
  { img: '/img/icons/Anal fissure, anal fistula 1.webp', alt: 'Anal fissure, anal fistula', title: 'Anal fissure, anal fistula', link: 'fissure' },
  { img: '/img/icons/Abdominal Pain 1.webp', alt: 'Abdominal Pain/ Acute And Chronic', title: 'Abdominal Pain/ Acute And Chronic', link: 'abdominal' },
  { img: '/img/icons/Surgery For 1.webp', alt: 'Surgery For Reflux Disease', title: 'Surgery For Reflux Disease', link: 'reflux' },
  { img: '/img/icons/Irritable Bowel 1.webp', alt: 'Irritable Bowel Syndrome', title: 'Irritable Bowel Syndrome', link: 'irritable' },
  { img: '/img/icons/Surgery For 1.webp', alt: 'Surgery For Cancers', title: 'Surgery For Cancers', link: 'cancer-treatment-in-bangalore' },
  { img: '/img/icons/stem cell small size.webp', alt: 'Stem Cell Therapy', title: 'Stem Cell Therapy', link: 'stemcell-therapy' },
  { img: '/img/icons/Robotic Surgery.webp', alt: 'Robotic Surgery', title: 'Robotic Surgery', link: 'robotic-surgeries' },
  { img: '/img/icons/Gallstones.webp', alt: 'Gallstones', title: 'Gallstones', link: 'gallstones-treatments' },
  { img: '/img/icons/piles.webp', alt: 'Piles', title: 'Piles', link: 'piles-treatment-in-bangalore' },
  { img: '/img/icons/Reflux Disease.webp', alt: 'Gastroesophageal Reflux Disease', title: 'Gastroesophageal Reflux Disease', link: 'gastroesophageal' },
  { img: '/img/icons/Laparoscopic.svg', alt: 'Laparoscopic', title: 'Laparoscopic', link: 'laparoscopic-surgeon-in-bangalore' },
];

export default function ProvidersPage() {
  return (
    <section className="providers-section">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="page-title">Conditions & Treatments</h1>
          <p className="text-muted">Explore a wide range of medical treatments and services</p>
        </div>

        <div className="grid-wrapper">
          {items.map((item, index) => (
            <Link key={index} href={`/${item.link}`} className="grid-card">
              <div className="card-content">
                <Image src={item.img} alt={item.alt} width={64} height={64} />
                <h5 className="title">{item.title}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
