export const projects = [
  {
    number: '01',
    slug: 'gamified-short-form-video-backend',
    title: 'Gamified Short-Form Video Backend',
    stage: 'Production System',
    visualType: 'Reward Infrastructure',
    summary: 'API-first backend powering a reward-based video platform with dual-wallet logic, earning limits, referrals, and secure withdrawals.',
    summarySecondary: 'Designed with concurrency control, abuse prevention, and scalable feed architecture for high-volume usage.',
    tags: ['Laravel', 'MySQL', 'Redis', 'Sanctum'],
    metrics: [
      { value: '2x', label: 'Wallet Layers' },
      { value: '100%', label: 'Transactional Safety' },
      { value: '<200ms', label: 'Core API Paths' }
    ],
    challenge: 'The platform needed to reward engagement in real time while preventing fraud vectors and race conditions around payouts.',
    solution: 'Implemented transaction-safe wallet services, anti-abuse guardrails, and queue-backed processing for referral and withdrawal flows.',
    impact: [
      'Stable payout logic under concurrent user activity',
      'Reduced exploitation risk through layered validation',
      'Predictable API response behavior under traffic bursts'
    ],
    architecture: [
      'Modular services for wallet, rewards, referrals, and withdrawals',
      'Redis-backed throttling and abuse detection checks',
      'Idempotent payout handlers with database transactions'
    ]
  },
  {
    number: '02',
    slug: 'food-delivery-platform-api',
    title: 'Food Delivery Platform API',
    stage: 'Multi-Role Platform',
    visualType: 'Order Lifecycle Engine',
    summary: 'Backend platform for vendor onboarding, menu management, order lifecycle, and role-based access.',
    summarySecondary: 'Structured around modular routing and relational design to remain maintainable as product scope expanded.',
    tags: ['Laravel', 'Vue', 'MySQL', 'REST API'],
    metrics: [
      { value: '6+', label: 'Core Roles' },
      { value: '3x', label: 'Faster Feature Additions' },
      { value: '99.9%', label: 'Order Integrity' }
    ],
    challenge: 'Different user types required strict boundaries and clean domain workflows without slowing down future feature expansion.',
    solution: 'Introduced role-aware API modules, normalized data models, and clear order-state transitions with validation checkpoints.',
    impact: [
      'Faster shipping of vendor and customer features',
      'Cleaner maintainability through separated modules',
      'Reliable end-to-end order status tracking'
    ],
    architecture: [
      'Role-scoped API endpoints for admin, vendor, rider, and customer',
      'Order pipeline states with explicit transition guards',
      'Relational schema tuned for reporting and dashboard performance'
    ]
  },
  {
    number: '03',
    slug: 'authentication-and-security-systems',
    title: 'Authentication & Security Systems',
    stage: 'Security Layer',
    visualType: 'Identity and Access Control',
    summary: 'Designed OTP login flows, 2FA logic, device verification, and withdrawal protection systems.',
    summarySecondary: 'Focused on rate limiting, token hardening, and database-level integrity safeguards for critical actions.',
    tags: ['Laravel', 'Redis', 'JWT / Tokens', 'FCM'],
    metrics: [
      { value: '4+', label: 'Auth Factors' },
      { value: '70%', label: 'Abuse Drop' },
      { value: '24/7', label: 'Threat Guardrails' }
    ],
    challenge: 'Authentication needed to stay friction-aware for users while preserving strong protection on high-risk operations.',
    solution: 'Built layered auth workflows combining OTP, second-factor checks, device trust, and endpoint-level rate controls.',
    impact: [
      'Improved account safety with minimal UX friction',
      'Lower brute-force and token abuse incidents',
      'Safer withdrawal and sensitive-operation endpoints'
    ],
    architecture: [
      'Token lifecycle controls with forced rotation paths',
      'Adaptive OTP and device verification logic',
      'Redis-based throttling plus action-level audit trails'
    ]
  }
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}