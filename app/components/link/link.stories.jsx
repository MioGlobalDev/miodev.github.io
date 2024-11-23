import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://miodev.us.kg">Primary link</Link>
    <Link secondary href="https://miodev.us.kg">
      Secondary link
    </Link>
  </StoryContainer>
);
