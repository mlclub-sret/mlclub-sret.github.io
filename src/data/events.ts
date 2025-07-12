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