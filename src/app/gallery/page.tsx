import React from 'react';
import Link from 'next/link';
import ProfileLayout from '../../layouts/ProfileLayout';
import "./gallery.scss"

// Each photo gets a size class for varied grid heights
// 'tall' = span 4 rows, default = span 3, 'short' = span 2
const photos: { src: string; alt: string; size?: string }[] = [
  { src: '/gallery/class-selfie-stick.jpg', alt: 'Class selfie with selfie stick' },
  { src: '/gallery/diner-group.jpg', alt: 'Group selfie at diner', size: 'tall' },
  { src: '/gallery/class-activity-closeup.jpg', alt: 'Students working on supply chain game' },
  { src: '/gallery/class-group-hallway.jpg', alt: 'MGTE class group photo in hallway', size: 'short' },
  { src: '/gallery/engineering-group.jpg', alt: 'Group at Waterloo Engineering event', size: 'tall' },
  { src: '/gallery/diner-candid.jpg', alt: 'Candid moment at diner' },
  { src: '/gallery/class-activity-wide.jpg', alt: 'Class activity with sticky notes', size: 'short' },
  { src: '/gallery/industry40-balloons.jpg', alt: 'Industry 4.0 balloon backdrop', size: 'tall' },
  { src: '/gallery/gala-table.jpg', alt: 'Formal dinner table' },
  { src: '/gallery/class-atrium-overhead.jpg', alt: 'Class photo from above in atrium', size: 'short' },
  { src: '/gallery/mgmt-eng-sign.jpg', alt: 'Student at Management Engineering sign', size: 'tall' },
  { src: '/gallery/cybertruck-poster.jpg', alt: 'Students with Cyber Truck poster' },
  { src: '/gallery/makerspace-class.jpg', alt: 'Students in makerspace during class', size: 'short' },
  { src: '/gallery/class-makerspace-selfie.jpg', alt: 'Professor selfie with class in makerspace', size: 'tall' },
  { src: '/gallery/lab-equipment.jpg', alt: 'Students at lab equipment' },
  { src: '/gallery/tutorial-classroom.jpg', alt: 'Group posing in tutorial classroom', size: 'short' },
  { src: '/gallery/class-atrium-selfie1.jpg', alt: 'Group selfie in atrium' },
  { src: '/gallery/class-lecture-wide.jpg', alt: 'Full lecture hall', size: 'short' },
  { src: '/gallery/cybertruck-girls.jpg', alt: 'Students with Cyber Truck poster', size: 'tall' },
  { src: '/gallery/presentation-slides.jpg', alt: 'Students presenting' },
  { src: '/gallery/class-atrium-selfie2.jpg', alt: 'Group selfie in atrium', size: 'short' },
  { src: '/gallery/resume-critique-wide.jpg', alt: 'Resume critique session' },
  { src: '/gallery/study-session.jpg', alt: 'Study session', size: 'tall' },
  { src: '/gallery/lab-closeup.jpg', alt: 'Lab work closeup' },
  { src: '/gallery/lecture-hall.jpg', alt: 'Lecture hall view', size: 'short' },
  { src: '/gallery/IMG_2758.jpg', alt: 'Evening hangout' },
  { src: '/gallery/IMG_2275.jpg', alt: 'Night out with friends', size: 'short' },
  { src: '/gallery/industry40-banner.jpg', alt: 'Industry 4.0 banner event', size: 'tall' },
  { src: '/gallery/chalkboard-friends.jpg', alt: 'Friends at lab equipment' },
  { src: '/gallery/physics-lecture.jpg', alt: 'Physics lecture' },
  { src: '/gallery/basketball-score.jpg', alt: 'Basketball score - management engineering victory', size: 'tall' },
];

// More varied rotations for entropic feel
const rotations = [-3.5, 2, -1, 3, -2.5, 1.5, -0.5, 4, -2, 1, -3, 2.5, 0, -1.5, 3.5, -4];

export default function GalleryPage() {
  return (
    <ProfileLayout>
      <div className="gallery-container">

        {/* Banner */}
        <section className="background">
          <span className="bg-banner" />
          <span className="bg-lockers" />
          <span className="bg-title" />
          <img src="/gallery/goose-left.png" alt="" className="gallery-goose gallery-goose--left" />
          <img src="/gallery/goose-right.png" alt="" className="gallery-goose gallery-goose--right" />
          <div className="gallery-accent gallery-accent--left">
            <img src="/gallery/CarnivalBracelets.jpg" alt="" />
          </div>
          <div className="gallery-accent gallery-accent--right">
            <img src="/gallery/Carnival.png" alt="" />
          </div>
        </section>

        {/* Title */}
        <section className="gallery-title">
          <h1>Over The Years</h1>
          <p>A little time capsule of late nights, bright mornings, and all the memories we made along the way.</p>
        </section>

        {/* Full-width: class group lobby */}
        <div className="gallery-full">
          <div className="gallery-full__frame">
            <img src="/gallery/class-group-lobby.png" alt="MGTE class group photo in lobby" />
          </div>
        </div>

        {/* Collage Grid */}
        <section className="gallery-collage">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`gallery-frame${photo.size ? ` gallery-frame--${photo.size}` : ''}`}
              style={{ '--rotation': `${rotations[i % rotations.length]}deg` } as React.CSSProperties}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          ))}
        </section>

        {/* Navigation */}
        <div className="nav-buttons">
          <Link href="/lifestyle" className="nav-btn nav-btn--purple">
            &larr; Lifestyle
          </Link>
          <Link href="/about" className="nav-btn nav-btn--yellow">
            About &rarr;
          </Link>
        </div>

      </div>
    </ProfileLayout>
  );
}
