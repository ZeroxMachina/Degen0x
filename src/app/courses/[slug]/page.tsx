import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { COURSES, LEVEL_META, THEME_META, getCourse } from '@/data/courses';
import CourseViewer from '@/components/CourseViewer';
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export async function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: 'Course Not Found | degen0x' };

  return {
    title: `${course.title} — Free Crypto Course | degen0x`,
    description: course.description.slice(0, 155),
    openGraph: {
      title: `${course.title} | degen0x`,
      description: course.description.slice(0, 155),
      images: [{ url: '/og-courses.png', width: 1200, height: 630, alt: `${course.title} — Free Crypto Course on degen0x` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${course.title} | degen0x`,
      description: course.description.slice(0, 155),
      images: ['/og-courses.png'],
    },
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const totalLessons = course.chapters.reduce((acc, ch) => acc + ch.lessons.length, 0);
  const totalQuizzes = course.chapters.reduce(
    (acc, ch) => acc + ch.lessons.filter((l) => l.type === 'quiz').length,
    0
  );

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Breadcrumb */}
      <div className="border-b border-[#1c1c1e] bg-[#0a0a0a]">
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-[#636366]">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
          <span>/</span>
          <span className="text-[#aeaeb2]" aria-current="page">{course.title}</span>
        </nav>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="bg-[#1c1c1e] rounded-2xl overflow-hidden border border-[#2c2c2e] mb-6">
              <div className="h-2" style={{ background: `linear-gradient(90deg, ${course.color}, ${course.color}40)` }} />
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{course.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full border"
                        style={{
                          background: `${LEVEL_META[course.level].color}15`,
                          color: LEVEL_META[course.level].color,
                          borderColor: `${LEVEL_META[course.level].color}30`,
                        }}
                      >
                        {LEVEL_META[course.level].emoji} {LEVEL_META[course.level].label}
                      </span>
                      <span className="bg-[#2c2c2e] text-[#aeaeb2] text-xs px-2 py-0.5 rounded-full">
                        {THEME_META[course.theme].emoji} {THEME_META[course.theme].label}
                      </span>
                      <span className="bg-[#2c2c2e] text-[#aeaeb2] text-xs px-2 py-0.5 rounded-full">
                        🆓 Free
                      </span>
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-1">{course.title}</h1>
                    <p className="text-[#8e8e93]">{course.subtitle}</p>
                  </div>
                </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="courses"
        />


                <p className="text-[#aeaeb2] leading-relaxed mt-4">{course.description}</p>

                {/* Quick stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
                  {[
                    { label: 'Lessons', value: totalLessons.toString(), emoji: '📖' },
                    { label: 'Quizzes', value: totalQuizzes.toString(), emoji: '✏️' },
                    { label: 'Hours', value: `~${course.estimatedHours}h`, emoji: '⏱️' },
                    { label: 'XP', value: `${course.totalXP}`, emoji: '⚡' },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#2c2c2e] rounded-xl p-3 text-center">
                      <div className="text-lg">{s.emoji}</div>
                      <div className="text-white font-bold text-sm">{s.value}</div>
                      <div className="text-[#636366] text-[11px]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Course Viewer */}
            <CourseViewer course={course} />
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Badge */}
            <div className="bg-[#1c1c1e] rounded-2xl p-5 border border-[#2c2c2e] text-center">
              <div className="text-5xl mb-3">{course.badgeEmoji}</div>
              <div className="text-white font-bold text-base mb-1">{course.badgeName}</div>
              <div className="text-[#8e8e93] text-sm mb-3">Complete this course to earn the badge</div>
              <div className="bg-indigo-500/20 text-indigo-300 text-sm font-bold px-3 py-1.5 rounded-xl border border-indigo-500/30 inline-block">
                ⚡ +{course.totalXP} XP
              </div>
            </div>

            {/* Rating */}
            <div className="bg-[#1c1c1e] rounded-2xl p-5 border border-[#2c2c2e]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-400 text-xl">★★★★★</span>
                <span className="text-white font-bold">{course.rating}</span>
              </div>
              <div className="text-[#8e8e93] text-sm">{course.enrollmentCount.toLocaleString()} learners enrolled</div>
            </div>

            {/* Prerequisites */}
            {course.prerequisites && course.prerequisites.length > 0 && (
              <div className="bg-yellow-500/10 rounded-2xl p-5 border border-yellow-500/20">
                <div className="text-yellow-400 font-bold text-sm mb-2">📋 Prerequisites</div>
                {course.prerequisites.map((prereq) => {
                  const prereqCourse = getCourse(prereq);
                  return prereqCourse ? (
                    <Link key={prereq} href={`/courses/${prereq}`} className="flex items-center gap-2 hover:text-yellow-300 text-yellow-400 transition-colors">
                      <span>{prereqCourse.emoji}</span>
                      <span className="text-sm">{prereqCourse.title}</span>
                    </Link>
                  ) : null;
                })}
              </div>
            )}

            {/* Other courses */}
            <div className="bg-[#1c1c1e] rounded-2xl p-5 border border-[#2c2c2e]">
              <div className="text-white font-bold text-sm mb-3">Other Courses</div>
              {COURSES.filter((c) => c.slug !== course.slug).slice(0, 3).map((c) => (
                <Link key={c.slug} href={`/courses/${c.slug}`} className="flex items-center gap-3 py-2 hover:bg-[#2c2c2e] rounded-xl px-2 -mx-2 transition-colors group">
                  <span className="text-xl">{c.emoji}</span>
                  <div>
                    <div className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">{c.title}</div>
                    <div className="text-[#636366] text-xs">⚡ {c.totalXP} XP · {c.estimatedHours}h</div>
                  </div>
                </Link>
              ))}
              <Link href="/courses" className="block text-center text-indigo-400 hover:text-indigo-300 text-xs mt-3 transition-colors">
                View all courses →
              </Link>
            </div>
          </div>
        </div>
      </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Course Not Found | degen0x", "description": "Crypto content on degen0x", "url": "https://degen0x.com/courses/[slug]"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            All Learning Guides
          </Link>
          <Link href="/tools" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Crypto Tools
          </Link>
          <Link href="/compare" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
