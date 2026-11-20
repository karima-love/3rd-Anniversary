import { ChapterLayout } from '../../components/layout/ChapterLayout';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { RevealText } from '../../components/ui/RevealText';
import { PhotoGallery } from './PhotoGallery';
import './OurStory.css';
export default function OurStory({ next }: { next: () => void }) {
  return <ChapterLayout number="04" className="story-chapter">
    <SectionHeading kicker="THROUGH EVERY SEASON">The Story <em>of Us</em></SectionHeading>
    <PhotoGallery onNext={next} />
    <RevealText className="gallery-ending"><span>3 Years.</span> <span>4 Chapters.</span> <em>Infinite Memories.</em><span className="infinity-mark">∞</span></RevealText>
  </ChapterLayout>;
}
