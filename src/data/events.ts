type EventDetails = {
    title: string,
    date: string,
    time: string,
    location: string,
    type: string,
    attendees?: number,
    description: string,
    image: string,
    tags: string[]
    feedback?: string,
}[];

export const events: EventDetails = [
    {
      title: 'Pattern Pursuit',
      date: '2025-07-23',
      time: '11:00 AM - 12:00 PM',
      location: 'Class Room To Be Announced',
      type: 'Workshop',
      description: 'Offering interactive game session to teach concepts of AI & ML.',
      image: 'events/Capture-The-Castle-Poster-25.06.2025.png',
      tags: [],
    },
    {
      title: 'ML Mind Maze',
      date: '2025-07-16',
      time: '11:00 AM - 12:00 PM',
      location: 'Class Room 23',
      type: 'Workshop',
      attendees: 33,
      description: 'Exploring Machine Learning concepts through crossword puzzles.',
      image: 'events/ML-Mind-Maze-Poster-16.07.2025.png',
      tags: ['Deep Learning', 'Machine Learning', 'Critical Thinking'],
    },
    {
      title: 'Capture The Castle',
      date: '2025-06-25',
      time: '11:00 AM - 12:00 PM',
      location: 'Class Room 17',
      type: 'Workshop',
      attendees: 31,
      description: 'Offering interactive game session to teach concepts of AI & ML.',
      image: 'events/Capture-The-Castle-Poster-25.06.2025.png',
      tags: ['Deep Learning', 'Leadership', 'Critical Thinking'],
      feedback: 'https://forms.gle/FA4yVBj5Uc8sisN97',
    },
  ];