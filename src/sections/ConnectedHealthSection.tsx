import {
  Apple,
  Flame,
  LayoutDashboard,
  MailQuestion,
  ShieldCheck,
} from 'lucide-react';

const features = [
  {
    title: 'EHR/EMR integration',
    description:
      'Effortless EHR/EMR integration via secure APIs for streamlined clinical workflows.',
    icon: Apple,
    bg: '#3B82F6', // Deep Blue
  },
  {
    title: 'HIPAA/GDPR-compliant',
    description:
      'HIPAA/GDPR-compliant data handling ensures privacy and trust at every touchpoint.',
    icon: ShieldCheck,
    bg: '#10B981', // Deep Green
  },
  {
    title: 'Real-time alerts',
    description:
      'All the news of the world is at hand, our messenger has a pre-installed news widget.',
    icon: MailQuestion,
    bg: '#F59E0B', // Deep Amber
  },
  {
    title: 'Dashboards',
    description:
      'Place messages in existing tags or create new ones. Using tags makes interaction easier.',
    icon: Flame,
    bg: '#EF4444', // Deep Red
  },
];

export default function ConnectedHealthEcosystem() {
  return (
    <section className="bg-[#0A2342] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 w-[240px] h-[220px] flex flex-col justify-start"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: item.bg }}
              >
                <item.icon size={24} className="text-white" />
              </div>
              <h4 className="font-semibold mb-1 text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Text Block */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Connected<br />
            Health<br />
            Ecosystem
          </h2>
          <p className="text-sm text-gray-300 max-w-md">
            iUvo integrates seamlessly into health systems and telehealth workflows – supporting everything from individual self-care to system-wide scalability.
          </p>
        </div>
      </div>
    </section>
  );
}
