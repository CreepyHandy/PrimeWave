# Primewave — Creative Styles Reference

## 1. Purpose

This document defines the visual direction for the Primewave landing page. It should be used as the creative reference during development to ensure the implementation stays faithful to the approved design.

The visual identity is **dark, editorial, minimal, technical, and product-focused**. The page should feel like a capable digital product agency rather than a generic creative agency template.

Prioritize:

- Strong typography.
- Clear hierarchy.
- Generous spacing.
- Restrained color usage.
- Flat surfaces.
- Subtle borders and inset highlights.
- High-quality project presentation.
- A calm, premium, technical tone.

---

## 2. Overall Art Direction

The website uses a predominantly dark interface with warm near-black backgrounds, off-white typography, muted secondary text, and small blue accents.

The design language combines:

- Editorial typography.
- Large display headlines.
- Compact technical labels.
- Modular content blocks.
- Structured project grids.
- Minimal decorative elements.
- Strong alignment and rhythm.

Avoid visual noise. The page should feel intentional, spacious, and composed.

### Design personality

- Confident, not loud.
- Premium, not ornamental.
- Technical, not overly futuristic.
- Human, not corporate.
- Minimal, not empty.
- Detailed, not cluttered.

---

## 3. Color System

Use a restrained palette. Most of the interface should be built from near-black surfaces and light typography.

### Core colors

| Token | Suggested value | Usage |
| --- | --- | --- |
| `--color-bg` | `#0D0C0B` | Main page background |
| `--color-surface` | `#151413` | Alternating section panels and cards |
| `--color-surface-raised` | `#191817` | Subtle variation for selected or elevated surfaces |
| `--color-text-primary` | `#F4F2EE` | Main headings and important text |
| `--color-text-secondary` | `#B8B5AF` | Paragraphs and supporting copy |
| `--color-text-muted` | `#77736D` | Metadata, labels, and low-priority text |
| `--color-border` | `#292725` | Thin borders and separators |
| `--color-accent` | `#1683FF` | Small interactive accents and selected details |
| `--color-accent-soft` | `#0E3155` | Very subtle accent backgrounds where required |

These values are reference starting points. Match the supplied design assets and screenshots where exact values are available.

### Color rules

- Keep the page mostly monochromatic.
- Use blue only as a restrained accent.
- Use single-color fills.
- Do not introduce gradients on UI elements.
- Do not use bright accent colors for large surfaces.
- Avoid pure black unless required by an asset.
- Avoid pure white for every text element; use an off-white primary color for a softer result.

---

## 4. Typography

Typography is the main visual tool in the design. The type system relies on a narrow weight range, strong scale contrast, and carefully controlled line heights.

### Typeface assignments

| Typeface | Usage |
| --- | --- |
| **Cal Sans** | Headers, display text, section titles, major statements |
| **General Sans** | Body copy, navigation, buttons, supporting text |
| **Roboto Mono** | Short one-line section intros, technical labels, metadata, eyebrow text |

### Font loading

Use the supplied font files if available. If the exact font files are not available during development, use a close fallback temporarily and replace it before production.

```css
font-family: "Cal Sans", sans-serif;
font-family: "General Sans", sans-serif;
font-family: "Roboto Mono", monospace;
```

### Weight rules

- The type system is primarily built around the `400–480` range.
- Do not use more than one weight from the `500+` range within a single text block.
- Avoid excessive bolding.
- Use size, spacing, and line height to establish hierarchy before increasing font weight.
- Display headings should feel substantial through scale and composition, not heavy font weights.

### Suggested type scale

| Element | Suggested size | Line height | Typeface |
| --- | ---: | ---: | --- |
| Hero headline | `clamp(2.75rem, 6vw, 6.5rem)` | `0.95–1.05` | Cal Sans |
| Main section heading | `clamp(2.25rem, 4vw, 4.5rem)` | `0.95–1.05` | Cal Sans |
| Large service heading | `clamp(2rem, 3.5vw, 4rem)` | `1.0–1.1` | Cal Sans |
| Project title | `1rem–1.25rem` | `1.15–1.3` | General Sans |
| Body copy | `0.875rem–1rem` | `1.45–1.65` | General Sans |
| Small label | `0.625rem–0.75rem` | `1.2–1.4` | Roboto Mono |
| Button text | `0.75rem–0.875rem` | `1` | General Sans |

The exact values should follow the approved desktop and mobile designs.

### Typography behavior

- Hero headlines should use tight tracking and compact line breaks.
- Section headings should be allowed to wrap naturally.
- Body copy should remain readable and relatively narrow.
- Mono labels should be uppercase or sentence case depending on the supplied design, with modest letter spacing.
- Avoid long line lengths for paragraphs.

---

## 5. Layout System

The layout is based on a centered content container with strong horizontal alignment.

### Container

Suggested starting values:

```css
--container-width: 1200px;
--container-padding: 24px;
```

Use a wider container for project grids and large visual sections where appropriate.

