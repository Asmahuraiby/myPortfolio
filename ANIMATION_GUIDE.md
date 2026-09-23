# 🎬 Animation System Guide

## Overview

This animation system provides smooth, performant scroll animations that:
- ✅ **Trigger on scroll** - Animate when elements enter viewport
- ✅ **Bidirectional** - Reset and re-animate when scrolling back
- ✅ **Fast & smooth** - Optimized with Framer Motion
- ✅ **Reusable** - Easy to apply to any component
- ✅ **Customizable** - Multiple animation types and timing options

## Components

### 1. `AnimateOnScroll`
Animates a single element when it enters the viewport.

### 2. `AnimateStagger`
Animates multiple child elements with a staggered delay.

## Usage

### Basic Animation

```tsx
import AnimateOnScroll from "@/components/animate-on-scroll";

<AnimateOnScroll>
  <h1>This will fade in from bottom</h1>
</AnimateOnScroll>
```

### With Custom Animation Type

```tsx
<AnimateOnScroll animation="fade-in-left" delay={0.2} duration={0.8}>
  <p>Slides in from left with delay</p>
</AnimateOnScroll>
```

### Available Animation Types

- `fade-in-up` (default) - Fades in from bottom
- `fade-in-down` - Fades in from top
- `fade-in-left` - Fades in from left
- `fade-in-right` - Fades in from right
- `scale-up` - Scales up from 0.8 to 1
- `fade-in` - Simple fade in

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | string | `"fade-in-up"` | Animation type |
| `delay` | number | `0` | Delay in seconds |
| `duration` | number | `0.6` | Animation duration in seconds |
| `threshold` | number | `0.2` | How much of element must be visible (0-1) |
| `className` | string | `""` | Additional CSS classes |

## Examples for Each Section

### About Section

```tsx
import AnimateOnScroll from "@/components/animate-on-scroll";

export default function About() {
  return (
    <section id="about">
      <AnimateOnScroll animation="fade-in-up" delay={0}>
        <h2>About Me</h2>
      </AnimateOnScroll>
      
      <AnimateOnScroll animation="fade-in-up" delay={0.1}>
        <p>Your description here...</p>
      </AnimateOnScroll>
      
      <AnimateOnScroll animation="scale-up" delay={0.2}>
        <img src="profile.jpg" alt="Profile" />
      </AnimateOnScroll>
    </section>
  );
}
```

### Projects Section with Stagger

```tsx
import AnimateStagger from "@/components/animate-stagger";
import AnimateOnScroll from "@/components/animate-on-scroll";

export default function Projects() {
  return (
    <section id="projects">
      <AnimateOnScroll animation="fade-in-up">
        <h2>My Projects</h2>
      </AnimateOnScroll>
      
      <AnimateStagger staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="project-card">Project 1</div>
        <div className="project-card">Project 2</div>
        <div className="project-card">Project 3</div>
        <div className="project-card">Project 4</div>
      </AnimateStagger>
    </section>
  );
}
```

### Skills Section

```tsx
import AnimateOnScroll from "@/components/animate-on-scroll";
import AnimateStagger from "@/components/animate-stagger";

export default function Skills() {
  const skills = ["React", "Next.js", "TypeScript", "Tailwind"];
  
  return (
    <section id="skills">
      <AnimateOnScroll animation="fade-in-up">
        <h2>My Skills</h2>
      </AnimateOnScroll>
      
      <AnimateStagger staggerDelay={0.1} className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="skill-badge">{skill}</span>
        ))}
      </AnimateStagger>
    </section>
  );
}
```

### Experience Section

```tsx
import AnimateOnScroll from "@/components/animate-on-scroll";

export default function Experience() {
  return (
    <section id="experience">
      <AnimateOnScroll animation="fade-in-up">
        <h2>Experience</h2>
      </AnimateOnScroll>
      
      <div className="timeline">
        <AnimateOnScroll animation="fade-in-left" delay={0.1}>
          <div className="timeline-item">
            <h3>Job Title 1</h3>
            <p>2020 - Present</p>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="fade-in-left" delay={0.2}>
          <div className="timeline-item">
            <h3>Job Title 2</h3>
            <p>2018 - 2020</p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
```

