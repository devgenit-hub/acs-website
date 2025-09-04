import React from 'react';
import {
  MdOutlineAssignment,
  MdOutlineNotifications,
  MdOutlineVerified,
  MdOutlineCalendarToday,
  MdRocketLaunch,
} from 'react-icons/md';

interface Dates {
  id: number;
  title: string;
  date: string;
  strikethrough?: Array<string>;
  icon: React.ReactNode;
}

const dates: Dates[] = [
  {
    id: 1,
    title: 'Abstract Submission Deadline',
    date: '05th September, 2025',
    icon: <MdOutlineAssignment className="w-10 h-10 text-primary" />,
    strikethrough: ['10th August, 2025', '25th August, 2025'],
  },
  {
    id: 2,
    title: 'Notification of Acceptance',
    date: '10th September, 2025',
    icon: <MdOutlineNotifications className="w-10 h-10 text-primary" />,
  },
  {
    id: 3,
    title: 'Camera Ready Paper Submission Deadline',
    date: '20th September, 2025',
    icon: <MdOutlineVerified className="w-10 h-10 text-primary" />,
  },
  {
    id: 4,
    title: 'Registration Deadline',
    date: '1st October, 2025',
    icon: <MdOutlineCalendarToday className="w-10 h-10 text-primary" />,
  },
  {
    id: 5,
    title: 'Conference Date',
    date: '23-24th October, 2025',
    icon: <MdRocketLaunch className="w-10 h-10 text-primary" />,
  },
];

export default function ImportantDatesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-secondary">
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent mb-4">
              Important Dates
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              1st International Conference on Science and Humanities for Sustainable Development –
              ICSHSD
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 to-primary/20" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {dates.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative flex md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col items-start`}
                >
                  {/* Mobile Timeline Line */}
                  <div className="absolute h-full w-0.5 bg-primary/20 left-8 top-0 md:hidden" />

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                    } pl-24 md:pl-0`}
                  >
                    <div
                      className="bg-card/70 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg border border-border 
                                hover:border-ring transition-all duration-300"
                    >
                      <div
                        className={`flex items-center gap-4 mb-3 ${
                          index % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'
                        }`}
                      >
                        <div className="flex-shrink-0">{item.icon}</div>
                        <div className="flex-1" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      {item.strikethrough ? (
                        <>
                          {item.strikethrough.map((date, i) => (
                            <p
                              key={i}
                              className="text-sm md:text-base text-muted-foreground line-through mb-1"
                            >
                              {date}
                            </p>
                          ))}
                          <p className="text-sm md:text-base text-primary font-medium">
                            {item.date}
                          </p>
                        </>
                      ) : (
                        <p className="text-sm md:text-base text-primary font-medium">{item.date}</p>
                      )}
                    </div>
                  </div>

                  {/* Center Dot - Desktop */}
                  <div className="hidden md:block w-4 h-4 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2 z-10" />

                  {/* Left Dot - Mobile */}
                  <div className="w-4 h-4 bg-primary rounded-full absolute left-8 transform -translate-x-1/2 top-8 md:hidden z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
