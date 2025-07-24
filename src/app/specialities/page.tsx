"use client";

import Image from "next/image";
import Link from "next/link";

const specialities = [
  {
    title: "Gut Care",
    href: "/gut-health-specialis-in-bangalore",
    icon: "/img/icons/Gut Care.svg",
  },
  {
    title: "Gastroenterology",
    href: "/best-gastroenterologist-in-bangalore",
    icon: "/img/icons/Gastroenterology.svg",
  },
  {
    title: "Bariatric Surgery",
    href: "/bariatric-surgery-specialist-bangalore",
    icon: "/img/icons/Bariatric Surgery.svg",
  },
  {
    title: "Laparoscopic",
    href: "/laparoscopic-surgeon-in-bangalore",
    icon: "/img/icons/Laparoscopic.svg",
  },
  {
    title: "Proctology",
    href: "/proctology-specialist-in-bangalore",
    icon: "/img/icons/Proctology.svg",
  }
//   {
//     title: "Liver Care",
//     href: "/liver-specialist-in-bangalore",
//     icon: "/img/icons/Gut Care.svg",
//   },
//   {
//     title: "Pancreatic Disorders",
//     href: "/pancreas-specialist-in-bangalore",
//     icon: "/img/icons/Gut Care.svg",
//   },
//   {
//     title: "Hernia Treatment",
//     href: "/hernia-surgeon-in-bangalore",
//     icon: "/img/icons/Gut Care.svg",
//   },
//   {
//     title: "Endoscopy",
//     href: "/endoscopy-services-in-bangalore",
//     icon: "/img/icons/Gut Care.svg",
//   },
//   {
//     title: "Colonoscopy",
//     href: "/colonoscopy-center-in-bangalore",
//     icon: "/img/icons/Gut Care.svg",
//   },
//   {
//     title: "Digestive Wellness",
//     href: "/digestive-wellness-clinic-bangalore",
//     icon: "/img/icons/Gut Care.svg",
//   },
//   {
//     title: "Gallbladder Surgery",
//     href: "/gallbladder-surgery-in-bangalore",
//     icon: "/img/icons/Gut Care.svg",
//   },
//   {
//     title: "Rectal Disorders",
//     href: "/rectal-disorders-treatment-bangalore",
//     icon: "/img/icons/Gut Care.svg",
//   },
//   {
//     title: "Obesity Management",
//     href: "/obesity-treatment-in-bangalore",
//     icon: "/img/icons/Gut Care.svg",
//   },
//   {
//     title: "Weight Loss Surgery",
//     href: "/weight-loss-surgeon-bangalore",
//     icon: "/img/icons/Gut Care.svg",
//   },
//   {
//     title: "IBS Management",
//     href: "/ibs-treatment-in-bangalore",
//     icon: "/img/icons/Gut Care.svg",
//   },
//   {
//     title: "GI Cancer Screening",
//     href: "/gi-cancer-screening-bangalore",
//     icon: "/img/icons/Gut Care.svg",
//   },
//   {
//     title: "Stomach Disorders",
//     href: "/stomach-specialist-in-bangalore",
//     icon: "/img/icons/Gut Care.svg",
//   },
//   {
//     title: "Esophageal Disorders",
//     href: "/esophagus-specialist-bangalore",
//     icon: "/img/icons/Gut Care.svg",
//   },
//   {
//     title: "Nutrition & Diet",
//     href: "/diet-consultation-in-bangalore",
//     icon: "/img/icons/Gut Care.svg",
//   }
];


export default function AllSpecialitiesPage() {
  return (
    <section className="all-specialities-page">
      <div className="container">
        <div className="text-center mb-5 mt-80">
          <h1 className="page-title mt-5">All Specialities</h1>
        </div>

        <div className="specialities-grid">
          {specialities.map((item, index) => (
            <Link href={item.href} key={index} className="speciality-card">
              <div className="card-content">
                <div className="icon-wrapper">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={64}
                    height={64}
                  />
                </div>
                <h5 className="title">{item.title}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