### Contact Section

```tsx
import AnimateOnScroll from "@/components/animate-on-scroll";

export default function Contact() {
  return (
    <section id="contact">
      <AnimateOnScroll animation="fade-in-up">
        <h2>Contact Me</h2>
      </AnimateOnScroll>
      
      <AnimateOnScroll animation="scale-up" delay={0.2}>
        <form>
          <input type="email" placeholder="Your email" />
          <textarea placeholder="Your message" />
          <button type="submit">Send</button>
        </form>
      </AnimateOnScroll>
    </section>
  );
}
```

## Tips

### 1. Fast Animations
For snappy animations, use:
```tsx
<AnimateOnScroll duration={0.4} delay={0}>
```

### 2. Sequence Multiple Elements
Increase delay for each element:
```tsx
<AnimateOnScroll delay={0}>Element 1</AnimateOnScroll>
<AnimateOnScroll delay={0.1}>Element 2</AnimateOnScroll>
<AnimateOnScroll delay={0.2}>Element 3</AnimateOnScroll>
```

### 3. Control Trigger Point
Adjust `threshold` to control when animation triggers:
```tsx
<AnimateOnScroll threshold={0.5}> // Trigger when 50% visible
```

### 4. Different Animations Based on Locale

```tsx
const locale = useLocale();

<AnimateOnScroll 
  animation={locale === 'ar' ? 'fade-in-right' : 'fade-in-left'}
>
  Content
</AnimateOnScroll>
```

## Performance

- ✅ Uses Framer Motion's optimized animations
- ✅ Intersection Observer for efficient scroll detection
- ✅ Only animates when elements are near viewport
- ✅ Hardware-accelerated transforms
- ✅ No layout shift during animations

## Customization

### Create New Animation Type

Edit `components/animate-on-scroll.tsx`:

```tsx
const animationVariants = {
  // ... existing animations
  "bounce-in": {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
  },
};
```

Then use it:
```tsx
<AnimateOnScroll animation="bounce-in">
  Content
</AnimateOnScroll>
```

## Migration from Old Code

### Before (Plain JS)
```html
<p class="animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="0">
  Text
</p>
```

### After (React)
```tsx
<AnimateOnScroll animation="fade-in-up" delay={0}>
  <p>Text</p>
</AnimateOnScroll>
```

## Complete Section Example

```tsx
"use client";

import AnimateOnScroll from "@/components/animate-on-scroll";
import AnimateStagger from "@/components/animate-stagger";
import { useTranslations } from 'next-intl';

export default function MySection() {
  const t = useTranslations();
  
  return (
    <section id="my-section" className="py-20">
      {/* Title */}
      <AnimateOnScroll animation="fade-in-up" duration={0.5}>
        <h2 className="text-4xl font-bold text-center">
          {t('sectionTitle')}
        </h2>
      </AnimateOnScroll>
      
      {/* Description */}
      <AnimateOnScroll animation="fade-in-up" delay={0.1} duration={0.5}>
        <p className="text-center text-gray-600 mt-4">
          {t('sectionDescription')}
        </p>
      </AnimateOnScroll>
      
      {/* Grid of items */}
      <AnimateStagger 
        staggerDelay={0.1} 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
      >
        <div className="card">Item 1</div>
        <div className="card">Item 2</div>
        <div className="card">Item 3</div>
      </AnimateStagger>
    </section>
  );
}
```

## Troubleshooting

### Animation Not Triggering
- Check if element is actually scrolling into view
- Adjust `threshold` prop (try `0.1` for earlier trigger)
- Ensure parent has proper height/overflow

### Animation Too Slow
- Reduce `duration` (try `0.4` or `0.5`)
- Reduce `delay`

### Animation Jumps
- Ensure parent container doesn't have conflicting animations
- Check for CSS transitions that might interfere

---

**Now all your sections will have smooth, professional scroll animations!** 🎉