### Layout principles

- Maintain a consistent left and right alignment across sections.
- Use a clear vertical rhythm between section label, heading, supporting text, and content.
- Allow large display text to create visual impact.
- Use asymmetry where shown in the design, but preserve an underlying grid.
- Keep content blocks compact enough to feel intentional.
- Avoid filling every available area with content.

### Section spacing

Suggested starting values:

- Small section gap: `64px–96px`
- Standard section gap: `120px–160px`
- Major transition gap: `180px–240px`
- Mobile section gap: `72px–112px`

These values are directional and should be adjusted to match the screenshot.

---

## 6. Backgrounds and Surfaces

The page alternates between the primary background and slightly lighter surface blocks.

### Main background

Use the warm near-black background for the majority of the page.

### Surface blocks

Use slightly lighter panels for:

- Product service blocks.
- Development service blocks.
- Systems service blocks.
- Selected content groups.
- CTA panels.
- Testimonial cards.
- Other grouped content where separation is needed.

Surface blocks should feel integrated into the page, not like floating dashboard cards.

### Surface rules

- Use flat fills.
- Use subtle borders only when necessary.
- Do not use large drop shadows.
- Elevation comes from inset highlights, contrast, spacing, and surface changes—not cast shadows.
- Avoid excessive rounded corners.
- Use the corner radius shown in the approved design; default to small or moderate radii rather than highly rounded cards.

---

## 7. Borders and Inset Highlights

Borders should be quiet and low contrast.

Suggested border:

```css
border: 1px solid var(--color-border);
```

Use borders to:

- Separate cards.
- Define grouped surfaces.
- Support grid structure.
- Clarify interactive boundaries.

Use subtle inset highlights when a surface needs additional definition:

```css
box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.035);
```

This is an example only. Keep the effect very restrained.

Do not use:

- Large cast shadows.
- Strong outer glows.
- Glassmorphism.
- Heavy blur effects.
- Decorative gradients.

---

## 8. Header and Navigation

The header should be minimal and lightweight.

### Visual treatment

- Dark background matching the page.
- Small logo treatment.
- Compact navigation text.
- Clear but understated contact/action link.
- Plenty of horizontal breathing room.

### Behavior

- Preserve the desktop alignment shown in the design.
- Use a compact mobile navigation pattern.
- Avoid adding extra navigation items.
- Keep the header visually quiet so the hero remains the primary focus.

---

## 9. Hero Section

The hero is the strongest statement on the page.

### Composition

- Large Cal Sans headline.
- Short, confident positioning statement.
- Centered or intentionally aligned composition based on the approved design.
- Small supporting line or technical label where shown.
- Primary CTA with restrained blue emphasis.
- Large empty space around the headline.

### Hero rules

- The headline should be the dominant visual element.
- Keep the copy concise.
- Do not add decorative illustrations that are not in the design.
- Avoid excessive animation.
- Maintain the deliberate line breaks from the approved layout where possible.
- The CTA should be visually clear without becoming oversized.

---

## 10. Section Labels and Intro Lines

Each major section may begin with a short technical or editorial intro line.

These lines should use:

- Roboto Mono.
- Small font size.
- Muted or secondary color.
- Compact line height.
- Minimal letter spacing.
- Short copy, usually one line.

They function as orientation markers rather than headlines.

Example treatment:

```text
01 / SERVICES
```

Do not make these labels visually louder than the section headings.

---

## 11. Services Presentation

The services section uses large display headings paired with concise explanations and supporting service lists.

### Visual hierarchy

1. Small Roboto Mono section label.
2. Large Cal Sans service title.
3. Short General Sans description.
4. Supporting list or details.
5. Small blue indicators or links where included.

### Service blocks

- Use clear spacing between service groups.
- Alternate or vary surface treatment only where shown in the design.
- Keep supporting text readable and compact.
- Avoid turning each service into a complex feature card.
- Preserve the editorial, structured feel of the layout.

### Service list styling

- Use small text.
- Use consistent alignment.
- Use subtle separators or blue indicators where shown.
- Avoid oversized icons unless present in the approved design.

---

## 12. Project / Portfolio Grid

The project section is image-led and should communicate quality through presentation.

### Project cards

Each project card should include the approved:

- Project image.
- Project name.
- Short supporting description or category.
- Any additional metadata shown in the design.

### Image treatment

- Use high-quality project screenshots or mockups.
- Preserve the original aspect ratio where possible.
- Avoid aggressive cropping.
- Use consistent card proportions within a grid.
- Keep image borders and framing subtle.
- Do not add unnecessary overlays.

### Grid behavior

- Use a two-column or multi-column layout on desktop if shown in the design.
- Collapse gracefully on mobile.
- Maintain consistent gaps.
- Keep project titles close to their images.
- Do not introduce case-study pages unless separately designed.

---

## 13. Testimonials

Testimonials should feel like proof from real clients, not promotional quotes floating in oversized cards.

### Visual treatment

