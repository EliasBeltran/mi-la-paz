---
name: Civic Clarity
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#43474f'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#737780'
  outline-variant: '#c3c6d1'
  surface-tint: '#3a5f94'
  primary: '#001e40'
  on-primary: '#ffffff'
  primary-container: '#003366'
  on-primary-container: '#799dd6'
  inverse-primary: '#a7c8ff'
  secondary: '#00658d'
  on-secondary: '#ffffff'
  secondary-container: '#2dbcfe'
  on-secondary-container: '#004866'
  tertiary: '#002507'
  on-tertiary: '#ffffff'
  tertiary-container: '#003d11'
  on-tertiary-container: '#36b24e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a7c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#1f477b'
  secondary-fixed: '#c6e7ff'
  secondary-fixed-dim: '#82cfff'
  on-secondary-fixed: '#001e2d'
  on-secondary-fixed-variant: '#004c6b'
  tertiary-fixed: '#83fc8e'
  tertiary-fixed-dim: '#66df75'
  on-tertiary-fixed: '#002106'
  on-tertiary-fixed-variant: '#00531a'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  body-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  label-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-lg: 48px
  stack-md: 24px
  stack-sm: 12px
---

## Brand & Style

The design system is engineered for the modern institutional landscape of La Paz, prioritizing accessibility, trust, and civic pride. The brand personality is "The Helpful Authority"—reliable and structured, yet warm and approachable. It serves a diverse demographic, specifically accommodating senior citizens and users with varying degrees of digital literacy.

The visual style is **Modern Institutional**, blending corporate reliability with a soft, human-centric interface. It utilizes a "Warm Minimalism" approach: high-contrast elements for readability, generous whitespace to reduce cognitive load, and subtle glassmorphism to create depth without clutter. Abstract silhouettes of the Illimani and Teleférico lines are integrated as light watermark patterns or header illustrations to ground the digital experience in the physical reality of the city.

**Design Principles:**
- **Accessibility First:** No icon stands alone; text labels are mandatory.
- **Cognitive Ease:** Information is chunked into wide, distinct cards.
- **Physicality:** Use soft shadows and rounded corners to make interactive elements feel touchable and friendly.

## Colors

The palette is rooted in institutional trust. **Deep Blue** serves as the primary anchor for navigation and headers, signaling stability. **Sky Blue** is used for interactive elements and information callouts. 

A strict semantic system ensures clarity:
- **Primary (#003366):** Used for structural elements, footers, and primary headings.
- **Success/Health (#28A745):** Specifically for medical services and completed transactions.
- **Warning (#FFC107):** Used for alerts, requiring a high-contrast dark text overlay.
- **Emergency (#DC3545):** Reserved for critical alerts and urgent civic notices.

Backgrounds must remain white (#FFFFFF) or very light gray (#F8F9FA) to ensure the highest possible contrast for text readability (meeting WCAG AAA standards where possible).

## Typography

This design system uses **Atkinson Hyperlegible Next** across all roles. This font is specifically designed to increase character recognition and improve legibility for users with low vision, which is critical for an inclusive government platform.

**Hierarchy Rules:**
- **Scale:** Font sizes are intentionally larger than industry standard (minimum 18px for body text) to accommodate senior users.
- **Weight:** Use Bold (700) for all headlines to create a clear visual anchor.
- **Contrast:** Maintain a minimum contrast ratio of 4.5:1 for all text against backgrounds. 
- **Accessibility:** Never use color alone to convey meaning within text; utilize font weight or underlining for emphasis.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a generous 12-column structure for desktop and a 4-column structure for mobile. 

**Layout Principles:**
- **Generous Gaps:** Gutters are set to 24px to ensure distinct separation between content blocks, preventing the "wall of text" effect.
- **Vertical Rhythm:** Use the `stack-lg` (48px) for separating major sections and `stack-md` (24px) for elements within a card.
- **Wide Cards:** Content is almost exclusively housed in wide, full-width or half-width cards. Avoid narrow, multi-column text layouts which are difficult for elderly users to track.
- **Touch Targets:** All interactive elements must have a minimum touch target size of 48x48px, regardless of their visual size.

## Elevation & Depth

To maintain a clean and inclusive interface, depth is used sparingly but purposefully. 

**Elevation Levels:**
- **Level 0 (Background):** #F8F9FA. The base canvas.
- **Level 1 (Cards):** White (#FFFFFF) surfaces with a very soft, diffused shadow (15% opacity Deep Blue, 20px blur, 4px offset). This makes the cards appear to "float" slightly, indicating they are interactive or contain distinct information.
- **Level 2 (Active States/Modals):** Increased shadow spread (25% opacity) to pull the element further forward.

**Outlines:**
Cards and inputs also utilize a 1px low-contrast border (#E9ECEF) to define their boundaries in case the user's monitor has poor contrast settings.

## Shapes

The design system employs a "Soft Geometric" shape language. 

- **Primary Radius:** 0.5rem (8px) for buttons and input fields.
- **Container Radius (rounded-xl/2xl):** Large cards and main containers use a 1.5rem (24px) radius. This high roundedness removes "sharpness" from the institutional interface, making it feel more like a modern service app and less like a rigid government form.
- **Visual Accents:** Icons are housed in circular or soft-square backgrounds to maintain a friendly, consistent appearance.

## Components

**Buttons:**
- **Primary:** Deep Blue background with white text. Minimum height 56px for high tap-accuracy.
- **Secondary:** White background with a 2px Deep Blue border.
- **Accessibility:** Every button must include a text label. If an icon is used, it sits to the left of the text.

**Cards:**
- Wide-format cards are the default. They should include a `label-lg` category tag at the top, a `headline-md` title, and `body-md` description.
- Cards used for "Services" (e.g., Teleférico status) should include a Sky Blue left-border accent.

**Input Fields:**
- Inputs feature a light gray background and a 2px bottom border that turns Sky Blue on focus. 
- Labels must always be visible (never use placeholder text as the only label).

**Lists:**
- High-density lists are avoided. Instead, use "Action Lists" where each row is a Level 1 elevation card with a chevron icon and a descriptive text label.

**Icons & Imagery:**
- Use thick-stroke (2px) linear icons.
- Every icon is accompanied by a text label.
- Illustrations of La Paz should be used as secondary background elements, never interfering with text legibility.