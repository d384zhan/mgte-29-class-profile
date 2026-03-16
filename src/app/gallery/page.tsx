import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProfileLayout from '../../layouts/ProfileLayout';
import "./gallery.scss"

// Each photo gets a size class for varied grid heights
// 'tall' = span 4 rows, default = span 3, 'short' = span 2
type PhotoSize = 'tall' | 'short';
const photos: { file: string; alt: string; size?: PhotoSize }[] = [
  { file: 'class-selfie-stick.jpg', alt: 'Class selfie with selfie stick' },
  { file: 'diner-group.jpg', alt: 'Group selfie at diner', size: 'tall' },
  { file: 'class-activity-closeup.jpg', alt: 'Students working on supply chain game' },
  { file: 'class-group-hallway.jpg', alt: 'MGTE class group photo in hallway', size: 'short' },
  { file: 'engineering-group.jpg', alt: 'Group at Waterloo Engineering event', size: 'tall' },
  { file: 'diner-candid.jpg', alt: 'Candid moment at diner' },
  { file: 'class-activity-wide.jpg', alt: 'Class activity with sticky notes', size: 'short' },
  { file: 'industry40-balloons.jpg', alt: 'Industry 4.0 balloon backdrop', size: 'tall' },
  { file: 'gala-table.jpg', alt: 'Formal dinner table' },
  { file: 'class-atrium-overhead.jpg', alt: 'Class photo from above in atrium', size: 'short' },
  { file: 'mgmt-eng-sign.jpg', alt: 'Student at Management Engineering sign', size: 'tall' },
  { file: 'cybertruck-poster.jpg', alt: 'Students with Cyber Truck poster' },
  { file: 'makerspace-class.jpg', alt: 'Students in makerspace during class', size: 'short' },
  { file: 'class-makerspace-selfie.jpg', alt: 'Professor selfie with class in makerspace', size: 'tall' },
  { file: 'lab-equipment.jpg', alt: 'Students at lab equipment' },
  { file: 'tutorial-classroom.jpg', alt: 'Group posing in tutorial classroom', size: 'short' },
  { file: 'class-atrium-selfie1.jpg', alt: 'Group selfie in atrium' },
  { file: 'class-lecture-wide.jpg', alt: 'Full lecture hall', size: 'short' },
  { file: 'cybertruck-girls.jpg', alt: 'Students with Cyber Truck poster', size: 'tall' },
  { file: 'presentation-slides.jpg', alt: 'Students presenting' },
  { file: 'class-atrium-selfie2.jpg', alt: 'Group selfie in atrium', size: 'short' },
  { file: 'resume-critique-wide.jpg', alt: 'Resume critique session' },
  { file: 'study-session.jpg', alt: 'Study session', size: 'tall' },
  { file: 'lab-closeup.jpg', alt: 'Lab work closeup' },
  { file: 'lecture-hall.jpg', alt: 'Lecture hall view', size: 'short' },
  { file: 'IMG_2758.jpg', alt: 'Evening hangout' },
  { file: 'IMG_2275.jpg', alt: 'Night out with friends', size: 'short' },
  { file: 'industry40-banner.jpg', alt: 'Industry 4.0 banner event', size: 'tall' },
  { file: 'chalkboard-friends.jpg', alt: 'Friends at lab equipment' },
  { file: 'physics-lecture.jpg', alt: 'Physics lecture' },
  { file: 'basketball-score.jpg', alt: 'Basketball score - management engineering victory', size: 'tall' },
];

const rotations = [-3.5, 2, -1, 3, -2.5, 1.5, -0.5, 4, -2, 1, -3, 2.5, 0, -1.5, 3.5, -4];

export default function GalleryPage() {
  return (
    <ProfileLayout>
      <div className="gallery-container">

        {/* Banner */}
        <section className="background gallery-banner-section">
          <span className="bg-banner" />
          <span className="bg-lockers" />
          <span className="bg-title" />
          <Image src="/gallery/goose-left.png" alt="" width={480} height={350} className="gallery-goose gallery-goose--left" />
          <Image src="/gallery/goose-left.png" alt="" width={480} height={350} className="gallery-goose gallery-goose--right" />
          <div className="gallery-accent gallery-accent--left">
            <Image src="/gallery/CarnivalBracelets.jpg" alt="" width={400} height={400} />
          </div>
          <div className="gallery-accent gallery-accent--right">
            <Image src="/gallery/Carnival.png" alt="" width={400} height={533} />
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
            <Image src="/gallery/class-group-lobby.png" alt="MGTE class group photo in lobby" width={1200} height={600} />
          </div>
        </div>

        {/* Collage Grid */}
        <section className="gallery-collage">
          {photos.map((photo, i) => (
            <div
              key={photo.file}
              className={`gallery-frame${photo.size ? ` gallery-frame--${photo.size}` : ''}`}
              style={{ '--rotation': `${rotations[i % rotations.length]}deg` } as CSSProperties}
            >
              <Image
                src={`/gallery/${photo.file}`}
                alt={photo.alt}
                width={400}
                height={300}
                sizes="(max-width: 440px) 50vw, (max-width: 1024px) 33vw, (min-width: 1650px) 20vw, 25vw"
              />
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