- Dark or slightly lighter surface cards.
- Subtle border or inset highlight.
- Compact quote text.
- Small client information block.
- Minimal avatar or image treatment where provided.

### Rules

- Keep testimonial text readable.
- Avoid oversized quotation marks unless present in the design.
- Do not use heavy shadows.
- Maintain consistent card heights where practical.
- Preserve the approved layout and number of testimonials.

---

## 14. Buttons and Links

Buttons should be compact, clear, and functional-looking.

### Primary button

- Single-color blue fill.
- Dark or light text depending on contrast.
- General Sans.
- Medium or regular weight.
- Small to moderate corner radius.
- Compact horizontal padding.
- No gradient.
- No large shadow.

Suggested starting treatment:

```css
background: var(--color-accent);
color: #ffffff;
border-radius: 999px;
padding: 10px 16px;
```

Only use a pill shape if it matches the approved design.

### Secondary links

- Use off-white or muted text.
- Keep underline or arrow treatments subtle.
- Use blue sparingly for active states or small indicators.
- Avoid turning every text link into a bright accent.

### Interaction states

Implement simple, polished states:

- Slight opacity change.
- Subtle background or border change.
- Small translate or underline transition where appropriate.

Avoid exaggerated hover animations.

---

## 15. Contact / CTA Section

The closing CTA should feel like a natural continuation of the page.

### Visual treatment

- Slightly lighter surface panel or clearly separated block.
- Strong but concise Cal Sans heading.
- Short supporting line.
- Clear primary action.
- Generous internal spacing.

The CTA should be confident and direct without using aggressive sales language.

---

## 16. Imagery and Assets

Use the approved project images, logos, icons, and illustrations from the design files.

### Image rules

- Use optimized assets.
- Prefer WebP or AVIF for raster images where supported.
- Preserve visual quality.
- Provide meaningful alt text.
- Avoid stock imagery unless it is part of the approved design.
- Do not introduce new imagery that changes the visual direction.

### Logo and icons

- Use the supplied Primewave logo.
- Keep logo sizing consistent.
- Use icons only where present in the approved design.
- Avoid mixing unrelated icon styles.

---

## 17. Motion and Interaction

Motion should be subtle and supportive.

### Recommended motion

- Short opacity transitions.
- Small transform transitions on buttons and links.
- Smooth mobile menu transitions.
- Gentle reveal animations only if they do not interfere with readability.

### Avoid

- Large entrance animations.
- Excessive parallax.
- Bouncy effects.
- Continuous background motion.
- Heavy blur transitions.
- Animations that delay access to content.

The website should remain fully usable with reduced-motion preferences enabled.

---

## 18. Responsive Direction

The mobile layout should preserve the same visual identity as desktop while simplifying composition.

### Mobile priorities

- Maintain strong headline hierarchy.
- Reduce horizontal padding carefully.
- Stack multi-column layouts.
- Keep project images prominent.
- Preserve readable body text.
- Avoid overly narrow text blocks.
- Keep buttons easy to tap.
- Reduce decorative spacing only where necessary.

### Breakpoint guidance

Use responsive breakpoints based on layout needs rather than device-specific assumptions.

Suggested starting points:

- Mobile: below `640px`
- Tablet: `640px–1024px`
- Desktop: above `1024px`

These are implementation references and should be adjusted to match the approved designs.

---

## 19. Accessibility and Readability

The visual system must remain accessible without compromising the design.

- Maintain readable contrast between text and background.
- Do not use color alone to communicate meaning.
- Ensure buttons and links have clear focus states.
- Use semantic heading levels.
- Provide alt text for meaningful images.
- Respect `prefers-reduced-motion`.
- Keep body text at a comfortable reading size.
- Ensure interactive targets are sufficiently large on mobile.

---

## 20. Implementation Guardrails

The following rules are mandatory:

1. Do not introduce gradients on UI elements.
2. Do not use large drop shadows on cards.
3. Elevation should come from inset highlights, borders, spacing, and surface contrast.
4. Do not use more than one weight from the `500+` range within a single text block.
5. Keep the type system primarily within the `400–480` weight range.
6. Use Cal Sans for display and header text.
7. Use General Sans for body copy and button text.
8. Use Roboto Mono for short section intro lines and technical labels.
9. Keep the palette dark and restrained.
10. Do not add new sections, features, or visual patterns outside the approved design.
11. Do not over-animate the page.
12. Do not introduce unnecessary UI components or decorative elements.
13. Keep project cards focused on showcasing work.
14. Preserve the spacing, alignment, and typography hierarchy from the screenshot.
15. Prioritize visual accuracy over adding extra functionality.

---

## 21. Creative Reference Summary

Primewave should look like a **dark, modern digital product agency with strong editorial typography and a technical sensibility**.

The final result should communicate:

> We design, develop, and build products with clarity, craft, and technical confidence.

The implementation should feel polished through typography, spacing, alignment, and restraint—not through excessive effects.
