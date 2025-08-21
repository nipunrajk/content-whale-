export default function BackgroundGradients() {
  return (
    <div
      aria-hidden
      className='pointer-events-none absolute inset-0 -z-10'
      style={{
        // Base soft background plus three unified radial blobs spanning Hero + Solutions
        background: [
          // Subtle paper-like base gradient similar to the site
          'linear-gradient(135deg, rgba(244, 230, 255, 0.7) 0%, rgba(255, 242, 217, 0.65) 50%, rgba(232, 243, 255, 0.7) 100%)',
          // Top-left of Hero – purple #42175B @ 25% alpha with smoother falloff
          'radial-gradient(28vw 28vw at 11% 12%, rgba(66, 23, 91, 0.25) 0%, rgba(66, 23, 91, 0.18) 40%, rgba(66, 23, 91, 0.00) 72%)',
          // Right of Hero – yellow #FBBA18 @ 25% alpha, positioned upper-right
          'radial-gradient(30vw 26vw at 95% 24%, rgba(251, 186, 24, 0.25) 0%, rgba(251, 186, 24, 0.16) 38%, rgba(251, 186, 24, 0.00) 70%)',
          // Bottom-left of Services – blue #216EA0 @ 20% alpha, slightly higher to mirror site
          'radial-gradient(28vw 30vw at 12% 64%, rgba(33, 110, 160, 0.20) 0%, rgba(33, 110, 160, 0.14) 38%, rgba(33, 110, 160, 0.00) 72%)',
        ].join(', '),
      }}
    />
  );
}
